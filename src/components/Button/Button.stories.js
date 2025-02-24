import { html } from "lit-html";
import { BADGE } from "@geometricpanda/storybook-addon-badges";
import { userEvent, within } from "@storybook/test";
import { expect } from "@storybook/test";

import "./Button";

export default {
  title: "Components/Button",
  render: (args) => Button(args),
  parameters: {
    badges: [BADGE.BETA],
  },
  argTypes: {
    buttonVariant: {
      options: ["primary", "secondary", "control", "disabled", "danger", "success"],
      control: {
        type: "select",
        labels: {
          primary: "Primary",
          secondary: "Secondary",
          control: "Control",
          disabled: "Disabled",
          danger: "Danger/Critical",
          success: "Success/Completion",
        },
      },
      name: "Variant",
      description:
        "Button variants use color coding as a means of communicating an attribute of the intent of the button action.",
      table: { defaultValue: { summary: "primary" } },
    },
    buttonText: {
      name: "Text",
      description: "The text of the button.",
    },
    iconName: {
      options: [
        "account",
        "cart",
        "catalog",
        "close",
        "creditcard",
        "doublearrow",
        "filter",
        "heart",
        "home",
        "minus",
        "pencil",
        "plus",
        "share",
        "star",
        "threedots",
      ],
      control: {
        type: "select",
        labels: {
          account: "Account",
          cart: "Cart",
          catalog: "Catalog",
          close: "Close",
          creditcard: "Credit Card",
          doublearrow: "Double Arrow",
          filter: "Filter",
          heart: "Heart",
          home: "Home",
          minus: "Minus",
          pencil: "Pencil",
          plus: "Plus",
          share: "Share",
          star: "Star",
          threedots: "Three Dots",
        },
      },
      name: "Icon",
      description:
        "A decorative yet complementary symbol associated with the text.",
    },
    altIconName: {
      name: "Secondary Icon",
      description:
        "A decorative yet complementary _secondary_ symbol associated with the text. There can be one before or after the text, or there can be two, one on each side.",
      options: [
        "account",
        "cart",
        "catalog",
        "close",
        "creditcard",
        "doublearrow",
        "filter",
        "heart",
        "home",
        "minus",
        "pencil",
        "plus",
        "share",
        "star",
        "threedots",
      ],
      control: {
        type: "select",
        labels: {
          account: "Account",
          cart: "Cart",
          catalog: "Catalog",
          close: "Close",
          creditcard: "Credit Card",
          doublearrow: "Double Arrow",
          filter: "Filter",
          heart: "Heart",
          home: "Home",
          minus: "Minus",
          pencil: "Pencil",
          plus: "Plus",
          share: "Share",
          star: "Star",
          threedots: "Three Dots",
        },
      },
      if: { arg: "iconName", truthy: true },
    },
    iconPlacement: {
      name: "Icon Placement",
      description:
        "Determines placement of a single icon at 'start' (before button text) or 'end' (after button text)",
      options: ["start", "end"] || "end",
      control: { type: "select" },
      if: { arg: "iconName", truthy: true },
      if: { arg: "iconName" && "altIconName", truthy: false },
      table: { defaultValue: { summary: "end" } },
    },
    visualType: {
      name: "Visual Type",
      description:
        "The default visual type of a button is rendered as a solid object. The other available options are outlined and transparent.",
      options: ["solid", "outlined", "transparent"],
      control: {
        type: "select",
        labels: {
          solid: "Solid - default",
          outlined: "Outlined",
          transparent: "Transparent",
        },
      },
      table: { defaultValue: { summary: "solid" } },
    },
    sizing: {
      name: "Sizing",
      description:
        "Default size is described as 'medium'. 'Small' and 'large' are the optional sizes.",
      options: ["sm", "md", "lg"],
      control: {
        type: "select",
        labels: {
          sm: "Small",
          md: "Medium - default",
          lg: "Large",
        },
      },
      table: { defaultValue: { summary: "md" } },
    },
  },
};

const Template = ({
  buttonVariant,
  buttonText,
  iconName,
  altIconName,
  iconPlacement,
  visualType,
  sizing,
}) => {
  let iconNames;
  if (iconName && altIconName) {
    iconNames = iconName + "," + altIconName;
  } else if (iconName) {
    iconNames = iconName;
  } else {
    iconNames = "";
  }

  return html`<tp-button
    type="button"
    variant=${buttonVariant}
    iconNames=${iconNames}
    iconPlacement=${iconPlacement}
    visualType=${visualType}
    sizing=${sizing}
    >${buttonText}</tp-button
  >`;
};

/** Use a primary button to highlight the most important call to action in an experience. Use them sparingly, at most once in a container, to avoid making the interface too busy. */
export const Primary = Template.bind({});
Primary.args = {
  buttonVariant: "primary",
  buttonText: "Primary Button",
};

// Primary.play = async ({ canvasElement }) => {
//   let canvas = within(canvasElement);
//   let primaryButton = canvas.getByRole('button', { name: 'Button', hidden: true });
//   await expect(primaryButton.innerText).toBe("Primary Button");
// };

/** Use secondary buttons alongside a primary button to provide alternative actions on a page. If no variant is provided, the Button will default to this look and feel. */
export const Secondary = Template.bind({});
Secondary.args = {
  buttonVariant: "secondary",
  buttonText: "Secondary Button",
};

/** Use control buttons for interface actions such as modal close, audio toggle, and video playback controls. */
export const Control = Template.bind({});
Control.args = {
  buttonVariant: "control",
  buttonText: "Control Button",
};

/** Use for actions that are currently unavailable. The surrounding interface should provide an explanation as to why the button is disabled, and what needs to be done to enable it. */
export const Disabled = Template.bind({});
Disabled.args = {
  buttonVariant: "disabled",
  buttonText: "Disabled Button",
};
