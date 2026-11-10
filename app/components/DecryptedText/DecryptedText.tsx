'use client';
import { useState, useEffect, useCallback, useRef } from 'react';

interface DecryptedTextProps {
    text: string;
    speed?: number;
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

export default function DecryptedText({ text, speed = 25 }: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState<string>(text);
    const elementRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startAnimation = useCallback(() => {
        if (hasAnimated.current) return;

        hasAnimated.current = true;

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        let iteration = 0;

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((letter, index) => {
                        if (letter === " ") return " space ";
                        if (index < iteration) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("")
                    .replace(/ space /g, " ")
            );

            if (iteration >= text.length) {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }
                return;
            }

            iteration += 1 / 8;

        }, speed);
    }, [text, speed]);

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (prefersReducedMotion) {
            return;
        }

        const element = elementRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startAnimation();
                }
            },
            { threshold: 0.1 },
        );

        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, [startAnimation]);

    return (
        <span
            ref={elementRef}
            className="cursor-pointer inline-block"
        >
            {displayText}
        </span>
    );
}