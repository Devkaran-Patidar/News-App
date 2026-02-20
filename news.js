const container = document.getElementById('container')
const search = document.getElementById('search')
const topic = document.getElementById('topic')
const flip = document.getElementById('flip');
const allbuttons = document.getElementById('allbuttons');

flip.addEventListener('click', () => {
    allbuttons.classList.toggle('show');
});
let news = async query =>{

    const apiKey = `c254f55117ec44c3abee8495fa653fde`
    const url =`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`;

    try {
        let data = await fetch(url)
        let response = await data.json();
        console.log(response.articles);

        container.innerHTML = ''

        response.articles.forEach(item => {
            container.innerHTML += `
            <div class="card">
                <img src="${item.urlToImage}" alt="img">
                <div class="content">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                    <p><b>${item.author}</b></p>
                </div>
            </div>
            `
        })

    } catch (error) {
        console.log('error is: ', error)
    }

    search.value = ''
    topic.innerHTML = `${query}`
}

news('Today')

// Enter key Search
search.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        news(search.value);
    }
});

// Buttons click
let buttons = document.querySelectorAll('.buttons button');

buttons.forEach(btn =>{
  btn.addEventListener('click', (e) => {
    let query = e.target.innerText;
    news(query); 
     window.scrollTo({
      top: 0,
      behavior: "smooth"})
  });
  if (window.innerWidth <= 768) {
        allbuttons.classList.remove('show');
    }
});



function upbutton(){
     window.scrollTo({
      top: 10,
      behavior: "smooth"})

}

