//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector("button").addEventListener('click', getDrink)

function getDrink() {
  let drinkByAlphabet = document.querySelector('input').value

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${drinkByAlphabet}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

      console.log(data.drinks) 
      let i = 0;
      const intervalId = setInterval(() => {
      // Set the slide stuff here with document.querySelectors
      document.querySelector('h2').innerText = data.drinks[i].strDrink
      document.querySelector('img').src = data.drinks[i].strDrinkThumb 
      document.querySelector('#english').innerText = data.drinks[i].strInstructions
      document.querySelector('#german').innerText = data.drinks[i].strInstructionsDE
      document.querySelector('#italian').innerText = data.drinks[i].strInstructionsIT
      i = i === data.drinks.length-1 ? 0 : i+1;
      }, 9000);
      setTimeout(() => { clearInterval(intervalId); alert('stop making drinks'); }, 375000);
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}


