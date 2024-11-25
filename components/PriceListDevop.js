import styles from './PriceList.module.css';

export default function PriceList() {
    const services = [
        { 
            name: 'Создание одностраничного сайта', 
            description: 'Идеально для презентации вашего бизнеса или продукта. Быстрое создание и высокая эффективность.', 
            price: '50,000 – 100,000 KZT' 
        },
        { 
            name: 'Создание корпоративного сайта', 
            description: 'Веб-сайт для компаний, включающий разделы о компании, услугах, новостях и контактную информацию.', 
            price: '70,000 – 200,000 KZT' 
        },
        { 
            name: 'Создание интернет-каталога', 
            description: 'Стильный и функциональный онлайн-каталог для представления ваших товаров и услуг.', 
            price: '90,000 – 300,000 KZT' 
        },
        { 
            name: 'Создание сайта на CMS', 
            description: 'Управление контентом легко и просто с использованием популярных CMS, таких как WordPress.', 
            price: '20,000 – 250,000 KZT' 
        },
        { 
            name: 'SEO-оптимизация', 
            description: 'Повышение видимости вашего сайта в поисковых системах для привлечения органического трафика.', 
            price: '50,000 – 100,000 KZT' 
        },
        { 
            name: 'Поддержка и обслуживание', 
            description: 'Обеспечение бесперебойной работы вашего сайта и оперативное решение возникающих проблем.', 
            price: '20,000 – 50,000 KZT' 
        },
        { 
            name: 'Домен и хостинг', 
            description: 'Регистрация домена и надежный хостинг для вашего сайта.', 
            price: '5,000 – 15,000 KZT' 
        },
        { 
            name: 'Контент-менеджмент', 
            description: 'Создание и управление контентом, который привлекает и удерживает вашу аудиторию.', 
            price: '20,000 – 50,000 KZT' 
        }
    ];

    return (
        <section className={styles.priceListSection}>
            <h2 className={styles.title}>Прайс-лист услуг</h2>
            <table className={styles.priceTable}>
                <thead>
                    <tr>
                        <th>Услуга</th>
                        <th>Описание</th>
                        <th>Средняя цена (KZT)</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service, index) => (
                        <tr key={index}>
                            <td>{service.name}</td>
                            <td>{service.description}</td>
                            <td>{service.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
