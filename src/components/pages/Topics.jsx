import Navbar from "./Navbar";
import TopicCard from "../TopicCard";
import { jsTopics } from "../../data/jsTopics";

const Topics = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-linear-to-br from-pink-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
              JavaScript Learning Hub
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore JS Topics
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Pick a topic below and click <strong>Learn More</strong> to open a
              detailed guide with examples and explanations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {jsTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topics;
