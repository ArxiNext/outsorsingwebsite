import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/WhatsAppIcon.module.css'; // Подключаем CSS-модуль

const WhatsAppIcon = () => {
  return (
    <Link href="https://wa.me/+77073172855" target="_blank" rel="noopener noreferrer">
      <div className={styles.iconContainer}>
        <Image src="/whatsapp.png" alt="WhatsApp" width={50} height={50} />
      </div>
    </Link>
  );
};

export default WhatsAppIcon;
