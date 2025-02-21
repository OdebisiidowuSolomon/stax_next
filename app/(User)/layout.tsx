import React from 'react'
import UserTemplate from './_components/UserTemplate';
import "./user.style.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "User",
    description: "FutrBrit AI - Your AI-Powered Migrant Assistant",
};

export default function UserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" style={{ overflow: "auto" }}>
            <body
                className={``}
            >
                <UserTemplate>
                    {children}
                </UserTemplate>
            </body>
        </html>
    );
}
