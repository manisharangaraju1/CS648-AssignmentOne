var contentNode = document.getElementById('contents');

const component = React.createElement(
  "div",
  { className: "element" },
  React.createElement(
    "h1",
    { className: "border" },
    "Manisha Rangaraju"
  ),
  React.createElement("img", { src: "./img/headshot.jpeg" }),
  React.createElement(
    "p",
    null,
    "I am a gradute student at SDSU. I worked on few projects which invlove developing mobile applications. Full stack application development has always been on my to do list and Im glad I have enrolled in this course through which I hope to learn quite a number of things."
  ),
  "When Im not coding, I love playing any sport, reading and learning new skills.",
  React.createElement("br", null),
  React.createElement("br", null),
  React.createElement(
    "button",
    { type: "button", className: "border" },
    React.createElement(
      "a",
      { href: "www.github.com/manisharangaraju1" },
      "VIEW MY GITHUB REPO"
    )
  )
);

ReactDOM.render(component, contentNode);