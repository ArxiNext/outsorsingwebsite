import { useState } from 'react';
import Link from 'next/link';
import styles from './ServicesMenu.module.css';

const ServicesMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.menuContainer}>
      <button onClick={toggleMenu} className={styles.menuButton}>
        Услуги
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li><Link href="#service1"><a className={styles.menuItem}>Настройка компьютеров и устройств</a></Link></li>
          <li><Link href="#service2"><a className={styles.menuItem}>Переустановка и настройка ОС</a></Link></li>
          <li><Link href="#service3"><a className={styles.menuItem}>Установка и обновление ПО</a></Link></li>
          <li><Link href="#service4"><a className={styles.menuItem}>Решение проблем с ПО и оборудованием</a></Link></li>
          <li><Link href="#service5"><a className={styles.menuItem}>Консультации и обучение пользователей</a></Link></li>
          <li><Link href="#service6"><a className={styles.menuItem}>Управление инцидентами</a></Link></li>
          <li><Link href="#service7"><a className={styles.menuItem}>Управление изменениями</a></Link></li>
          <li><Link href="#service8"><a className={styles.menuItem}>Аналитика и отчетность</a></Link></li>
        </ul>
      )}
    </div>
  );
};

export default ServicesMenu;
