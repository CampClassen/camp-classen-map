'use client'
import React from "react";

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Camp Classen Map</title>
            </head>
            <body>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}