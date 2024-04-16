import './pageLogin.sass';
import '../assets/images/svg/info.svg';
import { formLogin } from '../components/formLogin';
import { infoApp, btnInfo } from '../components/infoApp';

const pageLogin = document.createElement('main');
pageLogin.classList.add('page-login__main');

pageLogin.append(formLogin, btnInfo, infoApp);

export { pageLogin };
