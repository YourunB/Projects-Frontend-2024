import Loader from './loader';

enum ConnectApi {
    connectUrl = 'https://rss-news-api.onrender.com/',
    connectKey = '46d8662dd4a346d5b24e6cbfd2597f5d',
}

class AppLoader extends Loader {
    constructor() {
        super(ConnectApi.connectUrl, {
            apiKey: ConnectApi.connectKey,
        });
    }
}

export default AppLoader;
