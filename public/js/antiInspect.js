/*
 * Anti-Inspect JavaScript Library
 * 
 * This script provides client-side deterrents against DevTools/Inspect Element.
 * 
 * IMPORTANT DISCLAIMER: Client-side detection cannot guarantee full protection.
 * This is a deterrent only. Server-side authorization must be enforced for
 * actual security. Determined users can bypass these measures.
 * 
 * HOW TO INCLUDE IN HTML:
 * <script src="/js/antiInspect.js"></script>
 * 
 * HOW TO MINIFY FOR PRODUCTION:
 * npm install -g terser
 * terser public/js/antiInspect.js -o public/js/antiInspect.min.js --compress --mangle
 * 
 * HOW TO REMOVE SOURCE MAPS:
 * Ensure your build process doesn't generate source maps, or explicitly remove them:
 * find public/js -name "*.map" -type f -delete
 */

(function() {
    'use strict';

    // Configuration object - can be overridden by window.__ANTI_INSPECT_CONFIG__
    const defaultConfig = {
        actionOnDetect: 'overlay', // 'overlay' | 'redirect' | 'nothing'
        redirectUrl: '/warning',
        overlayMessage: 'Unauthorized action detected',
        logEndpoint: '/api/log-devtools',
        allowA11y: false // Set to true to allow accessibility bypass
    };

    // Merge default config with user-provided config
    const config = Object.assign({}, defaultConfig, window.__ANTI_INSPECT_CONFIG__);

    // Expose config to window for debugging/inspection
    window.__ANTI_INSPECT_CONFIG__ = config;

    // Accessibility bypass - if enabled, skip all protections
    if (config.allowA11y) {
        console.log('Anti-Inspect: Accessibility mode enabled - skipping protections');
        return;
    }

    // Utility functions
    const utils = {
        /**
         * Log DevTools detection to server
         */
        logDetection: function() {
            const data = {
                event: 'devtools_open',
                timestamp: new Date().toISOString(),
                url: window.location.href,
                userAgent: navigator.userAgent
            };

            // Try sendBeacon first (better for page unload scenarios)
            if (navigator.sendBeacon) {
                try {
                    navigator.sendBeacon(config.logEndpoint, JSON.stringify(data));
                } catch (e) {
                    // Fallback to fetch if sendBeacon fails
                    utils.fetchFallback(data);
                }
            } else {
                // Fallback to fetch
                utils.fetchFallback(data);
            }
        },

        /**
         * Fallback fetch method for logging
         */
        fetchFallback: function(data) {
            if (typeof fetch !== 'undefined') {
                fetch(config.logEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                    keepalive: true // Important for page unload scenarios
                }).catch(function() {
                    // Silently fail if logging fails
                    console.warn('Anti-Inspect: Failed to log DevTools detection');
                });
            }
        },

        /**
         * Create overlay element
         */
        createOverlay: function() {
            const overlay = document.createElement('div');
            overlay.id = 'anti-inspect-overlay';
            overlay.style.cssText = `
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                background: rgba(0, 0, 0, 0.95) !important;
                color: white !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                z-index: 999999 !important;
                font-family: Arial, sans-serif !important;
                font-size: 18px !important;
                text-align: center !important;
                padding: 20px !important;
                box-sizing: border-box !important;
            `;
            overlay.innerHTML = `
                <div>
                    <h2 style="margin: 0 0 20px 0; color: #ff6b6b;">⚠️ Security Alert</h2>
                    <p style="margin: 0; line-height: 1.6;">${config.overlayMessage}</p>
                    <p style="margin: 20px 0 0 0; font-size: 14px; opacity: 0.7;">
                        Please close Developer Tools to continue
                    </p>
                </div>
            `;
            return overlay;
        },

        /**
         * Show overlay and prevent interaction
         */
        showOverlay: function() {
            // Remove existing overlay if present
            const existingOverlay = document.getElementById('anti-inspect-overlay');
            if (existingOverlay) {
                existingOverlay.remove();
            }

            const overlay = utils.createOverlay();
            document.body.appendChild(overlay);

            // Prevent interaction with the page
            document.body.style.pointerEvents = 'none';
            document.body.style.userSelect = 'none';

            // Prevent scrolling
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';

            // Prevent keyboard shortcuts
            utils.blockKeyboardShortcuts();
        },

        /**
         * Redirect to warning page
         */
        redirect: function() {
            window.location.href = config.redirectUrl;
        },

        /**
         * Handle DevTools detection
         */
        handleDetection: function() {
            utils.logDetection();

            switch (config.actionOnDetect) {
                case 'overlay':
                    utils.showOverlay();
                    break;
                case 'redirect':
                    utils.redirect();
                    break;
                case 'nothing':
                    // Just log, no action
                    break;
                default:
                    utils.showOverlay();
            }
        },

        /**
         * Block keyboard shortcuts
         */
        blockKeyboardShortcuts: function() {
            const blockedKeys = [
                123, // F12
                73,  // I (Ctrl+Shift+I, Cmd+Option+I)
                74,  // J (Ctrl+Shift+J)
                85,  // U (Ctrl+U)
                67,  // C (Ctrl+Shift+C)
                83   // S (Ctrl+Shift+S)
            ];

            const keydownHandler = function(e) {
                // Check for F12
                if (e.keyCode === 123) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }

                // Check for Ctrl+Shift+ combinations
                if (e.ctrlKey && e.shiftKey && blockedKeys.includes(e.keyCode)) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }

                // Check for Ctrl+U (view source)
                if (e.ctrlKey && e.keyCode === 85) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }

                // Check for Cmd+Option+I (Mac DevTools)
                if (e.metaKey && e.altKey && e.keyCode === 73) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }
            };

            document.addEventListener('keydown', keydownHandler, true);
        },

        /**
         * Disable right-click
         */
        disableRightClick: function() {
            const contextMenuHandler = function(e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            };

            document.addEventListener('contextmenu', contextMenuHandler, true);
        },

        /**
         * Disable text selection
         */
        disableTextSelection: function() {
            const styles = `
                * {
                    -webkit-user-select: none !important;
                    -moz-user-select: none !important;
                    -ms-user-select: none !important;
                    user-select: none !important;
                }
            `;

            const styleElement = document.createElement('style');
            styleElement.textContent = styles;
            document.head.appendChild(styleElement);

            // Additional event listeners
            const selectStartHandler = function(e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            };

            const dragStartHandler = function(e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            };

            document.addEventListener('selectstart', selectStartHandler, true);
            document.addEventListener('dragstart', dragStartHandler, true);
        }
    };

    // DevTools detection methods
    const devtoolsDetection = {
        /**
         * Detect DevTools using console timing method
         */
        consoleTimingDetection: function() {
            const startTime = new Date();
            
            // Use debugger statement to slow down execution if DevTools is open
            debugger;
            
            const endTime = new Date();
            const timeDiff = endTime - startTime;
            
            // If debugger statement caused significant delay, DevTools might be open
            if (timeDiff > 100) {
                return true;
            }
            
            return false;
        },

        /**
         * Detect DevTools using resize observer method
         */
        resizeDetection: function() {
            let devtoolsOpen = false;
            const threshold = 160; // Typical DevTools width
            
            const checkWindowSize = function() {
                if (window.outerWidth - window.innerWidth > threshold || 
                    window.outerHeight - window.innerHeight > threshold) {
                    devtoolsOpen = true;
                }
            };

            // Check immediately
            checkWindowSize();

            // Set up periodic checks
            setInterval(checkWindowSize, 1000);

            // Listen for resize events
            window.addEventListener('resize', checkWindowSize);

            return devtoolsOpen;
        },

        /**
         * Detect DevTools using console method
         */
        consoleDetection: function() {
            let detected = false;
            
            // Override console.log to detect if DevTools console is open
            const originalLog = console.log;
            console.log = function() {
                detected = true;
                console.log = originalLog;
                originalLog.apply(console, arguments);
            };

            // Trigger console.log
            console.log('%c', 'padding: 0; font-size: 0; line-height: 0;');

            // Check if detection occurred
            if (detected) {
                return true;
            }

            // Restore original console.log
            console.log = originalLog;
            return false;
        },

        /**
         * Detect DevTools using element method
         */
        elementDetection: function() {
            const element = document.createElement('div');
            element.id = 'devtools-detector';
            element.style.cssText = `
                position: absolute;
                top: -9999px;
                left: -9999px;
                width: 1px;
                height: 1px;
                overflow: hidden;
            `;
            document.body.appendChild(element);

            // Check if element is being inspected
            setTimeout(function() {
                const computedStyle = window.getComputedStyle(element);
                if (computedStyle.position === 'static' || 
                    computedStyle.display === 'none' || 
                    computedStyle.visibility === 'hidden') {
                    document.body.removeChild(element);
                    return true;
                }
                document.body.removeChild(element);
                return false;
            }, 100);

            return false;
        },

        /**
         * Run all detection methods
         */
        runDetection: function() {
            // Run detection methods
            const methods = [
                devtoolsDetection.consoleTimingDetection,
                devtoolsDetection.resizeDetection,
                devtoolsDetection.consoleDetection,
                devtoolsDetection.elementDetection
            ];

            for (let i = 0; i < methods.length; i++) {
                try {
                    if (methods[i]()) {
                        return true;
                    }
                } catch (e) {
                    // Silently fail if detection method throws error
                    console.warn('Anti-Inspect: Detection method failed:', e);
                }
            }

            return false;
        }
    };

    // Initialize protections
    function initializeProtections() {
        // Disable right-click and text selection
        utils.disableRightClick();
        utils.disableTextSelection();

        // Block keyboard shortcuts
        utils.blockKeyboardShortcuts();

        // Start DevTools detection
        function startDetection() {
            if (devtoolsDetection.runDetection()) {
                utils.handleDetection();
                return; // Stop detection if action taken
            }

            // Continue detection periodically
            setTimeout(startDetection, 1000);
        }

        // Start detection after a short delay
        setTimeout(startDetection, 1000);

        // Additional detection on visibility change
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden) {
                setTimeout(function() {
                    if (devtoolsDetection.runDetection()) {
                        utils.handleDetection();
                    }
                }, 100);
            }
        });

        // Detect window focus changes
        window.addEventListener('focus', function() {
            setTimeout(function() {
                if (devtoolsDetection.runDetection()) {
                    utils.handleDetection();
                }
            }, 100);
        });

        // Detect mouse leaving window (possible DevTools opening)
        document.addEventListener('mouseleave', function() {
            setTimeout(function() {
                if (devtoolsDetection.runDetection()) {
                    utils.handleDetection();
                }
            }, 500);
        });
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeProtections);
    } else {
        initializeProtections();
    }

    // Additional protection: Clear console periodically
    setInterval(function() {
        if (typeof console.clear === 'function') {
            console.clear();
        }
    }, 30000);

    // Additional protection: Monitor for script removal
    const originalRemoveChild = Element.prototype.removeChild;
    Element.prototype.removeChild = function(child) {
        if (child && child.src && child.src.includes('antiInspect.js')) {
            console.warn('Anti-Inspect: Attempt to remove protection script detected');
            return child;
        }
        return originalRemoveChild.call(this, child);
    };

})();
