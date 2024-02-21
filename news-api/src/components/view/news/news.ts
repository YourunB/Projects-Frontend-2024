import './news.css';

interface DataLoadItem {
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
}

function checkElement <T extends HTMLElement> (elementName: string, nodeName: HTMLElement | Document = document): T {
    const element = nodeName.querySelector<T>(elementName);
    if (element != null) return element;
    else throw TypeError;
}

class News {
    draw(data: DataLoadItem[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');
        if (!newsItemTemp || !(newsItemTemp instanceof HTMLTemplateElement)) throw TypeError;
        
        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true);
            
            const checkNode = <T>(element: T | HTMLElement): element is HTMLElement => element instanceof DocumentFragment;
            if (!checkNode(newsClone)) throw TypeError;
            
            if (idx % 2) checkElement('.news__item', newsClone).classList.add('alt');

            checkElement('.news__meta-photo', newsClone).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            checkElement('.news__meta-author', newsClone).textContent = item.author || item.source.name;
            checkElement('.news__meta-date', newsClone).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            checkElement('.news__description-title', newsClone).textContent = item.title;
            checkElement('.news__description-source', newsClone).textContent = item.source.name;
            checkElement('.news__description-content', newsClone).textContent = item.description;
            checkElement('.news__read-more a', newsClone).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsElement = document.querySelector<HTMLElement>('.news');
        if (!newsElement) throw TypeError;
        newsElement.innerHTML = '';
        newsElement.appendChild(fragment);
    }
}

export default News;
