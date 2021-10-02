const SomeComponent = () => {

  const getData = (method) => {
    fetch("/data", {
      method: method,
      //TODO check why 
    }).then(response => response.text()).then(data => console.log(data));
  }

  return [
    //todo check why on get request html page is sent back to me
    <button onClick={() => getData("GET")}>Press me to send GET request (go and check the console)</button>,
    <br></br>,
    <button onClick={() => getData("POST")}>Press me to send POST request (go and check the console)</button>,
    <br></br>,
    <button onClick={() => getData("PUT")}>Press me to send PUT request (go and check the console)</button>,
    <br></br>,
    <button onClick={() => getData("DELETE")}>Press me to send DELETE request (go and check the console)</button>
  ]

}

export default SomeComponent;
