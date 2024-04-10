import './pageLogin.sass';
import { formLogin } from '../components/formLogin';

const pageLogin = document.createElement('main');
pageLogin.classList.add('page-login__main');

pageLogin.append(formLogin);

export { pageLogin };
