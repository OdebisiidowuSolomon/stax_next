import React from 'react'
import Header from './Header';
import InfoBanner from './InfoBanner';
import SideBar from './SideBar';

function UserTemplate({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="MuiBox-root css-s92abg" data-testid="astra-portal-container" id="astra-portal-container">
            <Header />
            <InfoBanner />
            <div className="MuiBox-root css-o8huv3" id="astra-portal-body">
                <SideBar />
                {children}
            </div>

        </div>
    )
}

export default UserTemplate