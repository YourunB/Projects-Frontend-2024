import 'index.css';
import { header, btnToGarage, btnToWinners } from './components/header';
import { getCars } from './components/api';

const app = document.createElement('div');
app.classList.add('container');
app.append(header);

console.log(getCars(1, 4));
