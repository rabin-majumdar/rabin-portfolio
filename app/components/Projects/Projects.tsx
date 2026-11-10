import Container from "@/app/components/Container/Container";
import BazarDor from "./items/BazarDor";
import { BriefcaseBusiness } from "lucide-react";

export default function Projects() {
    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="relative overflow-hidden py-20 sm:py-24"
        >
            <Container>
                {/* Section Heading */}
                <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center sm:mb-16">
                    <p className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-slate-700/70 bg-slate-900/50 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-slate-300 uppercase backdrop-blur-md">
                        <BriefcaseBusiness
                            size={16}
                            strokeWidth={1.8}
                            aria-hidden="true"
                            className="shrink-0 text-emerald-400"
                        />
                        <span>My Work</span>
                    </p>

                    <h2
                        id="projects-heading"
                        className="relative inline-block pb-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
                    >
                        <span className="text-foreground">Selected </span>

                        <span className="bg-linear-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                            Projects
                        </span>

                        <span
                            aria-hidden="true"
                            className="absolute bottom-0 left-1/2 h-0.5 w-16 -translate-x-1/2 rounded-full bg-linear-to-r from-emerald-400 to-blue-500"
                        />
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                        Explore some of the projects I&apos;ve built while
                        developing my skills and gaining practical experience.
                    </p>
                </div>

                {/* Projects Grid */}
                <div
                    aria-label="Project portfolio"
                    className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    <BazarDor />
                    <BazarDor />
                    <BazarDor />
                </div>
            </Container>
        </section>
    );
}

