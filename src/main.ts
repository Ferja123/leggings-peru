import './style.css'

// ═══ IMAGES ═══
import heroImg from './assets/hero.png'
// Video replaced the static hero image
// import productPrincipal from './assets/product/principal.png'
import cliente1 from './assets/clientes/cliente1.png'
import cliente2 from './assets/clientes/cliente2.png'
import cliente3 from './assets/clientes/cliente3.png'
import cliente4 from './assets/clientes/cliente4.png'
import cliente5 from './assets/clientes/cliente5.png'
import cliente6 from './assets/clientes/cliente6.png'

// ═══ CONSTANTS ═══
const WHATSAPP_NUMBER = '51919749480'

// ═══ PACKAGES ═══
const packages = [
  { id: 1, qty: 1, label: '1 Unidad (Negro)', price: 75, unitPrice: 75, savingsText: '', tag: '' },
  { id: 2, qty: 2, label: 'Pack de 2 (Negros)', price: 129, unitPrice: 64.5, savingsText: '🔥 40% DE DESCUENTO', tag: '⭐ MÁS VENDIDO' },
]

let selectedPackage = packages[1] // Default: Pack de 2

// ═══ PURCHASE NOTIFICATIONS ═══
const purchaseNotifications = [
  { name: 'María G.', city: 'Lima', mins: 2 },
  { name: 'Andrea S.', city: 'Arequipa', mins: 5 },
  { name: 'Carmen L.', city: 'Cusco', mins: 8 },
  { name: 'Lucía P.', city: 'Trujillo', mins: 12 },
  { name: 'Rosa M.', city: 'Huancayo', mins: 15 },
  { name: 'Patricia V.', city: 'Piura', mins: 18 },
  { name: 'Diana R.', city: 'Chiclayo', mins: 22 },
  { name: 'Sofía T.', city: 'Puno', mins: 25 },
  { name: 'Valentina H.', city: 'Cajamarca', mins: 30 },
  { name: 'Isabel F.', city: 'Ica', mins: 35 },
]

// ═══ FAQ DATA ═══
const faqs = [
  { q: '¿Cuánto demora el envío?', a: 'Enviamos a todo el Perú. Lima: 1-2 días hábiles. Provincias: 3-5 días hábiles vía Olva Courier o Shalom.' },
  { q: '¿Cómo puedo pagar?', a: 'Aceptamos Yape, Plin, transferencia BCP/Interbank, y pago contra entrega en Lima Metropolitana.' },
  { q: '¿Qué talla debo elegir?', a: 'Consulta nuestra guía de tallas. Si estás entre dos tallas, elige la más grande. El material es elástico y se adapta al cuerpo.' },
  { q: '¿Puedo cambiar de talla?', a: 'Sí, ofrecemos cambio de talla sin costo adicional dentro de los primeros 7 días después de recibir tu pedido.' },
  { q: '¿El forro de borreguito es real?', a: 'Sí, el interior es de lana sintética de cordero ultra gruesa. Es hipoalergénico, suave y mucho más cálido que el polar convencional.' },
  { q: '¿Se pueden lavar en lavadora?', a: 'Sí, recomendamos lavado en ciclo delicado con agua fría y secar al aire. No usar secadora para mantener la calidad del forro.' },
]

// ═══ REVIEWS DATA ═══
const reviews = [
  {
    name: 'Jessica M.', initials: 'JM', location: 'Lima, Perú',
    text: 'Realmente cómodo, te permite moverte con facilidad. Es cálido y no queda ajustado en la cintura. Personalmente me gusta mucho, es muy suave por dentro.',
    photo: cliente1, date: 'Enero 2026', verified: true, rating: 5
  },
  {
    name: 'Katherine G.', initials: 'KG', location: 'Arequipa, Perú',
    text: 'Muy satisfecha con el producto, me queda perfecto, buena calidad, recibido rápidamente y en excelentes condiciones. La talla XL me queda muy bien.',
    photo: cliente3, date: 'Octubre 2025', verified: true, rating: 5
  },
  {
    name: 'Rosa T.', initials: 'RT', location: 'Cusco, Perú',
    text: 'El forro de borreguito es increíblemente grueso y suave. Ideal para el frío de la sierra. Me encanta que se puede ver la calidad del material por dentro.',
    photo: cliente2, date: 'Diciembre 2025', verified: true, rating: 5
  },
  {
    name: 'María P.', initials: 'MP', location: 'Trujillo, Perú',
    text: 'Me sorprendió la calidad. La tela por fuera es mate y elegante, y por dentro el borreguito es super suave. No pica nada. Compré 2 más para mi mamá y hermana.',
    photo: cliente4, date: 'Noviembre 2025', verified: true, rating: 5
  },
  {
    name: 'Lucía R.', initials: 'LR', location: 'Huancayo, Perú',
    text: 'El detalle del gatito es muy lindo. La cintura alta me moldea perfecto y el forro grueso mantiene el calor todo el día. Son los mejores leggings que he probado.',
    photo: cliente5, date: 'Enero 2026', verified: true, rating: 5
  },
  {
    name: 'Carmen V.', initials: 'CV', location: 'Puno, Perú',
    text: 'Aquí en Puno el frío es intenso y estos leggings me mantienen abrigada todo el día. El material es grueso pero no incómodo. Los uso debajo del pantalón también.',
    photo: cliente6, date: 'Febrero 2026', verified: true, rating: 5
  },
  {
    name: 'Ana S.', initials: 'AS', location: 'Cajamarca, Perú',
    text: 'Llegó en 3 días por Olva a Cajamarca. El empaque estaba perfecto. La calidad es excelente para el precio, el forro es bien grueso. Totalmente recomendado.',
    photo: '/review-1.avif', date: 'Marzo 2026', verified: true, rating: 5
  },
  {
    name: 'Patricia L.', initials: 'PL', location: 'Chiclayo, Perú',
    text: 'Me encanta que no se transparentan y la cintura alta sostiene bien. Los uso para hacer ejercicio por las mañanas cuando hace frío y son perfectos.',
    photo: '/review-2.avif', date: 'Diciembre 2025', verified: true, rating: 5
  },
  {
    name: 'Daniela F.', initials: 'DF', location: 'Ica, Perú',
    text: 'Pensé que iban a ser muy gruesos para Ica pero en las noches de invierno son ideales. La tela estira muchísimo y se adapta perfecto al cuerpo.',
    photo: '/review-3.avif', date: 'Enero 2026', verified: true, rating: 5
  },
  {
    name: 'Gabriela H.', initials: 'GH', location: 'Lima, Perú',
    text: 'Segunda vez que compro, la primera vez fue talla M y me quedó bien pero esta vez pedí L para estar más suelta. Ambas tallas son de buena calidad.',
    photo: '/review-4.avif', date: 'Marzo 2026', verified: true, rating: 5
  },
  {
    name: 'Valeria C.', initials: 'VC', location: 'Tacna, Perú',
    text: 'Los pedí para mí y para mi hermana. Los dos nos quedaron increíbles. El forro es súper grueso y no se deforma con el uso. De lo mejor que he comprado online.',
    photo: '/review-5.avif', date: 'Marzo 2026', verified: true, rating: 5
  },
  {
    name: 'Sofía A.', initials: 'SA', location: 'Ayacucho, Perú',
    text: 'Perfectos para el clima de Ayacucho. No son como los leggings baratos que se rompen al mes; estos son bien resistentes y el borreguito por dentro es una delicia.',
    photo: '/review-6.avif', date: 'Febrero 2026', verified: true, rating: 5
  },
  {
    name: 'Milagros D.', initials: 'MD', location: 'Junín, Perú',
    text: 'Mi mamá me los recomendó y ahora entiendo por qué. Son calientitos, no pican y la pretina no se enrolla. Me compré el pack de 3 y no me arrepiento.',
    photo: '/review-7.avif', date: 'Abril 2026', verified: true, rating: 5
  },
  {
    name: 'Claudia N.', initials: 'CN', location: 'Piura, Perú',
    text: 'Ideal para las noches frías. Me sorprendió que el material fuera tan suave y resistente a la vez. Se ven elegantes con cualquier outfit. Super recomendados.',
    photo: '/review-8.avif', date: 'Enero 2026', verified: true, rating: 5
  },
  {
    name: 'Fernanda B.', initials: 'FB', location: 'Lambayeque, Perú',
    text: 'Compré la talla L y me queda a la perfección. El envío fue más rápido de lo que esperaba. La calidad del forro se nota desde que lo tocas. 10 de 10.',
    photo: '/review-9.avif', date: 'Marzo 2026', verified: true, rating: 5
  },
  {
    name: 'Adriana Q.', initials: 'AQ', location: 'Huánuco, Perú',
    text: 'Llevaba meses buscando unos leggings térmicos que realmente abriguen y estos superaron mis expectativas. El grosor del forro es impresionante y son muy cómodos.',
    photo: '/review-10.avif', date: 'Abril 2026', verified: true, rating: 5
  },
  {
    name: 'Paola E.', initials: 'PE', location: 'Cusco, Perú',
    text: 'Vivo en el centro de Cusco y aquí hace un frío tremendo en invierno. Estos leggings son mi salvación, los uso todos los días. Ya pedí el segundo pack.',
    photo: '/review-11.avif', date: 'Febrero 2026', verified: true, rating: 5
  },
  {
    name: 'Diana J.', initials: 'DJ', location: 'Lima, Perú',
    text: 'Los compré por TikTok y tenía dudas, pero la verdad me encantaron. El material es premium, no se transparentan y son super calientitos. Los vale cada sol.',
    photo: '/review-12.avif', date: 'Abril 2026', verified: true, rating: 5
  }
]

// ═══ HELPERS ═══
function trackTikTok(event: string, data?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && (window as any).ttq) {
    ;(window as any).ttq.track(event, data)
  }
}

function getCountdownEnd(): number {
  const stored = localStorage.getItem('lp-cd-end')
  const now = Date.now()
  if (stored && parseInt(stored) > now) return parseInt(stored)
  const hours = 2 + Math.random() * 4
  const end = now + hours * 60 * 60 * 1000
  localStorage.setItem('lp-cd-end', end.toString())
  return end
}

function getStockCount(): number {
  const stored = localStorage.getItem('lp-stock')
  const storedDate = localStorage.getItem('lp-stock-date')
  const today = new Date().toDateString()
  if (stored && storedDate === today) return parseInt(stored)
  const stock = 12 + Math.floor(Math.random() * 8)
  localStorage.setItem('lp-stock', stock.toString())
  localStorage.setItem('lp-stock-date', today)
  return stock
}

// ═══ RENDER ═══
function renderApp() {
  const app = document.getElementById('app')!
  const stock = getStockCount()
  const stockPercent = Math.min(95, Math.round(((45 - stock) / 45) * 100))

  app.innerHTML = `
    <!-- TOPBAR -->
    <div class="topbar">
      <span class="topbar-pulse"></span>
      🚨 Alerta de ola de frío: Últimas 20 unidades del lote de invierno con 40% OFF
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
      <!-- 3D Floating Orbs -->
      <div class="hero-orb hero-orb-1"></div>
      <div class="hero-orb hero-orb-2"></div>
      <div class="hero-orb hero-orb-3"></div>

      <div class="hero-content">
        <div class="hero-text-block fade-up-3d">
          <div class="hero-badge">
            <span class="badge-live"></span>
            🔥 VISTO EN TIKTOK — Oferta Exclusiva
          </div>
          <h1 class="hero-title" style="margin-bottom: 24px;">
            El Secreto para un Invierno Elegante<br>
            <em style="font-size: clamp(1.4rem, 3vw, 2.2rem); display: block; margin-top: 8px;">(y sin pasar una gota de frío)</em>
          </h1>
          <p class="hero-subtitle">
            Descubre los Leggings Térmicos Premium. El efecto moldeador que estiliza tu figura con el abrigo de un interior de corderito de alta densidad.
          </p>
          <div class="hero-price-row">
            <span class="hero-price-old">S/ 125.00</span>
            <span class="hero-price-current">S/ 75.00</span>
            <span class="hero-price-badge">-40% DCTO</span>
          </div>

          <!-- COUNTDOWN -->
          <div class="countdown-wrapper">
            <span class="countdown-label">⏰ Oferta termina en:</span>
            <div class="countdown" id="countdown">
              <div class="countdown-block"><span id="cd-hours">00</span><small>Hrs</small></div>
              <div class="countdown-sep">:</div>
              <div class="countdown-block"><span id="cd-mins">00</span><small>Min</small></div>
              <div class="countdown-sep">:</div>
              <div class="countdown-block"><span id="cd-secs">00</span><small>Seg</small></div>
            </div>
          </div>

          <!-- STOCK -->
          <div class="stock-indicator">
            <div class="stock-bar"><div class="stock-fill" id="stock-fill" style="width: ${stockPercent}%"></div></div>
            <span class="stock-text">🔥 Solo quedan <strong>${stock}</strong> unidades — ${stockPercent}% vendido</span>
          </div>

          <a href="#ordenar" class="btn-hero btn-3d" style="font-size: 0.85rem; padding: 16px 24px; text-transform: uppercase;">SÍ, QUIERO MIS PIERNAS ABRIGADAS Y ESTILIZADAS →</a>
        </div>

        <div class="hero-visual fade-up-3d" style="animation-delay: 0.2s">
          <div class="hero-img-wrapper hero-3d-float" style="overflow: hidden; border-radius: 20px; background-color: #222; position: relative;">
            <video class="lazy-video" data-src="/video-demo-1.mp4" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px; opacity: 0; transition: opacity 0.5s ease-in-out;"></video>
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
          <span class="trust-sub">1-3 días Lima · 3-5 Provincias</span>
        </div>
      </div>
    </div>



    <!-- BENEFITS & STORY -->
    <section class="section fade-up-3d" id="detalles">
      <div class="section-label">TECNOLOGÍA TEXTIL</div>
      <h2 class="section-title">No comprometas tu estética por el clima.</h2>
      <p class="section-desc" style="max-width: 800px; font-size: 1.05rem; margin-bottom: 24px;">
        Ya sentiste el cambio de clima. Las noches frías y la humedad intensa han vuelto. ¿Vas a pasar otro invierno escondiendo tu estilo bajo capas de ropa incómoda o jeans que parecen hielo?
      </p>
      <p class="section-desc" style="max-width: 800px; font-size: 1.05rem;">
        Diseñados para la mujer moderna. Nuestros Leggings Térmicos no son una prenda básica, son tecnología textil en cada detalle:
      </p>
      
      <div class="benefits-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
        <div class="benefit-card tilt-3d">
          <div class="benefit-icon">🔥</div>
          <h3>Aislamiento Térmico Total</h3>
          <p>Interior forrado con corderito extra suave que retiene tu calor corporal, bloqueando el viento y la humedad. Despídete del frío intenso.</p>
        </div>
        <div class="benefit-card tilt-3d">
          <div class="benefit-icon">✨</div>
          <h3>Efecto Moldeador y Push-Up</h3>
          <p>Su pretina ancha controla el abdomen y estiliza tus piernas sin añadir volumen extra. Te verás más delgada, no más abrigada.</p>
        </div>
        <div class="benefit-card tilt-3d">
          <div class="benefit-icon">💎</div>
          <h3>Estética Premium y Elegante</h3>
          <p>Acabado mate impecable que combina perfecto con botas, abrigos y blazers. Eleva tu outfit mientras mantienes el máximo confort.</p>
        </div>
      </div>
    </section>

    <!-- GALLERY -->
    <section class="gallery-section">
      <div class="gallery-header">
        <div class="section-label">FOTOS REALES</div>
        <h2 class="section-title">Nuestras clientas lo comprueban</h2>
      </div>
      <div class="gallery-scroll">
        <div class="gallery-card tilt-3d"><img src="${cliente1}" alt="Foto real cliente - forro borreguito" loading="lazy"></div>
        <div class="gallery-card tilt-3d"><img src="${cliente2}" alt="Foto real cliente - detalle interior" loading="lazy"></div>
        <div class="gallery-card tilt-3d"><img src="${cliente3}" alt="Foto real cliente - legging gris" loading="lazy"></div>
        <div class="gallery-card tilt-3d"><img src="${cliente4}" alt="Foto real cliente - producto doblado" loading="lazy"></div>
        <div class="gallery-card tilt-3d"><img src="${cliente5}" alt="Foto real cliente - etiqueta gatito" loading="lazy"></div>
        <div class="gallery-card tilt-3d"><img src="${cliente6}" alt="Foto real cliente - vista lateral" loading="lazy"></div>
        <div class="gallery-card tilt-3d"><img src="/review-1.avif" alt="Foto real cliente - testimonio 1" loading="lazy"></div>
        <div class="gallery-card tilt-3d"><img src="/review-2.avif" alt="Foto real cliente - testimonio 2" loading="lazy"></div>
        <div class="gallery-card tilt-3d"><img src="/review-3.avif" alt="Foto real cliente - testimonio 3" loading="lazy"></div>
        <div class="gallery-card tilt-3d"><img src="/review-4.avif" alt="Foto real cliente - testimonio 4" loading="lazy"></div>
        <div class="gallery-card tilt-3d"><img src="/review-5.avif" alt="Foto real cliente - testimonio 5" loading="lazy"></div>
        <div class="gallery-card tilt-3d"><img src="/review-6.avif" alt="Foto real cliente - testimonio 6" loading="lazy"></div>
        <div class="gallery-card tilt-3d"><img src="/review-7.avif" alt="Foto real cliente - testimonio 7" loading="lazy"></div>
        <div class="gallery-card tilt-3d"><img src="/review-8.avif" alt="Foto real cliente - testimonio 8" loading="lazy"></div>
        <div class="gallery-card tilt-3d"><img src="/review-9.avif" alt="Foto real cliente - testimonio 9" loading="lazy"></div>
        <div class="gallery-card tilt-3d"><img src="/review-10.avif" alt="Foto real cliente - testimonio 10" loading="lazy"></div>
        <div class="gallery-card tilt-3d"><img src="/review-11.avif" alt="Foto real cliente - testimonio 11" loading="lazy"></div>
        <div class="gallery-card tilt-3d"><img src="/review-12.avif" alt="Foto real cliente - testimonio 12" loading="lazy"></div>
      </div>
    </section>

    <!-- VIDEO SHOWCASE -->
    <section class="section fade-up-3d" style="padding-top: 20px; padding-bottom: 20px;">
      <div class="section-label">MÍRALO EN ACCIÓN</div>
      <h2 class="section-title">Así se ve y se siente en la vida real</h2>
      <div style="max-width: 480px; margin: 24px auto 0; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.4); border: 2px solid rgba(255,255,255,0.06); background-color: #222;">
        <video class="lazy-video" data-src="/video-demo-2.mp4" autoplay loop muted playsinline style="width: 100%; display: block; border-radius: 18px; opacity: 0; transition: opacity 0.5s ease-in-out;"></video>
      </div>
    </section>

    <!-- REVIEWS -->
    <section class="section fade-up-3d" id="resenas">
      <div class="reviews-header-row">
        <div>
          <div class="section-label">RESEÑAS VERIFICADAS</div>
          <h2 class="section-title">Lo que dicen nuestras clientas</h2>
        </div>
        <div class="reviews-stats">
          <span class="reviews-score">4.8</span>
          <div class="reviews-meta">
            <span class="reviews-stars">⭐⭐⭐⭐⭐</span>
            <span class="reviews-count">512 valoraciones verificadas</span>
          </div>
        </div>
      </div>
      <div class="reviews-grid" id="reviews-container"></div>
    </section>

    <!-- SIZE GUIDE -->
    <section class="size-section">
      <div class="size-content fade-up-3d">
        <div class="section-label">GUÍA DE TALLAS</div>
        <h2 class="section-title" style="margin-bottom: 32px;">Encuentra tu talla perfecta</h2>
        <div class="size-table-wrapper">
          <table class="size-table">
            <thead>
              <tr><th>Talla</th><th>Cintura</th><th>Cadera</th><th>Largo</th><th>Pantalón PE</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>M</strong></td><td>62 – 90 cm</td><td>74 – 104 cm</td><td>90 cm</td><td>28 – 30</td></tr>
              <tr><td><strong>L</strong></td><td>66 – 94 cm</td><td>78 – 108 cm</td><td>91 cm</td><td>30 – 32</td></tr>
              <tr><td><strong>XXL</strong></td><td>74 – 102 cm</td><td>86 – 116 cm</td><td>93 cm</td><td>34+</td></tr>
            </tbody>
          </table>
        </div>
        <div class="size-tip">💡 Si estás entre dos tallas, te recomendamos elegir la talla más grande para mayor comodidad.</div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section fade-up-3d" id="faq">
      <div class="section-label">PREGUNTAS FRECUENTES</div>
      <h2 class="section-title">¿Tienes dudas?</h2>
      <div class="faq-list" id="faq-list">
        ${faqs.map((f, i) => `
          <div class="faq-item" data-faq="${i}">
            <button class="faq-question">
              <span>${f.q}</span>
              <span class="faq-chevron">▸</span>
            </button>
            <div class="faq-answer"><p>${f.a}</p></div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- ORDER FORM -->
    <section class="order-section" id="ordenar">
      <div class="order-wrapper fade-up-3d" style="max-width: 680px;">
        <div class="order-card">
          <h2>Realiza tu pedido</h2>
          <p class="order-sub">Selecciona tu paquete y completa tus datos para WhatsApp. <strong style="color: var(--green);">¡Todos incluyen envío gratis!</strong></p>

          <div class="packages-grid" style="margin-top: 10px; margin-bottom: 30px;">
            ${packages.map(pkg => `
              <div class="package-card tilt-3d ${pkg.id === selectedPackage.id ? 'package-selected' : ''} ${pkg.tag === '⭐ MÁS VENDIDO' ? 'package-best' : ''}" data-pkg-id="${pkg.id}" style="padding: 24px 16px;">
                ${pkg.tag ? `<div class="package-tag">${pkg.tag}</div>` : ''}
                <div class="package-qty" style="font-size: 0.95rem; margin-top: 8px;">${pkg.label}</div>
                <div class="package-price" style="font-size: 1.5rem;">S/ ${pkg.price.toFixed(2)}</div>
                ${pkg.savingsText ? `<div class="package-savings" style="font-size: 0.85rem; background: #ef4444; color: white; padding: 6px 10px; border-radius: 6px; display: inline-block; font-weight: 800; transform: scale(1.05); margin-top: 6px; box-shadow: 0 4px 12px rgba(239,68,68,0.4); animation: pulse 2s infinite;">${pkg.savingsText}</div>` : '<div class="package-savings" style="opacity:0">—</div>'}
                <div class="package-shipping" style="margin-bottom: 0;">✓ Envío gratis</div>
                <div class="package-check" style="top: 8px; right: 8px; width: 24px; height: 24px;">${pkg.id === selectedPackage.id ? '✓' : ''}</div>
              </div>
            `).join('')}
          </div>
          
          <div class="order-summary" id="order-summary">
            <div class="order-summary-left" id="order-summary-label">${selectedPackage.label}</div>
            <div class="order-summary-right">
              <div class="order-summary-price" id="order-summary-price">S/ ${selectedPackage.price.toFixed(2)}</div>
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
                  <option value="M">M (28–30)</option>
                  <option value="L">L (30–32)</option>
                  <option value="XXL">XXL (34+)</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Ciudad / Distrito</label>
              <input type="text" class="form-input" id="f-city" placeholder="Ej. Miraflores, Lima" required>
            </div>
            <div class="form-group">
              <label class="form-label">Dirección exacta y Referencia</label>
              <input type="text" class="form-input" id="f-ref" placeholder="Ej. Av. Larco 123, frente al parque" required>
            </div>
            <button type="submit" class="btn-order btn-3d">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.627.616l4.584-1.397A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.137 0-4.146-.663-5.821-1.828l-.407-.275-3.02.92.858-2.951-.3-.423A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              CONFIRMAR PEDIDO VÍA WHATSAPP
            </button>
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
    <div class="floating-cta" id="floating-cta">
      <div class="floating-cta-inner">
        <div class="floating-cta-info">
          <span class="floating-cta-price">S/ ${selectedPackage.price.toFixed(2)}</span>
          <span class="floating-cta-timer" id="floating-timer">00:00:00</span>
        </div>
        <a href="#ordenar" class="floating-cta-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          COMPRAR AHORA
        </a>
      </div>
    </div>

    <!-- NOTIFICATION TOAST -->
    <div class="notif-toast" id="notif-toast">
      <div class="notif-icon">🛒</div>
      <div class="notif-content">
        <div class="notif-name" id="notif-name">María G.</div>
        <div class="notif-detail" id="notif-detail">de Lima compró hace 2 min</div>
      </div>
      <button class="notif-close" id="notif-close">✕</button>
    </div>
  `

  // Initialize all systems
  renderReviews()
  setupForm()
  setupAnimations()
  setup3DTilt()
  setupCountdown()
  setupNotifications()
  setupPackageSelector()
  setupFAQ()

  // TikTok Pixel — ViewContent
  trackTikTok('ViewContent', {
    content_type: 'product',
    content_id: 'leggings-termicos',
    contents: [{ content_id: 'leggings-termicos', content_name: 'Leggings Térmicos Premium', quantity: 1, price: 75.00 }],
    value: 75.00,
    currency: 'PEN'
  })
}

// ═══ REVIEWS ═══
function renderReviews() {
  const container = document.getElementById('reviews-container')
  if (!container) return

  container.innerHTML = reviews.map(r => `
    <div class="review-card tilt-3d">
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

// ═══ FORM SETUP ═══
function setupForm() {
  const form = document.getElementById('purchase-form') as HTMLFormElement
  if (!form) return

  // Track InitiateCheckout when user starts filling form
  let checkoutTracked = false
  form.addEventListener('focusin', () => {
    if (!checkoutTracked) {
      checkoutTracked = true
      trackTikTok('InitiateCheckout', {
        content_type: 'product',
        content_id: 'leggings-termicos',
        contents: [{ content_id: 'leggings-termicos', content_name: 'Leggings Térmicos Premium', quantity: selectedPackage.qty, price: selectedPackage.price }],
        value: selectedPackage.price,
        currency: 'PEN'
      })
    }
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = (document.getElementById('f-name') as HTMLInputElement).value
    const phone = (document.getElementById('f-phone') as HTMLInputElement).value
    const size = (document.getElementById('f-size') as HTMLSelectElement).value
    const city = (document.getElementById('f-city') as HTMLInputElement).value
    const reference = (document.getElementById('f-ref') as HTMLInputElement).value

    const msg = encodeURIComponent(
      `*🛒 NUEVO PEDIDO — LeggingsPerú*\n\n` +
      `*Nombre:* ${name}\n` +
      `*Teléfono:* ${phone}\n` +
      `*Talla:* ${size}\n` +
      `*Ciudad/Distrito:* ${city}\n` +
      `*Dirección/Ref:* ${reference}\n\n` +
      `*Paquete:* ${selectedPackage.label}\n` +
      `*Total:* S/ ${selectedPackage.price.toFixed(2)}\n` +
      `*Envío:* GRATIS`
    )

    // TikTok Pixel — CompletePayment
    trackTikTok('CompletePayment', {
      content_type: 'product',
      content_id: 'leggings-termicos',
      contents: [{ content_id: 'leggings-termicos', content_name: 'Leggings Térmicos Premium', quantity: selectedPackage.qty, price: selectedPackage.price }],
      value: selectedPackage.price,
      currency: 'PEN'
    })

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
  })
}

// ═══ ANIMATIONS (IntersectionObserver) ═══
function setupAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' })

  document.querySelectorAll('.fade-up-3d').forEach(el => observer.observe(el))
}

// ═══ 3D TILT EFFECT ═══
function setup3DTilt() {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  if (isTouchDevice) return // Disable on touch devices

  document.querySelectorAll('.tilt-3d').forEach(card => {
    const el = card as HTMLElement

    el.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -8
      const rotateY = ((x - centerX) / centerX) * 8

      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
    })

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
    })
  })
}

// ═══ COUNTDOWN TIMER ═══
function setupCountdown() {
  const endTime = getCountdownEnd()

  function update() {
    const now = Date.now()
    const diff = Math.max(0, endTime - now)

    const h = Math.floor(diff / (1000 * 60 * 60))
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const s = Math.floor((diff % (1000 * 60)) / 1000)

    const hoursEl = document.getElementById('cd-hours')
    const minsEl = document.getElementById('cd-mins')
    const secsEl = document.getElementById('cd-secs')
    const floatingTimer = document.getElementById('floating-timer')

    if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0')
    if (minsEl) minsEl.textContent = String(m).padStart(2, '0')
    if (secsEl) secsEl.textContent = String(s).padStart(2, '0')
    if (floatingTimer) floatingTimer.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`

    if (diff <= 0) {
      localStorage.removeItem('lp-cd-end')
    }
  }

  update()
  setInterval(update, 1000)
}

// ═══ PURCHASE NOTIFICATIONS ═══
function setupNotifications() {
  const toast = document.getElementById('notif-toast')
  const nameEl = document.getElementById('notif-name')
  const detailEl = document.getElementById('notif-detail')
  const closeBtn = document.getElementById('notif-close')
  if (!toast || !nameEl || !detailEl) return

  let idx = 0
  let paused = false

  closeBtn?.addEventListener('click', () => {
    toast.classList.remove('notif-show')
    paused = true
    setTimeout(() => { paused = false }, 30000)
  })

  function showNotification() {
    if (paused) return
    const notif = purchaseNotifications[idx % purchaseNotifications.length]
    nameEl!.textContent = notif.name
    detailEl!.textContent = `de ${notif.city} compró hace ${notif.mins} min`
    toast!.classList.add('notif-show')

    setTimeout(() => {
      toast!.classList.remove('notif-show')
    }, 4000)

    idx++
  }

  // First notification after 8 seconds
  setTimeout(showNotification, 8000)
  // Then every 12 seconds
  setInterval(showNotification, 12000)
}

// ═══ PACKAGE SELECTOR ═══
function setupPackageSelector() {
  const cards = document.querySelectorAll('.package-card')

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const pkgId = parseInt(card.getAttribute('data-pkg-id') || '3')
      const pkg = packages.find(p => p.id === pkgId)
      if (!pkg) return

      selectedPackage = pkg

      // Update selection visual
      cards.forEach(c => {
        c.classList.remove('package-selected')
        const check = c.querySelector('.package-check')
        if (check) check.textContent = ''
      })
      card.classList.add('package-selected')
      const check = card.querySelector('.package-check')
      if (check) check.textContent = '✓'

      // Update order summary
      const label = document.getElementById('order-summary-label')
      const price = document.getElementById('order-summary-price')
      const floatingPrice = document.querySelector('.floating-cta-price')
      if (label) label.textContent = `${pkg.label}`
      if (price) price.textContent = `S/ ${pkg.price.toFixed(2)}`
      if (floatingPrice) floatingPrice.textContent = `S/ ${pkg.price.toFixed(2)}`

      // TikTok Pixel — AddToCart
      trackTikTok('AddToCart', {
        content_type: 'product',
        content_id: 'leggings-termicos',
        contents: [{ content_id: 'leggings-termicos', content_name: 'Leggings Térmicos Premium', quantity: pkg.qty, price: pkg.price }],
        value: pkg.price,
        currency: 'PEN'
      })
    })
  })
}

// ═══ LAZY VIDEOS ═══
function setupLazyVideos() {
  const lazyVideos = document.querySelectorAll('.lazy-video');
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target as HTMLVideoElement;
          const src = video.getAttribute('data-src');
          if (src) {
            video.src = src;
            video.load();
            video.onloadeddata = () => {
               video.style.opacity = '1';
               video.play().catch(e => console.log('Autoplay prevented:', e));
            };
            observer.unobserve(video);
          }
        }
      });
    }, { rootMargin: '0px 0px 200px 0px' });

    lazyVideos.forEach(video => {
      videoObserver.observe(video);
    });
  } else {
    // Fallback
    lazyVideos.forEach((video) => {
      const v = video as HTMLVideoElement;
      v.src = v.getAttribute('data-src') || '';
      v.style.opacity = '1';
    });
  }
}

// ═══ FAQ ACCORDION ═══
function setupFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question')
    btn?.addEventListener('click', () => {
      const isOpen = item.classList.contains('faq-open')
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('faq-open'))
      // Open clicked if it was closed
      if (!isOpen) item.classList.add('faq-open')
    })
  })
}

// ═══ INIT ═══
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  setupLazyVideos();
});
