let url = "http://api.tvmaze.com/shows"
fetch(url)
  .then((response) => {
    return response.json()
  })
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
        const title = document.createElement('h1')
        title.textContent = movie.name

        //create p tags for movie description limitied to 200 characters

        const description = document.createElement('p')
        description = movie.summary.substring(0, 200)
        description.textContent = `${description}...`

        container.appendChild(card)
        card.appendChild(title)
        card.appendChild(description)



        // console.log(movie.name)  
    });
    

    
    


    
    

    
    
  })
  .catch((error) => {
    
    console.error('There has been a problem with your fetch operation:', error);
  })

