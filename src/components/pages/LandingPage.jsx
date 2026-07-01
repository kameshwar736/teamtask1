import { Link } from "react-router-dom";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { jsTopics } from "../../data/jsTopics";

const features = [
  {
    icon: "📚",
    title: "Structured Topics",
    description:
      "Each JavaScript concept is broken into easy-to-follow sections with clear headings and explanations.",
  },
  {
    icon: "💻",
    title: "Code Examples",
    description:
      "Every topic includes real code snippets so you can see exactly how JavaScript works in practice.",
  },
  {
    icon: "🎯",
    title: "Learn at Your Pace",
    description:
      "Browse topics in any order, revisit sections anytime, and build your skills one step at a time.",
  },
  {
    icon: "⚡",
    title: "Modern JavaScript",
    description:
      "Covers ES6+ features, async/await, arrow functions, and other essentials used in React and beyond.",
  },
];

const steps = [
  { step: "01", title: "Sign Up", text: "Create your account with email and OTP verification." },
  { step: "02", title: "Pick a Topic", text: "Choose from Variables, Functions, Arrays, and more." },
  { step: "03", title: "Read & Practice", text: "Study explanations and code examples for each topic." },
  { step: "04", title: "Keep Growing", text: "Move through all topics and strengthen your JS foundation." },
];

const LandingPage = () => {
  const previewTopics = jsTopics.slice(0, 4);

  return (
    <>
      <Navbar />
      <Banner />

      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Learn With JSLearn?
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              A simple, focused platform built to help you understand JavaScript
              fundamentals without the overwhelm.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg hover:border-indigo-100 transition-all duration-300"
              >
                <span className="text-4xl">{feature.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
            <p className="mt-4 text-indigo-100 max-w-2xl mx-auto">
              Get started in minutes — no complicated setup required.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <span className="text-4xl font-bold text-white/30">{item.step}</span>
                <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-indigo-100 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-pink-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Popular Topics
              </h2>
              <p className="mt-3 text-gray-600 max-w-xl">
                Jump into the most essential JavaScript concepts. Click any topic
                to read the full guide.
              </p>
            </div>
            <Link
              to="/topics"
              className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors shrink-0"
            >
              View All Topics →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewTopics.map((topic) => (
              <Link
                key={topic.id}
                to={`/topics/${topic.id}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className={`h-1.5 bg-linear-to-r ${topic.color}`} />
                <div className="p-5">
                  <span className="text-3xl">{topic.icon}</span>
                  <h3 className="mt-3 font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                    {topic.description}
                  </p>
                  <span className="inline-block mt-4 text-sm font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="rounded-3xl bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 p-10 md:p-14 shadow-xl shadow-indigo-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Code in JavaScript?
            </h2>
            <p className="mt-4 text-indigo-100 text-lg max-w-xl mx-auto">
              Start exploring topics today and build a strong foundation for
              React, Node.js, and modern web development.
            </p>
            <Link
              to="/topics"
              className="inline-flex items-center justify-center mt-8 px-8 py-3.5 rounded-xl bg-white text-indigo-700 font-bold shadow-lg hover:bg-indigo-50 active:scale-[0.98] transition-all"
            >
              Browse All Topics
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-xl font-bold text-white">
                JS<span className="text-pink-400">Learn</span>
              </p>
              <p className="mt-1 text-sm">Learn JavaScript the simple way.</p>
            </div>

            <div className="flex gap-8 text-sm">
              <Link to="/landingpage" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/topics" className="hover:text-white transition-colors">
                Topics
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm">
            © 2026 JSLearn. Built for learning JavaScript.
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
