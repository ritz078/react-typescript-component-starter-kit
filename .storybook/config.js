import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import "@storybook/addon-console";
setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: "react-typescript-component-starter-kit",
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: "https://github.com/ritz078/react-typescript-component-starter-kit",
  /**
   * show addon panel as a vertical panel on the right
   * @type {Boolean}
   */
  addonPanelInRight: true
});

// automatically import all files ending in *.stories.tsx
const req = require.context("../stories", true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
