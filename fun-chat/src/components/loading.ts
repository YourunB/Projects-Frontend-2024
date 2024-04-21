import './loading.sass';
import '../assets/images/loading.gif';

const loading = document.createElement('div');
loading.classList.add('loading');

const loadingImg = document.createElement('img');
loadingImg.src = 'loading.gif';

loading.append(loadingImg);

export { loading };
