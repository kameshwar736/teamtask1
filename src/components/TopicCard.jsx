import { useNavigate } from "react-router-dom";

const TopicCard = ({ topic }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/topics/${topic.id}`);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
      <div className={`h-2 bg-linear-to-r ${topic.color}`} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start gap-4 mb-4">
          <span className="text-4xl">{topic.icon}</span>
          <div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
              {topic.title}
            </h3>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
          {topic.description}
        </p>

        <button
          onClick={handleLearnMore}
          className={`w-full py-2.5 px-4 rounded-xl text-white font-semibold text-sm bg-linear-to-r ${topic.color} hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer`}
        >
          Learn More →
        </button>
      </div>
    </div>
  );
};

export default TopicCard;
