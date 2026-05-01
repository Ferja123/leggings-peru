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

// ═══ CONSTANTS ═══
const WHATSAPP_NUMBER = '51919749480'

// ═══ PACKAGES ═══
const packages = [
  { id: 1, qty: 1, label: '1 Unidad (Negro)', price: 79, unitPrice: 79, savingsText: '', tag: '' },
  { id: 2, qty: 2, label: 'Pack de 2 (Negros)', price: 139, unitPrice: 69.5, savingsText: '🔥 40% DE DESCUENTO', tag: '⭐ MÁS VENDIDO' },
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
  { q: '¿Cuánto demora el envío?', a: 'Enviamos a todo el Perú. Lima: 1-2 días hábiles. Provincias: 3-5 días hábiles vía Olva Courier o Shalom. Te enviamos el número de seguimiento por WhatsApp.' },
  { q: '¿Cómo puedo pagar?', a: 'Aceptamos Yape, Plin, transferencia BCP/Interbank, y pago contra entrega en Lima Metropolitana. ¡Elige el método que más te convenga!' },
  { q: '¿Qué talla debo elegir?', a: 'Consulta nuestra guía de tallas más abajo. Si estás entre dos tallas, elige la más grande. El material es elástico y se adapta perfecto al cuerpo.' },
  { q: '¿Puedo cambiar de talla?', a: 'Sí, ofrecemos cambio de talla sin costo adicional dentro de los primeros 7 días después de recibir tu pedido. Solo contáctanos por WhatsApp.' },
  { q: '¿El forro de borreguito es real?', a: 'Sí, el interior es de lana sintética de cordero ultra gruesa. Es hipoalergénico, suave y mucho más cálido que el polar convencional. Puedes verlo en nuestros videos.' },
  { q: '¿Se pueden lavar en lavadora?', a: 'Sí, recomendamos lavado en ciclo delicado con agua fría y secar al aire. No usar secadora para mantener la calidad del forro borreguito.' },
  { q: '¿Están disponibles en más colores?', a: 'Actualmente manejamos negro y gris antracita, los colores más versátiles para combinar con cualquier outfit. Próximamente ampliaremos la gama de colores.' },
  { q: '¿Hay garantía si el producto llega dañado?', a: 'Sí, garantizamos 100% tu satisfacción. Si el producto llega con algún defecto de fábrica, te lo reemplazamos sin costo. Solo envíanos foto del problema por WhatsApp.' },
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
  },
  {
    name: 'Micaela R.', initials: 'MR', location: 'Cajamarca, Perú',
    text: 'Me salvan la vida para salir a trabajar temprano. Son gruesos pero no aprietan el estómago. Totalmente recomendados.',
    photo: '/review-13.avif', date: 'Abril 2026', verified: true, rating: 5
  },
  {
    name: 'Rosa V.', initials: 'RV', location: 'Huaraz, Perú',
    text: 'Acá el frío es fuertísimo y con estos leggings paso normal todo el día. Adentro el peluche es suavecito y la tela de afuera se ve como pantalón fino.',
    photo: '/review-14.avif', date: 'Abril 2026', verified: true, rating: 5
  },
  {
    name: 'Teresa C.', initials: 'TC', location: 'Arequipa, Perú',
    text: '¡Hermosos! Pedí en color negro y gris. Me llegaron a los dos días. La calidad está 100% justificada, no compraría otros.',
    photo: '/review-15.avif', date: 'Mayo 2026', verified: true, rating: 5
  },
  {
    name: 'Liliana M.', initials: 'LM', location: 'Lima, Perú',
    text: 'Me encanta que tengan faja ancha arriba porque me disimula todo. Además super calentitos para ver tele o salir al parque con mis hijos.',
    photo: '/review-16.avif', date: 'Mayo 2026', verified: true, rating: 5
  },
  {
    name: 'Julieta G.', initials: 'JG', location: 'Puno, Perú',
    text: 'Si aguantan el frío de Puno, aguantan todo jaja. En serio son muy calientes y no se bajan cuando caminas rápido. Excelente producto.',
    photo: '/review-17.avif', date: 'Abril 2026', verified: true, rating: 5
  },
  {
    name: 'Bárbara T.', initials: 'BT', location: 'Trujillo, Perú',
    text: 'Me los pongo para salir en la noche y wow, arman espectacular. La tela estira super bien, pedí talla M, llego al toque pago contra entrega.',
    photo: '/review-18.avif', date: 'Abril 2026', verified: true, rating: 5
  },
  {
    name: 'Luciana F.', initials: 'LF', location: 'Moquegua, Perú',
    text: 'Es la tercera vez que les compro. La verdad no hay pierde con estas calzas de borrego, he comprado otras baratas en el centro y se deshacen. Estas te duran toda la temporada de heladas.',
    photo: '/review-19.avif', date: 'Mayo 2026', verified: true, rating: 5
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
          <h1 class="hero-title" style="margin-bottom: 16px;">
            Tu piel merece<br>
            <em>el calor que se siente,<br>y el estilo que se ve</em>
          </h1>
          <p class="hero-subtitle">
            Los únicos leggings con <strong style="color:var(--accent)">forro de borreguito ultra denso</strong> que te mantienen caliente todo el día, moldean tu figura con cintura alta y se ven elegantes con cualquier look.
          </p>

          <div class="hero-value-pills">
            <div class="hero-value-pill"><span>🔥</span> Abrigo extremo</div>
            <div class="hero-value-pill"><span>✨</span> Efecto moldeador</div>
            <div class="hero-value-pill"><span>💎</span> Acabado premium mate</div>
            <div class="hero-value-pill"><span>🛡️</span> No se transparenta</div>
          </div>

          <div class="hero-price-row">
            <span class="hero-price-old">S/ 125.00</span>
            <span class="hero-price-current">S/ 79.00</span>
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

    <!-- PRUEBA SOCIAL — MÉTRICAS -->
    <section class="social-proof-section fade-up-3d" id="resenas">
      <div class="social-proof-inner">
        <div style="text-align:center;">
          <div class="section-label">PRUEBA SOCIAL</div>
          <h2 class="section-title">Miles de peruanas ya lo comprobaron</h2>
          <p class="section-desc" style="max-width:600px;margin:0 auto 0;">Cada número aquí representa una mujer que dejó de pasar frío sin renunciar a su estilo.</p>
        </div>
        <div class="social-proof-metrics">
          <div class="metric-card tilt-3d">
            <span class="metric-icon">🛒</span>
            <div class="metric-number">2,<span>100</span>+</div>
            <div class="metric-label">Unidades vendidas<br>en los últimos 30 días</div>
          </div>
          <div class="metric-card tilt-3d">
            <span class="metric-icon">⭐</span>
            <div class="metric-number">4.<span>8</span></div>
            <div class="metric-label">Calificación promedio<br>de 512 reseñas verificadas</div>
          </div>
          <div class="metric-card tilt-3d">
            <span class="metric-icon">🔄</span>
            <div class="metric-number"><span>73</span>%</div>
            <div class="metric-label">De clientes compran<br>un segundo pack</div>
          </div>
          <div class="metric-card tilt-3d">
            <span class="metric-icon">🗺️</span>
            <div class="metric-number"><span>25</span>+</div>
            <div class="metric-label">Ciudades del Perú<br>con envíos activos</div>
          </div>
        </div>
        <p class="social-proof-gallery-label">📸 Fotos reales enviadas por nuestras clientas</p>
      </div>
    </section>

    <!-- REVIEWS — debajo de prueba social -->
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

    <!-- BENEFICIOS ORIENTADOS AL CLIENTE -->
    <section class="benefits-v2-section fade-up-3d">
      <div class="benefits-v2-inner">
        <div class="section-label">BENEFICIOS REALES</div>
        <h2 class="section-title">Así cambia tu vida con nuestros leggings</h2>
        <p class="section-desc">Cada detalle fue pensado para resolver los problemas reales que tienes cada invierno.</p>
        <div class="benefits-v2-grid">

          <div class="benefit-v2-card tilt-3d">
            <div class="benefit-v2-img-wrap">
              <img src="/benefit-thermal.png" alt="Aislamiento térmico borreguito" class="benefit-v2-img" loading="lazy">
              <div class="benefit-v2-glow" style="--glow-color: rgba(255,120,50,0.25);"></div>
            </div>
            <div class="benefit-v2-before">Antes: Tiritabas de frío en casa</div>
            <div class="benefit-v2-arrow"><span></span></div>
            <div class="benefit-v2-after">Ahora: Calor envolvente todo el día</div>
            <div class="benefit-v2-title">Aislamiento térmico de borreguito</div>
            <p class="benefit-v2-desc">El interior de lana sintética retiene tu calor corporal. Perfectos para el frío de la sierra y las noches heladas de Lima.</p>
          </div>

          <div class="benefit-v2-card tilt-3d">
            <div class="benefit-v2-img-wrap">
              <img src="/benefit-shaping.png" alt="Efecto moldeador cintura alta" class="benefit-v2-img" loading="lazy">
              <div class="benefit-v2-glow" style="--glow-color: rgba(200,149,108,0.25);"></div>
            </div>
            <div class="benefit-v2-before">Antes: Ropa que te hacía ver más grande</div>
            <div class="benefit-v2-arrow"><span></span></div>
            <div class="benefit-v2-after">Ahora: Abrigada y estilizada a la vez</div>
            <div class="benefit-v2-title">Efecto moldeador + push-up</div>
            <p class="benefit-v2-desc">La pretina ancha de 10 cm controla el abdomen y estiliza tus piernas sin añadir volumen. Te verás más delgada, no más abrigada.</p>
          </div>

          <div class="benefit-v2-card tilt-3d">
            <div class="benefit-v2-img-wrap">
              <img src="/benefit-premium.png" alt="Acabado mate premium opaco" class="benefit-v2-img" loading="lazy">
              <div class="benefit-v2-glow" style="--glow-color: rgba(180,150,220,0.2);"></div>
            </div>
            <div class="benefit-v2-before">Antes: Evitabas salir porque no te sentías bien</div>
            <div class="benefit-v2-arrow"><span></span></div>
            <div class="benefit-v2-after">Ahora: Sales con confianza en cualquier look</div>
            <div class="benefit-v2-title">Acabado mate premium opaco</div>
            <p class="benefit-v2-desc">100% opacos, nunca se transparentan. Combínalos con botas, abrigos o sneakers. Elegantes para trabajar, salir o hacer ejercicio.</p>
          </div>

          <div class="benefit-v2-card tilt-3d">
            <div class="benefit-v2-img-wrap">
              <img src="/benefit-stretch.png" alt="Tela 4-way stretch hipoalergénica" class="benefit-v2-img" loading="lazy">
              <div class="benefit-v2-glow" style="--glow-color: rgba(100,200,255,0.2);"></div>
            </div>
            <div class="benefit-v2-before">Antes: Leggings baratos que se caên o pican</div>
            <div class="benefit-v2-arrow"><span></span></div>
            <div class="benefit-v2-after">Ahora: Comodidad total sin ajustes</div>
            <div class="benefit-v2-title">Tela 4-way stretch hipoalergénica</div>
            <p class="benefit-v2-desc">La tela se estira en las 4 direcciones y vuelve a su forma. Sin picazón, sin enrollamiento en la cintura, sin incomodidad al sentarte.</p>
          </div>

          <div class="benefit-v2-card tilt-3d">
            <div class="benefit-v2-img-wrap">
              <img src="/benefit-durability.png" alt="Durabilidad temporada a temporada" class="benefit-v2-img" loading="lazy">
              <div class="benefit-v2-glow" style="--glow-color: rgba(143,214,133,0.2);"></div>
            </div>
            <div class="benefit-v2-before">Antes: Comprabas cada temporada y se rompían</div>
            <div class="benefit-v2-arrow"><span></span></div>
            <div class="benefit-v2-after">Ahora: Una inversión que te dura años</div>
            <div class="benefit-v2-title">Durabilidad comprobada temporada a temporada</div>
            <p class="benefit-v2-desc">Costura reforzada en zonas de tensión. Lavable en máquina en ciclo delicado. Nuestras clientas los usan temporada tras temporada.</p>
          </div>

          <div class="benefit-v2-card tilt-3d">
            <div class="benefit-v2-img-wrap">
              <img src="/benefit-safe.png" alt="Compra 100% protegida" class="benefit-v2-img" loading="lazy">
              <div class="benefit-v2-glow" style="--glow-color: rgba(200,149,108,0.2);"></div>
            </div>
            <div class="benefit-v2-before">Antes: Desconfiabas de las compras online</div>
            <div class="benefit-v2-arrow"><span></span></div>
            <div class="benefit-v2-after">Ahora: Compra segura con garantía real</div>
            <div class="benefit-v2-title">Compra 100% protegida</div>
            <p class="benefit-v2-desc">Pago contra entrega en Lima y seguimiento de tu pedido por WhatsApp desde que sale del almacén hasta que llega a tu puerta.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- DIFERENCIADORES -->
    <section class="differentiators-section fade-up-3d">
      <div class="differentiators-inner">
        <div class="section-label">POR QUÉ ELEGIRNOS</div>
        <h2 class="section-title">La diferencia que se siente<br><em style="color:var(--accent);font-style:normal;">desde el primer uso</em></h2>
        <p class="section-desc">No somos otro legging del mercado. Aquí está lo que nos hace diferentes:</p>

        <!-- STATS ROW -->
        <div class="diff-stats-row">
          <div class="diff-stat">
            <div class="diff-stat-num">2<span>x</span></div>
            <div class="diff-stat-label">más grueso que la competencia</div>
          </div>
          <div class="diff-stat-divider"></div>
          <div class="diff-stat">
            <div class="diff-stat-num">10<span>cm</span></div>
            <div class="diff-stat-label">de pretina con control abdominal</div>
          </div>
          <div class="diff-stat-divider"></div>
          <div class="diff-stat">
            <div class="diff-stat-num">100<span>%</span></div>
            <div class="diff-stat-label">opaco — jamas se transparenta</div>
          </div>
          <div class="diff-stat-divider"></div>
          <div class="diff-stat">
            <div class="diff-stat-num">4<span>dirs</span></div>
            <div class="diff-stat-label">de elasticidad sin deformarse</div>
          </div>
        </div>

        <!-- FEATURE CARDS -->
        <div class="diff-features-grid">
          <div class="diff-feature-card tilt-3d">
            <div class="diff-feature-icon-v2">
              <span>🐑</span>
              <div class="diff-icon-ring"></div>
            </div>
            <div class="diff-feature-text">
              <h4>Borreguito de alta densidad</h4>
              <p>Interior con el doble de grosor del estándar. No se aplana, no pierde calor, no pica. El forro que realmente abriga.</p>
              <span class="diff-feature-badge">✓ Exclusivo LeggingsPerú</span>
            </div>
          </div>
          <div class="diff-feature-card tilt-3d">
            <div class="diff-feature-icon-v2">
              <span>📐</span>
              <div class="diff-icon-ring"></div>
            </div>
            <div class="diff-feature-text">
              <h4>Pretina ancha 10 cm</h4>
              <p>Actúa como faja suave. Sostiene el abdomen, estiliza la cintura y no se enrolla al sentarte o agacharte.</p>
              <span class="diff-feature-badge">✓ Efecto faja sin apretar</span>
            </div>
          </div>
          <div class="diff-feature-card tilt-3d">
            <div class="diff-feature-icon-v2">
              <span>✨</span>
              <div class="diff-icon-ring"></div>
            </div>
            <div class="diff-feature-text">
              <h4>Acabado mate 100% opaco</h4>
              <p>La tela exterior tiene textura mate satinada que nunca se transparenta y se ve premium con cualquier outfit.</p>
              <span class="diff-feature-badge">✓ Sin transparencias</span>
            </div>
          </div>
          <div class="diff-feature-card tilt-3d">
            <div class="diff-feature-icon-v2">
              <span>📦</span>
              <div class="diff-icon-ring"></div>
            </div>
            <div class="diff-feature-text">
              <h4>Envío con seguimiento WhatsApp</h4>
              <p>Te enviamos tu número de guía Olva Courier por WhatsApp. Rastreo en tiempo real desde que sale hasta que llega.</p>
              <span class="diff-feature-badge">✓ Seguimiento en tiempo real</span>
            </div>
          </div>
        </div>

        <!-- TABLA COMPARATIVA -->
        <div class="comparison-table-wrapper">
          <div class="comparison-table-title">🏆 LeggingsPerú vs. Mercado genérico</div>
          <table class="comp-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th class="col-us">✨ LeggingsPerú</th>
                <th class="col-them">Leggings genéricos</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Forro de borreguito grueso</td><td class="cell-yes col-us">✓</td><td class="cell-no">✗</td></tr>
              <tr><td>Pretina ancha 10 cm con control abdominal</td><td class="cell-yes col-us">✓</td><td class="cell-no">✗</td></tr>
              <tr><td>100% opaco (no se transparenta)</td><td class="cell-yes col-us">✓</td><td class="cell-no">✗</td></tr>
              <tr><td>Efecto push-up y moldeador</td><td class="cell-yes col-us">✓</td><td class="cell-no">✗</td></tr>
              <tr><td>Pago contra entrega Lima</td><td class="cell-yes col-us">✓</td><td class="cell-no">✗</td></tr>
              <tr><td>Envío con seguimiento WhatsApp</td><td class="cell-yes col-us">✓</td><td class="cell-no">✗</td></tr>
            </tbody>
          </table>
        </div>
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



    <!-- SIZE GUIDE -->
    <section class="size-section">
      <div class="size-content fade-up-3d">
        <div class="section-label">GUÍA DE TALLAS</div>
        <h2 class="section-title" style="margin-bottom: 32px;">Encuentra tu talla perfecta</h2>
        <div class="size-table-wrapper">
          <table class="size-table">
            <thead>
              <tr><th>Talla</th><th>Cintura</th><th>Cadera</th><th>Largo</th><th>Pantalón PE</th><th>Stock</th></tr>
            </thead>
            <tbody>
              <tr style="opacity:0.4;"><td><strong>S</strong></td><td>58 – 86 cm</td><td>70 – 100 cm</td><td>88 cm</td><td>26 – 28</td><td style="color:#ef4444;font-weight:700;">AGOTADO</td></tr>
              <tr><td><strong>M</strong></td><td>62 – 90 cm</td><td>74 – 104 cm</td><td>90 cm</td><td>28 – 30</td><td style="color:var(--green);font-weight:600;">✓ Disponible</td></tr>
              <tr><td><strong>L</strong></td><td>66 – 94 cm</td><td>78 – 108 cm</td><td>91 cm</td><td>30 – 32</td><td style="color:var(--green);font-weight:600;">✓ Disponible</td></tr>
              <tr style="opacity:0.4;"><td><strong>XL</strong></td><td>70 – 98 cm</td><td>82 – 112 cm</td><td>92 cm</td><td>32 – 34</td><td style="color:#ef4444;font-weight:700;">AGOTADO</td></tr>
              <tr><td><strong>XXL</strong></td><td>74 – 102 cm</td><td>86 – 116 cm</td><td>93 cm</td><td>34+</td><td style="color:var(--green);font-weight:600;">✓ Disponible</td></tr>
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
      <div class="faq-cta-banner">
        <div class="faq-cta-text">
          <h4>¿Tu pregunta no está aquí?</h4>
          <p>Escríbenos por WhatsApp y te respondemos en minutos.</p>
        </div>
        <a href="https://wa.me/51919749480?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20los%20leggings%20t%C3%A9rmicos" target="_blank" class="faq-cta-btn">
          💬 Escribir por WhatsApp
        </a>
      </div>
    </section>

    <!-- ORDER FORM -->
    <section class="order-section" id="ordenar">
      <div class="order-section-header">
        <div class="order-section-label">ÚLTIMO PASO</div>
        <h2 class="order-section-title">¡Reserva los tuyos ahora!</h2>
        <p class="order-section-desc">Elige tu pack, completa tus datos y te llegará directo a tu puerta 🚪</p>
      </div>

      <div class="order-wrapper fade-up-3d" style="max-width: 700px;">
        <div class="order-card">

          <!-- PAQUETES -->
          <div class="order-card-step-label"><span>1</span> Elige tu paquete</div>
          <div class="packages-grid" style="margin-top: 12px; margin-bottom: 28px;">
            ${packages.map(pkg => `
              <div class="package-card tilt-3d ${pkg.id === selectedPackage.id ? 'package-selected' : ''} ${pkg.tag === '⭐ MÁS VENDIDO' ? 'package-best' : ''}" data-pkg-id="${pkg.id}">
                ${pkg.tag ? `<div class="package-tag">${pkg.tag}</div>` : ''}
                <div class="package-qty">${pkg.label}</div>
                <div class="package-price-row">
                  <div class="package-price">S/ ${pkg.price.toFixed(2)}</div>
                  <div class="package-price-old">S/ ${(pkg.price * 1.4).toFixed(0)}</div>
                </div>
                ${pkg.qty > 1 ? `<div class="package-unit-price">S/ ${pkg.unitPrice.toFixed(2)} c/u</div>` : ''}
                ${pkg.savingsText ? `<div class="package-savings">${pkg.savingsText}</div>` : '<div class="package-savings" style="opacity:0">—</div>'}
                <div class="package-perks">
                  <span>✓ Envío gratis</span>
                  <span>✓ Pago contra entrega</span>
                </div>
                <div class="package-check">${pkg.id === selectedPackage.id ? '✓' : ''}</div>
              </div>
            `).join('')}
          </div>

          <!-- RESUMEN DINÁMICO DEL PRECIO -->
          <div class="order-price-summary" id="order-summary">
            <div class="order-price-summary-icon">🛒</div>
            <div class="order-price-summary-details">
              <div class="order-price-summary-label" id="order-summary-label">${selectedPackage.label}</div>
              <div class="order-price-summary-sub">✓ Envío gratis incluido</div>
            </div>
            <div class="order-price-summary-total">
              <div class="order-price-summary-amount" id="order-summary-price">S/ ${selectedPackage.price.toFixed(2)}</div>
              <div class="order-price-summary-savings" id="order-summary-savings">${selectedPackage.qty > 1 ? 'Ahorras S/ ' + ((selectedPackage.qty * 79) - selectedPackage.price).toFixed(0) : 'Precio unitario'}</div>
            </div>
          </div>

          <!-- PASO 2: DATOS -->
          <div class="order-card-step-label" style="margin-top: 28px;"><span>2</span> Tus datos de entrega</div>
          <form id="purchase-form" style="margin-top: 16px;">
            <div class="form-group">
              <label class="form-label">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Nombre completo
              </label>
              <input type="text" class="form-input" id="f-name" placeholder="Ej. María García López" required>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.67a16 16 0 0 0 6 6l.91-1.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 15z"/></svg>
                  Teléfono WhatsApp
                </label>
                <input type="tel" class="form-input" id="f-phone" placeholder="987 654 321" required>
              </div>
              <div class="form-group">
                <label class="form-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M3 3h6l2 9H5a1 1 0 0 0 0 2h13"/><circle cx="9" cy="19" r="1"/><circle cx="20" cy="19" r="1"/></svg>
                  Talla
                </label>
                <select class="form-input" id="f-size" required>
                  <option value="">Seleccionar talla</option>
                  <option value="S" disabled>S (26–28) — AGOTADO</option>
                  <option value="M">M (28–30) ✓</option>
                  <option value="L">L (30–32) ✓</option>
                  <option value="XL" disabled>XL (32–34) — AGOTADO</option>
                  <option value="XXL">XXL (34+) ✓</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Ciudad / Distrito
                </label>
                <input type="text" class="form-input" id="f-city" placeholder="Ej. Miraflores, Lima" required>
              </div>
              <div class="form-group">
                <label class="form-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  Dirección y Referencia
                </label>
                <input type="text" class="form-input" id="f-ref" placeholder="Ej. Av. Larco 123, frente al parque" required>
              </div>
            </div>

            <!-- CTA BUTTON -->
            <button type="submit" class="btn-order btn-3d">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.627.616l4.584-1.397A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.137 0-4.146-.663-5.821-1.828l-.407-.275-3.02.92.858-2.951-.3-.423A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
              </svg>
              QUIERO EL MÍO — CONFIRMAR POR WHATSAPP
            </button>

            <!-- MICRO-TRUST -->
            <div class="order-microtrust">
              <div class="order-microtrust-item">🔒 Datos protegidos</div>
              <div class="order-microtrust-item">🛵 Paga al recibir</div>
              <div class="order-microtrust-item">🚚 Envío gratis</div>
              <div class="order-microtrust-item">⭐ 512 reseñas</div>
            </div>
          </form>

          <div class="order-security">🔒 Tus datos están protegidos — Paga al recibir en casa</div>
        </div>
      </div>
    </section>

    <!-- PASARELAS DE PAGO -->
    <section class="payment-section fade-up-3d">
      <div class="payment-inner">
        <div class="section-label">MÉTODOS DE PAGO</div>
        <h2 class="section-title">Elige cómo pagar</h2>
        <p class="section-desc" style="margin:0 auto;">Todos los métodos son seguros y no necesitas tarjeta de crédito para comprar.</p>
        <div class="payment-grid">
          <div class="payment-method-card">
            <svg viewBox="0 0 80 50" xmlns="http://www.w3.org/2000/svg">
              <rect width="80" height="50" rx="8" fill="#7B2D8B"/>
              <circle cx="40" cy="22" r="14" fill="#fff" opacity="0.15"/>
              <text x="40" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="#fff" font-family="Arial">YAPE</text>
              <text x="40" y="33" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.8)" font-family="Arial">BCP</text>
            </svg>
            <div class="payment-method-name">Yape</div>
            <div class="payment-method-desc">BCP — Transferencia al instante</div>
          </div>
          <div class="payment-method-card">
            <svg viewBox="0 0 80 50" xmlns="http://www.w3.org/2000/svg">
              <rect width="80" height="50" rx="8" fill="#00ADEF"/>
              <text x="40" y="22" text-anchor="middle" font-size="11" font-weight="800" fill="#fff" font-family="Arial">PLIN</text>
              <text x="40" y="33" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.8)" font-family="Arial">BBVA · Interbank · Scotia</text>
            </svg>
            <div class="payment-method-name">Plin</div>
            <div class="payment-method-desc">BBVA · Interbank · Scotia</div>
          </div>
          <div class="payment-method-card">
            <svg viewBox="0 0 80 50" xmlns="http://www.w3.org/2000/svg">
              <rect width="80" height="50" rx="8" fill="#003F87"/>
              <text x="40" y="21" text-anchor="middle" font-size="10" font-weight="800" fill="#fff" font-family="Arial">BCP</text>
              <text x="40" y="33" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.8)" font-family="Arial">Transferencia bancaria</text>
            </svg>
            <div class="payment-method-name">BCP</div>
            <div class="payment-method-desc">Transferencia bancaria</div>
          </div>
          <div class="payment-method-card">
            <svg viewBox="0 0 80 50" xmlns="http://www.w3.org/2000/svg">
              <rect width="80" height="50" rx="8" fill="#009B3A"/>
              <text x="40" y="21" text-anchor="middle" font-size="8" font-weight="800" fill="#fff" font-family="Arial">INTERBANK</text>
              <text x="40" y="33" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.8)" font-family="Arial">Transferencia bancaria</text>
            </svg>
            <div class="payment-method-name">Interbank</div>
            <div class="payment-method-desc">Transferencia bancaria</div>
          </div>
          <div class="payment-method-card">
            <svg viewBox="0 0 80 50" xmlns="http://www.w3.org/2000/svg">
              <rect width="80" height="50" rx="8" fill="#fff"/>
              <text x="40" y="23" text-anchor="middle" font-size="14" font-weight="900" fill="#1A1F71" font-family="Arial">VISA</text>
              <text x="40" y="36" text-anchor="middle" font-size="6" fill="#666" font-family="Arial">Tarjeta de crédito/débito</text>
            </svg>
            <div class="payment-method-name">Visa</div>
            <div class="payment-method-desc">Crédito o débito</div>
          </div>
          <div class="payment-method-card">
            <svg viewBox="0 0 80 50" xmlns="http://www.w3.org/2000/svg">
              <rect width="80" height="50" rx="8" fill="#252525"/>
              <text x="40" y="22" text-anchor="middle" font-size="8" font-weight="800" fill="#ff6b35" font-family="Arial">CONTRA</text>
              <text x="40" y="33" text-anchor="middle" font-size="8" font-weight="800" fill="#ff6b35" font-family="Arial">ENTREGA</text>
            </svg>
            <div class="payment-method-name">Contra Entrega</div>
            <div class="payment-method-desc">Solo Lima Metropolitana</div>
          </div>
        </div>
        <div class="payment-security-row">
          <div class="payment-security-badge"><span>🔒</span><span>Pago 100% seguro</span></div>
          <div class="payment-security-badge"><span>🛡️</span><span>Datos encriptados</span></div>
          <div class="payment-security-badge"><span>✅</span><span>Sin comisiones extra</span></div>
          <div class="payment-security-badge"><span>📱</span><span>Confirmación por WhatsApp</span></div>
        </div>
      </div>
    </section>

    <!-- POLÍTICAS DE GARANTÍA -->
    <section class="policies-section fade-up-3d">
      <div class="policies-inner">
        <div style="text-align:center;">
          <div class="section-label">POLÍTICAS Y GARANTÍA</div>
          <h2 class="section-title">Compra con total tranquilidad</h2>
          <p class="section-desc" style="max-width:600px;margin:0 auto;">Respaldamos cada pedido con políticas claras y honestas. Sin letra pequeña.</p>
        </div>
        <div class="policies-grid">
          <div class="policy-card tilt-3d">
            <span class="policy-icon">🛵</span>
            <div class="policy-title">Pago Contra Entrega</div>
            <p class="policy-desc">En Lima Metropolitana pagas cuando el motorizado te entrega. Primero recibes, luego pagas. Sin riesgo.</p>
            <span class="policy-highlight">Solo Lima Metro</span>
          </div>
          <div class="policy-card tilt-3d">
            <span class="policy-icon">🚚</span>
            <div class="policy-title">Envío Gratis a Todo el Perú</div>
            <p class="policy-desc">Lima: 1-2 días. Provincias: 3-5 días vía Olva Courier o Shalom. Recibes tu número de guía por WhatsApp.</p>
            <span class="policy-highlight">Seguimiento incluido</span>
          </div>
          <div class="policy-card tilt-3d">
            <span class="policy-icon">🛡️</span>
            <div class="policy-title">Garantía de Satisfacción</div>
            <p class="policy-desc">Si el producto llega con defecto de fábrica, te lo reemplazamos sin costo. Tu satisfacción es nuestra prioridad.</p>
            <span class="policy-highlight">Garantía total</span>
          </div>
          <div class="policy-card tilt-3d">
            <span class="policy-icon">💬</span>
            <div class="policy-title">Atención Personalizada</div>
            <p class="policy-desc">Respuesta por WhatsApp en minutos. Te acompañamos desde el pedido hasta que recibes tu paquete.</p>
            <span class="policy-highlight">Respuesta inmediata</span>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">Leggings<span>Perú</span></div>

        <!-- SHARE BUTTON -->
        <div class="footer-share-wrap">
          <p class="footer-share-text">¿Conoces a alguien que lo necesita? 👇</p>
          <button id="share-btn" class="share-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
            <span id="share-btn-text">Compartir con una amiga</span>
          </button>
        </div>

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
          <span class="floating-cta-stock" id="floating-stock">
            <span class="floating-stock-pulse"></span>
            🔥 Solo quedan <strong>${stock}</strong> unidades
          </span>
          <span class="floating-cta-timer" id="active-buyers-text">👁️ 14 personas comprando</span>
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
  setupFloatingCtaVisibility()
  setupActiveBuyers()

  // TikTok Pixel — ViewContent
  trackTikTok('ViewContent', {
    content_type: 'product',
    content_id: 'leggings-termicos',
    contents: [{ content_id: 'leggings-termicos', content_name: 'Leggings Térmicos Premium', quantity: 1, price: 79.00 }],
    value: 79.00,
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
    if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0')
    if (minsEl) minsEl.textContent = String(m).padStart(2, '0')
    if (secsEl) secsEl.textContent = String(s).padStart(2, '0')

    if (diff <= 0) {
      localStorage.removeItem('lp-cd-end')
    }
  }

  update()
  setInterval(update, 1000)
}

// ═══ ACTIVE BUYERS + FLOATING STOCK ═══
function setupActiveBuyers() {
  const buyersEl = document.getElementById('active-buyers-text')
  const floatingStockEl = document.getElementById('floating-stock')
  if (!buyersEl) return
  
  let currentBuyers = 12 + Math.floor(Math.random() * 8)
  let floatingStock = getStockCount()
  
  // Buyers counter
  setInterval(() => {
    const change = Math.floor(Math.random() * 5) - 2
    currentBuyers += change
    if (currentBuyers < 10) currentBuyers = 10
    if (currentBuyers > 28) currentBuyers = 28
    buyersEl.innerHTML = `👁️ ${currentBuyers} personas comprando`
  }, 4500)

  // Floating stock countdown — decreases slowly
  if (floatingStockEl) {
    setInterval(() => {
      if (Math.random() > 0.6 && floatingStock > 3) {
        floatingStock--
        floatingStockEl.innerHTML = `<span class="floating-stock-pulse"></span> 🔥 Solo quedan <strong>${floatingStock}</strong> unidades`
      }
    }, 8000)
  }
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
      const savings = document.getElementById('order-summary-savings')
      if (label) label.textContent = `${pkg.label}`
      if (price) price.textContent = `S/ ${pkg.price.toFixed(2)}`
      if (savings) savings.textContent = pkg.qty > 1 ? `Ahorras S/ ${((pkg.qty * 79) - pkg.price).toFixed(0)}` : 'Precio unitario'

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

// ═══ SHARE BUTTON ═══
function setupShareButton() {
  const btn = document.getElementById('share-btn') as HTMLButtonElement | null;
  const btnText = document.getElementById('share-btn-text');
  if (!btn) return;

  const shareData = {
    title: 'Leggings Térmicos Premium — LeggingsPerú',
    text: '¡Encontré estos leggings con forro de borreguito que no se transparentan y están a S/ 79! 🔥 Mira esto...',
    url: window.location.href,
  };

  btn.addEventListener('click', async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (e) {
        // User cancelled — no action needed
      }
    } else {
      // Fallback: copiar URL
      try {
        await navigator.clipboard.writeText(window.location.href);
        if (btnText) btnText.textContent = '¡Enlace copiado! ✓';
        btn.classList.add('share-btn--copied');
        setTimeout(() => {
          if (btnText) btnText.textContent = 'Compartir con una amiga';
          btn.classList.remove('share-btn--copied');
        }, 2500);
      } catch {
        prompt('Copia este enlace:', window.location.href);
      }
    }
  });
}

// ═══ FLOATING CTA VISIBILITY ═══
function setupFloatingCtaVisibility() {
  const floatingCta = document.getElementById('floating-cta')
  const orderSection = document.getElementById('ordenar')
  if (!floatingCta || !orderSection) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        floatingCta.classList.add('floating-cta-hidden')
      } else {
        floatingCta.classList.remove('floating-cta-hidden')
      }
    })
  }, { threshold: 0.15 })

  observer.observe(orderSection)
}

// ═══ INIT ═══
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  setupLazyVideos();
  setupShareButton();
});
