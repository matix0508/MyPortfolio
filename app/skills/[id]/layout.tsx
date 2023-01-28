"use client";
import React, { FC, ReactNode } from "react";
import { SkillStyled } from "./(style)";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <SkillStyled>{children}</SkillStyled>;
};

export default Layout;
