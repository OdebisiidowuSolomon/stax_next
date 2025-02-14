import type { Metadata } from "next";
import "./style.css";
import HomeOverLay from "./_components/HomeOverLay";

export const metadata: Metadata = {
    title: "DataStax Next",
    description: "Deploy your database and develop bold generative AI applications",
};

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" style={{ overflow: "auto" }}>
            <body
                className="page-template page-template-elementor_header_footer page page-id-3050 wp-embed-responsive Wplgnite Wplgnite-zaap elementor-default elementor-template-full-width elementor-kit-8 elementor-page elementor-page-3050 e--ua-blink e--ua-chrome e--ua-mac e--ua-webkit"
                data-elementor-device-mode="desktop">
                {/* <!-- overlay --> */}
                <div className="overlay"></div>
                {/* <!-- overlay -->

                <!-- scrollup -->
                <!-- scrollup --> */}
                {children}

                <HomeOverLay />
            </body>
        </html>
    );
}
