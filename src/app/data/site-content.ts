import { IconName } from '../shared/icon/icon';

export interface NavLink {
  readonly label: string;
  readonly fragment: string;
}

export interface Stat {
  readonly value: string;
  readonly label: string;
}

export interface StripImage {
  readonly src: string;
  readonly alt: string;
}

export interface AboutCard {
  readonly title: string;
  readonly body: string;
  readonly accent: string;
}

export interface Pillar {
  readonly icon: string;
  readonly title: string;
  readonly body: string;
}

export interface Service {
  readonly icon: IconName;
  readonly title: string;
  readonly body: string;
  readonly featured?: boolean;
}

export interface CheckItem {
  readonly lead?: string;
  readonly text: string;
}

export interface StoryBlock {
  readonly title: string;
  readonly body: string;
  readonly items: readonly CheckItem[];
  readonly image: StripImage;
  readonly imageFirst: boolean;
}

export interface Testimonial {
  readonly quote: string;
  readonly name: string;
  readonly initials: string;
  readonly meta: string;
  readonly featured?: boolean;
}

export const WHATSAPP_URL = 'https://chat.whatsapp.com/Jyj3Urt0JZWAqibVCJ4pT5';
export const LINKEDIN_URL = 'https://linkedin.com/company/heytalentoficial';
export const PHONE = '962366275';

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Nosotros', fragment: 'nosotros' },
  { label: 'Servicios', fragment: 'beneficios' },
  { label: '¿Cómo funciona?', fragment: 'como' },
  { label: 'Opiniones', fragment: 'testimonios' },
];

export const STATS: readonly Stat[] = [
  { value: '700+', label: 'Talentos activos' },
  { value: '50+', label: 'Empresas aliadas' },
  { value: '98%', label: 'Satisfacción' },
  { value: '100%', label: 'Gratuito' },
];

export const STRIP_IMAGES: readonly StripImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=200&fit=crop&auto=format',
    alt: 'Jóvenes profesionales en reunión',
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop&auto=format',
    alt: 'Workshop de empleabilidad',
  },
  {
    src: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=400&h=200&fit=crop&auto=format',
    alt: 'Mentoría personalizada',
  },
];

export const ABOUT_CARDS: readonly AboutCard[] = [
  {
    title: 'MISIÓN',
    body: 'Impulsar el desarrollo profesional de jóvenes peruanos fortaleciendo su empleabilidad y marca personal para que accedan a oportunidades laborales de calidad en Perú y Latinoamérica.',
    accent: 'var(--purple)',
  },
  {
    title: 'VISIÓN',
    body: 'Ser la comunidad de referencia en Perú para el desarrollo profesional juvenil, donde cada joven construya su camino con acompañamiento real y acceso igualitario.',
    accent: 'var(--purple-light)',
  },
];

export const PILLARS: readonly Pillar[] = [
  {
    icon: '🎯',
    title: 'Enfoque práctico',
    body: 'Aprendizaje aplicado al mundo laboral real de hoy',
  },
  {
    icon: '🤝',
    title: 'Comunidad activa',
    body: 'Red de jóvenes y mentores en constante movimiento',
  },
  {
    icon: '🆓',
    title: 'Totalmente gratuito',
    body: 'Sin barreras económicas para ningún joven',
  },
];

export const SERVICES: readonly Service[] = [
  {
    icon: 'user',
    title: 'Mentorías 1:1',
    body: 'Sesiones personalizadas con profesionales activos del mercado peruano e internacional.',
  },
  {
    icon: 'calendar',
    title: 'Workshops',
    body: 'Talleres prácticos sobre LinkedIn, marca personal y networking para destacar ante reclutadores.',
    featured: true,
  },
  {
    icon: 'chat',
    title: 'Comunidad WhatsApp',
    body: 'Grupo activo con oportunidades laborales, recursos y compañeros que impulsan tu crecimiento.',
  },
  {
    icon: 'linkedin',
    title: 'Optimización LinkedIn',
    body: 'Aprende a construir un perfil que atraiga reclutadores y genere oportunidades de forma orgánica.',
  },
  {
    icon: 'trending',
    title: 'Marca personal',
    body: 'Estrategias para diferenciarte y posicionarte como referente en tu área de especialización.',
  },
  {
    icon: 'video',
    title: 'Contenido YouTube',
    body: 'Talleres grabados, entrevistas con profesionales y guías prácticas disponibles cuando quieras.',
  },
];

export const STORY_BLOCKS: readonly StoryBlock[] = [
  {
    title: 'Desde el primer día te acompañamos',
    body: 'No importa en qué punto de tu carrera estés. HeyTalent te guía desde construir tu primera marca personal hasta conectar con empresas que valoran tu potencial.',
    items: [
      {
        lead: 'Inscríbete gratis',
        text: '— completa el formulario y nos ponemos en contacto contigo en 48h',
      },
      {
        lead: 'Participa en workshops',
        text: '— talleres en vivo y acceso a grabaciones cuando quieras',
      },
      {
        lead: 'Conecta y crece',
        text: '— accede a oportunidades laborales reales a través de la comunidad',
      },
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format',
      alt: 'Jóvenes en workshop de empleabilidad',
    },
    imageFirst: true,
  },
  {
    title: 'El mercado laboral juvenil en Perú necesita soluciones reales',
    body: 'El 74.9% de los jóvenes trabaja en informalidad y la falta de experiencia es la barrera #1 para acceder al primer empleo formal. HeyTalent existe para cambiar eso.',
    items: [
      { text: '15.4% de desempleo juvenil en Lima Metropolitana en 2025' },
      { text: '47.7% no puede encontrar empleo por falta de experiencia práctica' },
      { text: 'HeyTalent brinda las herramientas que la universidad no enseña' },
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&auto=format',
      alt: 'Joven profesional trabajando en laptop',
    },
    imageFirst: false,
  },
];

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      'Optimicé mi perfil de LinkedIn y en menos de un mes recibí tres llamadas de reclutadores. Fue un cambio total para mi carrera.',
    name: 'Andrea M.',
    initials: 'AM',
    meta: 'Administración · PUCP',
  },
  {
    quote:
      'El workshop de networking fue lo mejor que me pasó en mi búsqueda laboral. Aprendí a conectar con personas clave de forma genuina.',
    name: 'Carlos R.',
    initials: 'CR',
    meta: 'Ing. Sistemas · UNI',
    featured: true,
  },
  {
    quote:
      'La mentoría 1:1 me ayudó a entender qué quería en mi carrera. Mi mentora fue increíblemente honesta y el acompañamiento fue real.',
    name: 'Lucía P.',
    initials: 'LP',
    meta: 'Psicología · UPC',
  },
];

export const UNIVERSITIES: readonly string[] = [
  'PUCP',
  'UPC',
  'UNI',
  'UNMSM',
  'UP',
  'USIL',
  'ESAN',
  'ULIMA',
  'Otra',
];

export const INTERESTS: readonly string[] = [
  'Mentorías personalizadas',
  'Workshops y talleres',
  'Optimización de LinkedIn',
  'Comunidad y networking',
  'Todo lo anterior',
];
