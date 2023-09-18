import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg';

function Header({ nameHeader, userEmail }) {
  
/* const nameButtonReg = nameHeader === 'signIn' ? 'Регистрация' : nameHeader === 'signUp' ? 'Войти' : 'Выйти'
    
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип Место"/>
      <div className='header__userInfo'>
        <p className={`header__userEmail ${nameHeader === 'free' ? 'header__userEmail_active' : ''}`}>{userEmail}</p>
        <Link className="header__link button" to={nameHeader === 'signUp' ? '/sign-in' : nameHeader === 'signIn' ? '/sign-up' : '/sign-in'} 
          >{nameButtonReg}</Link>
      </div>
    </header>
  );*/
// переделать на нав
  return (
    <header className="header header_themeBlue">
      <img className="header__logo" src={logo} alt="логотип сайта"/>
      <ul class="header__navigation">
          <li><a href="#" class="header__films">Фильмы</a></li>
          <li><a href="#" class="header__films-save link">Сохранённые фильмы</a></li>
        </ul>
     
      <p className="header__userEmail">userEmail</p>
     

      <ul class="header__loginRegistration">
          <li><a href="#" class="header__registration active_link">Регистрация</a></li>
          <li><a href="#" class="header__login link">Войти</a></li>
        </ul>
    </header>
  );
}
export default Header