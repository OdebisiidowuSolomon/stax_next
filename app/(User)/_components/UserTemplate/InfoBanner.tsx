import React from 'react'

function InfoBanner() {
    return (
        <div className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered css-1cbf1l2" style={{ minHeight: "0px" }}>
            <div className="MuiCollapse-wrapper MuiCollapse-vertical css-15830to">
                <div className="MuiCollapse-wrapperInner MuiCollapse-vertical css-9vd5ud">
                    <div className="MuiBox-root css-nvleex">
                        <div
                            className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorPrimary MuiChip-filledPrimary css-2zzjsp">
                            <span className="MuiChip-label MuiChip-labelMedium css-s01idy">Preview</span>
                        </div>
                        <p className="MuiTypography-root MuiTypography-body1 css-1ijyqix">Generate embeddings from
                            unstructured data directly in Astra ✨</p><a
                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedBold MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorBold MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedBold MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorBold MuiButton-disableElevation css-18fawbc"
                                tabIndex={0} data-testid="visit-the-blog"
                                href="https://www.datastax.com/blog/simplifying-vector-embedding-generation-with-astra-vectorize"
                                target="_blank">Learn More</a><button
                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorNeutral MuiIconButton-sizeSmall css-gnycto"
                                    tabIndex={0} type="button" data-testid="close-button"><svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1oy67ku" focusable="false"
                                        aria-hidden="true" viewBox="0 0 24 24" data-testid="CloseIcon">
                                <path
                                    d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                </path>
                            </svg></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoBanner