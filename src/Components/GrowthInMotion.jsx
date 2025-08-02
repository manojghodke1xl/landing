import { Check } from "lucide-react";

const Timeline = () => {
  const milestones = [
    {
      year: "2019",
      title: "YouTube Launch",
      description:
        "Launched JJFuntime, a YouTube channel at ages 7 and 4, igniting curiosity through fun, science-led experiments for children around the world.",
    },
    {
      year: "2020",
      title: "Religious Learning",
      description:
        "Learned a full religious book in just 50 days, in Prakrit, to challenge our minds and connect with our roots, showing that age doesn't define discipline.",
    },
    {
      year: "2021",
      title: "Networking",
      description:
        "Attended 50 networking events in 50 days. We listened, learned, and asked questions, gaining clarity and confidence from some of India's most inspiring voices.",
    },
    {
      year: "2022",
      title: "Book Reading",
      description:
        "Completed 50 books in 50 days. From leadership to mindset, every page taught us that knowledge becomes power when paired with action.",
    },
    {
      year: "2023",
      title: "Skill Development",
      description:
        "Learned 50 new skills in 50 days, from communication and growth to discipline and time management. It was a year of application, not just accumulation.",
    },
    {
      year: "2024",
      title: "Mission50",
      description:
        "Our boldest leap - Mission50. We hosted 120+ events in 50 days across India, reaching over 50,000 people through free, high-energy sessions in schools, NGOs, and colleges.",
    },
    {
      year: "2025",
      title: "New Chapter",
      description:
        "A New Chapter Begins. We're taking everything we've learned and scaling it into something bigger - tools, blueprints, and guided missions to help others ignite their own journeys. What's coming next? Let's just say… It's only the beginning.",
    },
  ];

  return (
    <section className="py-4 px-4 bg-purple-50" id="timeline">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-xl md:text-4xl font-bold text-gray-900 mb-6">
            Every Year, A New Leap – Our Growth in Motion
          </h2>
        </div>

        <div className="relative">
          {/* Timeline stem */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-purple-300 transform md:-translate-x-1/2"></div>

          {/* Timeline entries */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline marker */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-purple-600 rounded-full transform -translate-x-1/2 flex items-center justify-center border-4 border-white">
                  <Check className="text-white w-4 h-4" />
                </div>

                {/* Year indicator */}
                <div className="ml-16 md:ml-0 md:w-1/2 md:px-8 md:text-right md:pr-12">
                  <h3 className="text-3xl font-bold text-purple-800">
                    {milestone.year}
                  </h3>
                  <h4 className="text-xl font-semibold text-purple-600">
                    {milestone.title}
                  </h4>
                </div>

                {/* Content */}
                <div className="ml-16 md:ml-0 md:w-1/2 md:px-8 md:pl-12 text-gray-700">
                  <p className="md:text-xl">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
