const parent = React.createElement(
  "div",
  { id: "heading" },
  React.createElement("div", {}, [
    React.createElement("h1", { id: "child" }, "I'm a react developer now"),
    React.createElement("h2", { id: "child" }, "I'm a react developer now"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
