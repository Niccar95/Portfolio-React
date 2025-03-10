import { NavLink, Outlet } from "react-router-dom";
import { motion } from "motion/react";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "/logo.svg";

const Layout = () => {
  return (
    <div className="layout">
      <header>
        <nav>
          <div className="logoContainer">
            <img className="logo" src={logo} alt="logo"></img>
          </div>
          <ul>
            <motion.li whileHover={{ scale: 1.3 }}>
              <NavLink to={"/"}>Home</NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.3 }}>
              <NavLink to={"/projects"}>Projects</NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.3 }}>
              <NavLink to={"/about"}>About</NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.3 }}>
              <NavLink to={"/contact"}>Contact</NavLink>
            </motion.li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <section className="socialLinkSection">
          <h3>Let’s Connect:</h3>
          <ul className="socialLinklist">
            <motion.li whileHover={{ scale: 1.3 }}>
              <NavLink to={"https://github.com/Niccar95"} target="_blank">
                <i className="bi bi-github"></i>
                Github
              </NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.3 }}>
              <NavLink
                to={"https://www.linkedin.com/in/nicolas-carrasco-6882402a5/"}
                target="_blank"
              >
                <i className="bi bi-linkedin"></i>
                Linkedin
              </NavLink>
            </motion.li>
          </ul>
        </section>
      </footer>
    </div>
  );
};

export default Layout;
