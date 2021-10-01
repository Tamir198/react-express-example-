
const SomeComponent = () => {

  const getData = async  () => {
    fetch("/", {
      method: "GET",
      mode: 'no-cors'
      //TODO print the response message
    }).then(response => response.json()).then(data => console.log(data));
  }

  return <button onClick={getData}>I am buttom from another file</button>
}



export default SomeComponent;