import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../components/Development.module.css'
import Head from 'next/head';
import Image from 'next/image';
import PriceList from '../components/PriceListDevop';
import ProcessWorkDevop from '../components/ProcessWorkDevop';

export default function Devops() {
    return (
        <div>
        <Header />
        <Head>
            <title>Разработка сайтов под ключ - Ваш надежный партнер</title>
            <meta name="description" content="Профессиональная разработка сайтов под ключ: от лендингов и корпоративных сайтов до интернет-магазинов. Индивидуальный подход, современные технологии и SEO-оптимизация." />
            <meta name="keywords" content="разработка сайтов, создание сайтов, веб-разработка, SEO-оптимизация, адаптивный дизайн, React, Next.js" />
        </Head>
        <main>
            <section className={styles.hero}>
                <h1 className={styles.title}>Разработка сайтов под ключ</h1>
                <p className={styles.description}>
                    <strong>Ищете надежного партнера для создания сайта?</strong><br />
                    Мы предоставляем полный цикл услуг по разработке сайтов любой сложности — от корпоративных сайтов и лендингов до интернет-магазинов и веб-платформ. Наша команда опытных разработчиков и дизайнеров создаст сайт, который подчеркнет уникальность вашего бренда и поможет привлекать новых клиентов.
                </p>
                <button className={styles.ctaButton}>Связаться с нами</button>
            </section>
            <section className={styles.servicesBenefits}>
    <h2 className={styles.subtitle}>Наши услуги и преимущества</h2>
    <div className={styles.cardGrid}>
        {/* Ряд услуг */}
        <div className={styles.card}>
            <Image src="/icons/web-design.svg" alt="Веб-дизайн" width={50} height={50} className={styles.icon} />
            <h3>Веб-дизайн</h3>
            <p>Создание уникального и привлекающего дизайна, который соответствует бренду и привлекает пользователей.</p>
        </div>
        <div className={styles.card}>
            <Image src="/icons/web-development.svg" alt="Веб-разработка" width={50} height={50} className={styles.icon} />
            <h3>Веб-разработка</h3>
            <p>Разработка функциональных и надежных веб-приложений с использованием передовых технологий.</p>
        </div>
        <div className={styles.card}>
            <Image src="/icons/seo-services.svg" alt="SEO-услуги" width={50} height={50} className={styles.icon} />
            <h3>SEO-услуги</h3>
            <p>Оптимизация сайта для повышения видимости в поисковых системах и привлечения органического трафика.</p>
        </div>

        {/* Ряд преимуществ */}
        <div className={styles.card}>
            <Image src="/icons/custom-approach.svg" alt="Индивидуальный подход" width={50} height={50} className={styles.icon} />
            <h3>Индивидуальный подход</h3>
            <p>Каждый проект начинается с глубокого анализа вашего бизнеса и целевой аудитории, чтобы разработать сайт, который максимально решает ваши задачи.</p>
        </div>
        <div className={styles.card}>
            <Image src="/icons/tech-stack.svg" alt="Современные технологии" width={50} height={50} className={styles.icon} />
            <h3>Современные технологии</h3>
            <p>Мы используем платформы, такие как <strong>React</strong>, <strong>Next.js</strong>, а также CMS-системы, что гарантирует быструю загрузку страниц и плавную работу сайта.</p>
        </div>
        <div className={styles.card}>
            <Image src="/icons/seo.svg" alt="SEO-оптимизация" width={50} height={50} className={styles.icon} />
            <h3>SEO-оптимизация</h3>
            <p>Сайты, созданные нами, имеют продуманную структуру и уникальный контент, что помогает вам повысить позиции в поисковой выдаче и привлечь органический трафик.</p>
        </div>
    </div>
</section>
 <PriceList />


            <section className={styles.workProcess}>
    <ProcessWorkDevop />
</section>




            <section className={styles.finalCta}>
                <p className={styles.cta}>
                    <strong>Сайт от нашей команды станет не просто веб-страницей, а мощным инструментом для роста вашего бизнеса.</strong><br />
                    Оставьте заявку, и мы обсудим, как можем помочь вам достичь ваших целей в интернете.
                </p>
                <button className={styles.ctaButton}>Оставить заявку</button>
            </section>
            
        </main>
        <Footer />
    </div>
);
}