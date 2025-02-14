import React from 'react'
import AboutHeroBanner from './_components/AboutHeroBanner'
import KnowMoreAboutUs from './_components/KnowMoreAboutUs'
import OurStatement from './_components/OurStatement'
import YearsOfExperience from './_components/YearsOfExperience'
import WeFocuseOurSkills from './_components/WeFocuseOurSkills'

function AboutPage() {
    return (
        <div className="site">
            <div id="content" className="site-content">
                <div data-elementor-type="wp-page" data-elementor-id="12670" className="elementor elementor-12670">
                    <AboutHeroBanner />
                    <KnowMoreAboutUs />
                    <OurStatement />
                    <YearsOfExperience />
                    <WeFocuseOurSkills />
                </div>
            </div>
        </div>
    )
}

export default AboutPage