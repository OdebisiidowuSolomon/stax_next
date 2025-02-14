import React from 'react'
import PublicStickyHeader from './PublicStickyHeader';
import PublicFooter from './PublicFooter';

function PublicTemplate({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="Wplgnite-website-layout full-width body-inner">
            <PublicStickyHeader />

            {children}
            <PublicFooter />
        </div>
    )
}

export default PublicTemplate