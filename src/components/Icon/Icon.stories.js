import { html } from "lit-html";
import "./Icon";

export default {
  title: "Components/Icon",
  tags: ["autodocs"],
  argTypes: {
    iconName: {
      name: "Name",
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
    },
    size: {
      name: "Size",
      options: ["sm", "md", "lg"],
      control: {
        type: "select",
        labels: {
          sm: "Small",
          md: "Medium",
          lg: "Large",
        },
      },
      defaultValue: "lg",
    },
  },
  parameters: {
    componentSubtitle:
      "Provides easy-to-use and quickly-accessible icons for use in a variety of interface objects.",
  },
};

const Template = ({ iconName, size }) =>
  html`<tp-icon iconName=${iconName} size=${size} />`;

export const Heart = Template.bind({});
Heart.args = {
  iconName: "heart",
};

export const Home = Template.bind({});
Home.args = {
  iconName: "home",
};

export const Share = Template.bind({});
Share.args = {
  iconName: "share",
};

export const Star = Template.bind({});
Star.args = {
  iconName: "star",
};

export const Library = ({}) =>
  html`<div
    style="display: grid; grid-template-columns: repeat(10, 1fr); gap: 3em 1em;"
  >
    <tp-icon iconName="account" size="md"></tp-icon>
    <tp-icon iconName="captions" size="md"></tp-icon>
    <tp-icon iconName="cart" size="md"></tp-icon>
    <tp-icon iconName="catalog" size="md"></tp-icon>
    <tp-icon iconName="close" size="md"></tp-icon>
    <tp-icon iconName="creditcard" size="md"></tp-icon>
    <tp-icon iconName="doublearrow" size="md"></tp-icon>
    <tp-icon iconName="filter" size="md"></tp-icon>
    <tp-icon iconName="heart" size="md"></tp-icon>
    <tp-icon iconName="home" size="md"></tp-icon>
    <tp-icon iconName="minus" size="md"></tp-icon>
    <tp-icon iconName="pencil" size="md"></tp-icon>
    <tp-icon iconName="plus" size="md"></tp-icon>
    <tp-icon iconName="share" size="md"></tp-icon>
    <tp-icon iconName="star" size="md"></tp-icon>
    <tp-icon iconName="threedots" size="md"></tp-icon>
  </div>`;
