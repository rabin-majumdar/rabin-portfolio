"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
} from "motion/react";
import {
    Braces,
    CalendarDays,
    Code2,
    Compass,
    Download,
    Hammer,
    Mail,
    Repeat,
    Sparkles,
    BookOpen,
    ChefHat,
    Dumbbell,
    Film,
    Music,
    Sprout,
    Trophy,
} from "lucide-react";

import Container from "../Container/Container";

const journey = [
    {
        year: "2018",
        title: "The Beginning",
        description:
            "My coding journey started in a college computer lab, where I wrote my very first lines of code.",
        icon: Code2,
    },
    {
        year: "Along the Way",
        title: "Learning & Returning",
        description:
            "There were pauses, setbacks, and moments of uncertainty. But no matter how much time passed, I always found my way back to coding.",
        icon: Compass,
    },
    {
        year: "Present",
        title: "A Fresh Commitment",
        description:
            "I'm approaching development with renewed focus, building real-world projects and continuously improving my skills.",
        icon: Sparkles,
    },
];

const stats = [
    { value: "2018", label: "Started coding" },
    { value: "5+", label: "Projects built" },
    { value: "4", label: "Core technologies" },
];

const principles = [
    {
        icon: Hammer,
        title: "Learn by building",
        description:
            "I understand things best when I ship them, so every new concept ends up in a real project.",
    },
    {
        icon: Repeat,
        title: "Consistency over intensity",
        description:
            "Small, steady practice beats occasional bursts. My own journey taught me that.",
    },
    {
        icon: Braces,
        title: "Clean, readable code",
        description:
            "Code is read far more than it is written, so I aim for clarity first.",
    },
];

const currentStack = ["React", "Next.js", "TypeScript", "Tailwind CSS"];
const currentlyLearning = [
    "Node.js",
    "MongoDB",
    "Authentication",
    "Backend Development",
];

const beyondCode = [
    { label: "Music", icon: Music },
    { label: "Cooking", icon: ChefHat },
    { label: "Reading", icon: BookOpen },
    { label: "Basketball", icon: Trophy },
    { label: "Gardening", icon: Sprout },
    { label: "Fitness", icon: Dumbbell },
    { label: "Movies", icon: Film },
];


type BentoCardProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
};

function BentoCard({ children, className = "", delay = 0 }: BentoCardProps) {
    const reduceMotion = useReducedMotion();
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={
                reduceMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-emerald-400/25 sm:p-8 ${className}`}
        >
            {/* Spotlight */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background:
                        "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(52,211,153,0.10), transparent 60%)",
                }}
            />
            <div className="relative h-full">{children}</div>
        </motion.div>
    );
}

function Chip({ children }: { children: ReactNode }) {
    return (
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 transition-colors duration-300 hover:border-emerald-400/30 hover:text-emerald-300 sm:text-sm">
            {children}
        </span>
    );
}

export default function About() {
    const timelineRef = useRef<HTMLDivElement>(null);

    // Scroll-linked timeline progress
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 75%", "end 55%"],
    });
    const lineScale = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 24,
        mass: 0.4,
    });

    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="relative scroll-mt-20 overflow-hidden py-20 sm:py-24 lg:py-28"
        >
            <Container className="relative z-10">
                {/* Heading */}
                <div className="mb-12 max-w-2xl sm:mb-14">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3.5 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                        About my journey
                    </div>

                    <h2
                        id="about-heading"
                        className="text-4xl font-bold leading-[1.05] tracking-tight text-slate-100 sm:text-5xl lg:text-6xl"
                    >
                        Every Journey{" "}
                        <span className="bg-linear-to-r from-emerald-300 to-blue-400 bg-clip-text text-transparent">
                            Has a Beginning.
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
                        Some journeys are not straight lines. Mine is a story
                        of starting, stopping, learning, and finding my way
                        back to the things I love.
                    </p>
                </div>

                {/* Bento grid */}
                <div className="grid gap-4 lg:grid-cols-12">
                    {/* 1. Story */}
                    <BentoCard className="lg:col-span-7 lg:p-10">
                        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                            <Code2 size={22} />
                        </span>

                        <h3 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
                            A Journey That Never Ended.
                        </h3>

                        <div className="mt-6 max-w-prose space-y-5 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                            <p>
                                My coding journey began in 2018, when I wrote
                                my first lines of code in my college computer
                                lab. I had no idea that this small beginning
                                would keep me connected to coding for so many
                                years.
                            </p>
                            <p>
                                My journey hasn&apos;t always been consistent.
                                There have been long breaks, setbacks, missed
                                opportunities, and moments when I questioned
                                my progress.
                            </p>
                            <p>
                                Sometimes I practiced regularly. Sometimes I
                                stepped away for months. But somehow, I always
                                found my way back.
                            </p>
                            <p>
                                Today, I&apos;m starting again with a clearer
                                mindset, renewed motivation, and a stronger
                                commitment to becoming a better developer.
                            </p>
                        </div>

                        <div className="mt-8 rounded-2xl border border-emerald-400/15 bg-linear-to-br from-emerald-400/10 to-blue-500/10 p-5 sm:p-6">
                            <p className="text-lg font-semibold leading-8 text-slate-100 sm:text-xl">
                                I&apos;m still learning.
                                <br />
                                I&apos;m still building.
                                <br />
                                <span className="text-emerald-300">
                                    And I&apos;m not giving up.
                                </span>
                            </p>
                        </div>
                    </BentoCard>

                    {/* 2. Timeline (tall) */}
                    <BentoCard
                        delay={0.08}
                        className="lg:col-span-5 lg:row-span-2"
                    >
                        <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-200">
                            <CalendarDays
                                size={17}
                                className="text-emerald-400"
                            />
                            2018 — Present
                        </div>

                        <div ref={timelineRef} className="relative space-y-9">
                            {/* Track */}
                            <div
                                aria-hidden="true"
                                className="absolute bottom-5 left-5 top-5 w-px -translate-x-1/2 bg-white/10"
                            />
                            {/* Scroll-linked fill */}
                            <motion.div
                                aria-hidden="true"
                                style={{ scaleY: lineScale }}
                                className="absolute bottom-5 left-5 top-5 w-px origin-top -translate-x-1/2 bg-linear-to-b from-emerald-400 to-blue-400"
                            />

                            {journey.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.year}
                                        className="group/item relative flex gap-4"
                                    >
                                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/25 bg-[#09090b] text-emerald-300 transition-colors duration-300 group-hover/item:bg-emerald-400/10">
                                            <Icon size={18} />
                                        </div>

                                        <div className="flex-1 pt-0.5">
                                            <span className="text-xs font-medium text-emerald-300">
                                                {item.year}
                                            </span>
                                            <h4 className="mt-1 text-lg font-semibold text-slate-100">
                                                {item.title}
                                            </h4>
                                            <p className="mt-2 text-sm leading-7 text-slate-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </BentoCard>

                    {/* 3. Stats */}
                    <BentoCard delay={0.04} className="lg:col-span-7">
                        <div className="grid grid-cols-3 gap-4 text-center sm:text-left">
                            {stats.map((s) => (
                                <div key={s.label}>
                                    <p className="bg-linear-to-r from-emerald-300 to-blue-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-5xl">
                                        {s.value}
                                    </p>
                                    <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                                        {s.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </BentoCard>

                    {/* 4. How I work */}
                    <BentoCard className="lg:col-span-4">
                        <h3 className="text-lg font-semibold text-slate-100">
                            How I work
                        </h3>

                        <ul className="mt-5 space-y-5">
                            {principles.map((p) => {
                                const Icon = p.icon;
                                return (
                                    <li key={p.title} className="flex gap-3">
                                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                                            <Icon size={17} />
                                        </span>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-200">
                                                {p.title}
                                            </p>
                                            <p className="mt-1 text-sm leading-6 text-slate-400">
                                                {p.description}
                                            </p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </BentoCard>

                    {/* 5. Focus + learning */}
                    <BentoCard delay={0.06} className="lg:col-span-4">
                        <div className="flex items-center gap-2 text-lg font-semibold text-slate-100">
                            <Sparkles size={17} className="text-blue-300" />
                            What I&apos;m focused on
                        </div>

                        <p className="mt-3 text-sm leading-7 text-slate-400">
                            Building modern web experiences, and gradually
                            expanding into Full-Stack Development.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {currentStack.map((t) => (
                                <Chip key={t}>{t}</Chip>
                            ))}
                        </div>

                        <p className="mt-6 text-sm font-medium text-slate-300">
                            Currently learning
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {currentlyLearning.map((t) => (
                                <Chip key={t}>{t}</Chip>
                            ))}
                        </div>
                    </BentoCard>

                    {/* 6. Beyond code */}
                    <BentoCard delay={0.1} className="lg:col-span-4">
                        <h3 className="text-lg font-semibold text-slate-100">
                            Beyond code
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-400">
                            Away from the editor, I enjoy:
                        </p>

                        <ul className="mt-5 flex flex-wrap gap-2">
                            {beyondCode.map(({ label, icon: Icon }) => (
                                <li
                                    key={label}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-300 hover:border-emerald-400/30 hover:text-emerald-300 sm:text-sm"
                                >
                                    <Icon size={14} className="text-emerald-400" />
                                    {label}
                                </li>
                            ))}
                        </ul>
                    </BentoCard>

                    {/* 7. CTA */}
                    <BentoCard className="lg:col-span-12">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
                            <div className="min-w-0">
                                <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 motion-reduce:animate-none" />
                                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                    </span>
                                    Open to opportunities
                                </div>
                                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
                                    Let&apos;s build something together.
                                </h3>
                                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">
                                    Looking for a junior developer who learns fast and keeps
                                    showing up? I&apos;d love to hear from you.
                                </p>
                            </div>

                            <div className="grid w-full grid-cols-2 gap-3 lg:flex lg:w-auto lg:shrink-0">
                                <a
                                    href="#contact"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 lg:w-auto lg:py-2.5"
                                >
                                    <Mail size={16} />
                                    Get in touch
                                </a>
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/30 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 lg:w-auto lg:py-2.5"
                                >
                                    <Download size={16} />
                                    Download resume
                                </a>
                            </div>
                        </div>
                    </BentoCard>
                </div>
            </Container>
        </section>
    );
}
