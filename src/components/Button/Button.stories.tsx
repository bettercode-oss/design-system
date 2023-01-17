import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
    title: "Button",
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
    label: "Default Button",
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    label: "Primary Button",
    type: "primary"
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
    label: "Click me!",
    type: "secondary"
};