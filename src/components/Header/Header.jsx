import cl from './Header.module.css';

const Header = () => {
  return (
    <header className={cl.header}>
      <img alt="logo" src="https://ifab.se/wp-content/uploads/2019/12/Your_Logo-OUR-PRODUCTS.png"/>
    </header>
  )
}

export default Header;