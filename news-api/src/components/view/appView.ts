import News from './news/news';
import Sources from './sources/sources';

export interface DataLoadNews {
    readonly articles: [{
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

export interface DataLoadSources {
    readonly sources: [{
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

    public drawNews(data: DataLoadNews) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: DataLoadSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;