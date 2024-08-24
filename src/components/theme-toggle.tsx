"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Image from "next/image";

export function ThemeToggle(props: React.ComponentProps<typeof Button>) {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
                {...props}
            >
                {/* <Sun className="rotate-0 scale-0 transition-all dark:rotate-90 dark:scale-100" />
            <Moon className="absolute rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" /> */}

                <Image src={'/images/common/sun.png'} width={24} height={24} alt={'sun'}
                    className="rotate-0 scale-0 transition-all dark:rotate-90 dark:scale-100" />
                <Image src={'/images/common/moon.png'} width={24} height={24} alt={'moon'}
                    className="absolute rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />

                <span className="sr-only">Toggle theme</span>
            </Button>
        </>
    );
}
