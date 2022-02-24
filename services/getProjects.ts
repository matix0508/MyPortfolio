import { IProject } from "../types/IProject";

export function getProjects(): IProject[] {
  return [
    {
      title: "Object Labeler",
      time: "Spring 2020",
      technologies: ["Python", "Flask", "React.js", "Node", "TypeScript"],
      description:
        "Web Application to handle images labeling for Machine Learning purposes.",
      imageSrc: "/projects/labeler.png",
    },
    {
      title: "Expense Tracker",
      time: "In Progress...",
      technologies: ["React.js", "Node", "TypeScript", "Express.js"],
      description:
        "Web Application to organise personal finances and expenses. Creating and editing new categories, plotting trends etc.",
      link: "https://github.com/matix0508/Finance",
    }
  ];
}
