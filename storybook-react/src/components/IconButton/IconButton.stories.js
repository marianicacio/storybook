import { fn } from "storybook/test";

import IconButton from "./index";

export default {
    title: "Component/IconButton",
    component: IconButton,
    argType: {
        source: {control: "text"},
        tamanho: {control: "number"}
    }
}

export const Default = {
    args: {
        source: "default",
        tamanho: "default"
    }
}