const alertContainer = document.querySelector('.news-wrap .row');

class UIalertMessage {

    constructor() {
        this.newsContainer2 = document.querySelector('.news-wrap .row');
    }

    /**
     * @desc Creates alert message and delete since 3 sec
     */

    showAlert() {
        this.newsContainer2.insertAdjacentHTML("afterbegin",
            ` <div class="card-panel teal lighten-2">Wow try again, news not found!</div>`);
        setTimeout(function () {
            let firstElem = document.querySelector(".card-panel");
            if (firstElem) {
                alertContainer.removeChild(firstElem);
            }
        }, 3000);
    }
}