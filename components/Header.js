import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          ИП Юнит
        </Link>
      </div>
      {/* Бургер-кнопка */}
      <button className={styles.burgerButton} onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </button>
      {/* Навигация */}
      <nav className={`${styles.nav} ${menuOpen ? styles.navActive : ""}`}>
        <ul className={styles.navList}>
          <li>
            <Link href="/" className={styles.navLink}>
              Главная
            </Link>
          </li>
          <li className={styles.dropdown}>
            <button
              className={styles.menuButton}
              onClick={toggleDropdown}
            >
              Услуги
            </button>
            {dropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link href="/devops" className={styles.dropdownItem}>
                    Разработка сайтов
                  </Link>
                </li>
                <li>
                  <Link href="/servicedesk" className={styles.dropdownItem}>
                    Service Desk
                  </Link>
                </li>
                <li>
                  <Link href="/videoservice" className={styles.dropdownItem}>
                    Видеонаблюдение
                  </Link>
                </li>
                <li>
                  <Link href="/lks" className={styles.dropdownItem}>
                    Монтаж ЛКС
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="#contact" className={styles.navLink}>
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
      {/* Контакты */}
      <div className={styles.contactInfo}>
        <div>
          Телефон:{" "}
          <a href="tel:+77073172855" className={styles.phone}>
            +7 (707) 317-2855
          </a>
        </div>
        <div>
          <a
            href="https://instagram.com"
            className={styles["social-icon"]}
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://telegram.org"
            className={styles["social-icon"]}
            aria-label="Telegram"
          >
            <FaTelegramPlane size={24} />
          </a>
          <a
            href="https://whatsapp.com"
            className={styles["social-icon"]}
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
