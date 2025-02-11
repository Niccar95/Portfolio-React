import { NavLink, Outlet } from "react-router-dom";
import { motion } from "motion/react";

const Layout = () => {
  return (
    <motion.div className="layout" whileHover={{ scale: 1.1 }}>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer content</footer>
    </motion.div>
  );
};

export default Layout;
