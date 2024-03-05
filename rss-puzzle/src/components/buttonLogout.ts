import '../components/buttonLogout.css';
import '../assets/images/svg/logout.svg';

const btnLogout = document.createElement('img');
btnLogout.classList.add('btn-logout');
btnLogout.src = 'logout.svg';
btnLogout.alt = 'LogOut';
btnLogout.title = 'LogOut';

btnLogout.addEventListener('click', () => {
  if (localStorage.user !== undefined) {
    localStorage.removeItem('user');
    location.hash = '#login';
  }
});

export { btnLogout };
