"use client";
import {
    Code2,
    Server,
    Database,
    Wrench,
    ArrowUpRight,
    CodeXml,
} from "lucide-react";

import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiGit,
    SiGithub,

} from "@icons-pack/react-simple-icons";

import Container from "../Container/Container";

const skillCategories = [
    {
        title: "Frontend",
        description: "Building modern and responsive user interfaces.",
        Icon: Code2,
        skills: [
            { name: "HTML", Icon: SiHtml5 },
            { name: "CSS", Icon: SiCss },
            { name: "JavaScript", Icon: SiJavascript },
            { name: "TypeScript", Icon: SiTypescript },
            { name: "React", Icon: SiReact },
            { name: "Next.js", Icon: SiNextdotjs },
            { name: "Tailwind CSS", Icon: SiTailwindcss },
        ],

    },
    {
        title: "Backend",
        description: "Learning server-side architecture, development and RESTful APIs.",
        Icon: Server,
        skills: [
            { name: "Node.js", Icon: SiNodedotjs },
            { name: "Express.js", Icon: SiExpress },
        ],


    },
    {
        title: "Database",
        description: "Managing data storage, queries, and document schemas..",
        Icon: Database,
        skills: [
            { name: "MongoDB", Icon: SiMongodb },
        ],

    },
    {
        title: "Tools & Workflow",
        description: "Version control, editors, and essential development tools..",
        Icon: Wrench,
        skills: [
            { name: "Git", Icon: SiGit },
            { name: "GitHub", Icon: SiGithub },
            { name: "VS Code", Icon: CodeXml },
        ],

    },
];

export default function Skills() {

    return (
        <section id="skills" className="relative overflow-hidden py-24 sm:py-28">
            {/* Background Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-32 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]"
            />
            <Container>
                {/* Section Heading */}
                <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
                    <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                        <Code2 size={16} />
                        My Expertise
                    </p>

                    <div className="text-center">
                        <h2 className="relative inline-block pb-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                            <span className="text-foreground">Technical </span>
                            <span className="bg-linear-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                                Skills
                            </span>
                            <span className="absolute bottom-0 left-1/2 h-0.5 w-1/3 -translate-x-1/2 rounded-full bg-linear-to-r from-emerald-400 to-blue-500" />
                        </h2>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">
                        The technologies, frameworks and tools I use while learning
                        and building modern web applications.
                    </p>
                </div>

                {/* Skill Category Cards */}
                <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
                    {skillCategories.map(
                        ({ title, description, Icon, skills }) => (
                            <article
                                key={title}
                                className="skills-aura group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-8"
                            >

                                {/* Category Header */}

                                <div className="mb-6 flex items-center gap-3.5">
                                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-linear-to-br from-primary/15 to-primary/5 text-primary shadow-[0_0_18px_rgba(52,211,153,0.06)] transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_22px_rgba(52,211,153,0.15)]">
                                        <Icon
                                            size={21}
                                            strokeWidth={1.8}
                                            className="transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            {title}
                                        </h3>

                                        <div className="mt-1.5 h-0.5 w-8 rounded-full bg-primary/70 transition-all duration-300 group-hover:w-14 group-hover:bg-primary" />
                                    </div>
                                </div>


                                <p className="mt-2 text-sm leading-6 text-text-muted">
                                    {description}
                                </p>

                                {/* Individual Skills */}
                                <div className="mt-6 flex flex-wrap gap-2.5">

                                    {skills.map(({ name, Icon }) => (
                                        <span
                                            key={name}
                                            className="inline-flex items-center gap-2 rounded-lg border border-border bg-white/2.5 px-3 py-2 text-xs font-medium text-text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary sm:text-sm"
                                        >
                                            <Icon size={16} />
                                            {name}
                                        </span>
                                    ))}

                                </div>

                                {/* Bottom Accent */}
                                <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-linear-to-r from-primary/70 to-transparent transition-transform duration-300 group-hover:scale-x-100 sm:left-8 sm:right-8" />
                            </article>
                        ),
                    )}
                </div>

                {/* Bottom Note */}
                <div className="mt-12 flex items-center justify-center gap-2 text-center text-xs font-medium text-text-muted sm:text-sm">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Always learning. Always building.
                    <ArrowUpRight size={16} className="text-emerald-400" />
                </div>
            </Container>
        </section>
    );
}