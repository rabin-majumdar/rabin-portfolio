
"use client";

import { useState, type FormEvent } from "react";
import {
    motion,
    useReducedMotion,
} from "motion/react";
import {
    ArrowUpRight,
    Mail,
    MapPin,
    Send,
    Sparkles,
} from "lucide-react";

import Container from "../Container/Container";
import { SiGithub } from "react-icons/si";

const contactDetails = [
    {
        icon: Mail,
        label: "Email",
        value: "Let's connect via email",
        href: null,
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Available for remote opportunities",
        href: null,
    },
];

export default function Contact() {
    const reduceMotion = useReducedMotion();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Frontend-only form preview.
        // Email delivery will be connected later.
        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setSubmitted(false);

        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="relative scroll-mt-20 overflow-hidden py-20 sm:py-24 lg:py-28"
        >
            {/* Background glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-emerald-500/10 blur-[120px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]"
            />

            <Container className="relative z-10">
                {/* Section heading */}
                <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={
                        reduceMotion ? undefined : { opacity: 1, y: 0 }
                    }
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-14 max-w-2xl text-center"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3.5 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-md">
                        <Sparkles size={14} />
                        Get in touch
                    </div>

                    <h2
                        id="contact-heading"
                        className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl"
                    >
                        Let&apos;s Start a{" "}
                        <span className="bg-linear-to-r from-emerald-300 to-blue-400 bg-clip-text text-transparent">
                            Conversation.
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
                        Have a project in mind, an opportunity to share, or
                        just want to say hello? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                {/* Contact content */}
                <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
                    {/* Left information */}
                    <motion.div
                        initial={reduceMotion ? false : { opacity: 0, x: -25 }}
                        whileInView={
                            reduceMotion ? undefined : { opacity: 1, x: 0 }
                        }
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col rounded-3xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl sm:p-8 lg:col-span-5 lg:p-10"
                    >
                        <div>
                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                                <Mail size={22} />
                            </span>

                            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
                                Let&apos;s talk about your next idea.
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                                I&apos;m always interested in connecting with
                                people, exploring new ideas, and working on
                                meaningful projects.
                            </p>
                        </div>

                        {/* Contact details */}
                        <div className="mt-10 space-y-4">
                            {contactDetails.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.label}
                                        className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/3 p-4"
                                    >
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/5 text-emerald-300">
                                            <Icon size={19} />
                                        </span>

                                        <div>
                                            <p className="text-xs font-medium text-slate-500">
                                                {item.label}
                                            </p>
                                            <p className="mt-1 text-sm font-medium text-slate-200">
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Social link */}
                        <div className="mt-auto pt-10">
                            <p className="mb-4 text-sm font-medium text-slate-300">
                                Find me on
                            </p>

                            <a
                                href="https://github.com/rabin-majumdar"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit my GitHub profile"
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/30 hover:text-emerald-300"
                            >
                                <SiGithub size={18} />
                                GitHub
                                <ArrowUpRight size={15} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact form */}
                    <motion.div
                        initial={reduceMotion ? false : { opacity: 0, x: 25 }}
                        whileInView={
                            reduceMotion ? undefined : { opacity: 1, x: 0 }
                        }
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl sm:p-8 lg:col-span-7 lg:p-10"
                    >
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-slate-100 sm:text-2xl">
                                Send me a message
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-400">
                                Fill out the form below and let&apos;s connect.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name + Email */}
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="contact-name"
                                        className="mb-2 block text-sm font-medium text-slate-300"
                                    >
                                        Your Name
                                    </label>

                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="name"
                                        autoComplete="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-600 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/10"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-email"
                                        className="mb-2 block text-sm font-medium text-slate-300"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-600 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/10"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label
                                    htmlFor="contact-subject"
                                    className="mb-2 block text-sm font-medium text-slate-300"
                                >
                                    Subject
                                </label>

                                <input
                                    id="contact-subject"
                                    type="text"
                                    name="subject"
                                    placeholder="What's this about?"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-600 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/10"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="contact-message"
                                    className="mb-2 block text-sm font-medium text-slate-300"
                                >
                                    Your Message
                                </label>

                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows={5}
                                    placeholder="Tell me a little about your idea..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full resize-y rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-600 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/10"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-emerald-400 to-teal-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-emerald-500/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 sm:w-auto"
                            >
                                Send Message
                                <Send size={16} />
                            </button>

                            {submitted && (
                                <p
                                    role="status"
                                    aria-live="polite"
                                    className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3 text-sm text-emerald-300"
                                >
                                    Form preview submitted successfully. Email
                                    delivery will be available after we connect
                                    an email service.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
