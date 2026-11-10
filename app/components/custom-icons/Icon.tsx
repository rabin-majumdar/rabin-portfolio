"use client";

import Image from "next/image";
import { useState } from "react";
import type { ComponentType } from "react";

type IconProps = {
    name: string;
    size?: number;
    className?: string;
    alt?: string;
    fallback?: ComponentType<{
        size?: number;
        color?: string;
        className?: string;
    }>;
    color?: string;
};

const extensions = ["svg", "png", "webp", "jpg", "jpeg"] as const;

export default function CustomIcon({
    name,
    size = 16,
    className = "",
    alt,
    fallback: FallbackIcon,
    color,
}: IconProps) {
    const [extensionIndex, setExtensionIndex] = useState(0);
    const [hasError, setHasError] = useState(false);

    if (hasError && FallbackIcon) {
        return (
            <FallbackIcon
                size={size}
                color={color}
                className={className}
            />
        );
    }

    if (hasError) {
        return null;
    }

    return (
        <Image
            src={`/icons/${name}.${extensions[extensionIndex]}`}
            alt={alt ?? ""}
            width={size}
            height={size}
            className={className}
            unoptimized
            onError={() => {
                setExtensionIndex((index) => {
                    if (index < extensions.length - 1) {
                        return index + 1;
                    }

                    setHasError(true);
                    return index;
                });
            }}
        />
    );
}
