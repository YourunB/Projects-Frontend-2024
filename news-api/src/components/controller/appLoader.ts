import Loader from './loader';

enum ConnectApi {
    connectUrl = 'https://rss-news-api.onrender.com/',
    connectKey = 'df9e8ba419f048b4aa842ba8ecc75bf3',
}

class AppLoader extends Loader {
    constructor() {
        super(ConnectApi.connectUrl, {
            apiKey: ConnectApi.connectKey,
        });
    }
}

export default AppLoader;
