import { NavLink, Outlet, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "/logo.svg";
import simpleLogo from "/simple-logo.svg";
import { useTranslation } from "react-i18next";
import { useMenuActions } from "../hooks/useMenuActions";
import { useLanguage } from "../hooks/useLanguage";
import LanguageModal from "../components/LanguageModal";

const Layout = () => {
  const { t } = useTranslation();
  const { currentLang, changeLanguage } = useLanguage();
  const { updateMenu, closeMenu, isMenuClicked, dropdownRef } =
    useMenuActions();
  const {
    updateMenu: toggleLanguageMenu,
    isMenuClicked: isLanguageOpen,
    dropdownRef: languageRef,
  } = useMenuActions();
  const location = useLocation();

  return (
    <div className="layout">
      <header>
        <nav>
          <div className="logoContainer">
            <img className="logo" src={logo} alt="logo"></img>
          </div>
          <div className="hamburgerMenu" onClick={updateMenu} ref={dropdownRef}>
            <i className={`bi ${isMenuClicked ? "bi-x" : "bi-list"}`}></i>
          </div>

          <div className={`mobileMenu ${isMenuClicked ? "visible" : ""}`}>
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
            <div className="languageSelectorWrapper desktop" ref={languageRef}>
              <div
                className="languageSelector"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  toggleLanguageMenu();
                }}
              >
                <i className="bi bi-globe"></i>
                <p className="selectedLang">{currentLang.toUpperCase()}</p>
              </div>
              {isLanguageOpen && (
                <LanguageModal
                  currentLang={currentLang}
                  onSelectLanguage={(lang) => {
                    changeLanguage(lang);
                    toggleLanguageMenu();
                  }}
                />
              )}
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
        <div className="languageSelectorWrapper mobile" ref={languageRef}>
          <div
            className="languageSelector"
            onMouseDown={(e) => {
              e.stopPropagation();
              toggleLanguageMenu();
            }}
          >
            <i className="bi bi-globe"></i>
            <p className="selectedLang">{currentLang.toUpperCase()}</p>
          </div>
          {isLanguageOpen && (
            <LanguageModal
              currentLang={currentLang}
              onSelectLanguage={(lang) => {
                changeLanguage(lang);
                toggleLanguageMenu();
              }}
            />
          )}
        </div>
        <Outlet />
      </main>
      <footer>
        <div className="footerContent">
          <img className="simpleLogo" src={simpleLogo} alt="simple-logo"></img>
          <section className="linksSection">
            <div className="linksContainer">
              <h4 className="footerHeading">
                {t("footer.headings.connect").toUpperCase()}
              </h4>
              <ul className="linkList">
                <motion.li whileHover={{ scale: 1.2 }}>
                  <NavLink to={"https://github.com/Niccar95"} target="_blank">
                    <i className="bi bi-github"></i>
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
                  </NavLink>
                </motion.li>
              </ul>
            </div>
            <div className="linksContainer">
              <h4 className="footerHeading">
                {t("footer.headings.navigation").toUpperCase()}
              </h4>
              <ul className="linkList navigation">
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
                  <NavLink to={"/contact"}>{t("navigation.contact")}</NavLink>
                </motion.li>
              </ul>
            </div>
          </section>
          <NavLink
            className="loadingLink"
            to={"https://loading.io/"}
            target="_blank"
          >
            Loading spinner from loading.io{" "}
            <i className="bi bi-box-arrow-up-right"></i>
          </NavLink>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Nicolas Carrasco
        </p>
      </footer>
    </div>
  );
};

export default Layout;
