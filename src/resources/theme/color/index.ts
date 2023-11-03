import { CORE } from "./core";
import { SYSTEM_LIGHT, SYSTEM_DARK } from "./system";

export const COLOR_LIGHT = {
  ...CORE,
  ...SYSTEM_LIGHT,
};

export const COLOR_DARK = {
  ...CORE,
  ...SYSTEM_DARK,
};
