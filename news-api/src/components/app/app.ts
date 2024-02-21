import AppController from '../controller/controller';
import { AppView } from '../view/appView';

interface DataLoadNews {
    articles: [{
        source: {
            name: string;
            content: string;
        };
        title: string;
        description: string;
        urlToImage: string;
        url: string;
        author: string;
        publishedAt: string;
    }];
}
interface DataLoadSources {
    sources: [{
        name: string;
        id: string;
    }];
}

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
        sources.addEventListener('click', (e) => this.controller.getNews(e, (data: DataLoadNews | void) => { if (data && data !== null) this.view.drawNews(data); }));
        this.controller.getSources((data: DataLoadSources | void) => { if (data && data !== null) this.view.drawSources(data) });
    }
}

export default App;
