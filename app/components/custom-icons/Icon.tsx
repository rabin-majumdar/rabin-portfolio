// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import type { ElementType } from "react";

// type IconProps = {
//     name: string;
//     size?: number;
//     className?: string;
//     alt?: string;
//     fallback?: ElementType;
//     color?: string;
// };

// export default function CustomIcon({
//     name,
//     size = 16,
//     className = "",
//     alt,
//     fallback: FallbackIcon,
//     color,
// }: IconProps) {
//     const [hasError, setHasError] = useState(false);

//     if (hasError && FallbackIcon) {
//         return (
//             <FallbackIcon
//                 size={size}
//                 color={color}
//                 className={className}
//             />
//         );
//     }

//     return (
//         <Image
//             src={`/icons/${name}.svg`}
//             alt={alt ?? name}
//             width={size}
//             height={size}
//             className={className}
//             onError={() => setHasError(true)}
//         />
//     );
// }

// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import type { ElementType } from "react";

// type IconProps = {
//     name: string;
//     extension?: string;
//     size?: number;
//     className?: string;
//     alt?: string;
//     fallback?: ElementType;
//     color?: string;
// };

// export default function CustomIcon({
//     name,
//     extension = "svg",
//     size = 16,
//     className = "",
//     alt,
//     fallback: FallbackIcon,
//     color,
// }: IconProps) {
//     const [hasError, setHasError] = useState(false);

//     if (hasError && FallbackIcon) {
//         return (
//             <FallbackIcon
//                 size={size}
//                 color={color}
//                 className={className}
//             />
//         );
//     }

//     return (
//         <Image
//             src={`/icons/${name}.${extension}`}
//             alt={alt ?? name}
//             width={size}
//             height={size}
//             className={`h-auto ${className}`}
//             onError={() => setHasError(true)}
//         />
//     );
// }


"use client";

import Image from "next/image";
import { useState } from "react";
import type { ElementType } from "react";

type IconProps = {
    name: string;
    size?: number;
    className?: string;
    alt?: string;
    fallback?: ElementType;
    color?: string;
};

const extensions = ["svg", "png", "webp", "jpg", "jpeg"];

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
            alt={alt ?? name}
            width={size}
            height={size}
            className={className}
            onError={() => {
                if (extensionIndex < extensions.length - 1) {
                    setExtensionIndex((index) => index + 1);
                } else {
                    setHasError(true);
                }
            }}
        />
    );
}
