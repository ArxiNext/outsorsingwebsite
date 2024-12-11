// components/LKSPage.js
import Image from 'next/image';
import Footer from '../components/Footer';
import styles from '../styles/Lks.module.css';
import Header from '../components/Header2';
import Head from 'next/head';
import LksTextContent from '../components/LksTextContent';
import Link from 'next/link';

export default function LKSPage() {
  return (
<>
 <Head>
        <title>Услуги по установке и настройке ЛКС - Ваш надежный IT-партнер</title>
        <meta
          name="description"
          content="Мы предлагаем услуги по проектированию, установке и настройке локальных компьютерных сетей (ЛКС) для бизнеса и дома. Надежные решения от профессионалов."
        />
        <meta
          name="keywords"
          content="ЛКС, локальные сети, настройка ЛКС, проектирование сетей, монтаж сетевого оборудования, IT поддержка"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/lks-services" />
      </Head>

 <Header />   
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Услуги по установке и настройке локальных компьютерных сетей (ЛКС)</h1>
        <p className={styles.heroSubtitle}>Комплексные услуги по проектированию, установке и настройке ЛКС для бизнеса и дома</p>
        <Link href="https://wa.me/+77073172855" target="_blank" rel="noopener noreferrer"> <button className={styles.ctaButton}>Заказать услугу </button></Link>
      </section>

      {/* Service Overview Section */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Наши услуги по ЛКС включают:</h2>
        <div className={styles.serviceList}>
          <div className={styles.serviceItem}>
            <Image src="/icons/design.svg" alt="Проектирование" width={50} height={50} />
            <h3>Проектирование локальной сети</h3>
            <p>Анализ объекта, разработка проекта, и подбор оборудования.</p>
          </div>
          <div className={styles.serviceItem}>
            <Image src="/icons/setup.svg" alt="Установка" width={50} height={50} />
            <h3>Установка и монтаж сетевого оборудования</h3>
            <p>Прокладка кабелей, установка сетевых устройств, подключение к сети.</p>
          </div>
          <div className={styles.serviceItem}>
            <Image src="/icons/config.svg" alt="Конфигурация" width={50} height={50} />
            <h3>Настройка и конфигурация сети</h3>
            <p>Конфигурация маршрутизаторов и настройка безопасности.</p>
          </div>
          <div className={styles.serviceItem}>
            <Image src="/icons/integration.svg" alt="Интеграция" width={50} height={50} />
            <h3>Интеграция с существующими системами</h3>
            <p>Совместимость с серверами и облачными сервисами, интеграция периферии.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <h2 className={styles.sectionTitle}>Преимущества работы с нами:</h2>
        <div className={styles.benefitsList}>
          <div className={styles.benefitItem}>
            <Image src="/icons/quality.svg" alt="Качество" width={40} height={40} />
            <p>Высокое качество оборудования</p>
          </div>
          <div className={styles.benefitItem}>
            <Image src="/icons/speed.svg" alt="Быстрота" width={40} height={40} />
            <p>Быстрая установка</p>
          </div>
          <div className={styles.benefitItem}>
            <Image src="/icons/budget.svg" alt="Бюджет" width={40} height={40} />
            <p>Гибкие решения для любого бюджета</p>
          </div>
          <div className={styles.benefitItem}>
            <Image src="/icons/security.svg" alt="Безопасность" width={40} height={40} />
            <p>Надежность и безопасность</p>
          </div>
        </div>
      </section>
<LksTextContent />
      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Готовы улучшить ваши IT-системы?</h2>
        <p>Закажите установку и настройку ЛКС сегодня для обеспечения бесперебойной работы.</p>
        <button className={styles.ctaButton}>Связаться с нами</button>
      </section>
    </div>
<Footer />
    </>
  );
}
