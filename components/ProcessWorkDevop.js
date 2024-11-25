import styles from './ProcessWorkDevop.module.css';

export default function ProcessWorkDevop() {
  return (
    <div className={styles.process}>
      <h1 className={styles.title}>Наш процесс работы: шаг за шагом к успешному проекту</h1>
      <div className={styles.steps}>
        <div className={styles.step}>
          <h2 className={styles.stepTitle}>1. Анализ и планирование</h2>
          <p className={styles.stepDescription}>
            Мы начинаем с изучения вашего бизнеса и целевой аудитории, чтобы создать точный и индивидуальный план работы. 
            Мы проводим исследование рынка, определяем цели и согласуем бюджет и сроки проекта.
          </p>
        </div>
        
        <div className={styles.step}>
          <h2 className={styles.stepTitle}>2. Дизайн и прототипирование</h2>
          <p className={styles.stepDescription}>
            Создаем уникальный дизайн, который будет отражать ваши цели и привлекать целевую аудиторию. Мы разрабатываем 
            прототипы и мокапы, создаем интуитивно понятный интерфейс и заботимся о адаптивности дизайна.
          </p>
        </div>

        <div className={styles.step}>
          <h2 className={styles.stepTitle}>3. Разработка</h2>
          <p className={styles.stepDescription}>
            Мы реализуем проект с использованием передовых технологий и лучших практик разработки, создавая как фронтенд, так и бэкенд.
          </p>
        </div>

        <div className={styles.step}>
          <h2 className={styles.stepTitle}>4. Тестирование</h2>
          <p className={styles.stepDescription}>
            Каждое приложение проходит всестороннее тестирование, включая функциональное, кросс-браузерное тестирование и тестирование безопасности.
          </p>
        </div>

        <div className={styles.step}>
          <h2 className={styles.stepTitle}>5. Запуск и поддержка</h2>
          <p className={styles.stepDescription}>
            После запуска мы продолжаем контролировать процесс и предоставляем постоянную техническую поддержку, чтобы ваш проект всегда был актуален.
          </p>
        </div>
        <div className={styles.step}>
          <h2 className={styles.stepTitle}>6. Аналитика и отчетность</h2>
          <p className={styles.stepDescription}>
            Мы активно занимаемся сбором и анализом данных, чтобы мониторить эффективность работы проекта. Проводим регулярные аудиты и создаем подробные отчеты, давая рекомендации по улучшению.
          </p>
        </div>

      </div>
    </div>
  );
}
