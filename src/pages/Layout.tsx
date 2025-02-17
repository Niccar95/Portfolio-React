import { NavLink, Outlet } from "react-router-dom";
import { motion } from "motion/react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Layout = () => {
  return (
    <div className="layout">
      <header>
        <nav>
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
          <ul>
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
