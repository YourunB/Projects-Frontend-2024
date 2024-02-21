import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/', {
            apiKey: 'df9e8ba419f048b4aa842ba8ecc75bf3',
        });
    }
}

export default AppLoader;
