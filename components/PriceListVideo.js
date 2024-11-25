import styles from './PriceList.module.css';

export default function PriceListVideo() {
    const services = [
        { 
            name: 'Установка видеокамер', 
            description: 'Установка камер видеонаблюдения', 
            price: '50,000 – 100,000 KZT' 
        },
        { 
            name: 'Настройка системы', 
            description: 'Конфигурация и настройка системы видеонаблюдения', 
            price: '70,000 – 200,000 KZT' 
        },
        { 
            name: 'Техническое обслуживание', 
            description: 'Регулярное обслуживание и проверка оборудования', 
            price: '90,000 – 300,000 KZT' 
        },
        { 
            name: 'Ремонт и замена оборудования', 
            description: 'Ремонт неисправного оборудования и замена деталей', 
            price: '20,000 – 250,000 KZT' 
        },
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
