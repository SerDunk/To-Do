import Scatter from "../images/circle-scatter-haikei.svg";
import { motion } from "framer-motion";
function HomePage() {
  return (
    <div
      style={{ backgroundImage: `url(${Scatter})` }}
      className="bg-cover min-h-screen flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="z-10"
      >
        <motion.h1 className="text-5xl text-second">
          <span className="hover-all p-2 cursor-pointer border-radius">
            One
          </span>
          {""}
          platform for To Do
        </motion.h1>
      </motion.div>
    </div>
  );
}

export default HomePage;
