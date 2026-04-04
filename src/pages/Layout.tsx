import { NavLink, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
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
            <AnimatePresence>
              {isLanguageOpen && (
                <LanguageModal
                  currentLang={currentLang}
                  onSelectLanguage={(lang) => {
                    changeLanguage(lang);
                    toggleLanguageMenu();
                  }}
                />
              )}
            </AnimatePresence>
          </div>

          <div className="desktopMenu">
            <ul>
              <motion.li whileHover={{ scale: 1.08 }}>
                <NavLink
                  to="/"
                  className={location.pathname === "/" ? "matched" : ""}
                >
                  {t("navigation.home")}
                </NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.08 }}>
                <NavLink
                  to="/portfolio"
                  className={location.pathname === "/portfolio" ? "matched" : ""}
                >
                  {t("navigation.portfolio")}
                </NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.08 }}>
                <NavLink
                  to="/in-progress"
                  className={location.pathname === "/in-progress" ? "matched" : ""}
                >
                  {t("navigation.inProgress")}
                </NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.08 }}>
                <NavLink
                  to="/about"
                  className={location.pathname === "/about" ? "matched" : ""}
                >
                  {t("navigation.about")}
                </NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.08 }}>
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

        <div className={`mobileMenu ${isMenuClicked ? "visible" : ""}`}>
          <img className="simpleLogo" src={simpleLogo} alt="simple-logo"></img>
          <ul>
            <motion.li whileHover={{ scale: 1.08 }}>
              <i className="bi bi-house-door-fill"></i>
              <NavLink to={"/"} onClick={closeMenu}>
                {t("navigation.home")}
              </NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.08 }}>
              <i className="bi bi-briefcase-fill"></i>
              <NavLink to={"/portfolio"} onClick={closeMenu}>
                {t("navigation.portfolio")}
              </NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.08 }}>
              <i className="bi bi-laptop-fill"></i>
              <NavLink to={"/in-progress"} onClick={closeMenu}>
                {t("navigation.inProgress")}
              </NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.08 }}>
              <i className="bi bi-file-person-fill"></i>
              <NavLink to={"/about"} onClick={closeMenu}>
                {t("navigation.about")}
              </NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.08 }}>
              <i className="bi bi-envelope-fill"></i>
              <NavLink to={"/contact"} onClick={closeMenu}>
                {t("navigation.contact")}
              </NavLink>
            </motion.li>
          </ul>
        </div>
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
          <AnimatePresence>
            {isLanguageOpen && (
              <LanguageModal
                currentLang={currentLang}
                onSelectLanguage={(lang) => {
                  changeLanguage(lang);
                  toggleLanguageMenu();
                }}
              />
            )}
          </AnimatePresence>
        </div>
        <Outlet />
      </main>
      <footer>
        <div className="footerContent">
          <div className="footerLeft">
            <img className="simpleLogo" src={simpleLogo} alt="simple-logo"></img>
          </div>
          <section className="linksSection">
            <section className="linksContainer">
              <h4 className="footerHeading">
                {t("footer.headings.navigation").toUpperCase()}
              </h4>
              <ul className="linkList navigation">
                <motion.li whileHover={{ scale: 1.08 }}>
                  <i className="bi bi-house-door-fill"></i>
                  <NavLink to={"/"}>{t("navigation.home")}</NavLink>
                </motion.li>
                <motion.li whileHover={{ scale: 1.08 }}>
                  <i className="bi bi-briefcase-fill"></i>
                  <NavLink to={"/portfolio"}>{t("navigation.portfolio")}</NavLink>
                </motion.li>
                <motion.li whileHover={{ scale: 1.08 }}>
                  <i className="bi bi-laptop-fill"></i>
                  <NavLink to={"/in-progress"}>{t("navigation.inProgress")}</NavLink>
                </motion.li>
                <motion.li whileHover={{ scale: 1.08 }}>
                  <i className="bi bi-file-person-fill"></i>
                  <NavLink to={"/about"}>{t("navigation.about")}</NavLink>
                </motion.li>
                <motion.li whileHover={{ scale: 1.08 }}>
                  <i className="bi bi-envelope-fill"></i>
                  <NavLink to={"/contact"}>{t("navigation.contact")}</NavLink>
                </motion.li>
              </ul>
            </section>
            <section className="linksContainer">
              <h4 className="footerHeading">
                {t("footer.headings.connect").toUpperCase()}
              </h4>
              <ul className="linkList">
                <motion.li whileHover={{ scale: 1.08 }}>
                  <NavLink to={"https://github.com/Niccar95"} target="_blank">
                    <i className="bi bi-github"></i>
                  </NavLink>
                </motion.li>
                <motion.li whileHover={{ scale: 1.08 }}>
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
            </section>
          </section>
        </div>
        <div className="footerBottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Nicolas Carrasco
          </p>
          <NavLink
            className="loadingLink"
            to={"https://loading.io/"}
            target="_blank"
          >
            Loading spinner from loading.io{" "}
            <i className="bi bi-box-arrow-up-right"></i>
          </NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
