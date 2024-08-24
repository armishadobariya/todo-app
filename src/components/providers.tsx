import { ThemeProvider } from "next-themes";

interface ProviderProps {
    children: React.ReactNode
}
export function Providers({ children }: ProviderProps) {
    return (
        <ThemeProvider enableSystem defaultTheme="light" attribute="class">
            {children}
        </ThemeProvider>
    );
}