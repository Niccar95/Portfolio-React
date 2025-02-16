import { NavLink, Outlet } from "react-router-dom";
import { motion } from "motion/react";

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
              <NavLink to={"/contact"}>Contact</NavLink>
            </motion.li>

            <motion.li whileHover={{ scale: 1.3 }}>
              <NavLink to={"/about"}>About</NavLink>
            </motion.li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Let’s Connect</p>
        <ul>
          <li>Linkedin</li>
          <li>Github</li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
