// const { nextTick } = require("process")

let url = "http://api.tvmaze.com/shows"
fetch(url)
  .then((response) => response.json()
   )
  .then((data) => {
    // Setup

    const app = document.getElementById('root')

    
    const container = document.createElement('div')
    container.setAttribute('class', 'container')

    
    app.appendChild(container)

    // loop through each movie
    data.forEach(movie => {
    
        // create cards
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        //create h1 tags for movie titles
        const movieTitle = document.createElement('h1')
        movieTitle.textContent = movie.name

        //create p tags for movie description limitied to 200 characters

      let description = document.createElement('p')
      let movieSummary = movie.summary.replace(/(<([^>]+)>)/gi, "");
      summary = movieSummary.substring(0, 200);
      let more = document.createElement('span')
      more.textContent = "More ..."
      more.style.color = "blue"
      more.style.cursor = "pointer"

      let less = document.createElement("span");
      less.textContent = "less ...";
      less.style.color = "blue";
      less.style.cursor = "pointer";

      more.addEventListener("click", () => {
        description.textContent = movieSummary
        description.append(less);
        
      })
      less.addEventListener("click", () => {
        description.textContent = movieSummary
          .substring(0, 200)
          
      });
      description.textContent = `${summary}  `

        container.appendChild(card)
        card.appendChild(movieTitle)
      card.appendChild(description)
      description.append(more)
     

      // str.replace(/(<([^>]+)>)/gi, "");


        console.log(data)  
    });
    

    // const pagination = document.querySelector('.pagination')
    // const first = document.querySelector('.first')
    // const first = document.querySelector('.previous')
    // const first = document.querySelector('.next')
    // const first = document.querySelector('.last')

    // // let page =0;

    // next.addEventListener ('click', ()=>{

    // })

    

    
    

    
    
  })
  .catch((error) => {
    
    console.error('There has been a problem with your fetch operation:', error);
  })

