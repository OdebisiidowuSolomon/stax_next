import React from 'react'
import PublicTemplate from './_components/PublicTemplate';
import "./public.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "FutrBrit AI - Your AI-Powered Migrant Assistant",
};

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" style={{ overflow: "auto" }}>
            <body
                className="page-template page-template-elementor_header_footer page page-id-12670 wp-embed-responsive Wplgnite Wplgnite-zaap elementor-default elementor-template-full-width elementor-kit-8 elementor-page elementor-page-12670 e--ua-blink e--ua-chrome e--ua-mac e--ua-webkit"
                data-elementor-device-mode="desktop">

                <div className="overlay"></div>

                <PublicTemplate>
                    {children}
                </PublicTemplate>

            </body>
        </html>
    );
}
