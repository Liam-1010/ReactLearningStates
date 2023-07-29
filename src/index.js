import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>React States</h1>
      <Weather city="Paris" temperature={19} />
      <Weather city="New York" temperature={5} />
    </div>
  </StrictMode>
);
