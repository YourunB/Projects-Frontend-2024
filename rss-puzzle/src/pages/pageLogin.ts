import '../pages/pageLogin.css';
import { formLogin } from '../components/loginForm';

const pageLogin = document.createElement('section');
pageLogin.classList.add('page-login');
pageLogin.append(formLogin);

export { pageLogin };
