import {fn} from 'storybook/test';

import Header from "./index";

export default {
    title: "Components/Header",
    component: Header,
    argType: {
        logo: {control: "text"},
        perfil: {control: "text"},
        ancora1: {control: "text"},
        ancora2: {control: "text"},
        ancora3: {control: "text"},
        ancora4: {control: "text"},
        color: {control: "color"},
        editGap: {control: 'number'}
    }
}

export const Default = {
    args: {
        perfil: "default",
        logo: "default",
        ancora1: "default",
        ancora2: "default",
        ancora3: "default",
        ancora4: "",
        color: "default",
        editGap: 0
    }
}