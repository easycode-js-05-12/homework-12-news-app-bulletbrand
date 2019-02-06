class NewsUI {
    constructor() {
        this.newsContainer = document.querySelector('.news-wrap .row');
    }

    /**
     * @desc Adds news to site
     * @param {object} news - news that we select
     */
    addNews(news) {
        // const template = NewsUI.newsTemplate(news);
        // this.newsContainer.insertAdjacentHTML("afterbegin", template);//работает быстрее
        this.newsContainer.appendChild(NewsUI.markup(news));

    }

    /**
     * @desc Deletes news when we select new news
     */
    clearContainer() {
        let first = this.newsContainer.firstElementChild;
        while (first) {
            this.newsContainer.removeChild(first);
            first = this.newsContainer.firstElementChild;
        }
    }

    /**
     * @desc Markup 
     * @param {object} news - news that we select
     */
    static newsTemplate(news) {
        return `
        <div class="col s12 m6">
            <div class="card">
                <div class="card-image">
                    <img src="${news.urlToImage}">
                </div>
                <div class="card-content">
                    <span class="card-title">${news.title || ''}</span>

                    <p>${news.description || ''}</p>
                </div>
                <div class="card-action">
                    <a href="${news.url}" target="_blank">Read more</a>
                </div>
            </div>
        </div>
        `;
    }

    /**
     * @desc Markup with create method works slowly
     * @param {object} news - news that we select with create method
     */
    static markup(news) {
        let div1 = document.createElement('div');
        div1.classList.add('col', 's12', 'm6');

        let card = document.createElement('div');
        card.classList.add('card');
        div1.appendChild(card);

        let cardImage = document.createElement('div');
        cardImage.classList.add('card-image');
        card.appendChild(cardImage);

        let image = document.createElement('img');
        image.setAttribute('src', news.urlToImage);
        cardImage.appendChild(image);

        let cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
        card.appendChild(cardContent);

        let span = document.createElement('span');
        span.classList.add('card-title');
        span.innerHTML = `${news.title || ''}`;
        cardContent.appendChild(span);

        let p = document.createElement('p');
        p.innerHTML = `${news.title || ''})`;
        cardContent.appendChild(p);

        let cardAction = document.createElement('div');
        cardAction.classList.add('card-action');
        card.appendChild(cardAction);

        let a = document.createElement('a');
        a.setAttribute('target', '_blank');
        a.setAttribute('href', news.url);
        a.appendChild(document.createTextNode("read more"));
        cardAction.appendChild(a);

        return div1;
    }
}







