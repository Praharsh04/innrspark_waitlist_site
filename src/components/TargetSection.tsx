
export const TargetSection = () => {
  const painPoints = [
    {
      icon: "🔄",
      title: "The Job-Hopper",
      description: "You've tried multiple jobs but still haven't found what feels right. Each switch leaves you wondering if you're making progress or just running in circles."
    },
    {
      icon: "🧭",
      title: "The Directionless Graduate",
      description: "You have the degree, but no clear sense of direction. While friends seem to be advancing on defined paths, you're still searching for yours."
    },
    {
      icon: "✨",
      title: "The Multi-Passionate",
      description: "You love too many things to choose just one. The idea of specializing feels like cutting off parts of yourself, but having too many interests feels overwhelming."
    },
    {
      icon: "🚀",
      title: "The Ambitious Overthinker",
      description: "You dream big but get stuck in analysis paralysis. Every career choice feels permanent and terrifying, so you keep researching instead of deciding."
    },
    {
      icon: "🔍",
      title: "The Identity Seeker",
      description: "You're not just looking for a job, but for meaning. You want work that aligns with who you are and makes a difference in the world."
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="who-is-it-for">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-innrspark-charcoal">
            Who is Innrspark For?
          </h2>
          <div className="w-20 h-1 bg-innrspark-yellow mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            If you recognize yourself in any of these situations, Innrspark was built with you in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-innrspark-charcoal">
                {point.title}
              </h3>
              <p className="text-gray-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
