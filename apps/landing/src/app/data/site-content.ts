import { IconName } from '@heytalent/ui';

export interface NavLink {
  label: string;
  href: string;
}

export interface CardItem {
  icon: IconName;
  title: string;
  description: string;
  href?: string;
}

export interface PhotoCard {
  image: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export const BRAND = {
  name: 'Hey Talent',
  logo: 'images/heytalent-logo.webp',
  tagline: 'Networking y búsqueda de empleo para talento joven: conecta, postula y crece.',
} as const;

export const NAV_LINKS: NavLink[] = [];

export const HERO = {
  eyebrow: 'Networking + Empleo',
  title: 'Hey Talent: tu red para conseguir el trabajo que quieres',
  subtitle:
    'Prácticas, part time, full time y remoto en un solo lugar. Crea tu perfil, arma tu CV y conecta con empresas que buscan talento como el tuyo.',
  searchPlaceholder: '¿Qué empleo buscas?',
} as const;

export const CATEGORIES: CardItem[] = [
  {
    icon: 'graduation-cap',
    title: 'Prácticas',
    description: 'Empieza tu carrera con acompañamiento.',
    href: '/empleos',
  },
  {
    icon: 'briefcase-business',
    title: 'Part / Full Time',
    description: 'Jornadas que se adaptan a tu vida.',
    href: '/empleos',
  },
  {
    icon: 'laptop',
    title: 'Remoto',
    description: 'Trabaja desde cualquier lugar del país.',
    href: '/empleos',
  },
];

export const FEATURES: CardItem[] = [
  {
    icon: 'search',
    title: 'Búsqueda con filtros',
    description: 'Área, ciudad, modalidad, salario y más.',
  },
  {
    icon: 'users',
    title: 'Networking real',
    description: 'Conecta con reclutadores y otros postulantes.',
  },
  {
    icon: 'rocket',
    title: 'Postula en un clic',
    description: 'Con tu CV guardado y perfil completo.',
  },
];

export const ABOUT = {
  eyebrow: 'Quiénes somos',
  title: 'Impulsamos el desarrollo profesional del talento joven',
  body: 'Hey Talent impulsa el desarrollo profesional de jóvenes y profesionales, fortaleciendo su empleabilidad y marca personal a través de formación práctica, mentorías y experiencias alineadas al nuevo panorama laboral.',
  link: { label: 'Conoce más sobre nosotros →', href: '/nosotros' },
} as const;

export const ABOUT_STATS: Stat[] = [
  { value: '2025', label: 'Año de fundación' },
  { value: 'Perú', label: 'Base de operaciones' },
  { value: '+1.8k%', label: 'Crecimiento del equipo' },
];

export const ABOUT_CARDS: PhotoCard[] = [
  {
    image: 'images/comunidad-taller.webp',
    title: 'Formación práctica',
    description: 'Programas alineados al nuevo panorama laboral para fortalecer tu empleabilidad.',
  },
  {
    image: 'images/mentoria-cv.webp',
    title: 'Mentorías y asesorías',
    description: 'Acompañamiento personalizado en CV, entrevistas y plan de carrera.',
  },
  {
    image: 'images/networking-evento.webp',
    title: 'Marca personal',
    description: 'Eventos y comunidad para hacerte visible y potenciar tu presencia profesional.',
  },
];

export interface Partner {
  name: string;
  logo?: string;
  alt?: string;
}

export const PARTNERS_SECTION = {
  eyebrow: 'NUESTROS ALIADOS',
  title: 'Organizaciones que confían en el talento joven',
  subtitle: 'Empresas, universidades y comunidades con las que creamos oportunidades juntos.',
} as const;

export const PARTNERS: Partner[] = [
  {
    name: 'Academia Hooke',
    logo: 'images/partners/academia-hooke.webp',
    alt: 'Logo de Academia Hooke',
  },
  {
    name: 'COE Business School',
    logo: 'images/partners/coe-business-school.webp',
    alt: 'Logo de COE Business School',
  },
  {
    name: 'Fundación WE',
    logo: 'images/partners/fundacion-we.webp',
    alt: 'Logo de Fundación WE',
  },
  {
    name: 'Gestión 360',
    logo: 'images/partners/gestion-360.webp',
    alt: 'Logo de Gestión 360',
  },
  {
    name: 'IISE PUCP',
    logo: 'images/partners/iise-pucp.webp',
    alt: 'Logo de IISE PUCP',
  },
  {
    name: 'Inspírate Creator',
    logo: 'images/partners/inspirate-creator.webp',
    alt: 'Logo de Inspírate Creator',
  },
  {
    name: 'Mar de becas',
    logo: 'images/partners/mar-de-becas.webp',
    alt: 'Logo de Mar de becas',
  },
  {
    name: 'WarmiVentures',
    logo: 'images/partners/warmiventures.webp',
    alt: 'Logo de WarmiVentures',
  },
];

export const CONTACT = {
  whatsapp: 'https://chat.whatsapp.com/Jyj3Urt0JZWAqibVCJ4pT5',
  linkedin: 'https://www.linkedin.com/company/heytalentoficial/',
  phoneHref: 'tel:+51962366275',
  phoneLabel: 'Asesorías: 962 366 275',
} as const;

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Buscar Empleos',
    links: [
      { label: 'Prácticas', href: '/empleos' },
      { label: 'Trabajo Part Time', href: '/empleos' },
      { label: 'Trabajo Full Time', href: '/empleos' },
      { label: 'Trabajo Remoto', href: '/empleos' },
      { label: 'Filtros', href: '/empleos' },
    ],
  },
  {
    title: 'Mi Cuenta',
    links: [
      { label: 'Iniciar Sesión', href: '/cuenta' },
      { label: 'Registrarse', href: '/cuenta' },
      { label: 'Perfil', href: '/cuenta' },
      { label: 'CV', href: '/cuenta' },
      { label: 'Postulaciones', href: '/cuenta' },
      { label: 'Favoritos', href: '/cuenta' },
    ],
  },
  {
    title: 'Empresas',
    links: [
      { label: 'Publicar Oferta', href: '/empresas' },
      { label: 'Buscar Candidatos', href: '/empresas' },
      { label: 'Gestión de Ofertas', href: '/empresas' },
      { label: 'Dashboard', href: '/empresas' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Blog', href: '/recursos' },
      { label: 'Guías', href: '/recursos' },
      { label: 'Consejos Laborales', href: '/recursos' },
      { label: 'Preparación para entrevistas', href: '/recursos' },
      { label: 'Plantillas de CV', href: '/recursos' },
    ],
  },
  {
    title: 'Nosotros',
    links: [
      { label: 'Quiénes somos', href: '/nosotros' },
      { label: 'Misión', href: '/nosotros' },
      { label: 'Contacto', href: '/nosotros' },
    ],
  },
  {
    title: 'Soporte',
    links: [
      { label: 'Redes Sociales', href: '/soporte' },
      { label: 'Preguntas Frecuentes', href: '/soporte' },
      { label: 'Ayuda', href: '/soporte' },
    ],
  },
];
