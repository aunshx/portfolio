import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/case-study/CaseStudy";
import Footer from "@/components/layout/Footer";
import { CASE_STUDIES, getCaseStudy } from "@/content/case-studies";
import { SITE } from "@/content/profile";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  const url = `${SITE.url}/work/${study.slug}`;
  return {
    title: `${study.title} case study`,
    description: study.description,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      type: "article",
      url,
      title: `${study.title}: ${study.tagline}`,
      description: study.description,
      images: [{ url: study.hero.src, width: study.hero.w, height: study.hero.h, alt: study.hero.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title}: ${study.tagline}`,
      description: study.description,
      images: [study.hero.src],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <CaseStudy study={study} />
      <Footer />
    </>
  );
}
