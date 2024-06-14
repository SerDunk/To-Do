import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-main flex justify-between p-4">
      <div className="cursor-pointer">
        <Link
          to="/"
          className="ml-3 text-4xl font-primary font-extrabold text-second p-2 hover-all btn-animation"
        >
          ToDoist
        </Link>
      </div>
      <div className="flex">
        <Link to="/todo">
          <button className="btn mr-5 text-second hover-all btn-animation">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
