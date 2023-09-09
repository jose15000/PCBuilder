
var myHeaders = new Headers();
myHeaders.append("X-API-KEY", "2f8681d3ebd7535a7df8fa621c869bcb1bc07009");
myHeaders.append("Content-Type", "application/json");

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
        .then(response => response.json())
        .then(data =>{
          function preenchetabela(data){
            const tabela = document.getElementById('tabela-cpu');
            const tbody = tabela.querySelector("#tbody");
            const regex = /^\d{3,}$|^\d+\.\d{3}$/;
            data.forEach(element => {
              const row = document.createElement('tr');
              const titleCell = document.createElement('td');
              titleCell.textContent = element.title;
              const pricingCell = document.createElement('td');
              pricingCell.textContent = element.price;
                if(element.price && regex.test(element.price.toString()))
                {
                  row.appendChild(titleCell);
                  row.appendChild(pricingCell);
                  tbody.appendChild(row);
                }

            });
            

          }
          preenchetabela(data.organic);
        })
        
        
        .catch(error => console.log('error', error));

        
        

