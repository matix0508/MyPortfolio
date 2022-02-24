import React, { useState } from "react";
import { TechInput } from "../components/TechInput";
import styles from "../styles/Projects.module.scss";
import { Project } from "../components/Project";
import { getProjects } from "../services/getProjects";
import Head from "next/head";

function intersect(a: string[], b: string[]) {
  const arr = a.filter(Set.prototype.has, new Set(b));
  console.log(arr);
  return arr.length !== 0;
}

const Projects = () => {
  const items = getProjects();
  let techs: string[] = [];
  items.forEach((item) => {
    item.technologies.forEach((tech) => {
      if (!techs.includes(tech)) {
        techs = [...techs, tech];
      }
    });
  });
  const [checked, setChecked] = useState<string[]>(techs);

  return (
    <>
    <Head>
      <title>Projects</title>
    </Head>
      <div className={styles.projects}>
        <div className={styles.projects__techs}>
          {techs.map((tech, i) => (
            <TechInput
              key={i}
              checked={checked}
              setChecked={setChecked}
              tech={tech}
            />
          ))}
        </div>

        <div className={styles.projects__items}>
          {items
            .filter((item) => intersect(item.technologies, checked))
            .map((p, i) => (
              <Project key={i} item={p} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
