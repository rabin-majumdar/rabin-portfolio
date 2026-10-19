"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../Container/Container";

const navLinks = [
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
            <Container className="flex items-center justify-between py-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-semibold tracking-tight text-foreground"
                >
                    Rabin<span className="text-primary">.</span>
                </Link>

                {/* Navigation Links */}
                <ul className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => {
                        const isActive =
                            pathname === link.path ||
                            (link.path === "#about" && pathname === "/");

                        return (
                            <li key={link.path}>
                                <a
                                    href={link.path}
                                    className={`text-sm transition-colors duration-200 ${isActive
                                        ? "font-semibold text-primary"
                                        : "text-text-muted hover:text-primary"
                                        }`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Contact Button */}
                <Link
                    href="/#contact"
                    className="rounded-full border border-primary/40 px-5 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-background"
                >
                    Let&apos;s Talk <span aria-hidden="true">↗</span>
                </Link>
            </Container>
        </nav>
    );
}