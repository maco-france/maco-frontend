import {
  IoIosPhonePortrait,
  IoMdMail,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
  IoMdPerson,
  IoLogoLinkedin,
} from "react-icons/io";

import Link from "next/link";

const MobileMenuWidgets = () => {
  return (
    <div className="offcanvas-mobile-menu__widgets space-mb--30">
      <div className="contact-widget space-mb--20">
        <ul>
          <li>
            <IoIosPhonePortrait />
            <a href="tel://01 43 00 89 91">01 43 00 89 91</a>
          </li>
          <li>
            <IoMdMail />
            <a href="mailto:info@macofrance.fr">info@macofrance.fr</a>
          </li>
        </ul>
      </div>

      <div className="social-widget">
        <a href="https://www.linkedin.com/company/maco-france/" target="_blank">
          LinkedIn
          <IoLogoLinkedin />
        </a>
      </div>
    </div>
  );
};

export default MobileMenuWidgets;
