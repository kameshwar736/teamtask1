import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const linkClass = (path) =>
    `font-medium transition-colors hover:text-indigo-600 ${
      location.pathname === path || location.pathname.startsWith(path + "/")
        ? "text-indigo-600 border-b-2 border-indigo-600 pb-0.5"
        : "text-gray-700"
    }`;

  const handleSignOut = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-pink-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        <Link to="/landingpage" className="text-xl font-bold text-indigo-600">
          JS<span className="text-pink-500">Learn</span>
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          <Link to="/landingpage" className={linkClass("/landingpage")}>
            Home
          </Link>
          <Link to="/topics" className={linkClass("/topics")}>
            Topics
          </Link>
          <button
            type="button"
            onClick={handleSignOut}
            className="px-4 py-2 rounded-lg bg-linear-to-r from-pink-500 to-rose-500 text-white text-sm font-semibold hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
