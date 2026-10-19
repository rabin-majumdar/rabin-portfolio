import { ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
} from "@icons-pack/react-simple-icons";
import Container from "../Container/Container";


export default function Hero() {
    return (
        <section
            id="about"
            className="relative flex min-h-[80vh] items-center py-16 sm:py-20"
        >

            <Container className="grid items-center gap-14 md:grid-cols-2 md:gap-16">

                {/* Left: Introduction */}
                <div className="animate-fade-up motion-reduce:animate-none">
                    <p className="mb-4 text-sm font-medium tracking-[0.2em] text-primary uppercase">
                        Hello, I&apos;m
                    </p>



                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                        Rabin{" "}
                        <span className="bg-linear-to-r from-white via-emerald-200 to-primary bg-clip-text text-transparent">
                            Madhu
                        </span>
                        <span className="text-primary">.</span>
                    </h1>

                    <h2 className="mt-5 text-2xl font-medium tracking-wide text-text-muted sm:text-3xl">
                        Aspiring Web Developer
                    </h2>

                    <p className="mt-6 max-w-xl text-base leading-8 text-text-muted sm:text-lg">
                        I build modern, responsive, and user-friendly web
                        experiences using React, Next.js, TypeScript, and
                        Tailwind CSS.
                    </p>


                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9">

                        <Link
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-400 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:from-emerald-300 hover:to-emerald-500 hover:shadow-xl hover:shadow-emerald-500/30"
                        >
                            Explore My Work
                            <ArrowUpRight size={16} />
                        </Link>

                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/3 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:bg-primary/10 hover:text-primary"
                        >
                            <Mail size={15} />
                            Contact Me
                        </Link>

                    </div>



                    {/* Tech Stack */}
                    <div className="mt-10">
                        <p className="mb-4 text-xs font-medium tracking-[0.2em] text-text-muted uppercase">
                            Tech Stack
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {[
                                { name: "HTML", Icon: SiHtml5 },
                                { name: "CSS", Icon: SiCss },
                                { name: "JavaScript", Icon: SiJavascript },
                                { name: "TypeScript", Icon: SiTypescript },
                                { name: "React", Icon: SiReact },
                                { name: "Next.js", Icon: SiNextdotjs },
                            ].map(({ name, Icon }) => (
                                <span
                                    key={name}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-2.5 py-1.5 text-[11px] font-medium text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                                >
                                    <Icon size={14} />
                                    {name}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right: Profile Image and Abstract Design */}
                <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
                    {/* Green Glow */}


                    <div className="absolute h-64 w-64 rounded-full bg-primary/20 blur-[80px] sm:h-80 sm:w-80" />

                    <div className="absolute h-72 w-72 rounded-full border border-primary/20 sm:h-80 sm:w-80" />


                    {/* Dotted Background Pattern */}
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


                    {/* Abstract Shape */}
                    <div className="absolute right-4 top-6 h-24 w-24 rotate-12 rounded-2xl border border-primary/30 sm:right-6 sm:top-8" />


                    {/* Floating Tech Badge - Code */}
                    <div className="absolute left-0 top-16 z-20 animate-float sm:-left-4">
                        <div className="flex h-14 w-14 -rotate-12 items-center justify-center rounded-2xl border border-primary/30 bg-surface/90 text-lg font-bold text-primary shadow-lg shadow-primary/10 backdrop-blur">
                            {"</>"}
                        </div>
                    </div>

                    {/* Floating Tech Badge - JS */}
                    <div className="absolute right-0 bottom-24 z-20 animate-float sm:-right-4">
                        <div className="flex h-12 w-12 rotate-12 items-center justify-center rounded-xl border border-primary/30 bg-surface/90 text-sm font-bold text-primary shadow-lg shadow-primary/10 backdrop-blur">
                            JS
                        </div>
                    </div>


                    {/* Profile Image */}
                    <div
                        className="group animate-fade-up-delayed relative h-72 w-72 overflow-hidden rounded-full border-2 border-primary/60 bg-surface shadow-[0_0_35px_rgba(52,211,153,0.15)] transition-all duration-500 hover:border-primary hover:shadow-[0_0_45px_rgba(52,211,153,0.3)] sm:h-80 sm:w-80"
                    >
                        <Image
                            src="/images/rabin-dev.jpg"
                            alt="Rabin Madhu - Web Developer"
                            fill
                            sizes="(max-width: 639px) 288px, 320px"
                            className="object-cover object-[center_25%]"
                            priority
                        />
                    </div>


                    {/* Floating Badge */}
                    <div className="absolute -bottom-4 -left-2 rounded-xl border border-primary/20 bg-surface/90 px-3 py-2.5 shadow-lg shadow-primary/10 backdrop-blur-xl sm:-left-5">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                            </span>

                            <p className="text-sm font-semibold text-primary">
                                Web Developer
                            </p>
                        </div>

                        <p className="mt-2 text-xs text-text-muted">
                            Building for the web
                        </p>
                    </div>


                    {/* Decorative Dot */}
                    <div className="absolute -right-2 bottom-16 h-4 w-4 rounded-full bg-primary shadow-lg shadow-primary/30 sm:-right-4" />
                </div>
            </Container>


            {/* Scroll Indicator */}
            <Link
                href="#projects"
                aria-label="Scroll to projects"
                className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-muted transition hover:text-primary md:flex"
            >
                <span className="text-[10px] font-medium tracking-[0.25em] uppercase">
                    Scroll to explore
                </span>

                <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
                    <span className="h-2 w-1 rounded-full bg-primary animate-bounce" />
                </span>
            </Link>

        </section>
    );
}

