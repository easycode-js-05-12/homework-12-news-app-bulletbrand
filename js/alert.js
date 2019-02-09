class UIalertMessage {

    constructor() {
        this.alertContainer = document.querySelector('.news-wrap .row');
    }

    /**
     * @desc Creates alert message and delete since 3 sec
     */
    showAlert() {
        //this.alert = this.markup();
        this.alertContainer.insertAdjacentHTML("afterbegin", this.markup())
        this.delete();
    }

    /**
     * @desc markup Error template
     */
    markup() {
        return `
             <div class="card-panel teal lighten-2">Wow try again, news not found!</div>`;
    }

    /**
     * @desc delete markup from page 
     */
    delete() {
        setTimeout(function () {
            let firstElem = document.querySelector(".card-panel");
            if (firstElem) {
                this.alertContainer.removeChild(firstElem); //this.alertContainer теряется контекст при вызову в фции  и потому bind на таймер
            }
        }.bind(this), 1000);
    }
}