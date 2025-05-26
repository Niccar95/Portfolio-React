import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate("/");
  };

  return (
    <motion.div
      className="notFoundContainer"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="notFound">404 Page not found!</h1>
      <motion.button
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        onClick={returnHome}
        className="returnButton"
      >
        Back to Home Page
      </motion.button>
    </motion.div>
  );
};

export default Error;
