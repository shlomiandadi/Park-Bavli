/**
 * Park Bavli - Main JavaScript
 * Animations, parallax, form handling, responsive behavior
 */

(function () {
    'use strict';

    // ----- Scroll-triggered animations (Intersection Observer) -----
    function initScrollAnimations() {
        var animated = document.querySelectorAll('.animate-on-scroll');
        if (!animated.length) return;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        animated.forEach(function (el) {
            observer.observe(el);
        });
    }

    // ----- Header background on scroll -----
    function initHeaderScroll() {
        var header = document.querySelector('.header');
        if (!header) return;

        function updateHeader() {
            if (window.scrollY > 80) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        window.addEventListener('scroll', function () {
            requestAnimationFrame(updateHeader);
        }, { passive: true });
        updateHeader();
    }

    // ----- Parallax (מעבירים) on hero -----
    function initParallax() {
        var hero = document.querySelector('.hero');
        if (!hero) return;

        if (window.matchMedia('(max-width: 768px)').matches) {
            return;
        }

        hero.classList.add('parallax-enabled');

        window.addEventListener('scroll', function () {
            var scrolled = window.scrollY;
            var rate = scrolled * 0.35;
            hero.style.backgroundPositionY = rate + 'px';
        }, { passive: true });
    }

    // ----- Inset cards: subtle stagger animation on scroll -----
    function initInsetAnimations() {
        var cards = document.querySelectorAll('.inset-card');
        if (!cards.length) return;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.2 });

        cards.forEach(function (card, i) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease ' + (i * 0.15) + 's, transform 0.6s ease ' + (i * 0.15) + 's';
            observer.observe(card);
        });
    }

    // ----- Contact form - Connected to Zapier Webhook -----
    function initForm() {
        var form = document.getElementById('contactForm');
        if (!form) {
            console.error('Contact form not found!');
            return;
        }

        var btn = form.querySelector('button[type="submit"]');
        var messageEl = form.querySelector('.form-message');
        var webhookUrl = 'https://hooks.zapier.com/hooks/catch/8389196/ucu0s0b/';

        console.log('Form initialized');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log('Form submitted');

            var nameInput = form.querySelector('[name="name"]');
            var emailInput = form.querySelector('[name="email"]');
            var phoneInput = form.querySelector('[name="phone"]');
            var messageInput = form.querySelector('[name="message"]');

            if (!nameInput || !emailInput) {
                console.error('Form inputs not found!');
                return;
            }

            var name = nameInput.value.trim();
            var email = emailInput.value.trim();
            var phone = phoneInput ? phoneInput.value.trim() : '';
            var message = messageInput ? messageInput.value.trim() : '';

            console.log('Form data:', { name: name, email: email, phone: phone, message: message });

            if (!name || !email) {
                if (messageEl) {
                    messageEl.textContent = 'Please fill in name and email.';
                    messageEl.className = 'form-message error';
                }
                return;
            }

            var originalText = btn ? btn.textContent : '';
            if (btn) {
                btn.disabled = true;
                btn.textContent = 'Sending...';
            }
            if (messageEl) {
                messageEl.textContent = '';
                messageEl.className = 'form-message';
            }

            // Prepare data for webhook
            var formData = {
                name: name,
                email: email,
                phone: phone || 'Not provided',
                message: message || 'No message',
                timestamp: new Date().toISOString(),
                source: 'Park Bavli Website'
            };

            console.log('Sending to webhook:', webhookUrl);
            console.log('Data:', formData);

            // Helper function to handle success
            function handleSuccess() {
                console.log('Form submitted successfully');
                if (messageEl) {
                    messageEl.textContent = 'Thank you! We will contact you shortly.';
                    messageEl.className = 'form-message success';
                }
                form.reset();
                if (btn) {
                    btn.disabled = false;
                    btn.textContent = originalText;
                }
            }

            // Helper function to handle error
            function handleError(errorMsg) {
                console.error('Error sending form:', errorMsg);
                if (messageEl) {
                    messageEl.textContent = 'Sorry, there was an error. Please try again or contact us directly.';
                    messageEl.className = 'form-message error';
                }
                if (btn) {
                    btn.disabled = false;
                    btn.textContent = originalText;
                }
            }

            // Try multiple methods to send to Zapier webhook
            // Method 1: Try with no-cors mode (works but can't read response)
            // This is often the most reliable method for Zapier webhooks
            function tryFetchNoCors() {
                console.log('Trying fetch with no-cors mode');
                return fetch(webhookUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                })
                .then(function() {
                    // With no-cors, we can't read response, but if no error, assume success
                    console.log('Fetch no-cors completed (assuming success)');
                    handleSuccess();
                    return true;
                })
                .catch(function(error) {
                    console.error('Fetch no-cors error:', error);
                    return false;
                });
            }

            // Method 2: Try with form-data (Zapier sometimes prefers this)
            function tryFormData() {
                console.log('Trying with FormData');
                var formDataToSend = new FormData();
                formDataToSend.append('name', name);
                formDataToSend.append('email', email);
                formDataToSend.append('phone', phone || 'Not provided');
                formDataToSend.append('message', message || 'No message');
                formDataToSend.append('timestamp', new Date().toISOString());
                formDataToSend.append('source', 'Park Bavli Website');

                return fetch(webhookUrl, {
                    method: 'POST',
                    body: formDataToSend
                })
                .then(function(response) {
                    console.log('FormData response status:', response.status);
                    if (response.status >= 200 && response.status < 300) {
                        handleSuccess();
                        return true;
                    } else {
                        throw new Error('Status: ' + response.status);
                    }
                })
                .catch(function(error) {
                    console.error('FormData error:', error);
                    return false;
                });
            }

            // Method 3: XMLHttpRequest with JSON
            function sendWithXHR() {
                console.log('Using XMLHttpRequest fallback');
                return new Promise(function(resolve, reject) {
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', webhookUrl, true);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState === 4) {
                            if (xhr.status >= 200 && xhr.status < 300) {
                                console.log('XHR success');
                                handleSuccess();
                                resolve(true);
                            } else if (xhr.status === 0) {
                                // Status 0 usually means CORS issue or network error
                                console.log('XHR status 0, trying no-cors');
                                reject(new Error('CORS issue'));
                            } else {
                                handleError('HTTP ' + xhr.status);
                                reject(new Error('HTTP ' + xhr.status));
                            }
                        }
                    };
                    
                    xhr.onerror = function() {
                        console.error('XHR network error');
                        reject(new Error('Network error'));
                    };
                    
                    try {
                        xhr.send(JSON.stringify(formData));
                    } catch (error) {
                        reject(error);
                    }
                });
            }

            // Try methods in sequence - start with no-cors as it's most reliable for Zapier
            if (typeof fetch !== 'undefined') {
                // Start with no-cors mode (most reliable for Zapier webhooks)
                // With no-cors, if it doesn't throw an error, we assume success
                tryFetchNoCors()
                .catch(function(error) {
                    console.error('no-cors failed:', error);
                    // If no-cors fails, try FormData
                    console.log('Trying FormData as fallback');
                    return tryFormData()
                    .catch(function() {
                        // If FormData fails, try regular fetch
                        console.log('FormData failed, trying regular fetch');
                        return fetch(webhookUrl, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(formData)
                        })
                        .then(function(response) {
                            console.log('Regular fetch response status:', response.status);
                            if (response.status >= 200 && response.status < 300) {
                                handleSuccess();
                            } else {
                                throw new Error('Status: ' + response.status);
                            }
                        })
                        .catch(function(err) {
                            console.error('Regular fetch failed:', err);
                            // Last resort: XHR
                            return sendWithXHR().catch(function(xhrErr) {
                                handleError('Unable to send form. Please contact us directly at the phone numbers above.');
                            });
                        });
                    });
                });
            } else {
                // No fetch support, use XHR
                sendWithXHR().catch(function() {
                    handleError('Browser not supported. Please contact us directly.');
                });
            }
        });
    }

    // ----- Smooth scroll for anchor links -----
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function (a) {
            var id = a.getAttribute('href');
            if (id === '#') return;
            var target = document.querySelector(id);
            if (target) {
                a.addEventListener('click', function (e) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                });
            }
        });
    }

    // ----- Hide loader when page is loaded -----
    function initLoader() {
        var loader = document.getElementById('loader');
        if (!loader) return;

        document.body.classList.add('loading');

        function hideLoader() {
            setTimeout(function () {
                loader.classList.add('hidden');
                document.body.classList.remove('loading');
            }, 800);
        }

        if (document.readyState === 'complete') {
            hideLoader();
        } else {
            window.addEventListener('load', hideLoader);
        }
    }

    // ----- Run on DOM ready -----
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    ready(function () {
        initLoader();
        initScrollAnimations();
        initHeaderScroll();
        initParallax();
        initInsetAnimations();
        initForm();
        initSmoothScroll();
    });
})();
