import './pageLogin.sass';
import '../assets/images/svg/info.svg';
import { formLogin, btnLogin, inputName, inputPass } from '../components/formLogin';
import { infoApp, btnInfo } from '../components/infoApp';
import { apiAuthorization } from '../components/apiChat';
import { v4 as uuidv4 } from 'uuid';

const pageLogin = document.createElement('main');
pageLogin.classList.add('page-login__main');

pageLogin.append(formLogin, btnInfo, infoApp);

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  const id = uuidv4();
  apiAuthorization(id, inputName.value, inputPass.value);
});

export { pageLogin };
