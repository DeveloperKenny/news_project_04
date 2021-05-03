const techHeadLines = document.querySelector('.tech-headlines');

const url = `https://newsapi.org/v2/everything?q=apple&from=2021-05-01&to=2021-05-01&sortBy=popularity&apiKey=2ad84b91cec94e1e958c42a1265112f9`;

async function fetchNews() {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderNews() {
    let news = await fetchNews();
    let html = '';
        news.articles.forEach(news => {
           
            const card = `
                            <div class="card mb-3">
                                <img src="${news.urlToImage}" class="card-img-top img-card" alt="...">
                                    <div class="card-body">
                                     <h5 class="card-title title">${news.title}</h5>
                                        <p class="card-text description-body">${news.description}</p>
                                        <a class="card-text" href="${news.url}"><small class="text-muted">Read More ...</small></a>
                                    </div>
                            </div>
                            
                            
            `;
            html += card;
        })
        techHeadLines.innerHTML = html;
}
renderNews();


