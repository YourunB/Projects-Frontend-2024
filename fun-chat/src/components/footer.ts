import './footer.sass';
import '../assets/images/svg/logo-rs.svg';

const footer = document.createElement('footer');
footer.classList.add('footer');

const footerSchoolLink = document.createElement('a');
footerSchoolLink.href = 'https://rs.school/';
footerSchoolLink.target = '_blank';
footerSchoolLink.classList.add('footer__school');
footerSchoolLink.textContent = 'RSSchool';

const footerSchoolLogo = document.createElement('img');
footerSchoolLogo.src = 'logo-rs.svg';
footerSchoolLogo.classList.add('footer__school__img');
footerSchoolLink.prepend(footerSchoolLogo);

const footerDevLink = document.createElement('a');
footerDevLink.href = 'https://github.com/yourunb';
footerDevLink.classList.add('footer__developer');
footerDevLink.innerHTML = '&copy; Yury Butskevich';

const footerYear = document.createElement('p');
footerYear.classList.add('footer__year');
footerYear.textContent = '2024';

footer.append(footerSchoolLink, footerDevLink, footerYear);

export { footer };
