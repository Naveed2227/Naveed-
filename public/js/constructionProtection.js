/*
 * Construction Vehicle Protection Script
 * 
 * This script provides additional protection specifically for construction vehicles,
 * preventing users from bypassing the under construction overlay through DevTools.
 * 
 * FEATURES:
 * - Monitors construction vehicle elements for tampering
 * - Restores removed overlays and disabled states
 * - Prevents interaction with construction vehicles
 * - Logs protection attempts to server
 * 
 * IMPORTANT: This works in conjunction with the main antiInspect.js script
 * and server-side filtering for comprehensive protection.
 */

(function() {
    'use strict';

    // Configuration
    const config = {
        checkInterval: 1000, // Check every second
        logEndpoint: '/api/log-construction-tamper',
        constructionSelector: '[data-construction="true"]',
        overlaySelector: '.construction-overlay',
        disabledButtonSelector: '[data-construction-disabled="true"]'
    };

    // Construction vehicle names that should be protected
    const constructionVehicles = [
        "K2 Black Panther",
        "K21 KNIFV", 
        "Leopard 2A8",
        "X2 Shinshin",
        "AMX-30 Super",
        "Type 75 MLRS",
        "Centauro I 120",
        "Strf 9040 BILL"
    ];

    // Utility functions
    const utils = {
        /**
         * Log tampering attempts to server
         */
        logTampering: function(action, details) {
            const data = {
                timestamp: new Date().toISOString(),
                action: action,
                details: details,
                userAgent: navigator.userAgent,
                url: window.location.href
            };

            // Send to server if endpoint exists
            if (config.logEndpoint) {
                fetch(config.logEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }).catch(() => {
                    // Silently fail if logging fails
                });
            }

            // Also log to console for debugging
            console.warn('Construction Protection:', action, details);
        },

        /**
         * Check if an element is a construction vehicle
         */
        isConstructionVehicle: function(element) {
            if (!element) return false;
            
            // Check data attribute
            if (element.hasAttribute('data-construction')) {
                return element.getAttribute('data-construction') === 'true';
            }

            // Check if element contains construction vehicle name
            const text = element.textContent || '';
            return constructionVehicles.some(vehicle => text.includes(vehicle));
        },

        /**
         * Restore construction overlay
         */
        restoreOverlay: function(vehicleElement) {
            if (!vehicleElement) return;

            // Check if overlay already exists
            let overlay = vehicleElement.querySelector(config.overlaySelector);
            
            if (!overlay) {
                // Create new overlay
                overlay = document.createElement('div');
                overlay.className = 'construction-overlay absolute inset-0 z-20 flex items-center justify-center bg-black/20 rounded-xl pointer-events-none';
                overlay.innerHTML = `
                    <img src="/Construction.png" alt="Under Construction" class="w-full h-full object-cover opacity-80" />
                `;
                vehicleElement.appendChild(overlay);
                utils.logTampering('overlay_restored', { vehicleName: vehicleElement.textContent?.trim() });
            }
        },

        /**
         * Disable buttons for construction vehicles
         */
        disableButtons: function(vehicleElement) {
            if (!vehicleElement) return;

            const buttons = vehicleElement.querySelectorAll('button');
            buttons.forEach(button => {
                if (!button.hasAttribute('data-construction-disabled')) {
                    button.setAttribute('data-construction-disabled', 'true');
                    button.disabled = true;
                    button.className += ' bg-gray-600 text-gray-400 cursor-not-allowed opacity-50';
                    button.textContent = 'Under Construction';
                    button.setAttribute('title', 'Under Construction');
                    utils.logTampering('button_disabled', { 
                        vehicleName: vehicleElement.textContent?.trim(),
                        buttonId: button.id || 'unknown'
                    });
                }
            });
        },

        /**
         * Prevent clicks on construction vehicles
         */
        preventInteraction: function(vehicleElement) {
            if (!vehicleElement) return;

            // Add click prevention if not already present
            if (!vehicleElement.hasAttribute('data-interaction-prevented')) {
                vehicleElement.setAttribute('data-interaction-prevented', 'true');
                
                vehicleElement.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    utils.logTampering('click_prevented', { 
                        vehicleName: vehicleElement.textContent?.trim()
                    });
                    return false;
                }, true);

                // Prevent other interactions
                vehicleElement.addEventListener('mousedown', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                }, true);

                vehicleElement.addEventListener('mouseup', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                }, true);
            }
        }
    };

    // Protection monitor
    const protectionMonitor = {
        /**
         * Scan for construction vehicles and apply protections
         */
        scanAndProtect: function() {
            // Find all vehicle cards
            const vehicleCards = document.querySelectorAll('[class*="vehicle"], [class*="card"], .rounded-xl');
            
            vehicleCards.forEach(card => {
                // Check if this is a construction vehicle
                if (utils.isConstructionVehicle(card)) {
                    // Mark as construction vehicle
                    card.setAttribute('data-construction', 'true');
                    
                    // Apply protections
                    utils.restoreOverlay(card);
                    utils.disableButtons(card);
                    utils.preventInteraction(card);
                }
            });

            // Also check for construction vehicles by text content
            constructionVehicles.forEach(vehicleName => {
                const elements = document.querySelectorAll('*');
                elements.forEach(element => {
                    if (element.textContent && element.textContent.includes(vehicleName)) {
                        // Find the parent card/container
                        let parent = element;
                        while (parent && parent !== document.body) {
                            if (parent.classList && (
                                parent.classList.contains('rounded-xl') || 
                                parent.classList.contains('vehicle') ||
                                parent.classList.contains('card')
                            )) {
                                parent.setAttribute('data-construction', 'true');
                                utils.restoreOverlay(parent);
                                utils.disableButtons(parent);
                                utils.preventInteraction(parent);
                                break;
                            }
                            parent = parent.parentElement;
                        }
                    }
                });
            });
        },

        /**
         * Monitor for DOM changes
         */
        observeDOM: function() {
            // Create a MutationObserver to watch for DOM changes
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'childList' || mutation.type === 'attributes') {
                        // Re-scan for construction vehicles
                        protectionMonitor.scanAndProtect();
                    }
                });
            });

            // Start observing the entire document
            observer.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['class', 'style', 'disabled']
            });
        },

        /**
         * Start protection monitoring
         */
        start: function() {
            // Initial scan
            protectionMonitor.scanAndProtect();
            
            // Start DOM observation
            protectionMonitor.observeDOM();
            
            // Periodic re-scanning
            setInterval(function() {
                protectionMonitor.scanAndProtect();
            }, config.checkInterval);

            console.log('Construction Vehicle Protection activated');
        }
    };

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            protectionMonitor.start();
        });
    } else {
        protectionMonitor.start();
    }

    // Export to window for debugging
    window.ConstructionProtection = {
        config: config,
        utils: utils,
        monitor: protectionMonitor
    };

})();
