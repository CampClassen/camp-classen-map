'use client'
import React, {StrictMode} from "react";

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <StrictMode>
            <main>{children}</main>
        </StrictMode>
        </body>
        </html>
    )
}