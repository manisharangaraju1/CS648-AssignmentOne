// import selfImage from './img/headshot.jpeg'
var contentNode = document.getElementById('contents');

const introduction = React.createElement(
    'p',
    null,
    'I am a gradute student at SDSU. I love playing sports and reading.'
);

const headshot = React.createElement(
    'div',
    null,
    ' ',
    React.createElement('img', { src: './img/headshot.jpeg' }),
    ' '
);

const component = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Manisha Rangaraju'
    ),
    React.createElement(
        'div',
        null,
        React.createElement('img', { src: './img/headshot.jpeg' })
    ),
    ' ',
    introduction
);

ReactDOM.render(component, contentNode);