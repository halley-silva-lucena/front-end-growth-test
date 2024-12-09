import { notFound, redirect } from "next/navigation";
import { getPageData } from "@/lib/getPageData";
import { Params } from "@/lib/types";
import { LOCALES } from "@/lib/constants";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { Brands } from "@/components/sections/Brands";
import { CardContentGrid } from "@/components/sections/CardContentGrid";
import { Modules } from "@/components/sections/Modules";
import { CenteredCTA } from "@/components/sections/CenteredCTA";

const sectionComponents = {
  "sections.hero-video": HeroVideo,
  "sections.brands": Brands,
  "sections.card-content-grid": CardContentGrid,
  "sections.modules": Modules,
  "sections.centered-cta": CenteredCTA,
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params;

  const pageData = await getPageData(locale);

  // console.log("Page -> pageData", pageData);

  if (!pageData) {
    notFound();
  }

  return (
    <div className="flex flex-col space-y-8">
      {pageData.contentSections.map((section: any) => {
        const SectionComponent = sectionComponents[section.__component as keyof typeof sectionComponents];
        if (!SectionComponent) return null;
        return <SectionComponent key={`${section.__component}-${section.id}`} {...section} />;
      })}
    </div>
  );
}