import type { Preview } from "@storybook/web-components";
import "../src/css/base.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Welcome",
          "Foundation",
        ]
      },
    },
  },
};

export default preview;
