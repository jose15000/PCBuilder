var myHeaders = new Headers();
myHeaders.append("X-API-KEY", "2f8681d3ebd7535a7df8fa621c869bcb1bc07009");
myHeaders.append("Content-Type", "application/json");

var processador = document.getElementById("cpu");


processador.addEventListener("click", e =>{
    e.preventDefault();

    var raw = JSON.stringify({
        "q": "https://www.amazon.com.br/s?k=processador+intel",
        "gl": "br",
        "num": 30,
        "hl": "en"
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      fetch("https://google.serper.dev/search", requestOptions)
        .then(response => response.text())
        .then(result => JSON.parse(result))
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
})
