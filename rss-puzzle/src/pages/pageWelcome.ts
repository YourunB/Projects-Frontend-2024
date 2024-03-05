import '../pages/pageWelcome.css';
import { btnLogout } from '../components/buttonLogout';

const pageWelcome = document.createElement('section');
pageWelcome.classList.add('page-welcome');

const headerPageWelcome = document.createElement('header');
headerPageWelcome.classList.add('page-welcome__header');
pageWelcome.append(headerPageWelcome);
headerPageWelcome.append(btnLogout);

export { pageWelcome };
