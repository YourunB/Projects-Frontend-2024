import './index.sass';
import { header } from './components/header';

const main = document.createElement('main');
main.classList.add('main');

document.body.append(header, main);
