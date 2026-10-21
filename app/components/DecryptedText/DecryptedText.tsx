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
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startAnimation = useCallback(() => {
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
                }
            }
            iteration += 1 / 8;

        }, speed);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [text, speed]);

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const element = elementRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startAnimation();
                }
            },
            { threshold: 0.1 }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [startAnimation]);

    return (
        <span
            ref={elementRef}
            onMouseEnter={startAnimation}
            className="cursor-pointer inline-block"
        >
            {displayText}
        </span>
    );
}