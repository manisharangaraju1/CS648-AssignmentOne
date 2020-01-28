var contentNode = document.getElementById('contents');

const fullName = React.createElement(
    'h1',
    null,
    'Manisha Rangaraju'
);

const headshot = React.createElement(
    'div',
    null,
    ' ',
    React.createElement('img', { src: './img/headshot.jpeg' }),
    ' '
);

const introduction = React.createElement(
    'p',
    null,
    'I am a gradute student at SDSU. I love playing sports and reading.'
);

const component = React.createElement(
    'div',
    { className: 'element' },
    fullName,
    headshot,
    introduction
);

ReactDOM.render(component, contentNode);