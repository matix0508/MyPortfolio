import React from "react";
import { Icon, RocketIcon } from "evergreen-ui";

import { CardStyled } from "../../common";

export const Education = () => {
  return (
    <CardStyled>
      <Icon icon={RocketIcon} size={32} />
      <h4>AGH University of Science and Technology</h4>
      <p>Technical Physics Student (third year).</p>
      <p>
        The most common reaction when I tell other people I study physics is:{" "}
        <q>Oh God</q>. The fact is I love figuring out how things work and that
        includes the world that we live in.
      </p>
    </CardStyled>
  );
};
