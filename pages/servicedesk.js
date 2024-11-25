import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../components/ServiceDesk.module.css';
import PricingListServerDesk from '../components/PricingListServerDesk';

import Head from 'next/head';
import Image from 'next/image';
import ServiceDeskServices from '../components/ServiceDeskServices';

export default function ServiceDesk() {
    return (
        <div>
            <Header />
            <Head>
                <title>Service Desk - Поддержка для вашего бизнеса 24/7</title>
                <meta name="description" content="Надежная поддержка Service Desk для стабильной работы ваших сотрудников и IT-инфраструктуры. Индивидуальный подход и круглосуточная помощь для повышения продуктивности." />
                <meta name="keywords" content="Service Desk, IT-поддержка, круглосуточная поддержка, мониторинг, техподдержка" />
            </Head>
            <main className={styles.main}>
            <section className={styles.hero}>
    <h1 className={styles.title}>Service Desk - Надежная поддержка для вашего бизнеса</h1>
    <p className={styles.description}>
        Наш Service Desk — это оперативная поддержка ваших сотрудников и IT-инфраструктуры, 
        которая помогает избежать простоев и решать вопросы быстро и качественно.
    </p>
    <p className={styles.subDescription}>
        Мы предлагаем круглосуточную помощь, индивидуальный подход и максимальную оперативность. 
        Независимо от сложности задач, мы всегда рядом, чтобы обеспечить бесперебойную работу вашего бизнеса.
    </p>
    <p className={styles.subDescription}>
        Благодаря нашему Service Desk, ваши сотрудники могут сосредоточиться на задачах, которые важны для вашего роста и развития, 
        в то время как мы обеспечиваем стабильность IT-систем.
    </p>
    <button className={styles.ctaButton}>Связаться с нами</button>
</section>


                <section className={styles.benefits}>
                    <h2 className={styles.subtitle}>Преимущества нашего Service Desk</h2>
                    <div className={styles.cardGrid}>
                        <BenefitCard 
                            icon="/icons/support-24-7.svg" 
                            title="Круглосуточная поддержка" 
                            description="Квалифицированная помощь 24/7, чтобы вы могли получить решения в любое время." 
                        />
                        <BenefitCard 
                            icon="/icons/custom-approach.svg" 
                            title="Индивидуальный подход" 
                            description="Подстраиваемся под уникальные потребности вашего бизнеса для максимальной эффективности." 
                        />
                        <BenefitCard 
                            icon="/icons/quick-fix.svg" 
                            title="Быстрое решение проблем" 
                            description="Минимизируем время на устранение сбоев, обеспечивая стабильность всех процессов." 
                        />
                        <BenefitCard 
                            icon="/icons/monitoring.svg" 
                            title="Мониторинг и профилактика" 
                            description="Регулярный мониторинг системы для предупреждения проблем и минимизации рисков." 
                        />
                    </div>
                </section>

                <section className={styles.howItWorks}>
                    <h2 className={styles.subtitle}>Как работает наш Service Desk</h2>
                    <div className={styles.steps}>
                        <Step title="Шаг 1" description="Ваш запрос попадает к специалистам, которые анализируют и решают проблему." />
                        <Step title="Шаг 2" description="При необходимости запрос передается на следующий уровень поддержки." />
                        <Step title="Шаг 3" description="Все процессы документируются для упрощения повторных обращений." />
                    </div>
                </section>
<PricingListServerDesk />
<ServiceDeskServices />
                <section className={`${styles.finalCta} ${styles.fadeInDelayed}`}>
                    <p className={styles.ctaText}>
                        <strong>С нашим Service Desk ваша команда может сосредоточиться на важных задачах.</strong><br />
                        Мы берем на себя технические заботы, чтобы вы могли развивать ваш бизнес.
                    </p>
                    <button className={styles.ctaButton}>Оставить заявку</button>
                </section>
            </main>
            <Footer />
        </div>
    );
}

function BenefitCard({ icon, title, description }) {
    return (
        <div className={`${styles.card} ${styles.fadeInUp}`}>
            <Image src={icon} alt={title} width={50} height={50} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Step({ title, description }) {
    return (
        <div className={`${styles.step} ${styles.fadeInStep}`}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
