const newsService = new NewsService();
const newsUI = new NewsUI();
const alert = new  UIalertMessage();
// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];

/**
 * @desc Works when we change counrty or category 
 * @param {object} - event
 */
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


//search
//UI
const search = form['search'];


search.addEventListener('keypress',  mainFunc); //при нажатии на клавишу каждый раз вызывается фция с новым запросом в ней

/**
 * @desc works with search
 */
function mainFunc(){
    const searchValue = search.value;
    if (searchValue.length >= 2) {
        newsService.getSearchNews(function(response){  //1 тут мы вызываем наш запрос
            const { articles } = response;
           // console.log(response);
            newsUI.clearContainer();
            if (!response.totalResults) {
                return alert.showAlert();  
            }
            articles.forEach(function(news) {
                newsUI.addNews(news);
            });
        }, searchValue);
    } 
}