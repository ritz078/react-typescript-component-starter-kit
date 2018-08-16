import * as React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Button } from "../src";

const kind = ["primary", "secondary", "cancel", "dark", "grey"];

storiesOf("Button", module).add("Playground", () => (
  <Button
    onClick={action("click")}
    kind={select("kind", kind, "primary")}
    outline={boolean("outline")}
  >
    Submit
  </Button>
));
