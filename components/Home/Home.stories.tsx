// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Home } from "./Home";

export default {
  title: "Home",
  component: Home,
} as ComponentMeta<typeof Home>;

export const Default: ComponentStory<typeof Home> = (args) => <Home />;
