import { Link } from "react-router-dom";
import image from "../../assets/hero.png";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-indigo-50 via-white to-pink-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
              Welcome to JSLearn 🚀
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Master JavaScript{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-pink-500">
                Step by Step
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
              Learn core JavaScript concepts with clear explanations, real code
              examples, and interactive topic guides — perfect for beginners and
              anyone refreshing their skills.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/topics"
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:opacity-95 active:scale-[0.98] transition-all"
              >
                Start Learning →
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl border-2 border-indigo-200 text-indigo-700 font-semibold hover:bg-indigo-50 transition-colors"
              >
                Explore Features
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="text-2xl font-bold text-indigo-600">8+</p>
                <p className="text-sm text-gray-500">JS Topics</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-pink-500">100%</p>
                <p className="text-sm text-gray-500">Free to Learn</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">Easy</p>
                <p className="text-sm text-gray-500">Beginner Friendly</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-linear-to-br from-indigo-400/20 to-pink-400/20 rounded-3xl blur-2xl scale-90" />
            <img
              src={image}
              alt="JavaScript learning illustration"
              className="relative w-full max-w-md drop-shadow-2xl rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
