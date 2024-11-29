// components/Contact.js
import SocialLinks from './SocialLinks';
import styles from '../styles/Contact.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfoContainer}>
        <h2 className={styles.title}>Контакты</h2>
        <p className={styles.contactInfo}>Вы можете связаться с нами</p>
        <ul className={styles.contactList}>
          <li className={styles.contactItem}>
            <Link href="mailto:info@prosafe.com"><Image  src="/icons/email.svg" alt="Email" className={styles.icon} width={30} height={30} />
            <span>info@example.com</span></Link>
          </li>
          <li className={styles.contactItem}><Link href="tel:+77073172855">
            <Image src="/icons/phone.svg" alt="Телефон" className={styles.icon} width={30} height={30} />
            <span>+7 (707) 317-28-55</span></Link>
          </li>
          <li className={styles.contactItem}><Link href="https://wa.me/77073172855" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/whatsapp.svg" alt="Телефон" className={styles.icon} width={30} height={30} />
            <span>+7 (707) 317-28-55</span>
            </Link>
          </li>
        </ul>
        <div className={styles.socialLinks}>
          <SocialLinks />
        </div>
      </div>

      <div className={styles.workingHours}>
        <h2 className={styles.title}>Часы работы</h2>
        <table className={styles.hoursTable}>
          <thead>
            <tr>
              <th>День</th>
              <th>Часы</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Понедельник</td>
              <td>9:00 - 18:00</td>
            </tr>
            <tr>
              <td>Вторник</td>
              <td>9:00 - 18:00</td>
            </tr>
            <tr>
              <td>Среда</td>
              <td>9:00 - 18:00</td>
            </tr>
            <tr>
              <td>Четверг</td>
              <td>9:00 - 18:00</td>
            </tr>
            <tr>
              <td>Пятница</td>
              <td>9:00 - 18:00</td>
            </tr>
            <tr>
              <td>Суббота</td>
              <td>Выезд дежурного</td>
            </tr>
            <tr>
              <td>Воскресенье</td>
              <td>Выезд дежурного</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
