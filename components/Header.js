// components/Header.js
import Link from "next/link";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>НаеБеРы</Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><Link href="/" className={styles.navLink}>Главная</Link></li>
          <li className={styles.dropdown}>
          <b><span className={styles.menuButton}> <Link href="#services">Услуги</Link></span></b>
            <ul className={styles.dropdownMenu}>
              <li><Link href="/devops" className={styles.dropdownItem}>Разработка сайтов</Link></li>
              <li><Link href="/servicedesk" className={styles.dropdownItem}>Service Desk</Link></li>
              <li><Link href="/videoservice" className={styles.dropdownItem}>Видеонаблюдение</Link></li>
              <li><Link href="/lks" className={styles.dropdownItem}>Монтаж ЛКС</Link></li>
              {/* Добавьте другие услуги по мере необходимости */}
            </ul>
          </li>
          {/*<li><Link href="/about" className={styles.navLink}>О компании</Link></li>*/}
          <li><Link href="#contact" className={styles.navLink}>Контакты</Link></li>
        </ul>
      </nav>
      <div className={styles.contactInfo}>
        <span>Телефон: +1 (123) 456-7890</span>
      </div>
    </header>
  );
};

export default Header;
