import './index.sass';
import { header } from './components/header';
import { footer } from './components/footer';

const main = document.createElement('main');
main.classList.add('main');

document.body.append(header, main, footer);
