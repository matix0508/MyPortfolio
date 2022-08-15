import React, { useState } from "react";
import { TechInput } from "../components/TechInput";
import styles from "../styles/Projects.module.scss";
import { Project } from "../components/Project/Project";
import { getProjects } from "../services/getProjects";
import Head from "next/head";

const Projects = () => {
  const items = getProjects();

  const techs = items
    .map((item) => item.technologies)
    .reduce((prev, next) => prev.concat(next))
    .filter((value, index, self) => self.indexOf(value) === index); // get unique values

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
            .filter((item) =>
              item.technologies
                .map((tech) => checked.includes(tech))
                .reduce((prev, next) => prev || next)
            )
            .map((p, i) => (
              <Project key={i} item={p} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
