//functional example and adding Events
function clickbutton() {
  alert("clicked!!!!");
}

const myelement = (
  <button onClick={clickbutton}>click the button!</button>
);
  
  
  ReactDOM.render(myelement, document.getElementById('root'));