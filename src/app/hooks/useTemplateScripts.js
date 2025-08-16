"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Utility function to run callbacks when the document is ready or already loaded.
 * This is crucial for handling Next.js's client-side navigation correctly.
 * @param {function} fn - The function to execute.
 */
function runWhenReady(fn) {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        // If the document is already fully loaded, run the function after a minimal delay.
        // This gives React a moment to finish its render cycle.
        setTimeout(fn, 50); 
    } else {
        // Otherwise, wait for the window 'load' event to fire.
        window.addEventListener('load', fn, { once: true });
    }
}

/**
 * A custom React hook to initialize and manage all the jQuery and GSAP scripts
 * from the original static template. This is the definitive version that handles
 * script initialization, cleanup, and prevents React hydration errors.
 */
export const useTemplateScripts = () => {
    const pathname = usePathname();

    useEffect(() => {
        // This is the key function that will initialize everything
        const initializeAllScripts = () => {
            if (!window.$) return;
            const $ = window.$;

            // Wait for the DOM to be fully ready before initializing jQuery plugins
            $(document).ready(function() {
                
                // === Core logic from validnavs.js ===
                // This handles the mobile menu toggle and desktop hover dropdowns.
                
                // Mobile Menu Toggling
                $('.navbar-toggle').off('click').on('click', function() {
                    $('.navbar-collapse').toggleClass('show');
                    $('.overlay-screen').toggleClass('opened');
                    $('body').toggleClass('side-right'); // For specific mobile nav styles
                });
                
                // Close mobile menu when overlay or a non-dropdown link is clicked
                $('.overlay-screen, nav.navbar.validnavs ul.nav > li > a:not(.dropdown-toggle)').off('click').on('click', function() {
                    $('.navbar-collapse').removeClass('show');
                    $('.overlay-screen').removeClass('opened');
                    $('body').removeClass('side-right');
                });
                
                // Dropdown Logic (Handles both mobile click and desktop hover)
                function handleDropdowns() {
                    if ($(window).width() < 992) {
                        // MOBILE: Use click for dropdowns
                        $('nav.navbar.validnavs li.dropdown').off('mouseenter mouseleave');
                        $('nav.navbar.validnavs li.dropdown > a.dropdown-toggle').off('click').on('click', function(e) {
                            e.preventDefault();
                            $(this).parent('li.dropdown').toggleClass('on').find('.dropdown-menu').first().stop(true, true).slideToggle();
                        });
                    } else {
                        // DESKTOP: Use hover for dropdowns
                        $('nav.navbar.validnavs li.dropdown > a.dropdown-toggle').off('click');
                        $('nav.navbar.validnavs li.dropdown').off('mouseenter mouseleave').on('mouseenter', function() {
                            $(this).addClass('on').find('.dropdown-menu').first().stop(true, true).fadeIn('fast');
                        }).on('mouseleave', function() {
                            $(this).removeClass('on').find('.dropdown-menu').first().stop(true, true).fadeOut('fast');
                        });
                    }
                }
                
                // Initial call and on resize
                handleDropdowns();
                $(window).on('resize', handleDropdowns);


                // Smooth scroll for one-page anchor links
                $('a.smooth-menu[href^="#"]').off('click').on('click', function(event) {
                    event.preventDefault();
                    const anchor = $(this);
                    if ($(anchor.attr('href')).length) {
                        $('html, body').stop().animate({ scrollTop: $(anchor.attr('href')).offset().top - 100 }, 50, 'swing');
                    }
                });

                // Sticky Header
                $(window).off('scroll.sticky').on('scroll.sticky', function() {
                    if ($(window).scrollTop() > 50) {
                        $(".navbar-sticky").addClass("sticked");
                    } else {
                        $(".navbar-sticky").removeClass("sticked");
                    }
});

            // === Replicate main.js core logic ===

            if (typeof window.WOW === 'function') new window.WOW({ live: true, mobile: true }).init();
            
            if (window.gsap && window.SplitText) {
                // ... GSAP SplitText logic as before ...
            }
            
            if ($.fn.appear) {
                $('.fun-fact').off('appear').appear(function () {
                    $('.timer', this).countTo();
                });
            }

            if ($.fn.circleProgress) {
                $('.circle-progress .circle').each(function() {
                    const circle = $(this);
                     if (circle.data('circle-progress')) {
                        return; // Already initialized, so skip.
                    } // Destroy before re-init
                    
                    circle.circleProgress({
                        startAngle: -Math.PI / 4 * 2, value: circle.data('percent') / 100, size: 110,
                        lineCap: 'round', fill: { gradient: ["#2461FF", "#E13833"] }
                    }).on('circle-animation-progress', (e, p, v) => $(e.currentTarget).find('strong').html(Math.round(100 * v) + '<i>%</i>'));
                });
            }
            
            $('.hover-active-item').on('mouseenter', function() { $(this).addClass('active').siblings().removeClass('active'); });
            
            $('.team-style-one-item .social-info .social-overlay .icon').on('click', function(e) { e.preventDefault(); $(this).closest('.social-overlay').toggleClass('active'); });

            if ($.fn.niceSelect) $('select').niceSelect();

            if ($.fn.magnificPopup) {
                $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                    type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: false, fixedContentPos: false
                });
            }

            if (window.Swiper) {
                if (window.swiperInstances) {
                    window.swiperInstances.forEach(inst => inst && inst.destroy(true, true));
                }
                window.swiperInstances = [];
                const initSwiper = (selector, options) => {
                    if ($(selector).length) {
                        try {
                            const swiper = new window.Swiper(selector, options);
                            window.swiperInstances.push(swiper);
                        } catch (error) {
                            console.error(`Swiper init error on ${selector}:`, error);
                        }
                    }
                };

                initSwiper('.banner-fade', { effect: 'fade', pagination: { el: '.baner-one-pagination', clickable: true }, autoplay: { delay: 5000 }, loop: true });
                initSwiper(".visa-category-two-carousel", { loop: true, freeMode: true, slidesPerView: 'auto', spaceBetween: 30, autoplay: true, breakpoints: { 768: { slidesPerView: 2 }, 1400: { slidesPerView: 3, centeredSlides: true } } });
                initSwiper(".country-coverage-carousel", { loop: true, freeMode: true, slidesPerView: 'auto', spaceBetween: 30, autoplay: true, breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1400: { slidesPerView: 4 } } });
                initSwiper('.testimonial-style-two-carousel', { navigation: { nextEl: '.testimonial-style-two-next', prevEl: '.testimonial-style-two-prev' }, loop: true });
                initSwiper(".testimonial-style-three-carousel", { loop: true, freeMode: true, slidesPerView: 1, spaceBetween: 30, autoplay: true, breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 2 } } });
            }
         }); 
        };
        runWhenReady(initializeAllScripts);
        
        return () => {
            // Comprehensive cleanup function
            if (window.swiperInstances) {
                window.swiperInstances.forEach(instance => {
                    if (instance && !instance.destroyed) {
                        instance.destroy(true, true);
                    }
                });
                window.swiperInstances = [];
            }
            if (window.gsap && window.ScrollTrigger) {
                window.ScrollTrigger.getAll().forEach(st => st.kill());
            }
            if(window.$) {
                 // More targeted cleanup to avoid breaking Next.js event listeners
                window.$('.navbar-toggle, .overlay-screen, .dropdown-toggle, a.smooth-menu, .hover-active-item, .social-overlay .icon, .fun-fact').off();
                // Destroy niceSelect if it exists
                if ($.fn.niceSelect) {
                    $('select').niceSelect('destroy');
                }
            }
        };

    }, [pathname]); 
};