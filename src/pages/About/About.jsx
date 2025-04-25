import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Full-Stack Developer, Builder, Learner
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="profile illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-6">
              <p className="text-white">
                Salut ! Je suis <span className="font-bold">Dylan Qin</span>, développeur full-stack animé par la curiosité et l’envie de bâtir des expériences numériques marquantes.  
                Qu’il s’agisse de <span className="font-bold">React</span> en frontend ou de <span className="italic">Spring/Java</span> en backend, j’adore passer de l’idée au code opérationnel.
              </p>

              <p className="text-white">
                Web, mobile, jeux vidéo… l’informatique m’a d’abord émerveillé, puis captivé : aujourd’hui je veux contribuer activement à créer les outils et les univers de demain.
              </p>

              <p className="text-white">
                <span className="font-semibold">Mon objectif</span> ? Devenir un expert full-stack capable de piloter tout le cycle de vie d’une application, en intégrant les meilleures pratiques DevOps et une méthodologie rigoureuse.  
                J’aspire à déployer des architectures résilientes et performantes, tout en cultivant la créativité et la souplesse du frontend.
              </p>

              <p className="text-white">
                En parallèle, je me passionne pour la finance et le <span className="font-semibold">trading</span> : un terrain où l’analyse, la stratégie et la patience sont aussi essentielles que dans le développement.  
                Cette double discipline me pousse chaque jour à affiner mon regard, qu’il s’agisse d’un algorithme ou d’un graphique boursier.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                  Discipline, autonomie et <a href="https://en.wikipedia.org/wiki/Kaizen" className="font-semibold">Kaizen(改善)</a> guident chacun de mes pas : progresser un peu chaque jour, apprendre de chaque projet et prendre plaisir à construire l’inédit.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
