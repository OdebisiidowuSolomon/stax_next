import React from 'react'
import './style.css'

function UserSettingPage() {
    return (
        <div className="MuiBox-root css-1658yda" id="astra-portal-content">
            <div className="MuiContainer-root css-gsfn9u">
                <div className="MuiBox-root css-0" data-testid="organizationSettingsPageHolder">
                    <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-isbt42">
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-lg-12 css-1fppow5">
                            <nav className="MuiTypography-root MuiTypography-body1 MuiBreadcrumbs-root css-ui70r8">
                                <ol className="MuiBreadcrumbs-ol css-51eq8m">
                                    <li className="MuiBreadcrumbs-li"><a
                                        className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone css-15xp20o"
                                        href="/org/79bb5d58-2332-4e83-9a47-eaa37e91da94">Home</a></li>
                                    <li aria-hidden="true" className="MuiBreadcrumbs-separator css-1nd5pgh">/</li>
                                    <li className="MuiBreadcrumbs-li">
                                        <p className="MuiTypography-root MuiTypography-inherit css-1gaqw5o">Organization Settings
                                        </p>
                                    </li>
                                </ol>
                            </nav>
                            <h1 className="MuiTypography-root MuiTypography-h1 css-1n6yk0c">kralconomoh@gmail.com</h1>
                        </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-de2b8x">
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-lg-12 css-1fppow5">
                            <div className="MuiTabs-root css-ls74am">
                                <div className="MuiTabs-scroller MuiTabs-fixed css-2xu61f"
                                    style={{overflow: "hidden", marginBottom: "0px"}}>
                                    <div className="MuiTabs-flexContainer css-1902i5q" role="tablist"><a
                                        className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected css-cyq1d7"
                                        tabIndex={0} role="tab" aria-selected="true" data-testid="settings-users-tab"
                                        href="/org/79bb5d58-2332-4e83-9a47-eaa37e91da94/settings/users">Users</a><a
                                            className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-cyq1d7"
                                            tabIndex={-1} role="tab" aria-selected="false" data-testid="settings-roles-tab"
                                            href="/org/79bb5d58-2332-4e83-9a47-eaa37e91da94/settings/roles">Roles</a><a
                                                className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-cyq1d7"
                                                tabIndex={-1} role="tab" aria-selected="false" data-testid="settings-tokens-tab"
                                                href="/org/79bb5d58-2332-4e83-9a47-eaa37e91da94/settings/tokens">Tokens</a><a
                                                    className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-cyq1d7"
                                                    tabIndex={-1} role="tab" aria-selected="false"
                                                    data-testid="settings-integrations-tab"
                                                    href="/org/79bb5d58-2332-4e83-9a47-eaa37e91da94/settings/manageIntegrations">Integrations</a><a
                                                        className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-cyq1d7"
                                                        tabIndex={-1} role="tab" aria-selected="false" data-testid="settings-billing-tab"
                                                        href="/org/79bb5d58-2332-4e83-9a47-eaa37e91da94/settings/billing">Billing</a><a
                                                            className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-cyq1d7"
                                                            tabIndex={-1} role="tab" aria-selected="false" data-testid="settings-security-tab"
                                                            href="/org/79bb5d58-2332-4e83-9a47-eaa37e91da94/settings/security">Security</a>
                                    </div><span className="MuiTabs-indicator css-1b1mk6p"
                                        style={{left: "0px", width: "64.0547px"}}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="MuiContainer-root MuiContainer-maxWidthLg css-p4tmcd">
                    <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-1h77wgb">
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-lg-12 css-1fppow5">
                            <div className="MuiGrid-root MuiGrid-container css-1d3bbye">
                                <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-lg-8 css-1jis3k9">
                                    <h2 className="MuiTypography-root MuiTypography-h2 css-1cr59zj">User Management</h2>
                                </div>
                                <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-lg-4 css-e2jtg2"><button
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedBold MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorBold MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedBold MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorBold MuiButton-disableElevation css-13j4j51"
                                    tabIndex={0} type="button"
                                    data-testid="invite-user-org-82951f77-86fe-4e22-90ce-01f0488d24aa">Invite User</button>
                                </div>
                                <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-lg-12 css-19p1l3z">
                                    <table className="MuiTable-root css-94xred">
                                        <thead className="MuiTableHead-root css-s4zxv0">
                                            <tr className="MuiTableRow-root MuiTableRow-head css-2sros3">
                                                <th className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium css-bg4zoc"
                                                    scope="col">User</th>
                                                <th className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignRight MuiTableCell-sizeMedium css-9qvhrq"
                                                    scope="col">Roles</th>
                                                <th className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium css-cjahmt"
                                                    scope="col">Status</th>
                                                <th className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium css-bg4zoc"
                                                    scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="MuiTableBody-root css-y6j1my">
                                            <tr className="MuiTableRow-root css-2sros3">
                                                <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-72h6wq"
                                                    data-testid="email">kralconomoh@gmail.com<div
                                                        className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorPrimary MuiChip-filledPrimary css-1731uoh"
                                                        data-testid="admin-label"><span
                                                            className="MuiChip-label MuiChip-labelMedium css-s01idy">Admin</span>
                                                    </div>
                                                </td>
                                                <td
                                                    className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-1c1mkhu">
                                                    <span className="MuiBox-root css-0"
                                                        data-testid="82951f77-86fe-4e22-90ce-01f0488d24aa-roleList">1</span>
                                                </td>
                                                <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1b26jyt"
                                                    data-testid="status">Active</td>
                                                <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-19c2p2t"
                                                    data-testid="dropdown">
                                                    <div className="MuiBox-root css-0"><button
                                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorNeutral MuiIconButton-sizeSmall css-137xpx2"
                                                        tabIndex={0} type="button" aria-label=""><svg
                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-p66puj"
                                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                            data-testid="MoreVertIcon">
                                                            <path
                                                                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2">
                                                            </path>
                                                        </svg></button></div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSettingPage