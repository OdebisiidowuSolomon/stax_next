import React from 'react'
import UserTemplate from './_components/UserTemplate';
import "./user.style.css";



import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "DataStax Next",
    description: "Deploy your database and develop bold generative AI applications with up to 20% higher relevance, 9x more throughput, and 74x faster response time.",
};

export default function UserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" style={{ overflow: "auto" }}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <UserTemplate>
                    {children}
                </UserTemplate>
            </body>
        </html>
    );
}
