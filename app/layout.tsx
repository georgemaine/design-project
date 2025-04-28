"use client";
import "./globals.css";
import { StoreProvider } from "@/lib/store";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <StoreProvider>{children}</StoreProvider>
            </body>
        </html>
    );
}
