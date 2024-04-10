import './pageLogin.sass';
import '../assets/images/svg/info.svg';
import { formLogin } from '../components/formLogin';

const pageLogin = document.createElement('main');
pageLogin.classList.add('page-login__main');

const btnInfo = document.createElement('img');
btnInfo.classList.add('info');
btnInfo.src = 'info.svg';

pageLogin.append(formLogin, btnInfo);

export { pageLogin };
