import { NavLink, Outlet, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "/logo.svg";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const { t, i18n } = useTranslation();

  const location = useLocation();

  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLang);
  }, [i18n]);

  const handleLangChange = (e: FormEvent<HTMLSelectElement>) => {
    const newLang = e.currentTarget.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  const closeMenu = () => {
    setIsMenuClicked(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMenuClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="layout">
      {location.pathname === "/about" && (
        <img className="blob" src="/Ellipse2.svg"></img>
      )}
      <header>
        <nav>
          <div className="logoContainer">
            <img className="logo" src={logo} alt="logo"></img>
          </div>
          <div className="hamburgerMenu" onClick={updateMenu}>
            <i className={`bi ${isMenuClicked ? "bi-x" : "bi-list"}`}></i>
          </div>

          <div
            className={`mobileMenu ${isMenuClicked ? "visible" : ""}`}
            ref={dropdownRef}
          >
            <ul>
              <motion.li whileHover={{ scale: 1.2 }}>
                <NavLink to={"/"} onClick={closeMenu}>
                  {t("navigation.home")}
                </NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2 }}>
                <NavLink to={"/projects"} onClick={closeMenu}>
                  {t("navigation.projects")}
                </NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2 }}>
                <NavLink to={"/about"} onClick={closeMenu}>
                  {t("navigation.about")}
                </NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2 }}>
                <NavLink to={"/contact"} onClick={closeMenu}>
                  {t("navigation.contact")}
                </NavLink>
              </motion.li>
            </ul>
          </div>

          <div className="desktopMenu">
            <div className="languageSelector desktop">
              <i className="bi bi-globe"></i>
              <span className="selectedLang">
                {i18n.language.toUpperCase()}
              </span>

              <select
                id="desktopSelect"
                value={i18n.language}
                onChange={handleLangChange}
                className="hiddenSelect"
              >
                <option value="en">EN</option>
                <option value="sv">SV</option>
              </select>
            </div>
            <ul>
              <motion.li whileHover={{ scale: 1.2 }}>
                <NavLink
                  to="/"
                  className={location.pathname === "/" ? "matched" : ""}
                >
                  {t("navigation.home")}
                </NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2 }}>
                <NavLink
                  to="/projects"
                  className={location.pathname === "/projects" ? "matched" : ""}
                >
                  {t("navigation.projects")}
                </NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2 }}>
                <NavLink
                  to="/about"
                  className={location.pathname === "/about" ? "matched" : ""}
                >
                  {t("navigation.about")}
                </NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2 }}>
                <NavLink
                  to="/contact"
                  className={location.pathname === "/contact" ? "matched" : ""}
                >
                  {t("navigation.contact")}
                </NavLink>
              </motion.li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className="languageSelector mobile">
          <i className="bi bi-globe"></i>
          <span className="selectedLang">{i18n.language.toUpperCase()}</span>

          <select
            id="mobileSelect"
            value={i18n.language}
            onChange={handleLangChange}
            className="hiddenSelect"
          >
            <option value="en">EN</option>
            <option value="sv">SV</option>
          </select>
        </div>
        <Outlet />
      </main>
      <footer>
        <div className="footerContent">
          <section className="linksSection">
            <div className="linksContainer">
              <h4 className="footerHeading">
                {t("footer.headings.connect").toUpperCase()}
              </h4>
              <ul className="linklist">
                <motion.li whileHover={{ scale: 1.2 }}>
                  <NavLink to={"https://github.com/Niccar95"} target="_blank">
                    <i className="bi bi-github"></i>
                    Github
                  </NavLink>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <NavLink
                    to={
                      "https://www.linkedin.com/in/nicolas-carrasco-6882402a5/"
                    }
                    target="_blank"
                  >
                    <i className="bi bi-linkedin"></i>
                    Linkedin
                  </NavLink>
                </motion.li>
              </ul>
            </div>
            <div className="linksContainer">
              <h4 className="footerHeading">
                {t("footer.headings.navigation").toUpperCase()}
              </h4>
              <ul className="linklist">
                <motion.li whileHover={{ scale: 1.2 }}>
                  <NavLink to={"/"}>{t("navigation.home")}</NavLink>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <NavLink to={"/projects"}>{t("navigation.projects")}</NavLink>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <NavLink to={"/about"}>{t("navigation.about")}</NavLink>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <NavLink to={"/about"}>{t("navigation.contact")}</NavLink>
                </motion.li>
              </ul>
            </div>
          </section>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Nicolas Carrasco
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
