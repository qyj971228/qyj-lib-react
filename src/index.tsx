export { default as QButton } from "./components/q-design/q-button/QButton";
export { default as MButton } from "./components/Mtd/Button/Button";
export { default as StyledButton } from "./components/styledComponents/Button/Button";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Dark } from "./example/dark";
import { ButtonGroup } from "./example/buttonGroup";
import Button from "./components/Mtd/Button/Button";
import StyledButton from './components/styledComponents/Button/Button'

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <ButtonGroup />
    <Dark />
    <Button kind='primary'><span></span>Matd</Button>
    <Button kind='warn'>Matd</Button>
    <Button kind='error'>Matd</Button>
    <StyledButton>styled Button</StyledButton>
  </StrictMode>
);
