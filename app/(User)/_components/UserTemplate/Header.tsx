import Image from 'next/image'
import React from 'react'

function Header() {

    const paperStyle = {
        '--Paper-shadow': 'var(--shadows-0)',
        '--Paper-overlay': 'var(--overlays-0)',
    } as React.CSSProperties;

    return (
        <header
            className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionSticky css-8dlbji"
            data-testid="app-bar" style={paperStyle}>
            <div className="MuiToolbar-root MuiToolbar-regular css-1qfpssg">
                <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-1a4zays">
                    <div
                        className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-spacing-xs-1 MuiGrid-grid-xs-true css-fowhkl">
                        <div className="MuiBox-root css-ht5x0e">
                            <div className="MuiBox-root css-10fkl9j"><svg width="31" height="14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.886.864H0v12.272h10.886l2.734-2.122V2.986L10.886.864ZM2.11 2.986h9.4v8.03h-9.4v-8.03ZM29.284 3.075V1h-9.953l-2.703 2.075v2.85L19.331 8h8.674v2.924H17.167V13h10.22l2.703-2.076V8l-2.702-2.075h-8.675v-2.85h10.571Z"
                                    fill="currentColor"></path>
                            </svg></div>
                            <div className="MuiBox-root css-1vrgqfi"><button
                                className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedBold MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorBold MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedBold MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorBold MuiButton-disableElevation css-1dt4vgu"
                                tabIndex={0} type="button"><span
                                    className="MuiButton-icon MuiButton-startIcon MuiButton-iconSizeSmall css-1ur507a"><svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-axq8fh"
                                        focusable="false" aria-hidden="true" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="account">
                                            <g id="Vector">
                                                <path
                                                    d="M16.5 8.25V2.25H11.25V4.5H6.75V2.25H1.5V8.25H6.75V6H8.25V13.5H11.25V15.75H16.5V9.75H11.25V12H9.75V6H11.25V8.25H16.5ZM5.25 6.75H3V3.75H5.25V6.75ZM12.75 11.25H15V14.25H12.75V11.25ZM12.75 3.75H15V6.75H12.75V3.75Z"
                                                    fill="#A6AAAE"></path>
                                            </g>
                                        </g>
                                    </svg></span><span
                                        className="MuiTypography-root MuiTypography-button MuiTypography-noWrap css-uqa0y1">
                                    <div className="MuiBox-root css-15ltw6e">kralconomoh@gmail.com</div>
                                </span><span
                                    className="MuiButton-icon MuiButton-endIcon MuiButton-iconSizeSmall css-5yqlck"><svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-gce9j7"
                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                        data-testid="ExpandMoreIcon">
                                        <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                                    </svg></span></button></div>
                            <div className="MuiBox-root css-0"><button
                                className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedBold MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorBold MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedBold MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorBold MuiButton-disableElevation css-1dt4vgu"
                                tabIndex={0} type="button" id="app-selector-button"><span
                                    className="MuiButton-icon MuiButton-startIcon MuiButton-iconSizeSmall css-1ur507a"><svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-axq8fh"
                                        focusable="false" aria-hidden="true" viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="database_vector">
                                            <g id="Vector">
                                                <path
                                                    d="M11.334 7.33337L12.1673 5.50004L14.0007 4.66671L12.1673 3.83337L11.334 2.00004L10.5007 3.83337L8.66732 4.66671L10.5007 5.50004L11.334 7.33337Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M14.6673 2.00004C14.6673 2.36823 14.3688 2.66671 14.0007 2.66671C13.6325 2.66671 13.334 2.36823 13.334 2.00004C13.334 1.63185 13.6325 1.33337 14.0007 1.33337C14.3688 1.33337 14.6673 1.63185 14.6673 2.00004Z"
                                                    fill="currentColor"></path>
                                                <path clipRule="evenodd"
                                                    d="M12.0007 8.66671C12.0007 8.68373 11.9938 8.77976 11.8059 8.94636C11.6188 9.11227 11.31 9.29214 10.8711 9.4567C9.99839 9.78398 8.74797 10 7.33398 10C5.92 10 4.66958 9.78398 3.79683 9.4567C3.358 9.29214 3.04917 9.11227 2.86204 8.94636C2.67413 8.77976 2.66732 8.68373 2.66732 8.66671V7.0775C2.87339 7.18658 3.09573 7.28446 3.32867 7.37181C4.3862 7.76838 5.80245 8.00004 7.33398 8.00004C7.55895 8.00004 7.78143 7.99504 8.00065 7.98526V6.65048C7.78322 6.66115 7.56071 6.66671 7.33398 6.66671C5.92 6.66671 4.66958 6.45065 3.79683 6.12337C3.358 5.95881 3.04917 5.77894 2.86204 5.61303C2.70698 5.47555 2.67523 5.38612 2.66887 5.3495C2.67908 5.32799 2.70604 5.2832 2.77135 5.21457C2.91742 5.06108 3.19181 4.8622 3.63286 4.66617C4.51161 4.27562 5.81903 4.00004 7.33398 4.00004C7.56112 4.00004 7.78359 4.00624 8.00065 4.01808V2.68298C7.78176 2.67223 7.55932 2.66671 7.33398 2.66671C4.02028 2.66671 1.33398 3.86062 1.33398 5.33337V12C1.33398 13.4728 4.02028 14.6667 7.33398 14.6667C10.6477 14.6667 13.334 13.4728 13.334 12V8.66671H12.0007ZM12.0007 11.9805C11.9918 12.0005 11.9656 12.0464 11.8966 12.1188C11.7505 12.2723 11.4762 12.4712 11.0351 12.6672C10.1564 13.0578 8.84894 13.3334 7.33398 13.3334C5.81903 13.3334 4.51161 13.0578 3.63286 12.6672C3.19181 12.4712 2.91742 12.2723 2.77135 12.1188C2.7024 12.0464 2.67619 12.0005 2.66732 11.9805V10.4108C2.87339 10.5199 3.09573 10.6178 3.32867 10.7051C4.3862 11.1017 5.80245 11.3334 7.33398 11.3334C8.86552 11.3334 10.2818 11.1017 11.3393 10.7051C11.5722 10.6178 11.7946 10.5199 12.0007 10.4108V11.9805Z"
                                                    fill="currentColor" fillRule="evenodd"></path>
                                            </g>
                                        </g>
                                    </svg></span><span
                                        className="MuiTypography-root MuiTypography-button MuiTypography-noWrap css-uqa0y1">
                                    <div className="MuiBox-root css-9n8416">Astra DB</div>
                                </span><span
                                    className="MuiButton-icon MuiButton-endIcon MuiButton-iconSizeSmall css-5yqlck"><svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-gce9j7"
                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                        data-testid="ExpandMoreIcon">
                                        <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                                    </svg></span></button></div>
                        </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item css-1wxaqej"><a
                        className="MuiButtonBase-root MuiButton-root MuiButton-soft MuiButton-softBold MuiButton-sizeSmall MuiButton-softSizeSmall MuiButton-colorBold MuiButton-disableElevation MuiButton-root MuiButton-soft MuiButton-softBold MuiButton-sizeSmall MuiButton-softSizeSmall MuiButton-colorBold MuiButton-disableElevation css-m5bps2"
                        tabIndex={0} data-testid="app-bar-docs-button"
                        href="https://docs.datastax.com/en/astra-db-serverless" target="_blank"><svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-x336ft" focusable="false"
                            aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M 14.144067,9.7268324 V 7.9032334 A 9.420499,9.420499 0 0 1 15.954794,7.340063 9.7530375,9.7530375 0 0 1 17.898536,7.1523396 c 0.46448,0 0.920381,0.035398 1.367699,0.1072704 0.447318,0.071871 0.884983,0.1609058 1.314064,0.2681765 V 9.2441151 C 20.151218,9.0832093 19.717844,8.9630662 19.28018,8.8826134 A 7.6129902,7.6129902 0 0 0 17.898536,8.7613976 c -0.679023,0 -1.3323,0.085816 -1.957688,0.2553038 a 8.6234787,8.6234787 0 0 0 -1.796781,0.710131 z m 0,5.8998796 v -1.823599 a 9.420499,9.420499 0 0 1 1.810727,-0.563169 9.7530375,9.7530375 0 0 1 1.943742,-0.187725 c 0.46448,0 0.920381,0.0354 1.367699,0.107272 0.447318,0.07188 0.884983,0.160904 1.314064,0.268176 v 1.716328 C 20.151218,14.983089 19.717844,14.862946 19.28018,14.782494 a 7.6162083,7.6162083 0 0 0 -1.381644,-0.121216 7.8307495,7.8307495 0 0 0 -1.957688,0.241358 7.420976,7.420976 0 0 0 -1.796781,0.724076 z m 0,-2.949939 v -1.823599 a 9.420499,9.420499 0 0 1 1.810727,-0.563171 9.7530375,9.7530375 0 0 1 1.943742,-0.187723 c 0.46448,0 0.920381,0.0354 1.367699,0.107271 0.447318,0.07188 0.884983,0.160905 1.314064,0.268175 v 1.71633 c -0.429081,-0.160907 -0.862455,-0.28105 -1.300119,-0.361502 a 7.6129902,7.6129902 0 0 0 -1.381644,-0.121215 c -0.679023,0 -1.3323,0.08581 -1.957688,0.255303 a 8.6234787,8.6234787 0 0 0 -1.796781,0.710131 z m -8.0452911,3.593563 a 10.673418,10.673418 0 0 1 2.4543499,0.281049 c 0.7948748,0.187723 1.5865312,0.469845 2.3728242,0.845292 V 6.8305279 C 10.193293,6.4014458 9.415581,6.0796341 8.5928159,5.865093 A 9.842072,9.842072 0 0 0 4.1818513,5.7310049 9.2928468,9.2928468 0 0 0 2.3443071,6.2941752 V 16.91396 c 0.6253871,-0.214542 1.2475563,-0.375448 1.8643618,-0.482718 0.6168057,-0.107271 1.2464837,-0.160906 1.890107,-0.160906 z m 6.9725861,1.126341 a 11.810487,11.810487 0 0 1 2.373896,-0.845292 11.02312,11.02312 0 0 1 4.344457,-0.120143 c 0.616806,0.10727 1.237902,0.268176 1.86329,0.482718 V 6.2941752 A 9.2982104,9.2982104 0 0 0 19.816532,5.7310049 9.8967804,9.8967804 0 0 0 15.404495,5.865093 c -0.822764,0.2145411 -1.600476,0.5363528 -2.333133,0.9654349 z m -1.072706,3.16448 a 10.296899,10.296899 0 0 0 -2.7890344,-1.58224 8.7886753,8.7886753 0 0 0 -3.1108457,-0.56317 c -0.9471989,0 -1.9394514,0.179141 -2.9767575,0.536352 A 9.4076265,9.4076265 0 0 0 0.19889616,20.614793 V 5.060564 C 0.98518927,4.5242113 1.910934,4.1133651 2.9750578,3.8269528 a 11.620618,11.620618 0 0 1 6.168056,-0.026818 c 0.9922522,0.2681763 1.9437422,0.6704408 2.8555422,1.2067935 a 11.563764,11.563764 0 0 1 5.89988,-1.609058 c 1.019069,0 2.060667,0.1426698 3.124791,0.4290821 1.063051,0.2864123 1.988795,0.6972585 2.775088,1.2336111 V 20.614793 a 9.0557789,9.0557789 0 0 0 -2.909176,-1.662694 c -1.045888,-0.357211 -2.043505,-0.536352 -2.990703,-0.536352 -1.072705,0 -2.110012,0.187723 -3.110845,0.56317 a 10.297972,10.297972 0 0 0 -2.789035,1.58224 z"
                                fill="currentColor"></path>
                        </svg>
                        <div className="MuiBox-root css-9n8416">Docs</div>
                    </a></div>
                    <div className="MuiDivider-root MuiDivider-middle MuiDivider-vertical MuiDivider-flexItem css-94ob65"
                        role="separator" aria-orientation="vertical" aria-hidden="true"></div>
                    <div className="MuiGrid-root MuiGrid-item css-1wxaqej"><button
                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorNeutral MuiIconButton-sizeMedium css-19gkavh"
                        tabIndex={0} type="button" data-testid="account-avatar-button"
                        aria-label="kralconomoh@gmail.com">
                        <Image alt="Gravatar for kralconomoh@gmail.com"
                            src="https://www.gravatar.com/avatar/73186bdd3cfc1dd901c43ad08c77492d?d=retro&amp;r=g&amp;s=32"
                            height="32" width="32" className="react-gravatar css-mc7vgf" /><svg
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-16kxdi7" focusable="false"
                                aria-hidden="true" viewBox="0 0 24 24" data-testid="UnfoldMoreIcon">
                            <path
                                d="M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15z">
                            </path>
                        </svg></button></div>
                </div>
            </div>
        </header>
    )
}

export default Header