const About = () => {
  return (
    <section id="about" className="pt-25 md:pt-4 relative">
      <p className="text-center">Learn More</p>
      <h1 className="text-[3rem] text-center font-semibold">About Me</h1>
      <div>
        <div className="flex flex-col justify-center flex">
          <div className="about-containers gap-8 mb-40 flex">
            <div className="p-6 flex-1 bg-white rounded-2xl border border-gray-400 text-center flex justify-center">
                <ul className="text-left list-decimal ml-4">
                    <h3 className="font-semibold text-center">Background & Interests:</h3>
                    <li>Graduated from The City College of New York (2025) w/ Bachelor Science in Computer Science</li>
                    <li>5+ years of Full-Stack Development</li>
                    <li>Strong Preference in Web development and Game Design, but Opened to Explore Other Fields in Tech</li>
                    <li>8+ years of Self-taught and Program Experiences in Software Development, Which Began Since High School</li>
                    <li>Eager to Grow in a Collaborative Team and Build Real-world, Impactful Solutions</li>
                </ul>
            </div>
            <div className="p-6 flex-1 bg-white rounded-2xl border border-gray-400 flex justify-center">
                <ul className="text-left list-decimal ml-4">
                    <h3 className="font-semibold text-center">Hobbies:</h3>
                    <li>Video Games: Minecraft, Valorant, Roblox, SSBU</li>
                    <li>Anime & Manga </li>
                    <li>Exploring New Places</li>
                    <li>Drawing/Arts</li>
                    <li>Reading Books</li>
                    <li>Hanging Out With Friends</li>
                    <li>Coding</li>
                    <li>Cats, Cats, Cats!</li>
                    <li>Conventions</li>
                    <li>Badminton</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
