let api_key = "580f7e77d408473891b7955d3652212c";
let input = document.getElementById("inputBox");
let showData = document.getElementById("showData");

const searchNews = () => {
    try{
    showData.innerHTML = `<div class="spinner-grow text-secondary" role="status"><span class="visually-hidden">Loading...</span></div>`;
    
    let api_url = `https://newsapi.org/v2/everything?q=${input.value}&from=2025-05-16&sortBy=publishedAt&apiKey=${api_key}`;
    fetch (api_url)
    .then ((res) => res.json())
    .then ((data) => {
        console.log(data.articles);

        showData.innerHTML="";
        data.articles.forEach((e, i) => {
            showData.innerHTML += `
            <div class="card d-flex flex-column justify-content-between" style="width: 18rem; height: 100%;">
              <img src="${e.urlToImage}" class="card-img-top" alt="news-img">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${e.title}</h5>
                <p class="card-text" style="flex-grow: 1;">${e.description}</p>
                <a href="${e.url}" target="_blank" class="btn btn-danger mt-auto">Read More</a>
              </div>
            </div>`;
        });
        
    
    })
    
    } catch(err) {
        console.log(err);
    }  
};
