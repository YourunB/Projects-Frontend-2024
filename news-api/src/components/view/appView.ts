import News from './news/news';
import Sources from './sources/sources';

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

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: DataLoadNews) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: DataLoadSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;