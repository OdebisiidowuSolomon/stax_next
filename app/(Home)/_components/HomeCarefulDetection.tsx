import Image from 'next/image'
import React from 'react'

function HomeCarefulDetection() {
    return (
        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-2b2c939 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="2b2c939" data-element_type="section"
            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e990acb"
                    data-id="e990acb" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-4682aa9 elementor-widget__width-auto elementor-absolute small-circle-animation  elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-image"
                            data-id="4682aa9" data-element_type="widget"
                            data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                            data-widget_type="image.default">
                            <div className="elementor-widget-container">
                                <Image loading="lazy" decoding="async" width="243" height="164"
                                    src="https://zaap.wpthemedemos.com/wp-content/uploads/2022/12/cyan-line.png"
                                    className="attachment-full size-full wp-image-4602" alt="Cyan Line" />
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-b41ae3b elementor-widget elementor-widget-radiant-custom-heading"
                            data-id="b41ae3b" data-element_type="widget"
                            data-widget_type="radiant-custom-heading.default">
                            <div className="elementor-widget-container">
                                <div className="rt-hover-heading ">
                                    <h2 className="rt-title-heading">we try to carefully <span
                                        className="head-txt"><span className="rt-highlight-txt">detection<span
                                            className="rt-underline-txt"><svg width="220" height="10"
                                                viewBox="0 0 207 9" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect width="220" height="10" fill="#1EFFD6"></rect>
                                            </svg></span></span></span><span
                                                className="highlight-after-text"> and prevention of all data</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-db63eb8 elementor-widget elementor-widget-text-editor"
                            data-id="db63eb8" data-element_type="widget"
                            data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                                Etiam id euismod odio. Ut euismod sem a lacus fringilla hendrerit. Null
                                facilisi morbi a arcu turpis. Integer laoreet eros sodales. </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeCarefulDetection