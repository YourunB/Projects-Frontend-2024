import News from './news/news';
import Sources from './sources/sources';

export interface DataLoadNews {
    readonly articles: [
        {
            readonly source: {
                readonly name: string;
                readonly content: string;
            };
            readonly title: string;
            readonly description: string;
            readonly urlToImage: string;
            readonly url: string;
            readonly author: string;
            readonly publishedAt: string;
        },
    ];
}

export interface DataLoadSources {
    readonly sources: [
        {
            name: string;
            id: string;
        },
    ];
}

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: DataLoadNews) {
        const values = data?.articles ?? [];
        this.news.draw(values);
    }

    public drawSources(data: DataLoadSources) {
        const values = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
