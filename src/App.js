var contentNode = document.getElementById('contents');

const fullName = <h1>Manisha Rangaraju</h1>;

const headshot = <div> <img src='./img/headshot.jpeg'/> </div>;

const introduction = <p>I am a gradute student at SDSU. I love playing sports and reading.</p>;


const component = <div className="element">
    {fullName}
    {headshot}
    {introduction}</div>;



ReactDOM.render(component, contentNode); 