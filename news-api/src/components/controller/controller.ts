import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback?: () => void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback?: () => void) {
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {

            const checkNode = <T> (element: T | HTMLElement): element is HTMLElement => element instanceof EventTarget;
            if (!checkNode(target)) throw TypeError;
            if (!checkNode(newsContainer)) throw TypeError;

            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId !== null) {
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                } else throw TypeError;
                return;
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
