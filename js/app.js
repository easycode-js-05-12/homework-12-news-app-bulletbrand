const newsService = new NewsService();
const newsUI = new NewsUI();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];


function onSelectChange(e) {
    const country = countrySelect.value;
    const category = categorySelect.value;
    
    if (!country || !category) return console.log('Выберите страну и категорию');

    newsService.getTopHeadlinesNews((response) => {
        const { articles } = response;
        console.log('clear');
        console.time();
        newsUI.clearContainer();
        console.timeEnd();
        console.log('add');
        console.time();
        articles.forEach((news) => newsUI.addNews(news));
        console.timeEnd();
    }, category, country);
}

// Event listeners
countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);