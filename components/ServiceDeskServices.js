// components/ServiceDeskServices.js
import styles from '../styles/ServiceDeskServices.module.css';

export default function ServiceDeskServices() {
    return (
        <section className={styles.services}>
            <h2 className={styles.title}>Услуги Service Desk аутсорсинга</h2>
            <div className={styles.serviceList}>
                {serviceData.map((service, index) => (
                    <div key={index} className={styles.serviceItem}>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.serviceDescription}>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

const serviceData = [
    {
        title: 'Настройка компьютеров и устройств',
        description: 'Первичная настройка новых компьютеров и периферийных устройств. Установка и настройка драйверов для оборудования.',
    },
    {
        title: 'Переустановка и настройка ОС',
        description: 'Установка и переустановка ОС (Windows, macOS, Linux и т.д.). Настройка параметров ОС под требования пользователя.',
    },
    {
        title: 'Установка и обновление ПО',
        description: 'Установка необходимого ПО, обновление ПО до актуальных версий и обеспечение совместимости.',
    },
    {
        title: 'Решение проблем с ПО и оборудованием',
        description: 'Диагностика и устранение неисправностей, решение проблем с подключением к сети и интернетом.',
    },
    {
        title: 'Консультации и обучение пользователей',
        description: 'Обучение базовым и продвинутым навыкам работы с компьютером и программами.',
    },
    {
        title: 'Управление инцидентами',
        description: 'Регистрация, классификация и отслеживание инцидентов с быстрым разрешением и уведомлением пользователей.',
    },
    {
        title: 'Управление изменениями',
        description: 'Координация изменений в IT-системах для минимизации влияния на пользователей. Тестирование и внедрение обновлений.',
    },
    {
        title: 'Аналитика и отчетность',
        description: 'Сбор и анализ данных о работе Service Desk. Создание отчетов и аналитических обзоров для улучшения качества услуг.',
    },
];
