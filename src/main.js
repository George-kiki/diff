import createElement from "./vdom/createElement";
import render from "./vdom/render";
const vApp = createElement("div", {
  attrs: {
    id: "app",
  },
  children: [
    "hello world",
    createElement("div", {
      attrs: {
        id: "container",
      },
    }),
  ],
});
const $app = render(vApp);
console.log($app);
