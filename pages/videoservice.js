import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../components/VideoSurveillance.module.css';
import Head from 'next/head';
import Image from 'next/image';
import PriceList from '../components/PriceListVideo';
import ProcessWorkDevop from '../components/ProcessWorkDevop';

export default function VideoSurveillance() {
    return (
        <div>
            <Header />
            <Head>
                <title>Услуги по установке видеонаблюдения для бизнеса и частных объектов</title>
                <meta name="description" content="Комплексные решения по установке и настройке систем видеонаблюдения для бизнеса и частных объектов. Обеспечьте безопасность с помощью качественного оборудования и профессиональной установки." />
                <meta name="keywords" content="установка видеонаблюдения, безопасность, камеры, видеорегистраторы, мониторинг, системы видеонаблюдения" />
            </Head>
            <main>
                <section className={styles.hero}>
                    <h1 className={styles.title}>Услуги по установке видеонаблюдения</h1>
                    <p className={styles.description}>
                        <strong>Комплексные решения по обеспечению безопасности для вашего бизнеса и частных объектов!</strong><br />
                        Наша компания предлагает профессиональные услуги по установке и настройке систем видеонаблюдения с высококачественными камерами и оборудованием для надежного контроля территории.
                    </p>
                    <button className={styles.ctaButton}>Связаться с нами</button>
                </section>
                
                <section className={styles.servicesBenefits}>
                    <h2 className={styles.subtitle}>Наши услуги по установке видеонаблюдения</h2>
                    <div className={styles.cardGrid}>
                        {/* Услуги */}
                        <div className={styles.card}>
                            <Image src="/icons/design.svg" alt="Проектирование системы" width={50} height={50} className={styles.icon} />
                            <h3>Проектирование системы видеонаблюдения</h3>
                            <p>Анализ ваших потребностей и условий объекта, проектирование системы с учетом технических и юридических требований, рекомендации по оборудованию.</p>
                        </div>
                        <div className={styles.card}>
                            <Image src="/icons/installation.svg" alt="Установка камер" width={50} height={50} className={styles.icon} />
                            <h3>Установка камер видеонаблюдения</h3>
                            <p>Монтаж внешних и внутренних камер, настройка обзоров, подключение к сети и обеспечение максимального покрытия и надежности.</p>
                        </div>
                        <div className={styles.card}>
                            <Image src="/icons/configuration.svg" alt="Настройка видеорегистраторов" width={50} height={50} className={styles.icon} />
                            <h3>Настройка видеорегистраторов и серверов</h3>
                            <p>Обеспечение стабильности системы видеонаблюдения с резервным копированием и интеграцией с существующими системами безопасности.</p>
                        </div>
                        <div className={styles.card}>
                            <Image src="/icons/support.svg" alt="Обслуживание" width={50} height={50} className={styles.icon} />
                            <h3>Обслуживание и поддержка системы</h3>
                            <p>Плановое обслуживание, ремонт, обновление ПО и оборудования для долгосрочной работы системы без сбоев.</p>
                        </div>
                    </div>
                </section>

                <PriceList />

                <section className={styles.workProcess}>
                    <ProcessWorkDevop />
                </section>

                <section className={styles.finalCta}>
                    <p className={styles.cta}>
                        <strong>Закажите установку видеонаблюдения и получите надежную защиту вашего бизнеса и дома.</strong><br />
                        Обеспечьте безопасность с помощью передовых технологий уже сегодня!
                    </p>
                    <button className={styles.ctaButton}>Оставить заявку</button>
                </section>
            </main>
            <Footer />
        </div>
    );
}
