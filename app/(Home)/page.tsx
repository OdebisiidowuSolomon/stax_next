import React from 'react'
import HomeStickyHeader from './_components/HomeStickyHeader'
import HomeBanner from './_components/HomeBanner'
import HomePartnership from './_components/HomePartnership'
import HomeStepsToKeepSafe from './_components/HomeStepsToKeepSafe'
import HomeBetterSecurityCertified from './_components/HomeBetterSecurityCertified'
import HomeCarefulDetection from './_components/HomeCarefulDetection'
import HomeDataDiagnostic from './_components/HomeDataDiagnostic'
import HomeHowWeHelp from './_components/HomeHowWeHelp'
import HomeJoinThisProgram from './_components/HomeJoinThisProgram'
import HomeAnalytic from './_components/HomeAnalytic'
import HomeHowToRespond from './_components/HomeHowToRespond'
import HomeFooter from './_components/HomeFooter'

function HomePage() {
    return (
        <div className="Wplgnite-website-layout full-width body-inner">
            <HomeStickyHeader />
            <div className="site">
                {/* <!-- #content --> */}
                <div id="content" className="site-content">
                    <div data-elementor-type="wp-page" data-elementor-id="3050" className="elementor elementor-3050">
                        <HomeBanner />
                        <HomePartnership />
                        <HomeStepsToKeepSafe />
                        <HomeBetterSecurityCertified />
                        <HomeCarefulDetection />
                        <HomeDataDiagnostic />
                        <HomeHowWeHelp />
                        <HomeJoinThisProgram />
                        <HomeAnalytic />
                        <HomeHowToRespond />
                    </div>
                </div>
            </div>
            <HomeFooter />
        </div>
    )
}

export default HomePage