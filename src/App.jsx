import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import Lanyard from "./components/Lanyard/Lanyard";
import { listTools, listProyek } from "./data";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';

import 'aos/dist/aos.css';
import { FaGithub } from "react-icons/fa";
import { GiClover } from "react-icons/gi";
import { PiCloverFill } from "react-icons/pi";
import { TbCloverFilled } from "react-icons/tb";
import { GiCloverSpiked } from "react-icons/gi";


function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      // Ambil path tanpa hash
      const baseUrl = window.location.origin + "/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-transparent border border-gray-800 hover:bg-gray-700/30 cursor-pointer w-fit p-4 rounded-2xl">
              <TbCloverFilled className="text-5xl text-[#1a96a9]" />
              <q>Build, Learn, and Grow Every Day</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm " disabled={false} speed={3} className='custom-class' />
              <span className="text-[#1a96a9] text-7xl carattere-regular "> Sairaj </span>
              <ShinyText text="Naikwade " disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="A passionate Full Stack Developer focused on building real-world applications, solving problems, and creating scalable digital solutions."
              delay={0}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a
                href="./assets/CV.pdf"
                download="Sairaj_Naikwade_CV.pdf"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Sairaj Naikwade"
              title="Full Stack Developer"
              handle="sairajnaikwade"
              status="Available"
              contactText="Contact Me"
              avatarUrl="/sairaj-cut.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>
        <div className="w-full min-h-screen bg-gradient-to-b from-background via-background to-background py-12" id="about">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Desktop Sticky Scroll Layout */}
            <div className="hidden md:grid md:grid-cols-12 md:gap-8">
              {/* Left Column - Scrollable Content */}
              <div className="md:col-span-8 pr-4">
                <div className="space-y-8">
                  <div>
                    <h1
                      className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-once="true"
                    >
                      About <span className="carattere-regular text-6xl text-[#1a96a9]">Me</span>
                    </h1>

                    <BlurText
                      text="I am a Computer Engineering student with strong skills in full-stack development, data analysis, and problem-solving. I have built real-world projects like Zero Hunger, Repair Desk, Flood Monitoring System, and IMDB Movies Analysis Dashboard. I enjoy learning new technologies and applying them to solve real-world problems."
                      delay={0}
                      animateBy="words"
                      direction="top"
                      className="text-base md:text-lg leading-relaxed text-muted-foreground"
                    />
                  </div>

                  {/* Stats Section */}
                  <div className="grid grid-cols-1 gap-6 py-8">
                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-gray-700/50 transition-colors hover:bg-card/70">
                      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                        5<span className="text-violet-500">+</span>
                      </h1>
                      <p className="text-muted-foreground">Projects Finished</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-gray-700/50 transition-colors hover:bg-card/70">
                      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Fresher</h1>
                      <p className="text-muted-foreground">Experience Level</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-gray-700/50 transition-colors hover:bg-card/70">
                      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2 leading-tight">
                        Computer Engineering
                      </h1>
                      <p className="text-muted-foreground">Student</p>
                    </div>
                  </div>

                  {/* Quote Section */}
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-gray-700/30">
                    <ShinyText
                      text="Working with heart, creating with mind."
                      disabled={false}
                      speed={3}
                      className="text-lg md:text-xl font-semibold"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Sticky 3D */}
              <div className="md:col-span-4 sticky top-0 h-screen flex flex-col justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
                </div>
              </div>
            </div>

            {/* Mobile Layout - Stacked */}
            <div className="md:hidden space-y-12">
              <div>
                <h1
                  className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  About <span className="carattere-regular text-6xl text-[#1a96a9]">Me</span>
                </h1>

                <BlurText
                  text="I am a Computer Engineering student with strong skills in full-stack development, data analysis, and problem-solving. I have built real-world projects like Zero Hunger, Repair Desk, Flood Monitoring System, and IMDB Movies Analysis Dashboard. I enjoy learning new technologies and applying them to solve real-world problems."
                  delay={0}
                  animateBy="words"
                  direction="top"
                  className="text-base leading-relaxed text-muted-foreground"
                />
              </div>

              {/* Mobile Stats */}
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-gray-700/50">
                  <h1 className="text-4xl font-bold text-foreground mb-2">
                    5<span className="text-violet-500">+</span>
                  </h1>
                  <p className="text-muted-foreground">Projects Finished</p>
                </div>

                <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-gray-700/50">
                  <h1 className="text-4xl font-bold text-foreground mb-2">Fresher</h1>
                  <p className="text-muted-foreground">Experience Level</p>
                </div>

                <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-gray-700/50">
                  <h1 className="text-2xl font-bold text-foreground mb-2">Computer Engineering</h1>
                  <p className="text-muted-foreground">Student</p>
                </div>
              </div>

              {/* Mobile Quote */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-gray-700/30">
                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-lg font-semibold"
                />
              </div>

              {/* Mobile 3D */}
              <div className="w-full h-96 flex items-center justify-center">
                <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
              </div>
            </div>
          </div>
        </div>
        <div className="tools mt-32">
          <h1
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            Tools & <span className="carattere-regular text-6xl text-[#1a96a9]"> Technologies</span>
          </h1>
          <p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My Professional Skills</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Projects Section */}
        <div className="mt-32 py-10" id="project"></div>

        {/* Desktop Layout - Sticky Left, Scrollable Right */}
        <div className="hidden md:grid md:grid-cols-12 md:gap-8">
          {/* Left Column - Sticky Info */}
          <div className="md:col-span-4 sticky top-0 h-screen flex flex-col justify-center">
            <div className="space-y-6">
              <h1
                className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                My <span className="carattere-regular text-6xl text-[#1a96a9]">Projects</span>
              </h1>
              <p className="text-base/loose opacity-75 text-muted-foreground" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
                Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.
              </p>
              <div className="pt-4 space-y-3">
                <p className="text-sm opacity-50 text-muted-foreground">Featured Work</p>
                <div className="space-y-2">
                  <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-gray-700/30 hover:bg-card/70 transition-colors">
                    <p className="font-semibold text-foreground">{listProyek.length} Projects</p>
                    <p className="text-xs opacity-60 text-muted-foreground">Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Scrollable Projects */}
          <div className="md:col-span-8">
            <div className="space-y-6">
              {listProyek.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => handleProjectClick(project)}
                  className="group cursor-pointer"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={project.dad}
                  data-aos-once="true"
                >
                  <div className="bg-card/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl overflow-hidden hover:border-gray-700/60 transition-all duration-300 hover:shadow-lg">
                    {/* Project Image */}
                    <div className="relative aspect-[2/1] overflow-hidden bg-gradient-to-br from-background to-card">
                      <img
                       src={project.image}
                       alt={project.title}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-violet-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">{project.subtitle}</p>
                        <p className="text-base leading-relaxed text-muted-foreground line-clamp-3">
                          {project.fullDescription}
                        </p>
                      </div>

                      {/* Border Color Indicator */}
                      <div className="flex items-center gap-3 pt-4 border-t border-gray-700/30">
                        <div
                          className="w-4 h-4 rounded-full"
                        >
                          <FaGithub className="text-violet-400" />
                        </div>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Repository
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="md:hidden space-y-8">
          <div>
            <h1
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Explore my <span className="carattere-regular text-6xl text-[#1a96a9]">Project</span>
            </h1>
            <p className="text-base/loose opacity-50 text-muted-foreground" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
              Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.
            </p>
          </div>

          <div className="space-y-6">
            {listProyek.map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="group cursor-pointer"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={project.dad}
                data-aos-once="true"
              >
                <div className="bg-card/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl overflow-hidden hover:border-gray-700/60 transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-background to-card">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-violet-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{project.subtitle}</p>
                      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                        {project.fullDescription}
                      </p>
                    </div>

                    {/* Border Color Indicator */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-700/30">
                      <div
                        className="w-4 h-4 rounded-full"
                      >
                        <FaGithub className="text-violet-400" />
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-32 sm:p-10 p-6" id="contact">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1
                className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Get In <span className="carattere-regular text-6xl text-[#1a96a9]">Touch</span>
              </h1>
              <p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-once="true"
              >
                Feel free to reach out through any of these channels. I'd love to connect and discuss opportunities.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <div className="bg-card/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Send Me a Message</h3>
                  <form
                    action="https://formsubmit.co/naikwadesairaj@gmail.com"
                    method="POST"
                    autoComplete="off"
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                      <input
                        type="text"
                        name="Name"
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-background border border-gray-700/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-violet-400/50 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        name="Email"
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 bg-background border border-gray-700/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-violet-400/50 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        rows="5"
                        placeholder="Your message here..."
                        className="w-full px-4 py-3 bg-background border border-gray-700/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-violet-400/50 transition-colors resize-none"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Social Links & Contact Info */}
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
                data-aos-once="true"
              >
                <div className="space-y-8">
                  {/* Contact Info Cards */}
                  <div className="bg-card/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h3>
                    <div className="space-y-4">
                      <a
                        href="mailto:naikwadesairaj@gmail.com"
                        className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors group"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center group-hover:bg-violet-500/30 transition-colors">
                          <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="text-foreground font-semibold group-hover:text-violet-400 transition-colors">naikwadesairaj@gmail.com</p>
                        </div>
                      </a>

                      <a
                        href="https://www.linkedin.com/in/sairaj-naikwade-08a223283/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors group"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                          <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">LinkedIn</p>
                          <p className="text-foreground font-semibold group-hover:text-blue-400 transition-colors">@naikwadesairaj</p>
                        </div>
                      </a>

                      <a
                        href="https://github.com/sairajnaikwade"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors group"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-600/20 rounded-lg flex items-center justify-center group-hover:bg-gray-600/30 transition-colors">
                          <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">GitHub</p>
                          <p className="text-foreground font-semibold group-hover:text-gray-400 transition-colors">@NaikwadeSairaj</p>
                        </div>
                      </a>

                      <a
                        href="https://twitter.com/ImAtharva81"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors group"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center group-hover:bg-sky-500/30 transition-colors">
                          <svg className="w-6 h-6 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-7 9-7" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Twitter</p>
                          <p className="text-foreground font-semibold group-hover:text-sky-400 transition-colors">@imsairaj</p>
                        </div>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Kontak */}
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App
