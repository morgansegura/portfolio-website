import type { SpacingType } from "@/types/content.types";

export interface LandingPageProps {
  __id: string;
  __sectionId: string;
  sectionClassName?: string;
  sectionTitle?: string;
  sectionTheme?: string;
  buffer?: SpacingType;
  spacer?: boolean;
}

export const LANDING_PAGE_MOCK: LandingPageProps[] = [
  {
    __id: "hero",
    __sectionId: "hero",
    sectionTheme: "none",
    sectionClassName: "hero-section",
    sectionTitle: "",
  },
  {
    __id: "works",
    __sectionId: "works",
    sectionTheme: "dark",
    sectionClassName: "works-section",
    sectionTitle: "",
    buffer: { top: true, bottom: true },
  },
  {
    __id: "contact",
    __sectionId: "contact",
    sectionTitle: "Contact",
    sectionTheme: "neutral",
    sectionClassName: "contact-section",
    buffer: { top: true, bottom: true },
  },
  {
    __id: "works-1",
    __sectionId: "works-1",
    sectionTheme: "light",
    sectionClassName: "works-section",
    sectionTitle: "Work",
    buffer: { top: true, bottom: true },
  },

  {
    __id: "projects",
    __sectionId: "projects",
    sectionTheme: "neutral",
    sectionClassName: "projects-section",
    sectionTitle: "Projects",
    buffer: { top: true, bottom: true },
  },
];
