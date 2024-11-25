// components/Pricing.js
import styles from './Pricing.module.css';

const plans = [
  {
    title: 'Мини',
    description: 'До 7 рабочих станций. Плановый выезд - 1 раз в месяц. Экстренные выезды - неограниченно. Удалённая поддержка.',
    price: '10.000 ₸',
  },
  {
    title: 'Стандарт',
    description: 'От 8 до 20 рабочих станций. Плановый выезд - 1 раз в месяц. Экстренные выезды - неограниченно. Удалённая поддержка.',
    price: '7.000 ₸',
  },
  {
    title: 'Макси',
    description: 'От 21 до 35 рабочих станций. Плановые выезды - 2 раза в месяц. Экстренные выезды - неограниченно. Удалённая поддержка.',
    price: '6.000 ₸',
  },
  {
    title: 'Ультра',
    description: 'От 36 рабочих станций. Плановые выезды - 2 раза в месяц. Экстренные выезды - неограниченно. Удалённая поддержка.',
    price: '5.000 ₸',
  },
];

export default function Pricing() {
  return (
    <div className={styles.pricingSection} id="pricing" style={{ padding: "50px"}}>
      <h2>Цены на ИТ-аутсорсинг</h2>
      <div className={styles.cards}>
        {plans.map((plan, index) => (
          <div key={index} className={styles.card}>
            <h3>{plan.title}</h3>
            <p>{plan.description}</p>
            <div className={styles.price}>{plan.price} *</div>
          </div>
        ))}
      </div>
    </div>
  );
}
