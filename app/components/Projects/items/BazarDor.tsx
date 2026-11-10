"use client";

import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type KeyboardEvent as ReactKeyboardEvent,
    type MouseEvent as ReactMouseEvent,
} from "react";

import Image from "next/image";
import {
    AnimatePresence,
    motion,
    useMotionTemplate,
    useMotionValue,
    useReducedMotion,
} from "motion/react";

import {
    ExternalLink,
    Globe,
    Eye,
    Zap,
    ShieldCheck,
    BarChart3,
    KeyRound,
    X,
    ChevronLeft,
    ChevronRight,
    Search,
    Smartphone,
    TrendingUp,
    UserRound,
    Clock,
    CircleDot,
    Target,
    Wrench,
    Lightbulb,
    Rocket,
    ArrowRight,
} from "lucide-react";

import {
    SiGithub,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiDaisyui,
    SiMongodb,
} from "react-icons/si";

import { Avatar, Tooltip } from "@heroui/react";
import { createPortal } from "react-dom";

const project = {
    title: "Bazar Dor",
    category: "Full Stack Web App",
    version: "v1.0",

    images: [
        { src: "/project-images/bazar-dor.png", alt: "Homepage" },
    ],

    description:
        "A modern web app that helps users explore up-to-date product and market prices through a clean, intuitive, and responsive interface.",

    highlights: [
        { icon: Zap, label: "Fast & Responsive" },
        { icon: ShieldCheck, label: "Secure Auth" },
        { icon: BarChart3, label: "Market Price Info" },
    ],

    tech: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "DaisyUI", icon: SiDaisyui },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Better Auth", icon: KeyRound },
    ],

    live: "https://bazar-dor-gray.vercel.app/",
    source: "https://github.com/rabin-majumdar/bazar-dor",

    author: {
        name: "Rabin Madhu",
        handle: "@rabin-majumdar",
        avatar: "https://github.com/rabin-majumdar.png",
        initials: "RM",
    },

    meta: [
        { icon: UserRound, label: "Role", value: "Solo Developer (Full Stack)" },
        { icon: Clock, label: "Timeline", value: "5–7 Days" },
        { icon: CircleDot, label: "Status", value: "Live" },
    ],

    features: [
        {
            icon: TrendingUp,
            title: "Product & market prices",
            desc: "Browse product and market price information in one place.",
        },
        {
            icon: Search,
            title: "Search & browse",
            desc: "Quickly find products and compare prices.",
        },
        {
            icon: ShieldCheck,
            title: "Secure authentication",
            desc: "Sign up and log in using Better Auth.",
        },
        {
            icon: Smartphone,
            title: "Responsive design",
            desc: "Designed for mobile, tablet, and desktop screens.",
        },
    ],

    learnings: {
        problem: "Displaying product and market price information efficiently.",
        solution:
            "Structured data in MongoDB and fetched the information required by each page.",
        learned:
            "How authentication, database management, and user interfaces work together in a full-stack Next.js application.",
    },

    roadmap: [
        "Price history charts",
        "Favorites and price alerts",
        "Admin dashboard for updating prices",
    ],
};

type Tab = "features" | "learnings" | "roadmap";

const TABS: { id: Tab; label: string }[] = [
    { id: "features", label: "Features" },
    { id: "learnings", label: "Learnings" },
    { id: "roadmap", label: "Roadmap" },
];

export default function BazarDor() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [tab, setTab] = useState<Tab>("features");

    const modalRef = useRef<HTMLElement>(null);
    const lastFocusedElementRef = useRef<HTMLElement | null>(null);

    const shouldReduceMotion = useReducedMotion();
    const total = project.images.length;
    const currentImage = project.images[index] ?? project.images[0];

    // Spotlight hover (follows the mouse inside the card)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const spotlight = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(16,185,129,0.12), transparent 70%)`;

    const handleCardMouseMove = (event: ReactMouseEvent<HTMLElement>) => {
        const { left, top } = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - left);
        mouseY.set(event.clientY - top);
    };

    const next = useCallback(() => {
        setIndex((current) => (current + 1) % total);
    }, [total]);

    const prev = useCallback(() => {
        setIndex((current) => (current - 1 + total) % total);
    }, [total]);

    // Modal keyboard controls and focus management
    useEffect(() => {
        if (!isModalOpen) return;

        const modal = modalRef.current;
        const trigger = lastFocusedElementRef.current;
        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        const closeButton = modal?.querySelector<HTMLButtonElement>(
            '[aria-label="Close project details"]',
        );

        closeButton?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                event.preventDefault();
                setIsModalOpen(false);
                return;
            }

            if (event.key === "ArrowRight" && total > 1) {
                event.preventDefault();
                next();
                return;
            }

            if (event.key === "ArrowLeft" && total > 1) {
                event.preventDefault();
                prev();
                return;
            }

            if (event.key === "Tab" && modal) {
                const focusableElements =
                    modal.querySelectorAll<HTMLElement>(
                        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
                    );

                if (focusableElements.length === 0) return;

                const firstElement = focusableElements[0];
                const lastElement =
                    focusableElements[focusableElements.length - 1];

                if (!firstElement || !lastElement) return;

                if (!modal.contains(document.activeElement)) {
                    event.preventDefault();
                    firstElement.focus();
                } else if (
                    event.shiftKey &&
                    document.activeElement === firstElement
                ) {
                    event.preventDefault();
                    lastElement.focus();
                } else if (
                    !event.shiftKey &&
                    document.activeElement === lastElement
                ) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = previousOverflow;
            trigger?.focus();
        };
    }, [isModalOpen, next, prev, total]);

    const openModal = (event: ReactMouseEvent<HTMLButtonElement>) => {
        lastFocusedElementRef.current = event.currentTarget;
        setIndex(0);
        setTab("features");
        setIsModalOpen(true);
    };

    // Tabs keyboard navigation
    const handleTabKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
        const currentIndex = TABS.findIndex((item) => item.id === tab);

        let nextIndex = currentIndex;

        if (event.key === "ArrowRight") {
            nextIndex = (currentIndex + 1) % TABS.length;
        } else if (event.key === "ArrowLeft") {
            nextIndex = (currentIndex - 1 + TABS.length) % TABS.length;
        } else if (event.key === "Home") {
            nextIndex = 0;
        } else if (event.key === "End") {
            nextIndex = TABS.length - 1;
        } else {
            return;
        }

        event.preventDefault();

        const nextTab = TABS[nextIndex];

        if (nextTab) {
            setTab(nextTab.id);
            document.getElementById(`tab-${nextTab.id}`)?.focus();
        }
    };

    return (
        <>
            {/* Project Card */}
            <motion.article
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={
                    shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onMouseMove={handleCardMouseMove}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_16px_45px_-15px_rgba(16,185,129,0.22)]"
            >
                {/* Spotlight glow */}
                <motion.div
                    aria-hidden="true"
                    style={{ background: spotlight }}
                    className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Project Screenshot */}
                <button
                    type="button"
                    onClick={openModal}
                    aria-label={`View ${project.title} project details`}
                    aria-haspopup="dialog"
                    className="group/image relative block aspect-video w-full cursor-pointer overflow-hidden bg-zinc-900 text-left focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-emerald-400"
                >
                    <Image
                        src={project.images[0].src}
                        alt={`${project.title} ${project.images[0].alt}`}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out motion-safe:group-hover/image:scale-105"
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    />

                    <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-linear-to-t from-zinc-950/40 via-transparent to-transparent"
                    />

                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-zinc-950/75 px-3 py-1.5 text-[11px] font-medium text-zinc-200 backdrop-blur-md">
                        <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                        />
                        {project.category}
                    </span>

                    <span className="absolute top-3 right-3 rounded-md border border-white/10 bg-zinc-950/75 px-2.5 py-1 font-mono text-[10px] text-zinc-300 backdrop-blur-md">
                        {project.version}
                    </span>

                    <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-zinc-950/75 px-3 py-2 text-xs font-medium text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover/image:opacity-100">
                        <Eye size={14} aria-hidden="true" />
                        View Project
                    </span>
                </button>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-400">
                                {project.title}
                            </h3>

                            <p className="mt-2 text-sm leading-normal text-left text-zinc-400">
                                {project.description}
                            </p>
                        </div>

                        {/* Live badge with pulse */}
                        <span
                            aria-label="Project is live"
                            title="Live project"
                            className="mt-1 inline-flex shrink-0 items-center gap-1.5 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400"
                        >
                            <span
                                aria-hidden="true"
                                className="relative flex h-2 w-2"
                            >
                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>
                            Live
                        </span>
                    </div>

                    {/* Technologies */}
                    <ul
                        className="mt-5 flex flex-wrap gap-2"
                        aria-label="Technologies used"
                    >
                        {project.tech.map(({ name, icon: Icon }) => (
                            <li
                                key={name}
                                className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-zinc-300"
                            >
                                <Icon size={12} aria-hidden="true" />
                                {name}
                            </li>
                        ))}
                    </ul>

                    {/* Card Actions */}
                    <div className="mt-5 flex items-center gap-2.5 border-t border-white/5 pt-5">
                        <button
                            type="button"
                            onClick={openModal}
                            aria-haspopup="dialog"
                            className="group/btn cursor-pointer relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-lg bg-linear-to-r from-emerald-500 to-teal-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/10 transition-all duration-300 hover:shadow-emerald-500/30 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                        >
                            {/* Shine sweep */}
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/30 opacity-0 blur-sm motion-safe:transition-all motion-safe:duration-700 motion-safe:group-hover/btn:left-full motion-safe:group-hover/btn:opacity-100"
                            />

                            <span>Explore Project</span>
                            <ArrowRight
                                size={16}
                                aria-hidden="true"
                                className="relative motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover/btn:translate-x-1"
                            />
                        </button>

                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Live demo"
                            aria-label={`${project.title} live demo (opens in a new tab)`}
                            className="inline-flex size-10.5 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400 focus-visible:outline-2 focus-visible:outline-emerald-400"
                        >
                            <Globe size={17} aria-hidden="true" />
                        </a>

                        <a
                            href={project.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Source code"
                            aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
                            className="inline-flex size-10.5 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-emerald-400"
                        >
                            <SiGithub size={17} aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </motion.article>

            {/* Project Details Modal */}
            {typeof document !== "undefined" &&
                createPortal(
                    <AnimatePresence>
                        {isModalOpen && (
                            <motion.div
                                initial={shouldReduceMotion ? false : { opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: shouldReduceMotion ? 0 : 0.2,
                                }}
                                onClick={() => setIsModalOpen(false)}
                                // className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-5"
                                className="fixed inset-0 z-100 flex items-start justify-center overflow-y-auto sm:items-center bg-black/80 p-3 backdrop-blur-md sm:p-5"
                            >
                                <motion.section
                                    ref={modalRef}
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="bazar-dor-modal-title"
                                    tabIndex={-1}
                                    initial={
                                        shouldReduceMotion
                                            ? false
                                            : { scale: 0.96, y: 12 }
                                    }
                                    animate={{ scale: 1, y: 0 }}
                                    exit={{ scale: 0.96, y: 12 }}
                                    transition={{
                                        duration: shouldReduceMotion ? 0 : 0.25,
                                        ease: "easeOut",
                                    }}
                                    onClick={(event) => event.stopPropagation()}
                                    className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-zinc-950 shadow-2xl focus:outline-none"
                                >
                                    {/* Modal Header */}
                                    <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-7">
                                        <div>
                                            <p className="text-[10px] font-semibold tracking-[0.2em] text-emerald-400 uppercase">
                                                Project Details
                                            </p>

                                            <h2
                                                id="bazar-dor-modal-title"
                                                className="mt-1 text-lg font-bold text-white sm:text-xl"
                                            >
                                                {project.title}
                                            </h2>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => setIsModalOpen(false)}
                                            aria-label="Close project details"
                                            className="shrink-0 rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-emerald-400"
                                        >
                                            <X size={18} aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Modal Scrollable Content */}
                                    <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                                        {/* Image Gallery */}
                                        <div className="relative bg-black">
                                            <div className="relative aspect-video max-h-[55vh] w-full">
                                                {currentImage && (
                                                    <Image
                                                        src={currentImage.src}
                                                        alt={`${project.title} ${currentImage.alt}`}
                                                        fill
                                                        priority
                                                        sizes="(max-width: 1024px) 100vw, 900px"
                                                        className="object-contain"
                                                    />
                                                )}
                                            </div>

                                            {total > 1 && (
                                                <>
                                                    <button
                                                        type="button"
                                                        onClick={prev}
                                                        aria-label="Previous screenshot"
                                                        className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full border border-white/10 bg-zinc-950/80 p-2.5 text-white transition hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-emerald-400"
                                                    >
                                                        <ChevronLeft size={20} aria-hidden="true" />
                                                    </button>

                                                    <button
                                                        type="button"
                                                        onClick={next}
                                                        aria-label="Next screenshot"
                                                        className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full border border-white/10 bg-zinc-950/80 p-2.5 text-white transition hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-emerald-400"
                                                    >
                                                        <ChevronRight size={20} aria-hidden="true" />
                                                    </button>
                                                </>
                                            )}
                                        </div>

                                        {total > 1 && (
                                            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-3 sm:px-7">
                                                <p className="text-xs text-zinc-400">
                                                    {currentImage?.alt}
                                                    <span className="ml-2 font-mono text-zinc-500">
                                                        {index + 1}/{total}
                                                    </span>
                                                </p>

                                                <div className="flex gap-2">
                                                    {project.images.map((img, imageIndex) => (
                                                        <button
                                                            key={img.src}
                                                            type="button"
                                                            onClick={() => setIndex(imageIndex)}
                                                            aria-label={`Show ${img.alt}`}
                                                            aria-pressed={imageIndex === index}
                                                            className={`relative h-10 w-16 overflow-hidden rounded-md border transition ${imageIndex === index
                                                                ? "border-emerald-400 opacity-100"
                                                                : "border-white/10 opacity-50 hover:opacity-100"
                                                                }`}
                                                        >
                                                            <Image
                                                                src={img.src}
                                                                alt=""
                                                                fill
                                                                sizes="64px"
                                                                className="object-cover object-top"
                                                            />
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Project Information */}
                                        <div className="p-5 sm:p-7">
                                            <div className="flex justify-between items-center gap-2">
                                                <div>
                                                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-400">
                                                        <span
                                                            aria-hidden="true"
                                                            className="relative flex h-2 w-2"
                                                        >
                                                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                                                        </span>

                                                        {project.category}
                                                    </span>
                                                </div>

                                                <div className="flex gap-4">
                                                    <span className="rounded-md border border-white/10 bg-zinc-950/75 px-2.5 py-1 font-mono text-[10px] text-zinc-300 backdrop-blur-md">
                                                        {project.version}
                                                    </span>
                                                </div>
                                            </div>

                                            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                                                {project.description}
                                            </p>

                                            {/* Highlights */}
                                            <ul className="mt-5 flex flex-wrap gap-2">
                                                {project.highlights.map(({ icon: Icon, label }) => (
                                                    <li
                                                        key={label}
                                                        className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-2 text-xs text-zinc-300"
                                                    >
                                                        <Icon
                                                            size={14}
                                                            className="text-emerald-400"
                                                            aria-hidden="true"
                                                        />
                                                        {label}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Technologies */}
                                            <h3 className="mt-7 text-sm font-semibold text-white">
                                                Technologies Used
                                            </h3>

                                            <ul className="mt-3 flex flex-wrap gap-2">
                                                {project.tech.map(({ name, icon: Icon }) => (
                                                    <li
                                                        key={name}
                                                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-300"
                                                    >
                                                        <Icon size={14} aria-hidden="true" />
                                                        {name}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Role / Timeline / Status */}
                                            <dl className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                                                {project.meta.map(
                                                    ({ icon: Icon, label, value }) => (
                                                        <div
                                                            key={label}
                                                            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                                                        >
                                                            <Icon
                                                                size={18}
                                                                aria-hidden="true"
                                                                className="shrink-0 text-emerald-400"
                                                            />

                                                            <div>
                                                                <dt className="text-[11px] tracking-wider text-zinc-500 uppercase">
                                                                    {label}
                                                                </dt>
                                                                <dd className="text-sm font-medium text-zinc-200">
                                                                    {value}
                                                                </dd>
                                                            </div>
                                                        </div>
                                                    ),
                                                )}
                                            </dl>

                                            {/* Tabs (with sliding indicator) */}
                                            <div
                                                role="tablist"
                                                aria-label="Project information"
                                                onKeyDown={handleTabKeyDown}
                                                className="mt-8 inline-flex max-w-full gap-1 overflow-x-auto rounded-xl border border-white/10 bg-white/5 p-1"
                                            >
                                                {TABS.map(({ id, label }) => (
                                                    <button
                                                        key={id}
                                                        type="button"
                                                        role="tab"
                                                        id={`tab-${id}`}
                                                        tabIndex={tab === id ? 0 : -1}
                                                        aria-selected={tab === id}
                                                        aria-controls={`panel-${id}`}
                                                        onClick={() => setTab(id)}
                                                        className={`relative shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-emerald-400 ${tab === id
                                                            ? "text-emerald-300"
                                                            : "text-zinc-400 hover:text-zinc-200"
                                                            }`}
                                                    >
                                                        {tab === id && (
                                                            <motion.span
                                                                layoutId="bazar-dor-active-tab"
                                                                aria-hidden="true"
                                                                transition={
                                                                    shouldReduceMotion
                                                                        ? { duration: 0 }
                                                                        : {
                                                                            type: "spring",
                                                                            bounce: 0.2,
                                                                            duration: 0.5,
                                                                        }
                                                                }
                                                                className="absolute inset-0 rounded-lg bg-emerald-500/15"
                                                            />
                                                        )}
                                                        <span className="relative z-10">
                                                            {label}
                                                        </span>
                                                    </button>
                                                ))}
                                            </div>

                                            {/* Tab Panels */}
                                            <div
                                                role="tabpanel"
                                                id={`panel-${tab}`}
                                                aria-labelledby={`tab-${tab}`}
                                                tabIndex={0}
                                                className="mt-5 focus-visible:outline-2 focus-visible:outline-emerald-400"
                                            >
                                                {tab === "features" && (
                                                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                                        {project.features.map(
                                                            ({ icon: Icon, title, desc }) => (
                                                                <li
                                                                    key={title}
                                                                    className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                                                                >
                                                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                                                                        <Icon size={18} aria-hidden="true" />
                                                                    </span>

                                                                    <div>
                                                                        <p className="text-sm font-semibold text-white">
                                                                            {title}
                                                                        </p>
                                                                        <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                                                                            {desc}
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                )}

                                                {tab === "learnings" && (
                                                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                                                        {[
                                                            {
                                                                icon: Target,
                                                                title: "Challenge",
                                                                text: project.learnings.problem,
                                                            },
                                                            {
                                                                icon: Wrench,
                                                                title: "Solution",
                                                                text: project.learnings.solution,
                                                            },
                                                            {
                                                                icon: Lightbulb,
                                                                title: "What I learned",
                                                                text: project.learnings.learned,
                                                            },
                                                        ].map(({ icon: Icon, title, text }) => (
                                                            <div
                                                                key={title}
                                                                className="rounded-xl border border-white/10 bg-white/5 p-4"
                                                            >
                                                                <p className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
                                                                    <Icon size={16} aria-hidden="true" />
                                                                    {title}
                                                                </p>
                                                                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                                                                    {text}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {tab === "roadmap" && (
                                                    <ul className="space-y-2">
                                                        {project.roadmap.map((item) => (
                                                            <li
                                                                key={item}
                                                                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-300"
                                                            >
                                                                <Rocket
                                                                    size={16}
                                                                    aria-hidden="true"
                                                                    className="shrink-0 text-emerald-400"
                                                                />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>

                                            {/* Author and External Links */}
                                            <div className="mt-8 flex gap-5 border-t border-white/10 pt-6 flex-row items-center justify-between">
                                                <Tooltip delay={0}>
                                                    <Tooltip.Trigger
                                                        aria-label={`Author: ${project.author.name}`}
                                                    >
                                                        <Avatar size="sm">
                                                            <Avatar.Image
                                                                alt={project.author.name}
                                                                src={project.author.avatar}
                                                            />
                                                            <Avatar.Fallback>
                                                                {project.author.initials}
                                                            </Avatar.Fallback>
                                                        </Avatar>
                                                    </Tooltip.Trigger>

                                                    <Tooltip.Content showArrow>
                                                        <Tooltip.Arrow />
                                                        <div className="flex flex-col gap-0 py-1">
                                                            <p className="font-semibold">
                                                                {project.author.name}
                                                            </p>
                                                            {/* <p className="text-xs text-zinc-400">
                                                        {project.author.handle}
                                                    </p> */}
                                                        </div>
                                                    </Tooltip.Content>
                                                </Tooltip>

                                                <div className="flex flex-wrap gap-3">
                                                    <a
                                                        href={project.live}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={`${project.title} live preview (opens in a new tab)`}
                                                        className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-all hover:shadow-lg hover:shadow-emerald-500/20 focus-visible:outline-2 focus-visible:outline-emerald-400"
                                                    >
                                                        <Globe size={16} aria-hidden="true" />
                                                        Live Preview
                                                        <ExternalLink size={14} aria-hidden="true" />
                                                    </a>

                                                    <a
                                                        href={project.source}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
                                                        className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-emerald-400"
                                                    >
                                                        <SiGithub size={16} aria-hidden="true" />
                                                        Source Code
                                                        <ExternalLink size={14} aria-hidden="true" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.section>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body,
                )}
        </>
    );
}