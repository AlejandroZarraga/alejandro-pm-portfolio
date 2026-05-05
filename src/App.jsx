import React, { useMemo, useState } from 'react';

const data = {
  en: {
    nav: ['Product', 'Case Studies', 'AI Workflow', 'Artifacts', 'Experience', 'Contact'],
    hero: {
      eyebrow: 'PRODUCT STRATEGY · TECHNICAL ALIGNMENT · AI WORKFLOWS',
      name: 'Alejandro Zarraga Flores',
      headline: 'AI-enabled Product Manager turning complex product ambiguity into structured, delivery-ready execution.',
      subtitle:
        'I help product, design and engineering teams transform complex business needs into clear PRDs, scalable user stories, technical alignment and measurable product delivery across Real Estate Tech, HealthTech, FinTech, Compliance and enterprise software platforms.',
      role:
        'Senior Product Manager at Plan A Technologies, supporting Compass Real Estate as an expert product consultant across mobile and web agent-facing experiences.',
      primary: 'View Case Studies',
      secondary: 'Explore My Product System',
      cv: 'Download CV',
      tags: ['Product Strategy', 'Technical Product', 'Agile Delivery', 'AI Workflows', 'Mobile & Web'],
    },
    product: {
      title: 'Product Operating System',
      subtitle: 'A structured way to move from unclear business needs to aligned teams, validated requirements and delivery-ready execution.',
      cards: [
        ['◎', 'Product Strategy', 'Define the problem, clarify business goals and connect product decisions to measurable outcomes.'],
        ['▣', 'PRDs & Requirements', 'Transform business context into clear PRDs, user stories, acceptance criteria, dependencies and scope boundaries.'],
        ['⌘', 'Technical Alignment', 'Bridge product, UX and engineering through API awareness, feature flags, analytics, mobile parity and implementation constraints.'],
        ['↳', 'Agile Delivery', 'Keep teams aligned through backlog refinement, sprint planning, prioritization, risk management and clear delivery expectations.'],
        ['✦', 'AI-enabled Workflows', 'Use ChatGPT, Claude, Claude CoWork, Obsidian and Figma AI to accelerate discovery, documentation, build analysis and decision-making.'],
        ['◇', 'Stakeholder Clarity', 'Turn feedback from product, design, engineering, QA, legal and leadership into structured decisions and actionable next steps.'],
      ],
    },
    cases: {
      title: 'Featured Case Studies',
      subtitle: 'Selected product work across mobile parity, HealthTech compliance, FinTech payments, enterprise integrations and AI-assisted product delivery.',
      cta: 'View details',
      modalNote: 'Selected work samples can be sanitized or recreated for portfolio review.',
      items: [
        {
          title: 'Compass Real Estate – Android Homepage Parity',
          industry: 'Real Estate Tech',
          role: 'Senior Product Manager / Product Consultant',
          context: 'Plan A Technologies consultant for Compass Real Estate',
          summary: 'Defined Android Homepage parity requirements using iOS as the source of truth, including navigation, tile behavior, feature flags, badges, routing and analytics.',
          chips: ['Mobile Parity', 'PRD', 'Jira Stories', 'Analytics'],
          problem: 'Android needed to align with the iOS Homepage experience while preserving native Android patterns and avoiding unnecessary scope expansion.',
          contributions: [
            'Defined Homepage parity requirements using iOS as source of truth.',
            'Clarified Home as default/root destination instead of dedicated deep link.',
            'Documented bottom navigation, tile behavior, badges, feature flags and analytics.',
            'Separated P0 scope from enhancements to reduce delivery risk.',
          ],
          impact: 'Improved implementation clarity by converting ambiguous parity expectations into structured requirements, dev-ready stories and explicit scope boundaries.',
        },
        {
          title: 'Compass Real Estate – Collections Hub for Android',
          industry: 'Real Estate Tech',
          role: 'Senior Product Manager / Product Consultant',
          context: 'Plan A Technologies consultant for Compass Real Estate',
          summary: 'Structured the Android Collections Hub scope, including Shared and Unshared tabs, creation flows, empty states, error states, Map View and cross-surface entry points.',
          chips: ['Collections', 'Android', 'UX Flows', 'Scope'],
          problem: 'Android needed a clear Collections Hub experience aligned with iOS, including creation flows, empty states and cross-surface entry points.',
          contributions: [
            'Defined Shared and Unshared tabs and card content requirements.',
            'Added creation entry points from Homepage, Hub, empty state and Add to Collection flows.',
            'Included success toasters, error states and required-field flows.',
            'Elevated Map View to P0 after stakeholder and engineering alignment.',
          ],
          impact: 'Reduced product ambiguity by structuring the Collections experience into clear P0 requirements, dependencies and engineering review items.',
        },
        {
          title: 'Personify Health – PHI Access Management',
          industry: 'HealthTech / Compliance',
          role: 'Technical Project Manager / Product Owner',
          context: 'Health and benefits platform',
          summary: 'Structured a sensitive PHI access management initiative involving role-based permissions, dependents, legal alignment, backend validation and audit traceability.',
          chips: ['PHI', 'Compliance', 'Roles', 'Auditability'],
          problem: 'Broker Admins and support agents needed controlled ways to revoke or restore PHI access while meeting legal, compliance and audit requirements.',
          contributions: [
            'Defined scope across minors, dependents and adult members.',
            'Split work across frontend, backend, validation, role logic and audit logging.',
            'Documented alignment needs with MSR Desk logic and Informatics.',
            'Included timestamp traceability and compliance-aware acceptance criteria.',
          ],
          impact: 'Structured a sensitive compliance initiative into clear product and technical discovery workstreams before implementation.',
        },
        {
          title: 'Personify Health – Personal Challenge Email Migration to Braze',
          industry: 'HealthTech / Lifecycle Communications',
          role: 'Product Owner',
          context: 'Digital communications and challenge lifecycle',
          summary: 'Created structured DCO tickets for personal challenge email migration, covering triggers, audiences, templates, localization, rollout constraints and stakeholder alignment.',
          chips: ['Braze', 'DCO', 'Lifecycle', 'Localization'],
          problem: 'Personal Challenge emails needed consistent migration requests with triggers, templates, audiences, localization and rollout constraints.',
          contributions: [
            'Defined a reusable DCO ticket format.',
            'Created structured tickets for multiple challenge email types.',
            'Captured trigger, audience, template, goal, localization and stakeholder details.',
            'Documented rollout constraints for safer activation.',
          ],
          impact: 'Improved consistency and operational clarity across email migration workstreams.',
        },
        {
          title: 'EasyPay Finance – Mobile Payment Experience',
          industry: 'FinTech',
          role: 'Solutions Product Manager',
          context: 'First mobile app across iOS, Android and web experiences',
          summary: 'Supported mobile payment experiences including recurring payments, PayPal and banking integrations, OCR card scanning, BIN detection, alerts and payment schedule visibility.',
          chips: ['FinTech', 'Mobile App', 'Payments', 'APIs'],
          problem: 'Users needed a mobile-first way to manage payments, recurring charges, alerts and loan-related payment options.',
          contributions: [
            'Supported delivery of EasyPay’s first React Native mobile app.',
            'Worked on recurring payments, alerts and account blocking flows.',
            'Supported OCR card scanning and BIN detection capabilities.',
            'Led API integrations with financial institutions and payment platforms.',
          ],
          impact: 'Helped launch core mobile payment capabilities and improve visibility into balances, due dates and payment options.',
        },
        {
          title: 'Drata – Compliance Software Integrations',
          industry: 'Compliance Tech',
          role: 'Sr. Agile Product Owner',
          context: 'Compliance software integrations',
          summary: 'Led Agile product ownership for compliance software integrations, collaborating across engineering, architecture, customer support and product teams.',
          chips: ['Compliance', 'Integrations', 'Scrum', 'APIs'],
          problem: 'Integration work required healthy backlog management, cross-functional clarification and consistent delivery readiness.',
          contributions: [
            'Led Scrum ceremonies and backlog refinement.',
            'Managed Jira backlog health, prioritization and acceptance criteria.',
            'Supported integrations with platforms such as Confluence, Intune, AWS and Azure.',
            'Partnered with engineering and architecture to resolve dependencies.',
          ],
          impact: 'Improved team focus and delivery readiness across compliance integration work.',
        },
      ],
    },
    ai: {
      title: 'AI-enabled PM Workflow',
      subtitle: 'I use AI as a product acceleration layer, not as a replacement for product judgment.',
      copy: 'My workflow combines Obsidian as a second brain, ChatGPT and Claude for structured analysis, Claude CoWork for deeper project and build context, and product judgment to validate what should actually move into execution.',
      steps: ['Capture Context', 'Store Knowledge', 'Analyze with AI', 'Validate Source of Truth', 'Generate Product Artifacts', 'Align Stakeholders', 'Prepare for Delivery'],
      inputs: 'Slack · Jira · Figma · Builds · PRDs · Tech Docs',
      layer: 'ChatGPT · Claude · CoWork · Obsidian',
      outputs: 'PRDs · Epics · Stories · ACs · Decision Logs',
    },
    artifacts: {
      title: 'Product Artifacts',
      subtitle: 'Examples of the product work I create to move teams from discovery to delivery.',
      items: [
        ['PRDs', 'Product context, goals, scope, user flows, requirements, risks and success criteria.'],
        ['User Stories', 'Clear user value, functional requirements, dependencies and acceptance criteria.'],
        ['Epic Structures', 'Business problem, strategic context, outcomes, scope and delivery framing.'],
        ['Decision Logs', 'Key decisions, tradeoffs, stakeholder input and rationale.'],
        ['Analytics Mapping', 'Events, properties, user actions and measurement considerations.'],
        ['AI Prompt Library', 'Reusable prompts for PRDs, backlog creation, build analysis and stakeholder communication.'],
      ],
    },
    experience: {
      title: 'Experience Timeline',
      subtitle: '11+ years across software product delivery, Agile execution and cross-functional product leadership.',
      items: [
        ['2026 – Present', 'Plan A Technologies / Compass Real Estate', 'Senior Product Manager', 'Real Estate Tech, mobile parity, Android/iOS alignment, AI-assisted product workflows.'],
        ['2024 – 2026', 'Personify Health', 'Technical Project Manager - AI-Driven Product Execution & Agile Delivery', 'HealthTech, benefits, claims, PHI, compliance, Agile delivery and AI-enabled product acceleration.'],
        ['2022 – 2024', 'Drata', 'Sr. Agile Product Owner', 'Compliance software, integrations, APIs, cloud platforms and Agile product delivery.'],
        ['2021 – 2022', 'EasyPay Finance', 'Solutions Product Manager', 'FinTech, mobile payments, React Native app delivery, payment flows and integrations.'],
        ['2020 – 2021', 'Omnitracs', 'Sr. Product Owner', 'Product requirements, technical/business analysis, competitive research and Agile delivery.'],
        ['2018 – 2020', 'Cisco', 'Product Manager - Collaboration Architecture', 'Cisco Webex, growth initiatives, vendor management, architecture programs and sales enablement.'],
        ['2016 – 2018', 'Telmex', 'Product Manager - Desarrollo Empresarial', 'Market research, competitive intelligence, product benchmarking and internal consultancy.'],
        ['2014 – 2016', 'Traffilog LTD', 'IT Technical Manager', 'Technical operations, device monitoring, firmware updates, support teams and client enablement.'],
      ],
    },
    about: {
      title: 'About',
      copy: [
        'I’m a bilingual AI-enabled Product Manager and Agile Product Owner based in Querétaro, Mexico, with 11+ years of experience delivering software products across international, remote-first teams.',
        'My work sits at the intersection of product strategy, technical execution, Agile delivery and AI-assisted workflows. I help teams clarify ambiguous problems, align around the right scope and translate complex requirements into product artifacts that engineering teams can execute with confidence.',
        'I have worked across Real Estate Tech, HealthTech, FinTech, Compliance, InsurTech, telecom and enterprise software, partnering with Product, Engineering, UX, QA, Legal, Data, Customer Success and leadership teams.',
      ],
      stats: ['11+ years', 'Remote-first teams', 'Mobile + Web', 'Bilingual EN/ES', 'AI-assisted workflows', 'Product + Agile'],
    },
    contact: {
      title: 'Let’s build clear product execution.',
      copy: 'Open to remote-first Product Manager, Technical Product Manager, Product Owner and Agile Product Lead opportunities.',
      email: 'Email Me',
      linkedin: 'Connect on LinkedIn',
      cv: 'Download CV',
      location: 'Querétaro, Mexico',
    },
  },
};

data.es = JSON.parse(JSON.stringify(data.en));
Object.assign(data.es, {
  nav: ['Producto', 'Casos', 'Flujo IA', 'Artefactos', 'Experiencia', 'Contacto'],
  hero: {
    eyebrow: 'ESTRATEGIA DE PRODUCTO · ALINEACIÓN TÉCNICA · FLUJOS DE IA',
    name: 'Alejandro Zarraga Flores',
    headline: 'Product Manager potenciado por IA que convierte la ambigüedad de producto en ejecución clara, estructurada y lista para desarrollo.',
    subtitle: 'Ayudo a equipos de producto, diseño e ingeniería a transformar necesidades complejas de negocio en PRDs claros, user stories escalables, alineación técnica y delivery medible en plataformas de Real Estate Tech, HealthTech, FinTech, Compliance y software empresarial.',
    role: 'Senior Product Manager en Plan A Technologies, colaborando con Compass Real Estate como consultor experto de producto en experiencias mobile y web para agentes.',
    primary: 'Ver casos de estudio',
    secondary: 'Explorar mi sistema de producto',
    cv: 'Descargar CV',
    tags: ['Estrategia de Producto', 'Producto Técnico', 'Delivery Agile', 'Flujos de IA', 'Web y Mobile'],
  },
  product: {
    title: 'Sistema Operativo de Producto',
    subtitle: 'Una forma estructurada de pasar de necesidades ambiguas de negocio a equipos alineados, requisitos validados y ejecución lista para desarrollo.',
    cards: [
      ['◎', 'Estrategia de Producto', 'Definir el problema, clarificar objetivos de negocio y conectar decisiones de producto con resultados medibles.'],
      ['▣', 'PRDs y Requisitos', 'Transformar contexto de negocio en PRDs claros, user stories, criterios de aceptación, dependencias y límites de alcance.'],
      ['⌘', 'Alineación Técnica', 'Conectar producto, UX e ingeniería mediante entendimiento de APIs, feature flags, analytics, mobile parity y restricciones de implementación.'],
      ['↳', 'Delivery Agile', 'Mantener equipos alineados mediante backlog refinement, sprint planning, priorización, gestión de riesgos y expectativas claras de entrega.'],
      ['✦', 'Flujos potenciados por IA', 'Usar ChatGPT, Claude, Claude CoWork, Obsidian y Figma AI para acelerar discovery, documentación, análisis de builds y toma de decisiones.'],
      ['◇', 'Claridad con Stakeholders', 'Convertir feedback de producto, diseño, ingeniería, QA, legal y liderazgo en decisiones estructuradas y próximos pasos accionables.'],
    ],
  },
  cases: {
    ...data.en.cases,
    title: 'Casos de Estudio Destacados',
    subtitle: 'Trabajo seleccionado en mobile parity, compliance en HealthTech, pagos FinTech, integraciones empresariales y delivery de producto asistido por IA.',
    cta: 'Ver detalles',
    modalNote: 'Los ejemplos pueden ser anonimizados o recreados para revisión de portfolio.',
  },
  ai: {
    title: 'Flujo de PM potenciado por IA',
    subtitle: 'Uso IA como una capa de aceleración de producto, no como reemplazo del criterio de producto.',
    copy: 'Mi flujo combina Obsidian como segundo cerebro, ChatGPT y Claude para análisis estructurado, Claude CoWork para contexto profundo de proyectos y builds, y criterio de producto para validar qué realmente debe pasar a ejecución.',
    steps: ['Capturar Contexto', 'Guardar Conocimiento', 'Analizar con IA', 'Validar Source of Truth', 'Generar Artefactos', 'Alinear Stakeholders', 'Preparar Delivery'],
    inputs: 'Slack · Jira · Figma · Builds · PRDs · Tech Docs',
    layer: 'ChatGPT · Claude · CoWork · Obsidian',
    outputs: 'PRDs · Epics · Stories · ACs · Decision Logs',
  },
  artifacts: {
    title: 'Artefactos de Producto',
    subtitle: 'Ejemplos del trabajo de producto que creo para mover equipos desde discovery hasta delivery.',
    items: [
      ['PRDs', 'Contexto de producto, objetivos, alcance, flujos, requisitos, riesgos y criterios de éxito.'],
      ['User Stories', 'Valor para usuario, requisitos funcionales, dependencias y criterios de aceptación.'],
      ['Estructuras de Epic', 'Problema de negocio, contexto estratégico, outcomes, alcance y framing de delivery.'],
      ['Decision Logs', 'Decisiones clave, tradeoffs, input de stakeholders y racional.'],
      ['Mapeo de Analytics', 'Eventos, propiedades, acciones de usuario y consideraciones de medición.'],
      ['Librería de Prompts IA', 'Prompts reutilizables para PRDs, backlog, análisis de builds y comunicación con stakeholders.'],
    ],
  },
  experience: {
    title: 'Línea de Experiencia',
    subtitle: 'Más de 11 años en delivery de productos de software, ejecución Agile y liderazgo cross-functional de producto.',
    items: [
      ['2026 – Actual', 'Plan A Technologies / Compass Real Estate', 'Senior Product Manager', 'Real Estate Tech, mobile parity, alineación Android/iOS y flujos de producto asistidos por IA.'],
      ['2024 – 2026', 'Personify Health', 'Technical Project Manager - AI-Driven Product Execution & Agile Delivery', 'HealthTech, beneficios, claims, PHI, compliance, delivery Agile y aceleración de producto con IA.'],
      ['2022 – 2024', 'Drata', 'Sr. Agile Product Owner', 'Software de compliance, integraciones, APIs, plataformas cloud y delivery Agile de producto.'],
      ['2021 – 2022', 'EasyPay Finance', 'Solutions Product Manager', 'FinTech, pagos mobile, entrega de app React Native, flujos de pago e integraciones.'],
      ['2020 – 2021', 'Omnitracs', 'Sr. Product Owner', 'Requisitos de producto, análisis técnico/negocio, investigación competitiva y delivery Agile.'],
      ['2018 – 2020', 'Cisco', 'Product Manager - Collaboration Architecture', 'Cisco Webex, iniciativas de crecimiento, gestión de vendors, programas de arquitectura y soporte a ventas.'],
      ['2016 – 2018', 'Telmex', 'Product Manager - Desarrollo Empresarial', 'Investigación de mercado, inteligencia competitiva, benchmarking de producto y consultoría interna.'],
      ['2014 – 2016', 'Traffilog LTD', 'IT Technical Manager', 'Operaciones técnicas, monitoreo de dispositivos, firmware, equipos de soporte y habilitación de clientes.'],
    ],
  },
  about: {
    title: 'About',
    copy: [
      'Soy AI-enabled Product Manager y Agile Product Owner bilingüe, basado en Querétaro, México, con más de 11 años de experiencia entregando productos de software con equipos internacionales y remote-first.',
      'Mi trabajo vive en la intersección entre estrategia de producto, ejecución técnica, delivery Agile y flujos de trabajo asistidos por IA. Ayudo a los equipos a clarificar problemas ambiguos, alinearse en el alcance correcto y traducir requisitos complejos en artefactos de producto que ingeniería pueda ejecutar con confianza.',
      'He trabajado en Real Estate Tech, HealthTech, FinTech, Compliance, InsurTech, telecom y software empresarial, colaborando con equipos de Producto, Ingeniería, UX, QA, Legal, Data, Customer Success y liderazgo.',
    ],
    stats: ['11+ años', 'Equipos remote-first', 'Mobile + Web', 'Bilingüe EN/ES', 'Flujos asistidos por IA', 'Producto + Agile'],
  },
  contact: {
    title: 'Construyamos ejecución de producto clara.',
    copy: 'Abierto a oportunidades remote-first como Product Manager, Technical Product Manager, Product Owner y Agile Product Lead.',
    email: 'Enviar email',
    linkedin: 'Conectar en LinkedIn',
    cv: 'Descargar CV',
    location: 'Querétaro, México',
  },
});

const esCaseTranslations = [
  ['Compass Real Estate – Paridad de Homepage en Android', 'Definí los requisitos de paridad del Homepage Android usando iOS como source of truth, incluyendo navegación, comportamiento de tiles, feature flags, badges, ruteo y analytics.'],
  ['Compass Real Estate – Collections Hub para Android', 'Estructuré el alcance del Collections Hub en Android, incluyendo tabs Shared y Unshared, flujos de creación, empty states, error states, Map View y entry points cross-surface.'],
  ['Personify Health – Gestión de Acceso a PHI', 'Estructuré una iniciativa sensible de gestión de acceso a PHI, incluyendo permisos por rol, dependientes, alineación legal, validación backend y trazabilidad de auditoría.'],
  ['Personify Health – Migración de Emails de Retos Personales a Braze', 'Creé tickets DCO estructurados para la migración de emails de retos personales, cubriendo triggers, audiencias, templates, localización, restricciones de rollout y alineación con stakeholders.'],
  ['EasyPay Finance – Experiencia Mobile de Pagos', 'Apoyé experiencias mobile de pagos incluyendo pagos recurrentes, integraciones bancarias y PayPal, OCR de tarjetas, BIN detection, alertas y visibilidad de calendarios de pago.'],
  ['Drata – Integraciones de Software de Compliance', 'Lideré product ownership Agile para integraciones de software de compliance, colaborando con ingeniería, arquitectura, customer support y producto.'],
];
data.es.cases.items = data.en.cases.items.map((item, index) => ({
  ...item,
  title: esCaseTranslations[index][0],
  role: item.role.replace('Product Consultant', 'Consultor de Producto'),
  context: item.context.replace('Plan A Technologies consultant for', 'Consultor de Plan A Technologies para'),
  summary: esCaseTranslations[index][1],
}));

const linkedInUrl = 'https://www.linkedin.com/in/roberto-alejandro-zarraga-flores-22005a177/';
const email = 'alejandrozfx@gmail.com';
const emailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=alejandrozfx%40gmail.com&su=Portfolio%20Contact%20-%20Alejandro%20Zarraga%20Flores';
const cvUrl = '/Alejandro_Zarraga_Flores_CV.pdf';
const profilePhoto = '/profile.webp';

const companySites = {
  planA: { label: 'Plan A Technologies', url: 'https://planatechnologies.com/' },
  compass: { label: 'Compass Real Estate', url: 'https://www.compass.com/' },
  compassAgents: { label: 'Compass for Agents', url: 'https://www.compass.com/agents/' },
  personify: { label: 'Personify Health', url: 'https://personifyhealth.com/' },
  drata: { label: 'Drata', url: 'https://drata.com/' },
  easyPay: { label: 'EasyPay Finance', url: 'https://www.easypayfinance.com/' },
  myEasyPay: { label: 'MyEasyPay App', url: 'https://apps.apple.com/us/app/myeasypay/id1571788423' },
  omnitracs: { label: 'Omnitracs', url: 'https://www.omnitracs.com/' },
  cisco: { label: 'Cisco', url: 'https://www.cisco.com/' },
  webex: { label: 'Cisco Webex', url: 'https://www.webex.com/' },
  telmex: { label: 'Telmex', url: 'https://telmex.com/' },
  traffilog: { label: 'Traffilog', url: 'https://web.traffilog.mx/' },
};

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mx-auto mb-4 h-px w-16 bg-lime-400/70" />
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-50 md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-neutral-400 md:text-lg">{subtitle}</p>
    </div>
  );
}

function Card({ children, className = '' }) {
  return <div className={`group rounded-3xl border border-neutral-800/90 bg-neutral-950/70 p-6 shadow-2xl shadow-black/30 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-lime-400/50 ${className}`}>{children}</div>;
}

function ButtonLink({ href, children, variant = 'primary', download = false, target }) {
  const base = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition';
  const styles = variant === 'primary'
    ? 'bg-lime-400 text-black hover:bg-lime-300'
    : variant === 'outline'
      ? 'border border-neutral-700 bg-neutral-950 text-neutral-100 hover:border-lime-400/60 hover:bg-neutral-900'
      : 'text-neutral-200 hover:bg-neutral-900 hover:text-lime-300';
  return (
    <a href={href} download={download || undefined} target={target} rel={target ? 'noreferrer' : undefined} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function getCaseLinks(title) {
  if (title.includes('Compass')) return [companySites.planA, companySites.compass, companySites.compassAgents];
  if (title.includes('Personify') || title.includes('PHI') || title.includes('Braze')) return [companySites.personify];
  if (title.includes('EasyPay')) return [companySites.easyPay, companySites.myEasyPay];
  if (title.includes('Drata')) return [companySites.drata];
  return [];
}

function getExperienceLinks(company) {
  if (company.includes('Plan A')) return [companySites.planA, companySites.compass, companySites.compassAgents];
  if (company.includes('Personify')) return [companySites.personify];
  if (company.includes('Drata')) return [companySites.drata];
  if (company.includes('EasyPay')) return [companySites.easyPay, companySites.myEasyPay];
  if (company.includes('Omnitracs')) return [companySites.omnitracs];
  if (company.includes('Cisco')) return [companySites.cisco, companySites.webex];
  if (company.includes('Telmex')) return [companySites.telmex];
  if (company.includes('Traffilog')) return [companySites.traffilog];
  return [];
}

function CompanyLinks({ links, compact = false }) {
  if (!links?.length) return null;
  return (
    <div className={compact ? 'mt-4 flex flex-wrap gap-2' : 'mt-5 flex flex-wrap gap-2'}>
      {links.map((site) => (
        <a key={site.label} href={site.url} target="_blank" rel="noreferrer" className="rounded-full border border-neutral-800 bg-black/30 px-3 py-1.5 text-xs font-medium text-neutral-300 transition hover:border-lime-400/50 hover:text-lime-300">
          {site.label} ↗
        </a>
      ))}
    </div>
  );
}

function ProfileCard({ lang }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-950/70 p-4 shadow-2xl shadow-black/40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(57,255,20,0.18),transparent_34%)]" />
      <div className="relative grid gap-5 sm:grid-cols-[145px_1fr] sm:items-center lg:grid-cols-1">
        <div className="mx-auto h-32 w-32 overflow-hidden rounded-3xl border border-lime-400/30 bg-neutral-900 shadow-[0_0_40px_rgba(57,255,20,0.12)] sm:mx-0 sm:h-36 sm:w-36 lg:mx-auto lg:h-40 lg:w-40">
          <img src={profilePhoto} alt="Alejandro Zarraga Flores" className="h-full w-full object-cover" />
        </div>
        <div className="relative text-center sm:text-left lg:text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">Product Builder</div>
          <h3 className="mt-2 text-2xl font-semibold text-neutral-50">Alejandro Zarraga Flores</h3>
          <p className="mt-2 text-sm leading-6 text-neutral-400">
            {lang === 'en' ? 'AI-enabled PM · Technical Product · Agile Delivery' : 'PM potenciado por IA · Producto Técnico · Delivery Agile'}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start lg:justify-center">
            <span className="rounded-full border border-neutral-800 bg-black/40 px-3 py-1 text-xs text-neutral-400">11+ yrs</span>
            <span className="rounded-full border border-neutral-800 bg-black/40 px-3 py-1 text-xs text-neutral-400">EN / ES</span>
            <span className="rounded-full border border-neutral-800 bg-black/40 px-3 py-1 text-xs text-neutral-400">Remote-first</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroVisual({ lang }) {
  const labels = ['PRD', 'Jira', 'Figma', 'API', 'AI', 'Delivery', 'Analytics', 'Mobile', 'Stakeholders'];
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-950/60 p-5 shadow-2xl shadow-black/40">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:34px_34px]" />
      <div className="relative h-[250px] overflow-hidden rounded-3xl border border-neutral-900 bg-black/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,rgba(57,255,20,0.24),transparent_34%)]" />
        <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime-400/30 bg-lime-400/10 blur-sm" />
        <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-lime-300/60 bg-neutral-950/90 text-3xl text-lime-300 shadow-[0_0_60px_rgba(57,255,20,0.25)]">✦</div>
        {labels.map((label, index) => {
          const angle = (index / labels.length) * Math.PI * 2;
          const x = 50 + Math.cos(angle) * 35;
          const y = 50 + Math.sin(angle) * 28;
          return (
            <div key={label} className="absolute rounded-full border border-neutral-700 bg-neutral-950/90 px-3 py-1 text-xs font-medium text-neutral-200 shadow-lg shadow-black/40" style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}>
              {label}
            </div>
          );
        })}
      </div>
      <div className="relative mt-4 rounded-2xl border border-neutral-800 bg-black/70 p-4 font-mono text-xs text-neutral-300 backdrop-blur">
        <div className="mb-3 flex items-center gap-2 text-lime-300"><span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(57,255,20,0.8)]" />SYSTEM STATUS</div>
        <div className="grid gap-2 text-neutral-400 sm:grid-cols-2">
          <span>✓ {lang === 'en' ? 'Context captured' : 'Contexto capturado'}</span>
          <span>✓ {lang === 'en' ? 'Requirements structured' : 'Requisitos estructurados'}</span>
          <span>✓ {lang === 'en' ? 'Backlog ready' : 'Backlog listo'}</span>
          <span>✓ {lang === 'en' ? 'Delivery aligned' : 'Delivery alineado'}</span>
        </div>
      </div>
    </div>
  );
}

function Modal({ item, onClose, lang }) {
  if (!item) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl border border-neutral-800 bg-neutral-950 p-6 shadow-2xl shadow-black" onClick={(event) => event.stopPropagation()}>
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-xs font-medium text-lime-300">{item.industry}</span>
              <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-xs text-neutral-300">{item.role}</span>
            </div>
            <h3 className="text-2xl font-semibold text-neutral-50 md:text-3xl">{item.title}</h3>
            <p className="mt-2 text-sm text-neutral-400">{item.context}</p>
          </div>
          <button onClick={onClose} className="rounded-full border border-neutral-800 px-3 py-2 text-neutral-400 hover:border-lime-400/50 hover:text-lime-300">×</button>
        </div>
        <div className="grid gap-5">
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">{lang === 'en' ? 'Problem' : 'Problema'}</h4>
            <p className="leading-7 text-neutral-300">{item.problem}</p>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">{lang === 'en' ? 'Key Contributions' : 'Contribuciones clave'}</h4>
            <ul className="grid gap-3">
              {item.contributions.map((contribution) => (
                <li key={contribution} className="flex gap-3 text-neutral-300"><span className="text-lime-300">✓</span><span>{contribution}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">Impact</h4>
            <p className="leading-7 text-neutral-300">{item.impact}</p>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">{lang === 'en' ? 'Company / Product Links' : 'Sitios de empresa / producto'}</h4>
            <CompanyLinks links={getCaseLinks(item.title)} />
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 text-sm text-neutral-400">{data[lang].cases.modalNote}</div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');
  const [selectedCase, setSelectedCase] = useState(null);
  const t = data[lang];
  const navLinks = useMemo(() => ['#product', '#cases', '#ai', '#artifacts', '#experience', '#contact'], []);

  return (
    <div className="min-h-screen scroll-smooth bg-[#050505] text-neutral-100 selection:bg-lime-400 selection:text-black">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(57,255,20,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,77,0,0.08),transparent_32%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <header className="sticky top-0 z-40 border-b border-neutral-900 bg-black/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-lime-400/40 bg-lime-400/10 font-semibold text-lime-300">AZ</div>
            <div className="hidden leading-tight sm:block">
              <div className="text-sm font-semibold text-neutral-100">Alejandro Zarraga Flores</div>
              <div className="text-xs text-neutral-500">AI-enabled Product Manager</div>
            </div>
          </a>
          <div className="hidden items-center gap-6 lg:flex">
            {t.nav.map((label, index) => <a key={label} href={navLinks[index]} className="text-sm text-neutral-400 transition hover:text-lime-300">{label}</a>)}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs font-medium text-neutral-200 transition hover:border-lime-400/50 hover:text-lime-300">{lang === 'en' ? 'EN | ES' : 'ES | EN'}</button>
            <ButtonLink href={cvUrl} download>{t.hero.cv}</ButtonLink>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:px-8 lg:grid-cols-[0.95fr_0.75fr] lg:py-24">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-lime-300">{t.hero.eyebrow}</div>
            <p className="mb-3 text-lg font-medium text-neutral-300">{t.hero.name}</p>
            <h1 className="max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-neutral-50 md:text-4xl lg:text-5xl xl:text-[3.35rem]">{t.hero.headline}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">{t.hero.subtitle}</p>
            <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-950/80 p-4 text-sm leading-6 text-neutral-300">▣ {t.hero.role}</div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#cases">{t.hero.primary} →</ButtonLink>
              <ButtonLink href="#product" variant="outline">{t.hero.secondary}</ButtonLink>
              <ButtonLink href={cvUrl} variant="ghost" download>↓ {t.hero.cv}</ButtonLink>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {t.hero.tags.map((tag) => <span key={tag} className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-300">{tag}</span>)}
            </div>
          </div>
          <div className="grid gap-5">
            <ProfileCard lang={lang} />
            <HeroVisual lang={lang} />
          </div>
        </section>

        <section id="product" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <SectionHeader title={t.product.title} subtitle={t.product.subtitle} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.product.cards.map(([icon, title, copy]) => <Card key={title}><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-400/30 bg-lime-400/10 text-2xl text-lime-300">{icon}</div><h3 className="text-xl font-semibold text-neutral-50">{title}</h3><p className="mt-3 leading-7 text-neutral-400">{copy}</p></Card>)}
          </div>
        </section>

        <section id="cases" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <SectionHeader title={t.cases.title} subtitle={t.cases.subtitle} />
          <div className="grid gap-5 lg:grid-cols-2">
            {t.cases.items.map((item, index) => (
              <Card key={item.title} className={index < 2 ? 'lg:min-h-[360px]' : ''}>
                <div className="mb-4 flex flex-wrap gap-2"><span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-xs font-medium text-lime-300">{item.industry}</span><span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-xs text-neutral-300">{item.role}</span></div>
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-50">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-500">{item.context}</p>
                <p className="mt-5 leading-7 text-neutral-400">{item.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">{item.chips.map((chip) => <span key={chip} className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-neutral-400">{chip}</span>)}</div>
                <CompanyLinks links={getCaseLinks(item.title)} compact />
                <button onClick={() => setSelectedCase(item)} className="mt-6 inline-flex items-center text-sm font-semibold text-lime-300 hover:text-lime-200">{t.cases.cta} →</button>
              </Card>
            ))}
          </div>
        </section>

        <section id="ai" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <SectionHeader title={t.ai.title} subtitle={t.ai.subtitle} />
          <div className="rounded-[2rem] border border-neutral-800 bg-neutral-950/70 p-6 shadow-2xl shadow-black/30 md:p-8">
            <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-8 text-neutral-400">{t.ai.copy}</p>
            <div className="grid gap-4 md:grid-cols-7">
              {t.ai.steps.map((step, index) => <div key={step} className="flex h-full flex-col items-center rounded-2xl border border-neutral-800 bg-black/40 p-4 text-center transition hover:border-lime-400/40"><div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-lime-400 text-sm font-bold text-black">{index + 1}</div><div className="text-sm font-medium text-neutral-200">{step}</div></div>)}
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[['Inputs', t.ai.inputs], ['AI Layer', t.ai.layer], ['Outputs', t.ai.outputs]].map(([label, value]) => <div key={label} className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4"><div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">{label}</div><p className="text-sm text-neutral-400">{value}</p></div>)}
            </div>
          </div>
        </section>

        <section id="artifacts" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <SectionHeader title={t.artifacts.title} subtitle={t.artifacts.subtitle} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.artifacts.items.map(([title, copy]) => <Card key={title}><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900 text-lime-300">▣</div><h3 className="text-xl font-semibold text-neutral-50">{title}</h3><p className="mt-3 leading-7 text-neutral-400">{copy}</p></Card>)}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-4 py-20 md:px-8">
          <SectionHeader title={t.experience.title} subtitle={t.experience.subtitle} />
          <div className="grid gap-5">
            {t.experience.items.map(([period, company, role, summary]) => <Card key={company}><div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">{period}</div><h3 className="text-lg font-semibold text-neutral-50">{company}</h3><p className="mt-1 text-sm text-neutral-300">{role}</p><p className="mt-3 text-sm leading-6 text-neutral-500">{summary}</p><CompanyLinks links={getExperienceLinks(company)} compact /></Card>)}
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:px-8 lg:grid-cols-[1fr_0.8fr]">
          <div><div className="mb-4 h-px w-16 bg-lime-400/70" /><h2 className="text-3xl font-semibold text-neutral-50 md:text-5xl">{t.about.title}</h2><div className="mt-6 grid gap-5 text-lg leading-8 text-neutral-400">{t.about.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>
          <div className="grid gap-4 sm:grid-cols-2">{t.about.stats.map((stat) => <div key={stat} className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-6"><div className="mb-4 text-2xl text-lime-300">✦</div><div className="text-2xl font-semibold text-neutral-50">{stat}</div></div>)}</div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-lime-400/30 bg-neutral-950 p-8 shadow-2xl shadow-lime-950/20 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(57,255,20,0.16),transparent_30%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
              <div><h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-neutral-50 md:text-5xl">{t.contact.title}</h2><p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-400">{t.contact.copy}</p><div className="mt-5 flex flex-wrap gap-3 text-sm text-neutral-400"><span>{email}</span><span>{t.contact.location}</span></div></div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><ButtonLink href={emailUrl} target="_blank">{t.contact.email}</ButtonLink><ButtonLink href={linkedInUrl} target="_blank" variant="outline">{t.contact.linkedin}</ButtonLink><ButtonLink href={cvUrl} download variant="ghost">↓ {t.contact.cv}</ButtonLink></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-900 px-4 py-8 text-center text-sm text-neutral-600 md:px-8">© {new Date().getFullYear()} Alejandro Zarraga Flores · Product Operating System</footer>
      <Modal item={selectedCase} onClose={() => setSelectedCase(null)} lang={lang} />
    </div>
  );
}
