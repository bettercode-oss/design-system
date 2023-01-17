import React from "react";

export interface ButtonProps {
    label: string;
    type: string;
}

const Button = (props: ButtonProps) => {
    return <button className={(!props.type || props.type === 'default') ? 'ui button' : `ui ${props.type} button`}>{props.label}</button>;
};

export default Button;