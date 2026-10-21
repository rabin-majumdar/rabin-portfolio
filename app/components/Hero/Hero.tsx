import Image from "next/image";
import Link from "next/link";
import Container from "../Container/Container";
import { ArrowDown, Code2, FolderCodeIcon, Mail, TerminalIcon } from "lucide-react";

import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
} from "@icons-pack/react-simple-icons";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-[80svh] items-center overflow-x-clip py-12 sm:min-h-[80svh] sm:py-16 lg:min-h-[calc(100svh-5rem)] lg:py-12"
        >

            {/* Subtle Gradient Glow */}

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden"
            >
                <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-[100px] sm:h-96 sm:w-96" />

                <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px] sm:h-96 sm:w-96" />
            </div>

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                    backgroundImage:
                        "radial-gradient(var(--primary) 1.5px, transparent 1.5px)",
                    backgroundSize: "22px 22px",
                    maskImage:
                        "radial-gradient(ellipse at center, black 20%, transparent 75%)",
                }}
            />

            <Container className="relative z-10 grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Left: Introduction */}
                <div className="animate-fade-up motion-reduce:animate-none">
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-950/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300 shadow-lg shadow-emerald-950/20 backdrop-blur-md">
                            <span className="h-2 w-2 motion-safe:animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                            Hello, I&apos;m
                        </div>

                        <div className="relative block">
                            <h1 className="relative text-3xl font-extrabold tracking-tight text-slate-200 sm:text-5xl lg:text-7xl">
                                <span className="bg-linear-to-r from-white via-slate-200 to-emerald-300 bg-clip-text text-transparent">
                                    Rabin Madhu
                                </span>
                            </h1>
                        </div>

                    </div>

                    {/* Title */}
                    <div className="mt-5">
                        <h2 className="group inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-slate-900/70 px-4 py-2 text-base font-medium tracking-tight text-slate-200 shadow-lg shadow-emerald-950/10 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/40 hover:bg-slate-900 sm:text-lg">
                            <TerminalIcon
                                size={20}
                                className="text-emerald-400 animate-pulse"
                            />
                            Frontend Web Developer
                        </h2>
                    </div>
                    {/* Description */}
                    <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
                        I build modern, responsive, and user-friendly web experiences using{" "}
                        <span className="font-medium text-slate-200">React</span>,{" "}
                        <span className="font-medium text-slate-200">Next.js</span>,{" "}
                        <span className="font-medium text-slate-200">TypeScript</span>, and{" "}
                        <span className="font-medium text-slate-200">Tailwind CSS</span> — currently
                        expanding my skills into{" "}
                        <span className="font-semibold text-emerald-300">
                            Full-Stack Development
                        </span>.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">

                        {/* <button
                            type="button"
                            onClick={() => scrollToSection("#projects")}
                            className="group relative inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-slate-900/80 px-6 py-2.5 text-sm font-medium text-slate-100 shadow-lg shadow-emerald-950/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/60 hover:bg-slate-800/90 hover:shadow-emerald-500/20"
                        >
                            <FolderCodeIcon
                                size={16}
                                className="text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-300"
                            />

                            <span className="bg-linear-to-r from-emerald-400 to-blue-400 bg-clip-text font-semibold text-transparent">
                                Explore My Work
                            </span>

                            <ArrowDown
                                size={16}
                                className="text-emerald-400 transition-all duration-300 group-hover:translate-y-1 group-hover:scale-110 group-hover:text-emerald-300"
                            />
                        </button> */}
                        {/* Primary Button */}
                        <Link
                            href="#projects"
                            className="group inline-flex min-h-11 items-center gap-2.5 rounded-full border border-emerald-400/30 bg-linear-to-r from-emerald-500/10 to-blue-500/10 px-5 py-2.5 text-sm font-semibold text-slate-100 shadow-lg shadow-emerald-950/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/60 hover:from-emerald-500/20 hover:to-blue-500/20 hover:shadow-emerald-500/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400 sm:px-6"
                        >
                            <FolderCodeIcon
                                size={16}
                                className="shrink-0 text-emerald-400 transition-transform duration-300 group-hover:scale-110"
                            />

                            <span className="bg-linear-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
                                Explore My Work
                            </span>

                            <ArrowDown
                                size={16}
                                className="shrink-0 text-emerald-400 transition-transform duration-300 group-hover:translate-y-1"
                            />
                        </Link>

                        {/* Secondary Button */}
                        <Link
                            href="#contact"
                            className="group inline-flex min-h-11 items-center gap-2.5 rounded-full border border-slate-700/70 bg-slate-900/50 px-5 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-slate-800/70 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400 sm:px-6"
                        >
                            <Mail
                                size={16}
                                className="shrink-0 text-emerald-400 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                            />
                            <span>Contact Me</span>
                        </Link>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-8 sm:mt-10">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                            Tech Stack
                        </p>

                        <div className="flex flex-wrap gap-2 sm:gap-2.5">
                            {[
                                {
                                    name: "HTML",
                                    Icon: SiHtml5,
                                    color: "hover:text-[#E34F26] hover:border-[#E34F26]/40 hover:bg-[#E34F26]/10",
                                },
                                {
                                    name: "CSS",
                                    Icon: SiCss,
                                    color: "hover:text-[#1572B6] hover:border-[#1572B6]/40 hover:bg-[#1572B6]/10",
                                },
                                {
                                    name: "JavaScript",
                                    Icon: SiJavascript,
                                    color: "hover:text-[#F7DF1E] hover:border-[#F7DF1E]/40 hover:bg-[#F7DF1E]/10",
                                },
                                {
                                    name: "TypeScript",
                                    Icon: SiTypescript,
                                    color: "hover:text-[#3178C6] hover:border-[#3178C6]/40 hover:bg-[#3178C6]/10",
                                },
                                {
                                    name: "React",
                                    Icon: SiReact,
                                    color: "hover:text-[#61DAFB] hover:border-[#61DAFB]/40 hover:bg-[#61DAFB]/10",
                                },
                                {
                                    name: "Next.js",
                                    Icon: SiNextdotjs,
                                    color: "hover:text-white hover:border-white/40 hover:bg-white/10",
                                },
                            ].map(({ name, Icon, color }) => (
                                <span
                                    key={name}
                                    className={`group inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/50 px-2.5 py-1.5 text-xs font-medium text-slate-300 shadow-sm shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/20 ${color}`}
                                >
                                    <Icon
                                        size={12}
                                        aria-hidden="true"
                                        className="shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                                    />
                                    <span>{name}</span>
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right: Profile Image and Abstract Design */}
                <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-4 lg:ml-auto lg:mr-4">


                    {/* Responsive Green Glow */}
                    <div className="pointer-events-none absolute h-56 w-56 rounded-full bg-emerald-400/15 blur-[60px] sm:h-72 sm:w-72 sm:blur-[75px] lg:h-80 lg:w-80 lg:blur-[90px]" />

                    {/* Responsive Circular Outline */}
                    <div className="pointer-events-none absolute h-64 w-64 rounded-full border border-emerald-400/15 sm:h-80 sm:w-80 lg:h-96 lg:w-96" />

                    {/* Abstract Shape */}
                    <div className="absolute right-4 top-6 h-24 w-24 rotate-12 rounded-2xl border border-primary/30 sm:right-6 sm:top-8" />

                    {/* Floating Tech Badge - Code */}
                    <div
                        aria-hidden="true"
                        className="absolute left-2 top-12 z-20 motion-safe:animate-float sm:-left-3 sm:top-16 lg:-left-4"
                    >
                        <div className="flex h-12 w-12 -rotate-12 items-center justify-center rounded-2xl border border-primary/30 bg-surface/90 text-lg font-bold text-primary shadow-lg shadow-primary/10 backdrop-blur">
                            <Code2 size={20} />
                        </div>
                    </div>

                    {/* Floating Tech Badge - JS */}
                    <div
                        aria-hidden="true"
                        className="absolute right-2 bottom-20 z-20 motion-safe:animate-float sm:-right-3 sm:bottom-24 lg:-right-4"
                    >
                        <div className="flex h-12 w-12 rotate-12 items-center justify-center rounded-xl border border-primary/30 bg-surface/90 text-sm font-bold text-primary shadow-lg shadow-primary/10 backdrop-blur">
                            <SiJavascript
                                className="rounded-full"
                                size={20}
                                color="#F7DF1E"
                            />
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div
                        className="group motion-safe:animate-fade-up-delayed relative h-72 w-72 overflow-hidden rounded-full border-2 border-primary/60 bg-surface shadow-[0_0_35px_rgba(52,211,153,0.15)] transition-all duration-500 hover:border-primary hover:shadow-[0_0_45px_rgba(52,211,153,0.3)] sm:h-80 sm:w-80"
                    >
                        <Image
                            src="/images/rabin-dev.jpg"
                            alt="Rabin - Web Developer"
                            fill
                            sizes="(max-width: 639px) 288px, 320px"
                            className="object-cover object-[center_25%]"
                            priority
                        />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-4 left-1/2 z-30 -translate-x-1/2 rounded-full border border-emerald-500/20 bg-surface/80 px-4 py-2 shadow-xl shadow-emerald-950/30 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-emerald-950/50 sm:-bottom-5 sm:left-2 sm:translate-x-0 sm:px-5 sm:py-2.5">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                            <span className="relative flex h-2.5 w-2.5 shrink-0 sm:h-3 sm:w-3">

                                <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-emerald-500 opacity-60" />
                                <span className="relative inline-flex h-full w-full rounded-full bg-emerald-400" />
                            </span>
                            <p className="whitespace-nowrap text-xs font-semibold tracking-tight text-emerald-300 sm:text-sm">
                                Web Developer
                            </p>
                        </div>
                    </div>
                    {/* Decorative Dot */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-4 bottom-12 h-7 w-7 animate-pulse rounded-full bg-linear-to-r from-emerald-400 to-blue-500 blur-sm shadow-lg shadow-emerald-500/30"
                    />
                </div>
            </Container>

            {/* Scroll Indicator */}
            <Link
                href="#projects"
                aria-label="Scroll to projects"
                className="group absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 text-slate-400 transition-colors duration-300 hover:text-emerald-400 lg:flex"
            >
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase transition-transform duration-300 group-hover:translate-y-0.5">
                    Scroll to explore
                </span>

                <span className="flex h-8 w-5 justify-center rounded-full border border-slate-700/80 bg-slate-900/40 p-1.5 backdrop-blur-sm transition-colors duration-300 group-hover:border-emerald-400/50 group-hover:shadow-md group-hover:shadow-emerald-500/10">
                    <span className="h-1.5 w-1 rounded-full bg-emerald-400 motion-safe:animate-[bounce_2s_infinite]" />
                </span>
            </Link>
        </section>
    );
}
