import type { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    className?: string;
};

export default function Container({
    children,
    className = "",
}: ContainerProps) {
    return (
        <div
            className={`mx-auto w-full container p-4 ${className}`}
        >
            {children}
        </div>
    );
}