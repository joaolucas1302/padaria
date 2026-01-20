// ==========================================
// MENU MOBILE TOGGLE
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animação do ícone hamburger
            const spans = menuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Fechar menu ao clicar em um link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
});

// ==========================================
// HEADER SCROLL EFFECT
// ==========================================
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#FFFFFF';
    }
});

// ==========================================
// SMOOTH SCROLL PARA LINKS INTERNOS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// ANIMAÇÃO DE ENTRADA DOS ELEMENTOS
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elementos que terão animação
const animatedElements = document.querySelectorAll(
    '.feature-card, .product-card, .testimonial-card, .value-card, .product-item, .encomenda-card, .contact-card, .step'
);

animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ==========================================
// FILTRO DE PRODUTOS (PÁGINA PRODUTOS)
// ==========================================
const filterButtons = document.querySelectorAll('.filter-btn');
const productItems = document.querySelectorAll('.product-item');
const encomendaCards = document.querySelectorAll('.encomenda-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona classe active no botão clicado
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // Filtra os produtos
            productItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (category === 'all' || itemCategory === category) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
            
            // Filtra as encomendas especiais
            encomendaCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
            
            // Scroll suave para os produtos
            const productsSection = document.querySelector('.products-catalog');
            if (productsSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const sectionPosition = productsSection.offsetTop - headerHeight - 100;
                
                window.scrollTo({
                    top: sectionPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// FORMULÁRIO DE CONTATO
// ==========================================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validação básica
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !phone || !message) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }
        
        // Simulação de envio (em produção, aqui você faria uma chamada AJAX para o servidor)
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        
        // Simula um delay de envio
        setTimeout(() => {
            // Esconde o formulário
            contactForm.style.display = 'none';
            
            // Mostra mensagem de sucesso
            formSuccess.style.display = 'block';
            formSuccess.style.opacity = '0';
            
            setTimeout(() => {
                formSuccess.style.transition = 'opacity 0.5s ease';
                formSuccess.style.opacity = '1';
            }, 10);
            
            // Em produção, você pode usar AJAX para enviar os dados
            // Exemplo com Fetch API:
            /*
            fetch('seu-endpoint-aqui.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    subject: document.getElementById('subject').value,
                    message: message
                })
            })
            .then(response => response.json())
            .then(data => {
                // Sucesso
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
            })
            .catch(error => {
                // Erro
                alert('Erro ao enviar mensagem. Tente novamente.');
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
            });
            */
            
            // Reset do formulário após 5 segundos (opcional)
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                formSuccess.style.display = 'none';
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
            }, 5000);
        }, 2000);
    });
}

// ==========================================
// MÁSCARA DE TELEFONE
// ==========================================
const phoneInput = document.getElementById('phone');

if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 11) {
            value = value.slice(0, 11);
        }
        
        if (value.length > 10) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (value.length > 6) {
            value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else if (value.length > 2) {
            value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        } else if (value.length > 0) {
            value = value.replace(/(\d{0,2})/, '($1');
        }
        
        e.target.value = value;
    });
}

// ==========================================
// CONTADOR DE CARACTERES PARA TEXTAREA
// ==========================================
const messageTextarea = document.getElementById('message');

if (messageTextarea) {
    const maxLength = 500;
    
    // Criar elemento contador
    const counterDiv = document.createElement('div');
    counterDiv.style.textAlign = 'right';
    counterDiv.style.marginTop = '0.5rem';
    counterDiv.style.fontSize = '0.875rem';
    counterDiv.style.color = '#666';
    messageTextarea.parentElement.appendChild(counterDiv);
    
    function updateCounter() {
        const currentLength = messageTextarea.value.length;
        counterDiv.textContent = `${currentLength}/${maxLength} caracteres`;
        
        if (currentLength > maxLength) {
            counterDiv.style.color = '#dc3545';
            messageTextarea.value = messageTextarea.value.slice(0, maxLength);
        } else if (currentLength > maxLength * 0.9) {
            counterDiv.style.color = '#ffc107';
        } else {
            counterDiv.style.color = '#666';
        }
    }
    
    messageTextarea.addEventListener('input', updateCounter);
    updateCounter();
}

// ==========================================
// BOTÃO VOLTAR AO TOPO
// ==========================================
const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #6B3E26;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 998;
        font-size: 1.25rem;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.background = '#553018';
        button.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.background = '#6B3E26';
        button.style.transform = 'translateY(0)';
    });
};

createBackToTopButton();

// ==========================================
// LOADING DE IMAGENS
// ==========================================
const images = document.querySelectorAll('img');

images.forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    // Se a imagem já estiver carregada (cache)
    if (img.complete) {
        img.style.opacity = '1';
    } else {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
    }
});

// ==========================================
// PREVENÇÃO DE SCROLL HORIZONTAL
// ==========================================
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (window.scrollX !== 0) {
            window.scrollTo(0, window.scrollY);
        }
    }, 10);
});

// ==========================================
// ANALYTICS E TRACKING (OPCIONAL)
// ==========================================
// Rastreamento de cliques no WhatsApp
const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');

whatsappLinks.forEach(link => {
    link.addEventListener('click', function() {
        console.log('Click no WhatsApp:', this.href);
        
        // Aqui você pode adicionar código do Google Analytics ou Facebook Pixel
        // Exemplo: gtag('event', 'click', { 'event_category': 'WhatsApp', 'event_label': this.href });
    });
});

// ==========================================
// PERFORMANCE: LAZY LOADING DE IMAGENS
// ==========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    // Para usar lazy loading, adicione data-src="" nas imagens e remova o src=""
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ==========================================
// DETECÇÃO DE DISPOSITIVO MÓVEL
// ==========================================
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
    // Ajustes específicos para mobile
    document.body.classList.add('is-mobile');
}

// ==========================================
// MENSAGEM DE COOKIE (LGPD) - OPCIONAL
// ==========================================
const showCookieMessage = () => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    
    if (!cookieAccepted) {
        const cookieBar = document.createElement('div');
        cookieBar.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #1A1A1A;
            color: white;
            padding: 1.5rem;
            text-align: center;
            z-index: 9999;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        `;
        
        cookieBar.innerHTML = `
            <p style="margin: 0 0 1rem 0;">
                🍪 Utilizamos cookies para melhorar sua experiência em nosso site.
            </p>
            <button id="acceptCookies" style="
                background: #6B3E26;
                color: white;
                border: none;
                padding: 0.75rem 2rem;
                border-radius: 50px;
                cursor: pointer;
                font-weight: 600;
            ">
                Aceitar
            </button>
        `;
        
        document.body.appendChild(cookieBar);
        
        document.getElementById('acceptCookies').addEventListener('click', () => {
            localStorage.setItem('cookieAccepted', 'true');
            cookieBar.style.transform = 'translateY(100%)';
            setTimeout(() => cookieBar.remove(), 300);
        });
    }
};

// Descomente a linha abaixo para ativar a mensagem de cookies
// showCookieMessage();

// ==========================================
// LOG DE INICIALIZAÇÃO
// ==========================================
console.log('%c🍞 Padaria Artesanal - Site carregado com sucesso!', 'color: #6B3E26; font-size: 16px; font-weight: bold;');
console.log('%cDesenvolvido com ❤️ e muito pão quentinho!', 'color: #D4A574; font-size: 12px;');
