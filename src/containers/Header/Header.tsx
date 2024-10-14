import licorne from './licorne.png';
import style from './Header.module.css';

const Header = () => {

  return (
    <header className={style['page-header']}>
      <img src={licorne} alt='Logo site' />
      <span>Intro à React</span>
    </header>
  );
};

export default Header;