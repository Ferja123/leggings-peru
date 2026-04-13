import './style.css'

// ═══ IMAGES ═══
import heroImg from './assets/hero.png'
import productImg from './assets/clientes/cliente1.png'
import cliente1 from './assets/clientes/cliente1.png'
import cliente2 from './assets/clientes/cliente2.png'
import cliente3 from './assets/clientes/cliente3.png'
import cliente4 from './assets/clientes/cliente4.png'
import cliente5 from './assets/clientes/cliente5.png'

// ═══ DATA ═══
const WHATSAPP_NUMBER = '51900000000'

const reviews = [
  {
    name: 'Jessica M.',
    initials: 'JM',
    location: 'Lima, Perú',
    text: 'Realmente cómodo, te permite moverte con facilidad. Es cálido y no queda ajustado en la cintura. Personalmente me gusta mucho, es muy suave por dentro.',
    photo: cliente1,
    date: 'Enero 2026',
    verified: true,
    rating: 5
  },
  {
    name: 'Katherine G.',
    initials: 'KG',
    location: 'Arequipa, Perú',
    text: 'Muy satisfecha con el producto, me queda perfecto, buena calidad, recibido rápidamente y en excelentes condiciones. La talla XL me queda muy bien.',
    photo: cliente3,
    date: 'Octubre 2025',
    verified: true,
    rating: 5
  },
  {
    name: 'Rosa T.',
    initials: 'RT',
    location: 'Cusco, Perú',
    text: 'El forro de borreguito es increíblemente grueso y suave. Ideal para el frío de la sierra. Me encanta que se puede ver la calidad del material por dentro.',
    photo: cliente2,
    date: 'Diciembre 2025',
    verified: true,
    rating: 5
  },
  {
    name: 'María P.',
    initials: 'MP',
    location: 'Trujillo, Perú',
    text: 'Me sorprendió la calidad. La tela por fuera es mate y elegante, y por dentro el borreguito es super suave. No pica nada. Compré 2 más para mi mamá y hermana.',
    photo: cliente4,
    date: 'Noviembre 2025',
    verified: true,
    rating: 5
  },
  {
    name: 'Lucía R.',
    initials: 'LR',
    location: 'Huancayo, Perú',
    text: 'El detalle del gatito es muy lindo. La cintura alta me moldea perfecto y el forro grueso mantiene el calor todo el día. Son los mejores leggings que he probado.',
    photo: cliente5,
    date: 'Enero 2026',
    verified: true,
    rating: 5
  },
  {
    name: 'Carmen V.',
    initials: 'CV',
    location: 'Puno, Perú',
    text: 'Aquí en Puno el frío es intenso y estos leggings me mantienen abrigada todo el día. El material es grueso pero no incómodo. Los uso debajo del pantalón también.',
    photo: null,
    date: 'Febrero 2026',
    verified: true,
    rating: 5
  },
  {
    name: 'Ana S.',
    initials: 'AS',
    location: 'Cajamarca, Perú',
    text: 'Llegó en 3 días por Olva a Cajamarca. El empaque estaba perfecto. La calidad es excelente para el precio, el forro es bien grueso. Totalmente recomendado.',
    photo: null,
    date: 'Marzo 2026',
    verified: true,
    rating: 5
  },
  {
    name: 'Patricia L.',
    initials: 'PL',
    location: 'Chiclayo, Perú',
    text: 'Me encanta que no se transparentan y la cintura alta sostiene bien. Los uso para hacer ejercicio por las mañanas cuando hace frío y son perfectos.',
    photo: null,
    date: 'Diciembre 2025',
    verified: true,
    rating: 4
  },
  {
    name: 'Daniela F.',
    initials: 'DF',
    location: 'Ica, Perú',
    text: 'Pensé que iban a ser muy gruesos para Ica pero en las noches de invierno son ideales. La tela estira muchísimo y se adapta perfecto al cuerpo.',
    photo: null,
    date: 'Enero 2026',
    verified: true,
    rating: 5
  },
  {
    name: 'Gabriela H.',
    initials: 'GH',
    location: 'Lima, Perú',
    text: 'Segunda vez que compro, la primera vez fue talla M y me quedó bien pero esta vez pedí L para estar más suelta. Ambas tallas son de buena calidad.',
    photo: null,
    date: 'Marzo 2026',
    verified: true,
    rating: 5
  }
]

// ═══ RENDER ═══
function renderApp() {
  const app = document.getElementById('app')!

  app.innerHTML = `
    <!-- TOPBAR -->
    <div class="topbar">
      🚚 ENVÍO GRATIS A TODO EL PERÚ — Oferta por tiempo limitado
    </div>

    <!-- NAVBAR -->
    <nav class="navbar">
      <div class="navbar-inner">
        <div class="brand">Leggings<span>Perú</span></div>
        <a href="#ordenar" class="nav-cta">ORDENAR AHORA</a>
      </div>
    </nav>

    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <img src="${heroImg}" alt="Leggings Térmicos Premium" />
        <div class="hero-gradient"></div>
      </div>
      <div class="hero-content">
        <div class="hero-text-block fade-up">
          <div class="hero-badge">⭐ +327 valoraciones verificadas</div>
          <h1 class="hero-title">
            Forro de Borreguito<br>
            <em>Ultra Grueso</em>
          </h1>
          <p class="hero-subtitle">
            Leggings térmicos de cintura alta con forro interior de lana de cordero.
            Máximo calor, elasticidad total y efecto push-up natural.
          </p>
          <div class="hero-price-row">
            <span class="hero-price-old">S/ 132.00</span>
            <span class="hero-price-current">S/ 79.00</span>
            <span class="hero-price-badge">-40% DCTO</span>
          </div>
          <a href="#ordenar" class="btn-hero">QUIERO LOS MÍOS →</a>
        </div>
        <div class="hero-visual fade-up" style="animation-delay: 0.2s">
          <div class="hero-img-wrapper">
            <img src="${productImg}" alt="Leggings con forro de borreguito" />
            <div class="hero-float-badge">
              <span class="hfb-icon">🔥</span>
              <div>
                <div class="hfb-text">+2,100 vendidos</div>
                <div class="hfb-sub">en los últimos 30 días</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TRUST BAR -->
    <div class="trust-bar">
      <div class="trust-bar-inner">
        <div class="trust-item">
          <span class="trust-icon">🚚</span>
          <span class="trust-label">Envío Gratis</span>
          <span class="trust-sub">A todo el Perú</span>
        </div>
        <div class="trust-item">
          <span class="trust-icon">🔄</span>
          <span class="trust-label">Cambio de Talla</span>
          <span class="trust-sub">Sin costo adicional</span>
        </div>
        <div class="trust-item">
          <span class="trust-icon">💳</span>
          <span class="trust-label">Pago Seguro</span>
          <span class="trust-sub">Yape · Plin · Transferencia</span>
        </div>
        <div class="trust-item">
          <span class="trust-icon">📦</span>
          <span class="trust-label">Entrega Rápida</span>
          <span class="trust-sub">Olva · Shalom · InDrive</span>
        </div>
      </div>
    </div>

    <!-- BENEFITS -->
    <section class="section fade-up" id="detalles">
      <div class="section-label">BENEFICIOS</div>
      <h2 class="section-title">¿Por qué estos leggings son<br>los más vendidos en Perú?</h2>
      <p class="section-desc">Diseñados específicamente para el clima frío peruano. Cada detalle fue pensado para brindarte calor, comodidad y estilo.</p>
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-icon">🐑</div>
          <h3>Forro de Borreguito Real</h3>
          <p>Interior ultra grueso de lana de cordero que atrapa el calor corporal. Mucho más cálido que el polar convencional.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">✨</div>
          <h3>Cintura Alta Moldeadora</h3>
          <p>Efecto push-up natural que levanta y moldea sin comprimir. Cintura ancha que no se enrolla ni marca.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">🧵</div>
          <h3>Sin Costuras Visibles</h3>
          <p>Tecnología seamless que elimina costuras molestas. No se marcan bajo la ropa y puedes usarlos solos o como base.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">💪</div>
          <h3>Súper Elásticos</h3>
          <p>Tela exterior de alta elasticidad que se adapta a cualquier tipo de cuerpo sin perder forma con el uso.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">🌡️</div>
          <h3>Protección Térmica</h3>
          <p>Ideales para climas fríos: Sierra, Costa en invierno, madrugadas. Puedes usarlos como ropa interior térmica.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">🏷️</div>
          <h3>Parche Fashion</h3>
          <p>Detalle de cuero con diseño exclusivo de gato. Le da un toque único y diferenciador al legging.</p>
        </div>
      </div>
    </section>

    <!-- GALLERY -->
    <section class="gallery-section">
      <div class="gallery-header">
        <div class="section-label">FOTOS REALES</div>
        <h2 class="section-title">Nuestras clientas lo comprueban</h2>
      </div>
      <div class="gallery-grid">
        <div class="gallery-card fade-up"><img src="${cliente1}" alt="Foto real cliente - forro borreguito"></div>
        <div class="gallery-card fade-up"><img src="${cliente2}" alt="Foto real cliente - detalle interior"></div>
        <div class="gallery-card fade-up"><img src="${cliente3}" alt="Foto real cliente - legging gris"></div>
        <div class="gallery-card fade-up"><img src="${cliente4}" alt="Foto real cliente - producto doblado"></div>
        <div class="gallery-card fade-up"><img src="${cliente5}" alt="Foto real cliente - etiqueta gatito"></div>
      </div>
    </section>

    <!-- REVIEWS -->
    <section class="section fade-up" id="resenas">
      <div class="reviews-header-row">
        <div>
          <div class="section-label">RESEÑAS VERIFICADAS</div>
          <h2 class="section-title">Lo que dicen nuestras clientas</h2>
        </div>
        <div class="reviews-stats">
          <span class="reviews-score">4.6</span>
          <div class="reviews-meta">
            <span class="reviews-stars">⭐⭐⭐⭐⭐</span>
            <span class="reviews-count">327 valoraciones verificadas</span>
          </div>
        </div>
      </div>
      <div class="reviews-grid" id="reviews-container"></div>
    </section>

    <!-- SIZE GUIDE -->
    <section class="size-section">
      <div class="size-content fade-up">
        <div class="section-label">GUÍA DE TALLAS</div>
        <h2 class="section-title" style="margin-bottom: 32px;">Encuentra tu talla perfecta</h2>
        <div class="size-table-wrapper">
          <table class="size-table">
            <thead>
              <tr>
                <th>Talla</th>
                <th>Cintura</th>
                <th>Cadera</th>
                <th>Largo</th>
                <th>Pantalón PE</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>S</strong></td><td>58 – 86 cm</td><td>70 – 100 cm</td><td>89 cm</td><td>26 – 28</td></tr>
              <tr><td><strong>M</strong></td><td>62 – 90 cm</td><td>74 – 104 cm</td><td>90 cm</td><td>28 – 30</td></tr>
              <tr><td><strong>L</strong></td><td>66 – 94 cm</td><td>78 – 108 cm</td><td>91 cm</td><td>30 – 32</td></tr>
              <tr><td><strong>XL</strong></td><td>70 – 98 cm</td><td>82 – 112 cm</td><td>92 cm</td><td>32 – 34</td></tr>
              <tr><td><strong>XXL</strong></td><td>74 – 102 cm</td><td>86 – 116 cm</td><td>93 cm</td><td>34+</td></tr>
            </tbody>
          </table>
        </div>
        <div class="size-tip">
          💡 Si estás entre dos tallas, te recomendamos elegir la talla más grande para mayor comodidad.
        </div>
      </div>
    </section>

    <!-- ORDER FORM -->
    <section class="order-section" id="ordenar">
      <div class="order-wrapper fade-up">
        <div class="order-card">
          <h2>Realiza tu pedido</h2>
          <p class="order-sub">Completa tus datos y te contactaremos por WhatsApp</p>
          
          <div class="order-summary">
            <div class="order-summary-left">1× Leggings Térmicos Premium</div>
            <div class="order-summary-right">
              <div class="order-summary-price">S/ 79.00</div>
              <div class="order-summary-ship">✓ Envío gratis incluido</div>
            </div>
          </div>

          <form id="purchase-form">
            <div class="form-group">
              <label class="form-label">Nombre completo</label>
              <input type="text" class="form-input" id="f-name" placeholder="Ej. María García López" required>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Teléfono</label>
                <input type="tel" class="form-input" id="f-phone" placeholder="987 654 321" required>
              </div>
              <div class="form-group">
                <label class="form-label">Talla</label>
                <select class="form-input" id="f-size" required>
                  <option value="">Seleccionar</option>
                  <option value="S">S (26–28)</option>
                  <option value="M">M (28–30)</option>
                  <option value="L">L (30–32)</option>
                  <option value="XL">XL (32–34)</option>
                  <option value="XXL">XXL (34+)</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Dirección de envío</label>
              <input type="text" class="form-input" id="f-address" placeholder="Av. Los Pinos 123, Dpto. 4B" required>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Ciudad / Distrito</label>
                <input type="text" class="form-input" id="f-city" placeholder="Miraflores, Lima" required>
              </div>
              <div class="form-group">
                <label class="form-label">Departamento</label>
                <input type="text" class="form-input" id="f-dept" placeholder="Lima" required>
              </div>
            </div>
            <button type="submit" class="btn-order">CONFIRMAR PEDIDO VÍA WHATSAPP →</button>
          </form>
          <div class="order-security">🔒 Tus datos están protegidos — Pago contra entrega disponible</div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">Leggings<span>Perú</span></div>
        <p class="footer-text">
          Envíos a todo el país vía Olva Courier, Shalom y servicio motorizado.<br>
          Pagos por Yape, Plin, transferencia BCP/Interbank o contra entrega.<br><br>
          © ${new Date().getFullYear()} LeggingsPerú. Todos los derechos reservados.
        </p>
      </div>
    </footer>

    <!-- FLOATING CTA (mobile) -->
    <div class="floating-cta">
      <a href="#ordenar">🛒 ORDENAR AHORA — S/ 79.00</a>
    </div>
  `

  renderReviews()
  setupForm()
  setupAnimations()
}

function renderReviews() {
  const container = document.getElementById('reviews-container')
  if (!container) return

  container.innerHTML = reviews.map(r => `
    <div class="review-card fade-up">
      <div class="review-top">
        <div class="review-author">
          <div class="review-avatar">${r.initials}</div>
          <div>
            <div class="review-name">${r.name}</div>
            <div class="review-location">${r.location}</div>
          </div>
        </div>
        <span class="review-stars-sm">${'⭐'.repeat(r.rating)}</span>
      </div>
      <p class="review-text">"${r.text}"</p>
      ${r.photo ? `<img src="${r.photo}" alt="Foto enviada por ${r.name}" class="review-photo" loading="lazy" />` : ''}
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px;">
        <span class="review-date">${r.date}</span>
        ${r.verified ? '<span class="review-verified">✓ Compra verificada</span>' : ''}
      </div>
    </div>
  `).join('')
}

function setupForm() {
  const form = document.getElementById('purchase-form') as HTMLFormElement
  if (!form) return

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = (document.getElementById('f-name') as HTMLInputElement).value
    const phone = (document.getElementById('f-phone') as HTMLInputElement).value
    const size = (document.getElementById('f-size') as HTMLSelectElement).value
    const address = (document.getElementById('f-address') as HTMLInputElement).value
    const city = (document.getElementById('f-city') as HTMLInputElement).value
    const dept = (document.getElementById('f-dept') as HTMLInputElement).value

    const msg = encodeURIComponent(
      `*🛒 NUEVO PEDIDO — LeggingsPerú*\n\n` +
      `*Nombre:* ${name}\n` +
      `*Teléfono:* ${phone}\n` +
      `*Talla:* ${size}\n` +
      `*Dirección:* ${address}\n` +
      `*Ciudad:* ${city}\n` +
      `*Departamento:* ${dept}\n\n` +
      `*Producto:* 1× Leggings Térmicos Premium\n` +
      `*Total:* S/ 79.00\n` +
      `*Envío:* GRATIS`
    )

    // Trigger TikTok Pixel event before redirect
    if (typeof window !== 'undefined' && (window as any).ttq) {
      ;(window as any).ttq.track('CompletePayment', {
        contents: [{ content_id: 'leggings-termicos', content_name: 'Leggings Térmicos Premium', quantity: 1, price: 79.00 }],
        value: 79.00,
        currency: 'PEN'
      })
    }

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
  })
}

function setupAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
}

// ═══ INIT ═══
document.addEventListener('DOMContentLoaded', renderApp)
