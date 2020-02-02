var contentNode = document.getElementById('contents');

const component = <div className="element">
  <h1 className="border">Manisha Rangaraju</h1>
  <img src='./img/headshot.jpeg'/>
  <p>I am a gradute student at SDSU. I worked on few projects which invlove developing mobile applications.
       Full stack application development has always been on my to do list and Im glad I have enrolled in this course through which I hope to learn quite a number of things.</p>
  When Im not coding, I love playing any sport, reading and learning new skills.

  <br/><br/>
  <button type="button" className="border"><a href="www.github.com/manisharangaraju1">VIEW MY GITHUB REPO</a></button>
</div>;



ReactDOM.render(component, contentNode); 