
function HomeOverLay() {
    return (
        <>
            <div id="wppa-overlay-bg"
                style={{ textAlign: "center", display: 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: 10000, backgroundColor: "black" }}>
            </div>
            <div id="wppa-overlay-ic"></div>
            <div id="wppa-overlay-pc"></div>
            <div id="wppa-overlay-fpc"></div>
            <div id="wppa-overlay-zpc"></div>


            {/* <Image id="wppa-pre-prev"
                alt=''
                src={null}
                style={{ position: "fixed", left: 0, top: '50%', width: 100, visibility: "hidden" }} className="wppa-preload wppa-ovl-preload" />
            <Image
                alt=''
                src={null}
                id="wppa-pre-next" style={{ position: "fixed", right: 0, top: '50%', width: 100, visibility: "hidden" }}
                className="wppa-preload wppa-ovl-preload" />
            <Image id="wppa-pre-curr" alt=''
                src={null}
                style={{ position: "fixed", left: 0, top: 0, visibility: "hidden" }} className="wppa-preload-curr wppa-ovl-preload" /> */}
            <svg
                id="wppa-ovl-spin" className="wppa-spinner uil-default" width="120px" height="120px" viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid" stroke=""
                style={{ width: "120px", height: "120px", position: "fixed", top: "50%", marginTop: "-60px", left: "50%", marginLeft: "-60px", opacity: 1, display: "none", fill: "#999999", backgroundColor: "transparent", borderRadius: "24px" }}>
                <rect x="0" y="0" width="100" height="100" fill="none" className="bk"></rect>
                <rect className="wppa-ajaxspin" x="47" y="40" width="6" height="20" rx="3" ry="3"
                    transform="rotate(0 50 50) translate(0 -32)">
                    <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0s" repeatCount="indefinite"></animate>
                </rect>
                <rect className="wppa-ajaxspin" x="47" y="40" width="6" height="20" rx="3" ry="3"
                    transform="rotate(22.5 50 50) translate(0 -32)">
                    <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0.09375s" repeatCount="indefinite">
                    </animate>
                </rect>
                <rect className="wppa-ajaxspin" x="47" y="40" width="6" height="20" rx="3" ry="3"
                    transform="rotate(45 50 50) translate(0 -32)">
                    <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0.1875s" repeatCount="indefinite">
                    </animate>
                </rect>
                <rect className="wppa-ajaxspin" x="47" y="40" width="6" height="20" rx="3" ry="3"
                    transform="rotate(67.5 50 50) translate(0 -32)">
                    <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0.28125s" repeatCount="indefinite">
                    </animate>
                </rect>
                <rect className="wppa-ajaxspin" x="47" y="40" width="6" height="20" rx="3" ry="3"
                    transform="rotate(90 50 50) translate(0 -32)">
                    <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0.375s" repeatCount="indefinite">
                    </animate>
                </rect>
                <rect className="wppa-ajaxspin" x="47" y="40" width="6" height="20" rx="3" ry="3"
                    transform="rotate(112.5 50 50) translate(0 -32)">
                    <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0.46875s" repeatCount="indefinite">
                    </animate>
                </rect>
                <rect className="wppa-ajaxspin" x="47" y="40" width="6" height="20" rx="3" ry="3"
                    transform="rotate(135 50 50) translate(0 -32)">
                    <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0.5625s" repeatCount="indefinite">
                    </animate>
                </rect>
                <rect className="wppa-ajaxspin" x="47" y="40" width="6" height="20" rx="3" ry="3"
                    transform="rotate(157.5 50 50) translate(0 -32)">
                    <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0.65625s" repeatCount="indefinite">
                    </animate>
                </rect>
                <rect className="wppa-ajaxspin" x="47" y="40" width="6" height="20" rx="3" ry="3"
                    transform="rotate(180 50 50) translate(0 -32)">
                    <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0.75s" repeatCount="indefinite">
                    </animate>
                </rect>
                <rect className="wppa-ajaxspin" x="47" y="40" width="6" height="20" rx="3" ry="3"
                    transform="rotate(202.5 50 50) translate(0 -32)">
                    <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0.84375s" repeatCount="indefinite">
                    </animate>
                </rect>
                <rect className="wppa-ajaxspin" x="47" y="40" width="6" height="20" rx="3" ry="3"
                    transform="rotate(225 50 50) translate(0 -32)">
                    <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0.9375s" repeatCount="indefinite">
                    </animate>
                </rect>
                <rect className="wppa-ajaxspin" x="47" y="40" width="6" height="20" rx="3" ry="3"
                    transform="rotate(247.5 50 50) translate(0 -32)">
                    <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="1.03125s" repeatCount="indefinite">
                    </animate>
                </rect>
                <rect className="wppa-ajaxspin" x="47" y="40" width="6" height="20" rx="3" ry="3"
                    transform="rotate(270 50 50) translate(0 -32)">
                    <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="1.125s" repeatCount="indefinite">
                    </animate>
                </rect>
                <rect className="wppa-ajaxspin" x="47" y="40" width="6" height="20" rx="3" ry="3"
                    transform="rotate(292.5 50 50) translate(0 -32)">
                    <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="1.21875s" repeatCount="indefinite">
                    </animate>
                </rect>
                <rect className="wppa-ajaxspin" x="47" y="40" width="6" height="20" rx="3" ry="3"
                    transform="rotate(315 50 50) translate(0 -32)">
                    <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="1.3125s" repeatCount="indefinite">
                    </animate>
                </rect>
                <rect className="wppa-ajaxspin" x="47" y="40" width="6" height="20" rx="3" ry="3"
                    transform="rotate(337.5 50 50) translate(0 -32)">
                    <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="1.40625s" repeatCount="indefinite">
                    </animate>
                </rect>
            </svg > <input type="hidden" id="wppa-nonce" name="wppa-nonce" value="9a817380e9" /><input type="hidden"
                id="wppa-qr-nonce" name="wppa-qr-nonce" value="ba975f0f75" />





















            <span id="elementor-device-mode" className="elementor-screen-only"></span>

            <div className="glasp-extension-toaster"
                style={{ display: "block", width: "320px", margin: "unset", padding: "unset", border: "unset", borderRadius: "unset", outline: "unset", backgroundColor: "unset", boxShadow: "unset", position: "fixed", top: "40px", right: "24px", zIndex: "9999" }}>
            </div>
            <div className="glasp-extension"
                style={{ display: "block", width: "unset", margin: "unset", padding: "unset", border: "unset", borderRadius: "unset", outline: "unset", backgroundColor: "unset", boxShadow: "unset", position: "fixed", bottom: "16px", right: "16px", zIndex: "9999" }}>
            </div>
        </>
    )
}

export default HomeOverLay