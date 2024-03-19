import React from "react";

import { AddonPanel } from "@storybook/components";

import DerKubaCustomEventPanel from "./components/custom-event-panel/custom-event-panel";
import { ThemeProvider, themes } from "@storybook/theming";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  return (
    
    <AddonPanel {...props}>
      <ThemeProvider theme={themes.dark}>
      <DerKubaCustomEventPanel />
    </ThemeProvider>
    </AddonPanel>
  );
};
