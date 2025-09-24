/*
 * ANTI-INSPECT PRODUCTION VERSION
 * 
 * This script provides client-side deterrents against DevTools/Inspect Element.
 * 
 * === HOW TO INCLUDE IN HTML ===
 * <script src="/js/antiInspect.prod.js"></script>
 * 
 * === CONFIGURATION ===
 * Override default settings by defining window.__ANTI_INSPECT_CONFIG__ before including this script:
 * 
 * window.__ANTI_INSPECT_CONFIG__ = {
 *     actionOnDetect: 'overlay',    // 'overlay' | 'redirect' | 'nothing'
 *     redirectUrl: '/warning',      // URL for redirect action
 *     overlayMessage: 'Unauthorized action detected',  // Message for overlay
 *     logEndpoint: '/api/log-devtools',  // Server endpoint for logging
 *     allowA11y: false,             // Set to true to allow accessibility bypass
 *     enableLogging: true           // Enable/disable DevTools detection logging
 * };
 * 
 * === MINIFICATION & OBFUSCATION ===
 * This file is already minified and mangled for production use.
 * 
 * To further obfuscate:
 * 1. Use tools like Obfuscator.io, Jscrambler, or UglifyJS
 * 2. Consider adding dead code injection and string encryption
 * 3. Remove all console.log statements for stealth mode
 * 
 * === SOURCE MAPS ===
 * Source maps have been removed from this production build.
 * Ensure your build process doesn't regenerate them:
 * - Webpack: set devtool: false
 * - Vite: set build.sourcemap: false
 * - Terser: remove --source-map flag
 * 
 * === ACCESSIBILITY BYPASS ===
 * Set allowA11y: true in config to disable all protections for accessibility testing.
 * This allows screen readers and accessibility tools to function properly.
 * 
 * === DEVTOOLS DETECTION LOGGING ===
 * Set enableLogging: false in config to disable server-side logging of detection events.
 * 
 * === IMPORTANT SECURITY DISCLAIMER ===
 * CLIENT-SIDE DETECTION CANNOT GUARANTEE FULL PROTECTION.
 * THIS IS A DETERRENT ONLY. SERVER-SIDE AUTHORIZATION MUST BE ENFORCED FOR
 * ACTUAL SECURITY. DETERMINED USERS CAN BYPASS THESE MEASURES.
 * 
 * Never rely solely on client-side protection for sensitive operations.
 * Always implement proper server-side validation, authentication, and authorization.
 * 
 * === PRODUCTION FEATURES ===
 * ✓ Minified and mangled identifiers
 * ✓ Source maps removed
 * ✓ Obfuscated code structure
 * ✓ Client-side detection (overlay, redirect, log)
 * ✓ Accessibility bypass configuration
 * ✓ DevTools detection logging control
 * ✓ Comprehensive security disclaimer
 */

!function(){'use strict';const e={actionOnDetect:'overlay',redirectUrl:'/warning',overlayMessage:'Unauthorized action detected',logEndpoint:'/api/log-devtools',allowA11y:!1,enableLogging:!0},t=Object.assign({},e,window.__ANTI_INSPECT_CONFIG__);window.__ANTI_INSPECT_CONFIG__=t;if(t.allowA11y)return void console.log('Anti-Inspect: Accessibility mode enabled - skipping protections');const n={logDetection:function(){if(!t.enableLogging)return;const e={event:'devtools_open',timestamp:new Date().toISOString(),url:window.location.href,userAgent:navigator.userAgent};navigator.sendBeacon?navigator.sendBeacon(t.logEndpoint,JSON.stringify(e)):n.fetchFallback(e)},fetchFallback:function(e){"undefined"!=typeof fetch&&fetch(t.logEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(e),keepalive:!0}).catch((function(){console.warn('Anti-Inspect: Failed to log DevTools detection')}))},createOverlay:function(){const e=document.createElement('div');return e.id='anti-inspect-overlay',e.style.cssText='position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background:rgba(0,0,0,.95)!important;color:white!important;display:flex!important;align-items:center!important;justify-content:center!important;z-index:999999!important;font-family:Arial,sans-serif!important;font-size:18px!important;text-align:center!important;padding:20px!important;box-sizing:border-box!important',e.innerHTML='<div><h2 style="margin:0 0 20px 0;color:#ff6b6b;">⚠️ Security Alert</h2><p style="margin:0;line-height:1.6;">'+t.overlayMessage+'</p><p style="margin:20px 0 0 0;font-size:14px;opacity:.7;">Please close Developer Tools to continue</p></div>',e},showOverlay:function(){const e=document.getElementById('anti-inspect-overlay');e&&e.remove();const t=n.createOverlay();document.body.appendChild(t),document.body.style.pointerEvents='none',document.body.style.userSelect='none',document.body.style.overflow='hidden',document.documentElement.style.overflow='hidden',n.blockKeyboardShortcuts()},redirect:function(){window.location.href=t.redirectUrl},handleDetection:function(){n.logDetection();switch(t.actionOnDetect){case'overlay':n.showOverlay();break;case'redirect':n.redirect();break;case'nothing':break;default:n.showOverlay()}},blockKeyboardShortcuts:function(){const e=[123,73,74,85,67,83],t=function(t){if(123===t.keyCode)return t.preventDefault(),t.stopPropagation(),!1;if(t.ctrlKey&&t.shiftKey&&e.includes(t.keyCode))return t.preventDefault(),t.stopPropagation(),!1;if(t.ctrlKey&&85===t.keyCode)return t.preventDefault(),t.stopPropagation(),!1;if(t.metaKey&&t.altKey&&73===t.keyCode)return t.preventDefault(),t.stopPropagation(),!1};document.addEventListener('keydown',t,!0)},disableRightClick:function(){const e=function(e){return e.preventDefault(),e.stopPropagation(),!1};document.addEventListener('contextmenu',e,!0)},disableTextSelection:function(){const e='*{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}',t=document.createElement('style');t.textContent=e,document.head.appendChild(t);const n=function(e){return e.preventDefault(),e.stopPropagation(),!1},o=function(e){return e.preventDefault(),e.stopPropagation(),!1};document.addEventListener('selectstart',n,!0),document.addEventListener('dragstart',o,!0)}},o={consoleTimingDetection:function(){const e=new Date;debugger;const t=new Date;return t-e>100},resizeDetection:function(){let e=!1,n=160;return function(){window.outerWidth-window.innerWidth>n||window.outerHeight-window.innerHeight>n&&(e=!0)}(),setInterval((function(){window.outerWidth-window.innerWidth>n||window.outerHeight-window.innerHeight>n&&(e=!0)}),1e3),window.addEventListener('resize',(function(){window.outerWidth-window.innerWidth>n||window.outerHeight-window.innerHeight>n&&(e=!0)})),e},consoleDetection:function(){let e=!1,t=console.log;console.log=function(){e=!0,console.log=t,t.apply(console,arguments)},console.log('%c','padding:0;font-size:0;line-height:0;');const n=e;return console.log=t,n},elementDetection:function(){const e=document.createElement('div');e.id='devtools-detector',e.style.cssText='position:absolute;top:-9999px;left:-9999px;width:1px;height:1px;overflow:hidden',document.body.appendChild(e);let t=!1;return setTimeout((function(){const n=window.getComputedStyle(e);('static'===n.position||'none'===n.display||'hidden'===n.visibility)&&(t=!0),document.body.removeChild(e)}),100),t},runDetection:function(){const e=[o.consoleTimingDetection,o.resizeDetection,o.consoleDetection,o.elementDetection];for(let t=0;t<e.length;t++)try{if(e[t]())return!0}catch(e){console.warn('Anti-Inspect: Detection method failed:',e)}return!1}};function i(){n.disableRightClick(),n.disableTextSelection(),n.blockKeyboardShortcuts();!function e(){if(o.runDetection())return void n.handleDetection();setTimeout(e,1e3)}(),document.addEventListener('visibilitychange',(function(){document.hidden||setTimeout((function(){o.runDetection()&&n.handleDetection()}),100)})),window.addEventListener('focus',(function(){setTimeout((function(){o.runDetection()&&n.handleDetection()}),100)})),document.addEventListener('mouseleave',(function(){setTimeout((function(){o.runDetection()&&n.handleDetection()}),500)}))}'loading'===document.readyState?document.addEventListener('DOMContentLoaded',i):i(),setInterval((function(){'function'==typeof console.clear&&console.clear()}),3e4);const r=Element.prototype.removeChild;Element.prototype.removeChild=function(e){return e&&e.src&&e.src.includes('antiInspect.prod.js')?(console.warn('Anti-Inspect: Attempt to remove protection script detected'),e):r.call(this,e)}}();
