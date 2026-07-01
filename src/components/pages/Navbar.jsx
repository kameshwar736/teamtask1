import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `font-medium transition-colors hover:text-indigo-600 ${
      location.pathname === path || location.pathname.startsWith(path + "/")
        ? "text-indigo-600 border-b-2 border-indigo-600 pb-0.5"
        : "text-gray-700"
    }`;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-pink-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        <Link to="/landingpage" className="text-xl font-bold text-indigo-600">
          JS<span className="text-pink-500">Learn</span>
        </Link>

        <div className="flex gap-8">
          <Link to="/landingpage" className={linkClass("/landingpage")}>
            Home
          </Link>
          <Link to="/topics" className={linkClass("/topics")}>
            Topics
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
