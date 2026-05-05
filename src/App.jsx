import React, { useEffect, useMemo, useState } from 'react';

const data = {
  en: {
    nav: ['Product', 'Case Studies', 'AI Workflow', 'Artifacts', 'Experience', 'Testimonials', 'Contact'],
    hero: {
      eyebrow: 'PRODUCT STRATEGY · TECHNICAL ALIGNMENT · AI WORKFLOWS',
      name: 'Alejandro Zarraga Flores',
      headline: 'AI-enabled Senior Product Manager.',
      subtitle:
        'Bilingual EN/ES, remote-first. 11 years shipping mobile, web and platform experiences across Real Estate, HealthTech, FinTech and Compliance — currently leading mobile parity at Compass, the largest U.S. residential brokerage by sales volume.',
      role:
        'Senior Product Manager at Plan A Technologies, supporting Compass Real Estate as an expert product consultant across mobile and web agent-facing experiences.',
      primary: 'View Case Studies',
      secondary: 'Explore My Product System',
      cv: 'Download CV',
      tags: ['Product Strategy', 'Technical Product', 'Agile Delivery', 'AI Workflows', 'Mobile & Web'],
    },
    product: {
      title: 'How I work',
      subtitle: 'How I move from ambiguity to delivery — with examples from Compass, Personify Health, Drata and EasyPay.',
      cards: [
        ['◎', 'Product Strategy', 'Connect product decisions to measurable outcomes. Compass mobile parity → P0 vs enhancement separation → reduced delivery risk.'],
        ['▣', 'PRDs & Stories', 'PRDs engineers actually use, not just read. Personify Health → 4 modules delivered at 90%+ sprint goal completion.'],
        ['⌘', 'Technical Alignment', 'Bridge product, UX and engineering through APIs, feature flags, mobile parity. EasyPay → first mobile app integrated with banking APIs and OCR.'],
        ['↳', 'Agile Delivery', 'Backlog refinement, sprint planning, dependency tracking. Personify → 30% backlog churn reduction through structured grooming.'],
        ['✦', 'AI-enabled Workflows', 'Claude, ChatGPT, Obsidian and Figma AI accelerate discovery and documentation — never replace product judgment. Used across Compass, Personify and Drata.'],
        ['◇', 'Stakeholder Clarity', 'Convert feedback from Legal, Compliance, Engineering and QA into actionable next steps. PHI compliance → audit-aware acceptance criteria.'],
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
          impact: 'Structured Homepage parity requirements for Compass — the largest U.S. residential real estate brokerage by sales volume. Built Jira-ready stories that improved alignment across Product, Design and Engineering, with explicit P0 scope separated from enhancements to reduce delivery risk.',
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
          impact: 'Structured the Android Collections experience for Compass agents, including Map View elevated to P0 after stakeholder and engineering alignment. Reduced product ambiguity through clear P0 scope, cross-surface entry points and explicit dependencies.',
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
          impact: 'Part of a 4-module health and benefits delivery (My Coverage, Claims, MCC, member-facing) that achieved 90%+ sprint goal completion and 30% reduction in backlog churn through structured grooming and dependency tracking. PHI initiative included audit-aware acceptance criteria and timestamp traceability.',
          decision: 'Coordinated 3 scrum pods (7 devs each + 1 QA + 1 UX + 1 EM per pod) with cross-pod dependencies and 8+ external stakeholders in parallel — including Legal, Compliance, MSR Desk, Informatics, leadership and Lead PMs. Every PHI-related decision had to be aligned with audit, legal, and engineering simultaneously, often within the same sprint.',
          learning: 'Constant, proactive communication — including blockers and slip risks — protected the team from late-stage surprises. Surfacing a delay one sprint early is always cheaper than absorbing the same delay one sprint late. I built that into our refinement and standup cadence.',
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
          impact: 'Improved operational consistency across email migration workstreams as part of the 4-module Personify Health delivery, contributing to 90%+ sprint goal completion and 30% backlog churn reduction.',
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
          impact: 'Shipped EasyPay Finance’s first mobile app — React Native across iOS, Android and web. Launched core payment capabilities: recurring payments, AI-powered OCR card scanning (Visa/Mastercard BIN detection), in-app account blocking, balance visibility and API integrations with financial institutions.',
          decision: 'Rolled back the PayPal mini-feature mid-launch after discovering a critical vulnerability: the charge was processed on the user side but our system did not always detect the confirmation, opening a path for unauthorized payment injection. I escalated, paused the feature, and redirected the team for 2 sprints to fix it before re-shipping. Branding trust and a smooth payment experience were non-negotiable — even when it meant killing a launch feature.',
          learning: 'In FinTech, a smaller, fully trusted feature beats a flashy feature with even one trust gap. Killing or pausing a feature is a valid PM tool, not a failure. I now run security and trust review as a separate gate before any payment-flow GA.',
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
          impact: 'Owned Agile delivery for compliance software integrations with Confluence, Microsoft Intune, AWS and Azure as hybrid Product Owner + Scrum Master. Improved team focus and delivery readiness through structured backlog management and cross-team dependency resolution.',
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
    testimonials: {
      title: 'What people say',
      subtitle: 'LinkedIn recommendations from senior product leaders, peers and engineers I have worked with.',
      items: [
        {
          name: 'Christy Martz',
          photo: '/testimonials/christy.jpg',
          title: 'Vice President of Product · Digital Health, SaaS',
          company: 'Personify Health',
          date: 'December 2025',
          initials: 'CM',
          quote: 'I had the privilege of working with Alex on my product team at Personify Health, and he is one of the most reliable and thoughtful Product Managers I have partnered with. Alex consistently demonstrates a rare combination of intelligence, executional rigor, and genuine team-centered leadership. What stands out most about Alex is his ability to bring people together around complex problems and move work forward with clarity and momentum. He builds strong cross-functional relationships quickly, creates alignment where it is needed most, and ensures teams stay focused on delivering meaningful outcomes.',
        },
        {
          name: 'Genevieve Vullo, MHS, PMP',
          photo: '/testimonials/genevieve.jpg',
          title: 'Senior Product Manager',
          company: 'Personify Health',
          date: 'December 2025',
          initials: 'GV',
          quote: 'Alex was a joy to work with during his time at Personify Health. He is an excellent, detail-oriented product manager, quick to uncover the preferred ways-of-working for different teams and adapt as needed. I saw firsthand his skill in digging into requirements, working through sequencing, and communicating across a wide range of stakeholders including engineering and product leadership. He is enthusiastic and ready to dive in to any topic, a fantastic team player!',
        },
        {
          name: 'Cameron Loughman',
          photo: '/testimonials/cameron.jpg',
          title: 'Engineering',
          company: 'Drata',
          date: 'January 2024',
          initials: 'CL',
          quote: 'Alejandro and I worked very closely at Drata, and I quickly learned that I could really rely on him to get any job done. He skillfully managed multiple projects in parallel, and collaborated with folks around the company to ensure his team remained unblocked and on track. Alejandro was just a great guy to have around — he always had a positive outlook and faced challenges with a smile on his face. He consistently demonstrated excellence as a product owner: he always kept his team motivated and organized, communicated to stakeholders frequently, and took care of all the big and small things.',
        },
        {
          name: 'Patricia Truong, PMP, CSM, Six Sigma',
          photo: '/testimonials/patricia.jpg',
          title: 'Tech Program Management',
          company: 'Drata',
          date: 'January 2024',
          initials: 'PT',
          quote: 'Alejandro has been an instrumental part of our agile development team at Drata. Alejandro has a unique gift of being a team player for company wide initiatives, while also looking out for his agile team. Alejandro is so reliable and dependable. I know given any task, he will always execute. As a product owner Alejandro would always initiate steps to set up the team for success — creating stories, understanding dependencies and communicating gaps.',
        },
      ],
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
  nav: ['Producto', 'Casos', 'Flujo IA', 'Artefactos', 'Experiencia', 'Testimonios', 'Contacto'],
  hero: {
    eyebrow: 'ESTRATEGIA DE PRODUCTO · ALINEACIÓN TÉCNICA · FLUJOS DE IA',
    name: 'Alejandro Zarraga Flores',
    headline: 'Product Manager Senior con IA en mi flujo de trabajo.',
    subtitle: 'Bilingüe EN/ES, remote-first. 11 años creando experiencias mobile, web y de plataforma en Real Estate, HealthTech, FinTech y Compliance — actualmente liderando paridad mobile en Compass, la mayor inmobiliaria residencial de EE.UU. por volumen de ventas.',
    role: 'Senior Product Manager en Plan A Technologies, colaborando con Compass Real Estate como consultor experto de producto en experiencias mobile y web para agentes.',
    primary: 'Ver casos de estudio',
    secondary: 'Explorar mi sistema de producto',
    cv: 'Descargar CV',
    tags: ['Estrategia de Producto', 'Producto Técnico', 'Delivery Agile', 'Flujos de IA', 'Web y Mobile'],
  },
  product: {
    title: 'Cómo trabajo',
    subtitle: 'Cómo paso de la ambigüedad al delivery — con ejemplos de Compass, Personify Health, Drata y EasyPay.',
    cards: [
      ['◎', 'Estrategia de Producto', 'Conectar decisiones de producto con resultados medibles. Paridad mobile en Compass → separar P0 de mejoras → menor riesgo de delivery.'],
      ['▣', 'PRDs y Stories', 'PRDs que ingeniería realmente usa, no solo lee. Personify Health → 4 módulos entregados con 90%+ de cumplimiento de sprint goal.'],
      ['⌘', 'Alineación Técnica', 'Conectar producto, UX e ingeniería mediante APIs, feature flags y mobile parity. EasyPay → primer app mobile integrado con APIs bancarias y OCR.'],
      ['↳', 'Delivery Agile', 'Backlog refinement, sprint planning, gestión de dependencias. Personify → 30% reducción de churn de backlog mediante grooming estructurado.'],
      ['✦', 'Flujos potenciados por IA', 'Claude, ChatGPT, Obsidian y Figma AI aceleran discovery y documentación — nunca reemplazan el criterio de producto. Usado en Compass, Personify y Drata.'],
      ['◇', 'Claridad con Stakeholders', 'Convertir feedback de Legal, Compliance, Ingeniería y QA en próximos pasos accionables. Compliance PHI → criterios de aceptación con audit-awareness.'],
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
  testimonials: {
    title: 'Lo que dicen',
    subtitle: 'Recomendaciones de LinkedIn de líderes senior de producto, pares e ingenieros con los que he trabajado.',
    items: [
      {
        name: 'Christy Martz',
        photo: '/testimonials/christy.jpg',
        title: 'Vice President of Product · Digital Health, SaaS',
        company: 'Personify Health',
        date: 'Diciembre 2025',
        initials: 'CM',
        quote: 'Tuve el privilegio de trabajar con Alex en mi equipo de producto en Personify Health, y es uno de los Product Managers más confiables y reflexivos con los que he colaborado. Alex demuestra constantemente una combinación rara de inteligencia, rigor de ejecución y liderazgo genuino centrado en el equipo. Lo que más destaca de Alex es su habilidad para unir a las personas en torno a problemas complejos y avanzar el trabajo con claridad e impulso. Construye relaciones sólidas cross-funcionales rápido, crea alineación donde más se necesita y asegura que los equipos sigan enfocados en entregar resultados significativos.',
      },
      {
        name: 'Genevieve Vullo, MHS, PMP',
        photo: '/testimonials/genevieve.jpg',
        title: 'Senior Product Manager',
        company: 'Personify Health',
        date: 'Diciembre 2025',
        initials: 'GV',
        quote: 'Trabajar con Alex en Personify Health fue un placer. Es un product manager excelente y orientado al detalle, rápido para descubrir las formas de trabajo preferidas de diferentes equipos y adaptarse según se necesite. Vi de primera mano su habilidad para profundizar en requerimientos, trabajar el sequencing y comunicarse con un amplio rango de stakeholders incluyendo ingeniería y liderazgo de producto. Es entusiasta y siempre dispuesto a sumergirse en cualquier tema, un fantastic team player!',
      },
      {
        name: 'Cameron Loughman',
        photo: '/testimonials/cameron.jpg',
        title: 'Engineering',
        company: 'Drata',
        date: 'Enero 2024',
        initials: 'CL',
        quote: 'Alejandro y yo trabajamos muy de cerca en Drata, y rápidamente aprendí que podía contar con él para sacar cualquier cosa adelante. Manejó múltiples proyectos en paralelo con destreza y colaboró con personas de toda la empresa para asegurar que su equipo siguiera desbloqueado y en track. Alejandro era genial tenerlo cerca — siempre tenía una actitud positiva y enfrentaba los retos con una sonrisa. Demostró excelencia consistente como product owner: mantenía al equipo motivado y organizado, se comunicaba con stakeholders frecuentemente y se hacía cargo de todas las cosas grandes y pequeñas.',
      },
      {
        name: 'Patricia Truong, PMP, CSM, Six Sigma',
        photo: '/testimonials/patricia.jpg',
        title: 'Tech Program Management',
        company: 'Drata',
        date: 'Enero 2024',
        initials: 'PT',
        quote: 'Alejandro ha sido una parte instrumental de nuestro equipo de desarrollo agile en Drata. Tiene el don único de ser un team player para iniciativas a nivel empresa mientras también vela por su agile team. Es muy confiable — sé que ante cualquier tarea, va a ejecutar. Como product owner siempre tomaba la iniciativa de preparar al equipo para el éxito: creando stories, entendiendo dependencias y comunicando gaps.',
      },
    ],
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
  ['Compass Real Estate – Paridad de Homepage en Android', 'Definí los requisitos de paridad del Homepage Android usando iOS como source of truth, incluyendo navegación, comportamiento de tiles, feature flags, badges, ruteo y analytics.', 'Estructuré los requisitos de paridad del Homepage para Compass — la mayor inmobiliaria residencial de EE.UU. por volumen de ventas. Construí stories listas para Jira que mejoraron la alineación entre Producto, Diseño e Ingeniería, separando explícitamente el alcance P0 de las mejoras para reducir el riesgo de delivery.'],
  ['Compass Real Estate – Collections Hub para Android', 'Estructuré el alcance del Collections Hub en Android, incluyendo tabs Shared y Unshared, flujos de creación, empty states, error states, Map View y entry points cross-surface.', 'Estructuré la experiencia Android de Collections para los agentes de Compass, incluyendo Map View elevado a P0 tras alineación con stakeholders e ingeniería. Reduje la ambigüedad del producto mediante alcance P0 claro, entry points cross-surface y dependencias explícitas.'],
  ['Personify Health – Gestión de Acceso a PHI', 'Estructuré una iniciativa sensible de gestión de acceso a PHI, incluyendo permisos por rol, dependientes, alineación legal, validación backend y trazabilidad de auditoría.', 'Parte de un delivery de 4 módulos de salud y beneficios (My Coverage, Claims, MCC, member-facing) que alcanzó 90%+ de cumplimiento de sprint goal y 30% de reducción en backlog churn mediante grooming estructurado y tracking de dependencias. La iniciativa PHI incluyó criterios de aceptación con audit-awareness y trazabilidad por timestamp.'],
  ['Personify Health – Migración de Emails de Retos Personales a Braze', 'Creé tickets DCO estructurados para la migración de emails de retos personales, cubriendo triggers, audiencias, templates, localización, restricciones de rollout y alineación con stakeholders.', 'Mejoré la consistencia operativa en los workstreams de migración de emails como parte del delivery de 4 módulos de Personify Health, contribuyendo a 90%+ de cumplimiento de sprint goal y 30% de reducción en backlog churn.'],
  ['EasyPay Finance – Experiencia Mobile de Pagos', 'Apoyé experiencias mobile de pagos incluyendo pagos recurrentes, integraciones bancarias y PayPal, OCR de tarjetas, BIN detection, alertas y visibilidad de calendarios de pago.', 'Lancé la primera app mobile de EasyPay Finance — React Native en iOS, Android y web. Entregué capacidades core de pagos: pagos recurrentes, OCR de tarjetas con IA (detección de BIN Visa/Mastercard), bloqueo de cuenta in-app, visibilidad de balance e integraciones de API con instituciones financieras.'],
  ['Drata – Integraciones de Software de Compliance', 'Lideré product ownership Agile para integraciones de software de compliance, colaborando con ingeniería, arquitectura, customer support y producto.', 'Manejé el delivery Agile para integraciones de software de compliance con Confluence, Microsoft Intune, AWS y Azure como Product Owner + Scrum Master híbrido. Mejoré el foco del equipo y la delivery readiness mediante backlog management estructurado y resolución de dependencias cross-team.'],
];
const esCaseExtras = {
  2: {
    decision: 'Coordiné 3 pods de scrum (7 devs cada uno + 1 QA + 1 UX + 1 EM por pod) con dependencias cross-pod y 8+ stakeholders externos en paralelo — incluyendo Legal, Compliance, MSR Desk, Informatics, liderazgo y Lead PMs. Cada decisión relacionada con PHI debía alinearse con auditoría, legal e ingeniería simultáneamente, muchas veces dentro del mismo sprint.',
    learning: 'La comunicación constante y proactiva — incluyendo blockers y riesgos de retraso — protegió al equipo de sorpresas tardías. Avisar un retraso un sprint antes siempre es más barato que absorberlo un sprint después. Lo integré a nuestro ritmo de refinement y standup.',
  },
  4: {
    decision: 'Hice rollback del mini-feature de PayPal en pleno lanzamiento al descubrir una vulnerabilidad crítica: el cargo se procesaba en el lado del usuario pero nuestro sistema no siempre detectaba la confirmación, abriendo un camino para inyección de pagos no autorizados. Escalé, pausé el feature y redirigí al equipo durante 2 sprints para arreglarlo antes de relanzarlo. La confianza de marca y una experiencia de pago fluida no eran negociables — incluso si implicaba matar un feature de lanzamiento.',
    learning: 'En FinTech, un feature más pequeño pero 100% confiable supera a un feature llamativo con un solo gap de confianza. Matar o pausar un feature es una herramienta válida del PM, no un fracaso. Ahora corro un review de seguridad y trust como gate separado antes de cualquier GA de flujo de pago.',
  },
};
data.es.cases.items = data.en.cases.items.map((item, index) => ({
  ...item,
  title: esCaseTranslations[index][0],
  role: item.role.replace('Product Consultant', 'Consultor de Producto'),
  context: item.context.replace('Plan A Technologies consultant for', 'Consultor de Plan A Technologies para'),
  summary: esCaseTranslations[index][1],
  impact: esCaseTranslations[index][2],
  ...(esCaseExtras[index] || {}),
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
          const x = 50 + Math.cos(angle) * 44;
          const y = 50 + Math.sin(angle) * 38;
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
  useEffect(() => {
    if (!item) return;
    const handler = (event) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [item, onClose]);
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
          {item.decision && (
            <div>
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">{lang === 'en' ? 'Decision & Tradeoff' : 'Decisión y tradeoff'}</h4>
              <p className="leading-7 text-neutral-300">{item.decision}</p>
            </div>
          )}
          {item.learning && (
            <div>
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">{lang === 'en' ? 'What I learned' : 'Lo que aprendí'}</h4>
              <p className="leading-7 text-neutral-300">{item.learning}</p>
            </div>
          )}
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
  const navLinks = useMemo(() => ['#product', '#cases', '#ai', '#artifacts', '#experience', '#testimonials', '#contact'], []);
  const [activeSection, setActiveSection] = useState('product');

  useEffect(() => {
    const ids = navLinks.map((href) => href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navLinks]);

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
            {t.nav.map((label, index) => {
              const isActive = navLinks[index] === `#${activeSection}`;
              return (
                <a key={label} href={navLinks[index]} className={`text-sm transition ${isActive ? 'text-lime-300' : 'text-neutral-400 hover:text-lime-300'}`}>{label}</a>
              );
            })}
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

        <section id="product" className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
          <SectionHeader title={t.product.title} subtitle={t.product.subtitle} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.product.cards.map(([icon, title, copy]) => <Card key={title}><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-400/30 bg-lime-400/10 text-2xl text-lime-300">{icon}</div><h3 className="text-xl font-semibold text-neutral-50">{title}</h3><p className="mt-3 leading-7 text-neutral-400">{copy}</p></Card>)}
          </div>
        </section>

        <section id="cases" className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
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

        <section id="ai" className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
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

        <section id="artifacts" className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
          <SectionHeader title={t.artifacts.title} subtitle={t.artifacts.subtitle} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.artifacts.items.map(([title, copy]) => <Card key={title}><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900 text-lime-300">▣</div><h3 className="text-xl font-semibold text-neutral-50">{title}</h3><p className="mt-3 leading-7 text-neutral-400">{copy}</p></Card>)}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
          <SectionHeader title={t.experience.title} subtitle={t.experience.subtitle} />
          <div className="grid gap-5">
            {t.experience.items.map(([period, company, role, summary]) => <Card key={company}><div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">{period}</div><h3 className="text-lg font-semibold text-neutral-50">{company}</h3><p className="mt-1 text-sm text-neutral-300">{role}</p><p className="mt-3 text-sm leading-6 text-neutral-500">{summary}</p><CompanyLinks links={getExperienceLinks(company)} compact /></Card>)}
          </div>
        </section>

        <section id="testimonials" className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
          <SectionHeader title={t.testimonials.title} subtitle={t.testimonials.subtitle} />
          <div className="grid gap-5 md:grid-cols-2">
            {t.testimonials.items.map((item) => (
              <Card key={item.name}>
                <div className="mb-4 flex items-start gap-4">
                  {item.photo ? (
                    <img src={item.photo} alt={item.name} onError={(e) => { e.currentTarget.replaceWith(Object.assign(document.createElement('div'), { className: 'flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-lime-400/40 bg-lime-400/10 text-sm font-semibold text-lime-300', textContent: item.initials })); }} className="h-12 w-12 flex-shrink-0 rounded-full border border-lime-400/40 object-cover" />
                  ) : (
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-lime-400/40 bg-lime-400/10 text-sm font-semibold text-lime-300">{item.initials}</div>
                  )}
                  <div>
                    <div className="text-sm font-semibold text-neutral-50">{item.name}</div>
                    <div className="text-xs text-neutral-400">{item.title}</div>
                    <div className="mt-0.5 text-xs text-neutral-500">{item.company} · {item.date}</div>
                  </div>
                </div>
                <p className="text-sm leading-7 text-neutral-300">"{item.quote}"</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[1fr_0.8fr]">
          <div><div className="mb-4 h-px w-16 bg-lime-400/70" /><h2 className="text-3xl font-semibold text-neutral-50 md:text-5xl">{t.about.title}</h2><div className="mt-6 grid gap-5 text-lg leading-8 text-neutral-400">{t.about.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>
          <div className="grid gap-4 sm:grid-cols-2">{t.about.stats.map((stat) => <div key={stat} className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-6"><div className="mb-4 text-2xl text-lime-300">✦</div><div className="text-2xl font-semibold text-neutral-50">{stat}</div></div>)}</div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
          <div className="relative overflow-hidden rounded-[2rem] border border-lime-400/30 bg-neutral-950 p-8 shadow-2xl shadow-lime-950/20 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(57,255,20,0.16),transparent_30%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
              <div><h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-neutral-50 md:text-5xl">{t.contact.title}</h2><p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-400">{t.contact.copy}</p><div className="mt-5 flex flex-wrap gap-3 text-sm text-neutral-400"><span>{email}</span><span>{t.contact.location}</span></div></div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><ButtonLink href={emailUrl} target="_blank">{t.contact.email}</ButtonLink><ButtonLink href={linkedInUrl} target="_blank" variant="outline">{t.contact.linkedin}</ButtonLink><ButtonLink href={cvUrl} download variant="ghost">↓ {t.contact.cv}</ButtonLink></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-900 px-4 py-8 text-sm text-neutral-600 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">© {new Date().getFullYear()} Alejandro Zarraga Flores · Senior Product Manager</div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={emailUrl} target="_blank" rel="noreferrer" className="text-neutral-500 transition hover:text-lime-300">{email}</a>
            <span className="text-neutral-800">·</span>
            <a href={linkedInUrl} target="_blank" rel="noreferrer" className="text-neutral-500 transition hover:text-lime-300">LinkedIn ↗</a>
            <span className="text-neutral-800">·</span>
            <a href={cvUrl} download className="text-neutral-500 transition hover:text-lime-300">CV ↓</a>
          </div>
        </div>
      </footer>
      <Modal item={selectedCase} onClose={() => setSelectedCase(null)} lang={lang} />
    </div>
  );
}
