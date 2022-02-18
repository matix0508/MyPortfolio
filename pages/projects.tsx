import React, { useState } from "react";
import { TechInput } from "../components/TechInput";




const Projects = () => {
  const [checked, setChecked] = useState<string[]>([]);

  return (
    <div>
      <div>
        <TechInput checked={checked} setChecked={setChecked} tech="Python" />
      </div>
      {checked.map(item => item)}
    </div>
  );
};

export default Projects;
