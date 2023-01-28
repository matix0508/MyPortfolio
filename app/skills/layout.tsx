"use client";
import React, { FC, ReactNode } from "react";
import { SkillsStyled } from "./(style)";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <SkillsStyled>{children}</SkillsStyled>;
};

export default Layout;
