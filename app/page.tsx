import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  demo: string;
  image: string;
  design: {
    url: string;
    author: string;
    authorUrl: string;
    license: string;
    licenseUrl: string;
  };
};

const projects: Project[] = [
  {
    title: "Financial Dashboard",
    description:
      "Desktop layout matched pixel-for-pixel against the original mockup. Tablet and mobile layouts are my own responsive adaptation.",
    demo: "/demos/dashboard-1",
    image: "/img/financial-dashboard/financial-dashboard.png",
    design: {
      url: "https://www.figma.com/community/file/894542039433511203/financial-dashboard",
      author: "@piotrek",
      authorUrl: "https://www.figma.com/@piotrek",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    },
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <header className="max-w-2xl">
          <h1 className="text-sm font-medium uppercase tracking-widest text-emerald-700">
            Pixel Perfect Practice
          </h1>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-neutral-700 text-pretty">
            <p>
              Hi, I&apos;m Mauricio. I built this tool to do visual pixel to pixel comparison of HTML user interfaces against actual Figma designs as a practice project.
            </p>
            
          </div>
        </header>

        <section className="mt-14" aria-labelledby="projects-heading">
          <h2
            id="projects-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            Projects
          </h2>

          <ul className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li
                key={project.demo}
                className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Link
                  href={project.demo}
                  className="relative block aspect-16/10 overflow-hidden bg-neutral-100"
                  aria-label={`Open the ${project.title} demo`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} design preview`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {project.description}
                  </p>

                  <p className="mt-5 border-t border-neutral-100 pt-4 text-xs leading-relaxed text-neutral-500">
                    Original design by{" "}
                    <a
                      href={project.design.authorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-neutral-800 underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-800"
                    >
                      {project.design.author}
                    </a>{" "}
                    on Figma Community, licensed under{" "}
                    <a
                      href={project.design.licenseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-800"
                    >
                      {project.design.license}
                    </a>
                    . Implementation is my own work, not affiliated with the
                    designer.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3 pt-1">
                    <Link
                      href={project.demo}
                      className="inline-flex items-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
                    >
                    My Html
                    </Link>
                    <a
                      href={project.design.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:border-neutral-900"
                    >
                      Original design ↗
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
