import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sources = document.querySelector<HTMLElement>('.sources');
        if (!sources) throw TypeError;
        sources.addEventListener('click', (e) => this.controller.getNews(e, (data: Object) => this.view.drawNews(data)));
        this.controller.getSources((data: Object) => this.view.drawSources(data));
    }
}

export default App;
