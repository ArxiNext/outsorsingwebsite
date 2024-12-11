// components/SocialLinks.js

import Image from 'next/image';
import styles from '../styles/SocialLinks.module.css';

const socialMedia = [

  {
    name: 'Instagram',
    url: 'https://instagram.com/your-profile',
    icon: '/icons/instagram.svg',
  },
  {
    name: 'Наш Telegram',
    url: 'https://telegram.com/in/your-profile',
    icon: '/icons/telegram.svg',
  },
];

const SocialLinks = () => {
  return (
    <div className={styles.socialContainer}>
      {socialMedia.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <Image src={social.icon} alt={social.name} width={30} height={30} />
          <span className={styles.socialText}>{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
