// components/Contact.js
import SocialLinks from './SocialLinks';
import styles from './Contact.module.css';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfoContainer}>
        <h2 className={styles.title}>Контакты</h2>
        <p className={styles.contactInfo}>Вы можете связаться с нами</p>
        <ul className={styles.contactList}>
          <li className={styles.contactItem}>
            <Image src="/icons/email.svg" alt="Email" className={styles.icon} width={20} height={20} />
            <span>info@example.com</span>
          </li>
          <li className={styles.contactItem}>
            <Image src="/icons/phone.svg" alt="Телефон" className={styles.icon} width={20} height={20} />
            <span>+7 (123) 456-78-90</span>
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
              <td>Выходной</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
