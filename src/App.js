// import selfImage from './img/headshot.jpeg'
var contentNode = document.getElementById('contents');



const introduction = <p>I am a gradute student at SDSU. I love playing sports and reading.</p>;

const headshot = <div> <img src='./img/headshot.jpeg'/> </div>;

const component = <div>
    <h1>Manisha Rangaraju</h1>
    <div>
    <img src='./img/headshot.jpeg'/>    
</div> {introduction}</div>;



ReactDOM.render(component, contentNode); 