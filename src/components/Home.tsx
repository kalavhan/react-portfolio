import React from "react";

const Home: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:flex-row md:text-left md:justify-between md:items-center max-w-7xl mx-auto">
      {/* Text Content */}
      <div className="md:w-1/2">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
          Hi, I'm Josue Brigido 👋
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          I'm a passionate Full-Stack Developer based in Monterrey, Mexico, with over 6 years of experience in Ruby on Rails and 3+ years in React. I specialize in building scalable web applications and thrive in roles that require both backend and frontend expertise.
        </p>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          I hold a degree in Software Engineering in Information & Communication Technologies, giving me a strong foundation in development principles and system architecture. I'm flexible, adaptable, a fast learner, and I excel in remote teams.
        </p>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          I'm looking for opportunities where I can contribute as a Full-Stack Engineer or Lead Engineer — always aiming to solve real problems and deliver high-quality solutions.
        </p>
        <a
          href="#projects"
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
        >
          View My Projects
        </a>
      </div>

      {/* Image */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src="https://github.com/kalavhan.png"
          alt="Josue Brigido"
          className="rounded-full w-64 h-64 object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;

