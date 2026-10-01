export interface NavLink {
  label: string;
  href: string;
  /** Abre en pestaña nueva: para destinos fuera de la landing (redes, WhatsApp). */
  external?: boolean;
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
} as const;

export const ABOUT = {
  eyebrow: 'Quiénes somos',
  title: 'Impulsamos el desarrollo profesional del talento joven',
  body: 'Hey Talent impulsa el desarrollo profesional de jóvenes y profesionales, fortaleciendo su empleabilidad y marca personal a través de formación práctica, mentorías y experiencias alineadas al nuevo panorama laboral.',
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

  instagram: 'https://www.instagram.com/heytalentoficial/?hl=es',

  linkedin: 'https://www.linkedin.com/company/heytalentoficial/posts/?feedView=all',

  phoneHref: 'tel:+51938733627',
  phoneLabel: 'Asesorías: 938 733 627',
} as const;

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Nosotros',
    links: [
      { label: 'Quiénes somos', href: '#nosotros' },
      { label: 'Talleres', href: '#eventos' },
      { label: 'Aliados', href: '#aliados' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: 'Únete al WhatsApp', href: CONTACT.whatsapp, external: true },
      { label: 'LinkedIn', href: CONTACT.linkedin, external: true },
      { label: 'Instagram', href: CONTACT.instagram, external: true },
      { label: CONTACT.phoneLabel, href: CONTACT.phoneHref },
    ],
  },
];
