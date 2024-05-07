"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/portfolio_page.png",
    tag: ["All", "Front"],
    gitUrl: "https://github.com/uxia99/xia_portfolio.git",
    previewUrl: "https://xia-portfolio-psi.vercel.app/",
  },
  {
    id: 2,
    title: "Note + AI Chat Website",
    description: "Project 3 description",
    image: "/images/projects/note_ai_chat.png",
    tag: ["All", "Back"],
    gitUrl: "https://github.com/uxia99/nextjs-ai-note-app.git",
    previewUrl: "https://nextjs-ai-note-app-ten.vercel.app/",
  },
  {
    id: 3,
    title: "Survey App",
    description: "Project 2 description",
    image: "/images/projects/survey_app.png",
    tag: ["All", "Back"],
    gitUrl: "https://github.com/uxia99/survey-app.git",
    previewUrl: "https://survey-app-jade.vercel.app/",
  },
  {
    id: 4,
    title: "Car Info Website",
    description: "Project 5 description",
    image: "/images/projects/car_info.png",
    tag: ["All", "Back"],
    gitUrl: "https://github.com/uxia99/car_project.git",
    previewUrl: "https://www.youtube.com/watch?v=opB9qCTnqSU",
  },
  {
    id: 5,
    title: "Exhibition Website",
    description: "Project 4 description",
    image: "/images/projects/multi_it_project.png",
    tag: ["All", "Back"],
    gitUrl: "https://github.com/jeonjin616/Expo_wave",
    previewUrl: "https://www.youtube.com/watch?v=opB9qCTnqSU",
  },
  {
    id: 6,
    title: "My AI Chat Website",
    description: "Project 6 description",
    image: "/images/projects/my_ai_chat.png",
    tag: ["All", "Back"],
    gitUrl: "https://github.com/uxia99/my-chat-gpt.git",
    previewUrl: "https://my-chat-gpt-bice-phi.vercel.app/",
  },
  {
    id: 7,
    title: "Kahlua Menu Website",
    description: "Project 8 description",
    image: "/images/projects/kahlua_page.png",
    tag: ["All", "Front"],
    gitUrl: "/",
    previewUrl: "https://www.youtube.com/watch?v=opB9qCTnqSU",
  },
  {
    id: 8,
    title: "Todo List Website",
    description: "Project 7 description",
    image: "/images/projects/todo_list.png",
    tag: ["All", "Front"],
    gitUrl: "https://github.com/uxia99/todo-list-crud.git",
    previewUrl: "https://todo-list-crud-pi.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mt-7">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Front"
          isSelected={tag === "Front"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Back"
          isSelected={tag === "Back"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-6 md:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
