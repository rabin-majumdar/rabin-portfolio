"use client";
import type React from "react";
import {
    Code2, Server, Database,
    Wrench, ArrowUpRight,
    Layers, ShieldCheck, CloudUpload,
} from "lucide-react";

import {
    SiHtml5, SiCss, SiJavascript,
    SiTypescript, SiReact, SiNextdotjs,
    SiTailwindcss, SiNodedotjs, SiExpress,
    SiMongodb, SiGit, SiGithub,
    SiShadcnui,
    SiNetlify, SiBetterauth,
} from "@icons-pack/react-simple-icons";


import { VscVscode } from "react-icons/vsc";
import { SiDaisyui, SiFirebase, SiHeroui, SiVercel } from "react-icons/si";

import Container from "../Container/Container";
import CustomIcon from "../custom-icons/Icon";

type Skill = {
    name: string;
    Icon: React.ElementType;
    color: string;
    customIcon?: string;
};

type SkillCategory = {
    title: string;
    description: string;
    Icon: React.ElementType;
    skills: Skill[];
};

const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        description: "Building modern and responsive user interfaces.",
        Icon: Code2,
        skills: [
            { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
            { name: "CSS", Icon: SiCss, color: "#1572B6" },
            { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
            { name: "DaisyUI", Icon: SiDaisyui, color: "#FFC63A", customIcon: "daisyui" },
            { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
            { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
            { name: "React", Icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
            { name: "HeroUI", Icon: SiHeroui, color: "#FFFFFF" },
            { name: "shadcn/ui", Icon: SiShadcnui, color: "#FFFFFF" },
        ],
    },
    {
        title: "Backend",
        description: "Learning server-side architecture, development and RESTful APIs.",
        Icon: Server,
        skills: [
            { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
            { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
        ],
    },
    {
        title: "Database",
        description: "Managing data storage, queries, and document schemas.",
        Icon: Database,
        skills: [
            { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
        ],
    },
    {
        title: "Tools & Workflow",
        description: "Version control, editors, and essential development tools.",
        Icon: Wrench,
        skills: [
            { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
            { name: "Git", Icon: SiGit, color: "#F05032" },
            { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
        ],
    },

    {
        title: "Authentication",
        description: "Implementing secure authentication and user sessions.",
        Icon: ShieldCheck,
        skills: [
            { name: "Firebase", Icon: SiFirebase, color: "#FFCA28", customIcon: "firebase" },
            { name: "Better Auth", Icon: SiBetterauth, color: "#FFFFFF" },
        ],
    },
    {
        title: "Tools & Deployment",
        description: "Managing development workflows and deploying web applications.",
        Icon: CloudUpload,
        skills: [
            { name: "Netlify", Icon: SiNetlify, color: "#00C7B7" },
            { name: "Vercel", Icon: SiVercel, color: "#FFFFFF", customIcon: "vercel" },
        ],
    },

];

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative py-24 sm:py-28"
        >
            <Container className="relative z-10">
                {/* Section Heading */}
                <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
                    <p className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-slate-700/70 bg-slate-900/50 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-slate-300 uppercase backdrop-blur-md">
                        <Layers
                            size={16}
                            strokeWidth={1.8}
                            className="shrink-0 text-emerald-400"
                        />
                        <span>My Tech Stack</span>
                    </p>

                    <div className="text-center">
                        <h2 className="relative inline-block pb-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                            <span className="text-foreground">Technical </span>
                            <span className="bg-linear-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                                Skills
                            </span>
                            <span
                                aria-hidden="true"
                                className="absolute bottom-0 left-1/2 h-0.5 w-16 -translate-x-1/2 rounded-full bg-linear-to-r from-emerald-400 to-blue-500"
                            />
                        </h2>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">
                        The technologies and tools I&apos;m learning and using
                        to build modern web applications.
                    </p>
                </div>
                {/* Skill Category Cards */}
                <div className="grid gap-5  lg:grid-cols-3 lg:gap-6">
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
                                    {skills.map(({ name, Icon: SkillIcon, color, customIcon }) => (
                                        <span
                                            key={name}
                                            className="skill-item inline-flex cursor-default items-center gap-2 rounded-lg border border-white/20 bg-white/2 px-2 py-1 text-xs font-normal text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/20 hover:bg-emerald-400/5 hover:text-slate-200 sm:text-sm"
                                        >
                                            {customIcon ? (
                                                <CustomIcon
                                                    name={customIcon}
                                                    fallback={SkillIcon}
                                                    size={15}
                                                    color={color}
                                                    className="shrink-0 transition-transform duration-300 hover:scale-110"
                                                />
                                            ) : (
                                                <SkillIcon
                                                    size={15}
                                                    color={color}
                                                    className="shrink-0 transition-transform duration-300 hover:scale-110"
                                                />
                                            )}
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