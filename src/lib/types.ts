// Global Types
export interface Metadata {
  metaTitle: string;
  metaDescription: string;
  robots: string;
  shareImage: string | null;
}

export type Params = Promise<{ locale: string }>;

export type Locale = "en" | "pt";

export interface Button {
  id: number;
  appearance: "solid" | "ghost";
  size: "md";
  color: string;
  url: string;
  text: string;
  subText: string | null;
  fluid: boolean;
  newTab: boolean;
  startIcon: string | null;
  endIcon: string | null;
}

export interface MenuItem {
  id: number;
  title: string;
  link: string | null;
  openNewWindow: boolean;
  dropdown: {
    id: number;
    title: string;
    link: string;
    openNewWindow: boolean;
  }[];
}

export interface Social {
  facebook: string;
  instagram: string;
  twitter: string;
  youTube: string;
  tikTok: string;
  linkedIn: string;
}

export interface GlobalData {
  id: number;
  locale: string;
  siteName: string;
  helpText: string;
  copyright: string;
  metadata: Metadata;
  menu: MenuItem[];
  social: Social;
  footerMenu: MenuItem[];
}

// Page Types
export interface HeroSection {
  __component: "sections.hero-video";
  theme: string;
  full: boolean;
  preTitle: string | null;
  title: string;
  description: string;
  buttons: Button[];
  demo: {
    title: string;
    url: string;
    format: string;
  };
  background: {
    width: number;
    height: number;
    url: string;
  };
}

export interface BrandsSection {
  __component: "sections.brands";
  theme: string;
  brands: {
    id: number;
    title: string;
    url: string;
  }[];
}

export interface CardContentGridSection {
  __component: "sections.card-content-grid";
  theme: string;
  preTitle: string;
  title: string;
  description: string;
  cards: {
    id: number;
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface ModulesSection {
  __component: "sections.modules";
  theme: string;
  preTitle: string | null;
  title: string;
  description: string;
  cards: {
    id: number;
    title: string;
    description: string;
    button: Button;
  }[];
}

export interface CenteredCTASection {
  __component: "sections.centered-cta";
  theme: string;
  preTitle: string | null;
  title: string;
  description: string;
  buttons: Button[];
}

export type ContentSection = HeroSection | BrandsSection | CardContentGridSection | ModulesSection | CenteredCTASection;

export interface Page {
  id: number;
  slug: string;
  path: string;
  locale: string;
  alternates: {
    locale: string;
    path: string;
  }[];
  metadata: Metadata;
  contentSections: ContentSection[];
}
