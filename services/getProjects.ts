import { IProject } from "../types/IProject";

export function getProjects(): IProject[] {
  return [
    {
      title: "Portfolio",
      time: "In Progress...",
      technologies: ["React.js", "Next.js", "TypeScript"],
      description: "My own website with past projects",
      imageSrc: "/profile.jpg",
      link: "https://github.com/matix0508/MyPortfolio",
    },
    {
      title: "Portfolio",
      time: "March 2022",
      technologies: ["React.js", "TypeScript", "Redux"],
      description: "Aplication that displays a list of pokemons and info about them using REST API",
      imageSrc: "/projects/pikachu.png",
      link: "https://github.com/matix0508/pokedex",
    },
    {
      title: "Expense Tracker",
      time: "In Progress...",
      technologies: ["Next.js", "React.js", "TypeScript"],
      description:
        "Web Application to organise personal finances and expenses. Creating and editing new categories, plotting trends etc.",
      link: "https://github.com/matix0508/financeNext",
      imageSrc:
        "https://aux.iconspalace.com/uploads/currency-dollar-icon-256.png",
    },
    {
      title: "Object Labeler",
      time: "Spring 2020",
      technologies: ["Python", "Flask", "React.js", "TypeScript"],
      description:
        "Web Application to handle images labeling for Machine Learning purposes. Made as a project for AGH Solar Plane",
      imageSrc: "/projects/labeler.png",
    },
    {
      title: "Flappy Bird",
      time: "August 2020",
      technologies: ["Python"],
      description:
        "Simple Game written in Python with scoreboard, AI mode and GUI. Inspired by the techwithtim tutorial",
      imageSrc:
        "https://lh3.googleusercontent.com/wLgwGYEK_SGd46fM0Se5G9G5d3o7CIMY5eaYnWZVlvckw7GnU9SwRoQZvWZ4B4gly3odIkv90iWhZ32GzMvBsaVbgZY=w128-h128-e365-rj-sc0x00ffffff",
      link: "https://github.com/matix0508/flappy_bird",
    },
    {
      title: "Snake",
      time: "September 2020",
      technologies: ["Python"],
      description:
        "Simple Game written in Python with users and saving scores in database",
      imageSrc:
        "https://www.maxpixel.net/static/photo/1x/Green-Mamba-Toxic-Scale-Dangerous-Snake-Mamba-1556165.jpg",
      link: "https://github.com/matix0508/snake",
    },
    {
      title: "Gravity",
      time: "January 2020",
      technologies: ["Python"],
      description:
        "Simulation for visualisation of the three body problem. Chaotic system evolution",
      imageSrc:
        "https://www.maxpixel.net/static/photo/1x/Solar-System-Space-Planets-Moon-Orbit-Orbiting-152451.png",
      link: "https://github.com/matix0508/gravity",
    },
    {
      title: "Conway's Game of Life",
      time: "November 2021",
      technologies: ["Rust"],
      description: "Game of Life interface made in Rust.",
      imageSrc:
        "https://www.androidfreeware.net/img2/com-baiels-gameoflife.jpg",
      link: "https://github.com/matix0508/game_of_life",
    },
    {
      title: "School Managment System",
      time: "July 2020",
      technologies: ["Django", "Python"],
      description:
        "System for managing students, their parents and payments for learning school managment",
      imageSrc:
        "https://icon-library.com/images/icon-english/icon-english-9.jpg",
      link: "https://github.com/matix0508/englishpoint",
    },
  ];
}
