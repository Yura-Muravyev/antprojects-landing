import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contacts from "@/components/Contacts";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Муравьёв Юрий Николаевич",
  jobTitle: "IT Project Manager",
  description:
    "IT Project Manager с 6+ годами опыта. Управляю продуктами и командами в сфере IT.",
  email: "yura.muravyev@yandex.ru",
  telephone: "+79057320885",
  url: "https://muravyev.dev",
  sameAs: ["https://t.me/username"],
  knowsAbout: ["Scrum", "Kanban", "Agile", "Waterfall", "Системный анализ", "Управление проектами"],
  worksFor: {
    "@type": "Organization",
    name: "Инжиниринговый Центр Железнодорожного Транспорта",
    url: "https://www.ecrt.ru",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contacts />
      </main>
    </>
  );
}
