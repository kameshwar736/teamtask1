import { Link, useParams, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import { getTopicById } from "../../data/jsTopics";

const TopicDetail = () => {
  const { topicId } = useParams();
  const topic = getTopicById(topicId);

  if (!topic) {
    return <Navigate to="/topics" replace />;
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-linear-to-br from-slate-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <Link
            to="/topics"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium mb-8 transition-colors"
          >
            ← Back to Topics
          </Link>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className={`bg-linear-to-r ${topic.color} px-8 py-10 text-white`}>
              <span className="text-5xl mb-4 block">{topic.icon}</span>
              <h1 className="text-3xl md:text-4xl font-bold">{topic.title}</h1>
              <p className="mt-3 text-white/90 text-lg">{topic.description}</p>
            </div>

            <div className="p-8 space-y-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                {topic.content.intro}
              </p>

              {topic.content.sections.map((section, index) => (
                <div key={index} className="space-y-3">
                  <h2 className="text-xl font-bold text-gray-800 border-l-4 border-indigo-500 pl-4">
                    {section.heading}
                  </h2>

                  <pre className="bg-gray-900 text-green-400 rounded-xl p-5 overflow-x-auto text-sm leading-relaxed">
                    <code>{section.code}</code>
                  </pre>

                  <p className="text-gray-600 leading-relaxed">{section.explanation}</p>
                </div>
              ))}

              <div className="pt-4 flex gap-4">
                <Link
                  to="/topics"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl border-2 border-indigo-500 text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors"
                >
                  All Topics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopicDetail;
