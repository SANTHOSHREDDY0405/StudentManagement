import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";

const client = ReactDOM.createRoot(document.getElementById("root"));
// Importing the App component and rendering it to the root div in our HTML file.
client.render(<App/>);