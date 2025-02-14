'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

function SideBar() {
    const paperStyle = {
        '--Paper-shadow': 'var(--shadows-0)',
        '--Paper-overlay': 'var(--overlays-0)',
    } as React.CSSProperties;;

    const pathname = usePathname()

    const isActive = (path: string) => path === pathname ? 'Mui-selected' : ''

    console.log(pathname, 'pathname')


    return (
        <div className="MuiDrawer-root MuiDrawer-docked css-1n2eymh" data-testid="wh-navigation-container">
            <div className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-kars1v"
                style={paperStyle}>
                <ul className="MuiList-root css-uas265">
                    <div className="MuiBox-root css-7d6j27"><Link
                        className={`MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters Mui-selectedj css-1lrlr60 ${isActive('/user/home')}`}
                        tabIndex={0} href="/user" data-testid="home-link"
                        aria-label="">
                        <div className="MuiListItemIcon-root css-1vck20p"><svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-iguwhy"
                            focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                            data-testid="HomeOutlinedIcon">
                            <path
                                d="m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81zM12 3 2 12h3v8h6v-6h2v6h6v-8h3z">
                            </path>
                        </svg></div>
                        <div className="MuiListItemText-root css-1vcx6qv" style={{ opacity: "1" }}>
                            <p
                                className="MuiTypography-root MuiTypography-body2 MuiListItemText-primary css-psr0o6">
                                Home</p>
                        </div><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1kfymf5"
                            focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                            data-testid="ArrowForwardIcon">
                            <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                        </svg>
                    </Link>
                        <ul className="MuiList-root css-11fhglq" aria-label="Products"
                            data-testid="products-section"><a
                                className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters css-a3odsn"
                                tabIndex={0} href="/org/79bb5d58-2332-4e83-9a47-eaa37e91da94/database"
                                aria-label="">
                                <div className="MuiListItemIcon-root css-1vck20p"><svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8mcbwj"
                                    focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd"
                                        d="m 5.6040526,9.8599221 c 1.62937,0.7486119 3.762282,1.1229179 6.3987494,1.1229179 2.636468,0 4.769353,-0.374305 6.398787,-1.1229179 1.629305,-0.7486111 2.444024,-1.5965276 2.444024,-2.5437499 0,-0.9625002 -0.814719,-1.8142425 -2.444024,-2.5552022 -1.629434,-0.7409724 -3.762319,-1.1114646 -6.398787,-1.1114646 -1.634128,0 -3.0748043,0.1423334 -4.3220304,0.4269972 C 6.91575,4.2511091 6.2235108,4.4792652 5.6040526,4.76097 3.9746831,5.5019298 3.1599916,6.353672 3.1599916,7.3161722 c 0,0.9472222 0.8146915,1.7951388 2.444061,2.5437499 z m 0.1842187,4.6979189 c 1.7521866,0.672222 3.8236974,1.008331 6.2145307,1.008331 2.390835,0 4.46241,-0.336109 6.214594,-1.008331 1.752188,-0.672224 2.628217,-1.481944 2.628217,-2.429166 V 9.8370056 c 0,0.6111114 -0.307076,1.1343674 -0.921095,1.5697834 -0.614149,0.435418 -1.375548,0.790634 -2.284456,1.065633 -0.908782,0.275 -1.870877,0.477437 -2.886164,0.607296 -1.015286,0.129887 -1.932318,0.194786 -2.751097,0.194786 -0.802402,0 -1.715347,-0.06491 -2.73882,-0.194786 C 8.2405074,12.94986 7.2743484,12.743609 6.3655038,12.460971 5.4566593,12.178332 4.695208,11.819293 4.081111,11.383877 3.4670402,10.948472 3.1599916,10.43284 3.1599916,9.8370056 v 2.2916674 c 0,0.947222 0.8760931,1.756943 2.6282797,2.429168 z m 0,4.583329 c 1.7521866,0.672223 3.8236974,1.008335 6.2145307,1.008335 2.390835,0 4.46241,-0.336112 6.214594,-1.008335 1.752188,-0.672222 2.628217,-1.481943 2.628217,-2.429168 v -2.291663 c 0,0.611112 -0.307076,1.134344 -0.921095,1.56982 -0.614149,0.435355 -1.375548,0.790531 -2.284456,1.065654 -0.908782,0.275 -1.870877,0.4774 -2.886164,0.6072 -1.015286,0.129923 -1.932318,0.194824 -2.751097,0.194824 -0.802402,0 -1.715347,-0.06491 -2.73882,-0.194824 C 8.2405074,17.533213 7.2743484,17.326905 6.3655038,17.044326 5.4566593,16.761624 4.695208,16.402657 4.081111,15.967182 3.4670402,15.53183 3.1599916,15.016174 3.1599916,14.420341 v 2.29166 c 0,0.947224 0.8760931,1.756946 2.6282797,2.429169 z M 5.1250605,7.3161722 C 6.107595,6.3995055 7.5813969,5.4828386 12.002802,5.4828386 c 4.421403,0 5.895206,0.9166668 6.877742,1.8333336 -0.982535,0.9166665 -2.456338,1.8333331 -6.877742,1.8333331 -4.421405,0 -5.8952067,-0.9166666 -6.8777415,-1.8333331 z"
                                        fill="currentColor"></path>
                                </svg></div>
                                <div className="MuiListItemText-root css-1vcx6qv" style={{ opacity: "1" }}>
                                    <p
                                        className="MuiTypography-root MuiTypography-body2 MuiListItemText-primary css-psr0o6">
                                        Databases</p>
                                </div><button
                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorNeutral MuiIconButton-sizeMedium css-gwgtbd"
                                    tabIndex={0} type="button" aria-label="Hide Databases List"
                                    style={{ opacity: 0, visibility: "hidden" }}><svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-18f358d"
                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                        data-testid="UnfoldLessIcon">
                                        <path
                                            d="M7.41 18.59 8.83 20 12 16.83 15.17 20l1.41-1.41L12 14zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10z">
                                        </path>
                                    </svg></button><svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1kfymf5"
                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                        data-testid="ArrowForwardIcon">
                                    <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                                </svg>
                            </a>
                            <div className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered css-1cbf1l2"
                                style={{ minHeight: "0px" }}>
                                <div className="MuiCollapse-wrapper MuiCollapse-vertical css-15830to">
                                    <div className="MuiCollapse-wrapperInner MuiCollapse-vertical css-9vd5ud">
                                        <div className="MuiList-root css-11fhglq"></div>
                                    </div>
                                </div>
                            </div><a
                                className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters css-a3odsn"
                                tabIndex={0} href="/org/79bb5d58-2332-4e83-9a47-eaa37e91da94/streaming"
                                aria-label="">
                                <div className="MuiListItemIcon-root css-1vck20p"><svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-iguwhy"
                                    focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                    data-testid="AirIcon">
                                    <path
                                        d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3M19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5m-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11">
                                    </path>
                                </svg></div>
                                <div className="MuiListItemText-root css-1vcx6qv" style={{ opacity: "1" }}>
                                    <p
                                        className="MuiTypography-root MuiTypography-body2 MuiListItemText-primary css-psr0o6">
                                        Streaming</p>
                                </div><button
                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorNeutral MuiIconButton-sizeMedium css-gwgtbd"
                                    tabIndex={0} type="button" aria-label="Show Streaming List"
                                    style={{ opacity: 0, visibility: "hidden" }}><svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-18f358d"
                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                        data-testid="UnfoldMoreIcon">
                                        <path
                                            d="M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15z">
                                        </path>
                                    </svg></button><svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1kfymf5"
                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                        data-testid="ArrowForwardIcon">
                                    <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                                </svg>
                            </a>
                            <div className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden css-abqyn"
                                style={{ minHeight: "0px" }}>
                                <div className="MuiCollapse-wrapper MuiCollapse-vertical css-15830to">
                                    <div className="MuiCollapse-wrapperInner MuiCollapse-vertical css-9vd5ud">
                                        <div className="MuiList-root css-11fhglq"></div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                        <ul className="MuiList-root css-1wvphk6" aria-label="Settings Links Section"
                            data-testid="settings-links"><a
                                className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters css-1lrlr60"
                                tabIndex={0} href="/org/79bb5d58-2332-4e83-9a47-eaa37e91da94/settings/billing"
                                data-testid="billing-nav-link" aria-label="">
                                <div className="MuiListItemIcon-root css-1vck20p"><svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-17tj931"
                                    focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                    data-testid="PaidOutlinedIcon">
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m.89-8.9c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.44-.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6.56-2.62 2.85-2.62 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 3.02 2.96V19h1.75v-1.24c.52-.09 3.02-.59 3.02-3.22.01-1.39-.6-2.61-3-3.44">
                                    </path>
                                </svg></div>
                                <div className="MuiListItemText-root css-1vcx6qv" style={{ opacity: "1" }}>
                                    <p
                                        className="MuiTypography-root MuiTypography-body2 MuiListItemText-primary css-psr0o6">
                                        Billing</p>
                                </div><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1kfymf5"
                                    focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                    data-testid="ArrowForwardIcon">
                                    <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                                </svg>
                            </a><a
                                className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters css-1lrlr60"
                                tabIndex={0} href="/org/79bb5d58-2332-4e83-9a47-eaa37e91da94/settings/tokens"
                                data-testid="tokens-nav-link" aria-label="">
                                <div className="MuiListItemIcon-root css-1vck20p"><svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-17tj931"
                                    focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                    data-testid="KeyIcon">
                                    <path
                                        d="M21 10h-8.35C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H13l2 2 2-2 2 2 4-4.04zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3">
                                    </path>
                                </svg></div>
                                <div className="MuiListItemText-root css-1vcx6qv" style={{ opacity: "1" }}>
                                    <p
                                        className="MuiTypography-root MuiTypography-body2 MuiListItemText-primary css-psr0o6">
                                        Tokens</p>
                                </div><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1kfymf5"
                                    focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                    data-testid="ArrowForwardIcon">
                                    <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                                </svg>
                            </a><a
                                className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters css-1lrlr60"
                                tabIndex={0}
                                href="/org/79bb5d58-2332-4e83-9a47-eaa37e91da94/settings/manageIntegrations"
                                data-testid="integrations-nav-link" aria-label="">
                                <div className="MuiListItemIcon-root css-1vck20p"><svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-17tj931"
                                    focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                    data-testid="PowerOutlinedIcon">
                                    <path
                                        d="M16 9v4.66l-3.5 3.51V19h-1v-1.83L8 13.65V9zm0-6h-2v4h-4V3H8v4h-.01C6.9 6.99 6 7.89 6 8.98v5.52L9.5 18v3h5v-3l3.5-3.51V9c0-1.1-.9-2-2-2z">
                                    </path>
                                </svg></div>
                                <div className="MuiListItemText-root css-1vcx6qv" style={{ opacity: "1" }}>
                                    <p
                                        className="MuiTypography-root MuiTypography-body2 MuiListItemText-primary css-psr0o6">
                                        Integrations</p>
                                </div><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1kfymf5"
                                    focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                    data-testid="ArrowForwardIcon">
                                    <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                                </svg>
                            </a><Link
                                className={`MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters css-1lrlr60 ${isActive('/user/settings')}`}
                                tabIndex={0} href="/user/settings"
                                data-testid="settings-nav-link" aria-label="">
                                <div className="MuiListItemIcon-root css-1vck20p"><svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-17tj931"
                                    focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                    data-testid="SettingsOutlinedIcon">
                                    <path
                                        d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1q-.09-.03-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1q.09.03.18.03c.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64zm-1.98-1.71c.04.31.05.52.05.73s-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2">
                                    </path>
                                </svg></div>
                                <div className="MuiListItemText-root css-1vcx6qv" style={{ opacity: "1" }}>
                                    <p
                                        className="MuiTypography-root MuiTypography-body2 MuiListItemText-primary css-psr0o6">
                                        Settings</p>
                                </div><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1kfymf5"
                                    focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                    data-testid="ArrowForwardIcon">
                                    <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                                </svg>
                            </Link></ul>
                    </div>
                    <ul className="MuiList-root MuiList-padding css-j7gd47" data-testid="bottom-tools-links">
                        <div className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters css-10nh7d5"
                            tabIndex={0} role="button">
                            <p className="MuiTypography-root MuiTypography-body2 css-50rkp6">Command Palette</p>
                            <div className="MuiBox-root css-c5ukj6">
                                <p className="MuiTypography-root MuiTypography-body2 css-16lxvpt">Ctrl+K</p>
                            </div>
                        </div>
                        <div className="MuiBox-root css-1ls4mzh">
                            <div className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters css-1qyzcru"
                                tabIndex={-1} role="button" data-testid="current-plan-link">
                                <div className="MuiBox-root css-putuu7">
                                    <h4 className="MuiTypography-root MuiTypography-h4 css-1f5yoek">Free Plan</h4>
                                    <button
                                        className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedBold MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorBold MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedBold MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorBold MuiButton-disableElevation css-1k5nouf"
                                        tabIndex={0} type="button">Upgrade</button>
                                </div>
                                <p className="MuiTypography-root MuiTypography-body2 css-1axj146">Accelerate on
                                    Astra with <a
                                        className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1yqzhrf"
                                        href="https://www.datastax.com/lp/astra-db-starter-pack"
                                        target="_blank">1,000+ Credits</a></p>
                            </div>
                        </div>
                    </ul>
                    <div className="MuiBox-root css-0" data-testid="wh-bottom-navigation-container"></div>
                    <div className="MuiBox-root css-121jfil" data-testid="navigation-footer"><button
                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorNeutral MuiIconButton-sizeMedium css-7vzc6x"
                        tabIndex={0} type="button" data-testid="collapse-button"
                        aria-label="Collapse Menu"><svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-16eprlq" focusable="false"
                            aria-hidden="true" viewBox="0 0 24 24" data-testid="MenuOpenIcon">
                            <path
                                d="M3 18h13v-2H3zm0-5h10v-2H3zm0-7v2h13V6zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5z">
                            </path>
                        </svg></button></div>
                </ul>
            </div>
        </div >
    )
}

export default SideBar