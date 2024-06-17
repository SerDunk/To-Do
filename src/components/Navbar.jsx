import { Link } from "react-router-dom";
import { motion, spring } from "framer-motion";

function Navbar() {
  return (
    <div className="navbar bg-main flex justify-between p-4">
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
        className="cursor-pointer"
      >
        <Link
          to="/"
          className="ml-3 text-4xl font-primary font-extrabold text-second p-2 hover-all btn-animation"
        >
          ToDoodle
        </Link>
      </motion.div>
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, type: "tween" }}
        className="flex"
      >
        <Link to="/todo">
          <button className="btn mr-5 text-second hover-all btn-animation">
            Get Started
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Navbar;
