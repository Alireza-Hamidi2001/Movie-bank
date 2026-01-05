import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import footerLogo from "./../../assets/images/alireza4.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_firstCol">
                <div className="footer_social">
                    <BsTelegram className="footer_icon" />
                    <BsInstagram className="footer_icon" />
                    <SiWhatsapp className="footer_icon" />
                    <SiGithub className="footer_icon" />
                </div>
                <div className="footer_logo">
                    <img
                        src={footerLogo}
                        alt="footer logo"
                    />
                </div>
            </div>
            <div className="footer_secondCol">
                <div>
                    <h3>Resources</h3>
                    <p>Usage</p>
                    <p>Docs</p>
                    <p>Support</p>
                    <p>Hardware</p>
                </div>
                <div>
                    <h3>Pricing</h3>
                    <p>Overview</p>
                    <p>Flexible Data</p>
                    <p>High Valume</p>
                    <p>Enterprise</p>
                </div>
                <div>
                    <h3>Developers</h3>
                    <p>Forum</p>
                    <p>Projects</p>
                    <p>Open Source</p>
                    <p>GitHub</p>
                </div>
                <div>
                    <h3>Company</h3>
                    <p>About us</p>
                    <p>Blog</p>
                    <p>Paranerships</p>
                    <p>Careers</p>
                </div>
            </div>
            <div className="footer_copyright">
                &copyright; 2025,{" "}
                <span>Alireza Hamidi </span> based on a
                design of <span>Jonas</span>.
            </div>
        </footer>
    );
}

export default Footer;
