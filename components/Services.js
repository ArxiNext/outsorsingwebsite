// components/Service.js

import Image from 'next/image';
/*import styles from './Service.module.css';

const services = [
  {
    title: "Обслуживание оргтехники",
    description: "Мы предоставляем полный спектр услуг по обслуживанию офисной техники, включая ремонт и профилактику печатающих устройств, сканеров и копировальных аппаратов, обеспечивая их бесперебойную работу.",
    icon: "/icons/design.svg",
  },
  {
    title: "Обслуживание компьютеров",
    description: "Наше обслуживание компьютеров включает в себя диагностику, ремонт и обновление аппаратного и программного обеспечения. Мы устраняем как аппаратные, так и программные неисправности, улучшаем производительность и продлеваем срок службы вашего оборудования.",
    icon: "/icons/development.svg",
  },
  {
    title: "Service Desk.",
    description: "Поддержка работоспособности оборудования, ОС и ПО. Антивирусная защита. Управление данными.",
    icon: "/icons/marketing.svg",
  },
  {
    title: "Обслуживание сетей Компании",
    description: "Мы предлагаем комплексные решения для планирования, настройки и поддержки корпоративных сетей, обеспечивая их стабильность и безопасность.",
    icon: "/icons/design.svg",
  },
  {
    title: "Разработка",
    description: "Создаем быстрые, удобные сайты с использованием React, Next.js и CMS. Оптимизируем для SEO и быстрой загрузки, чтобы ваш сайт привлекал клиентов и работал без задержек.",
    icon: "/icons/development.svg",
  },
  {
    title: "IT инфраструктура",
    description: "Проектирование и создание физической и виртуализованной IT инфраструктуры. Облачные решения. Железо и ПО.",
    icon: "/icons/marketing.svg",
  },
];

const ServiceList = () => {
  return (
    <div className={styles.servicesContainer}>
      {services.map((service, index) => (
        <div key={index} className={styles.serviceItem}>
          <Image src={service.icon} alt={service.title} width={50} height={50} />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;*/
// pages/service.js

import Link from 'next/link';
import styles from './Service.module.css';

const services = [
  { title: 'Разработка сайтов', description: 'Создаем быстрые, удобные сайты с использованием React, Next.js и CMS. Оптимизируем для SEO и быстрой загрузки, чтобы ваш сайт привлекал клиентов и работал без задержек.',icon: "/icons/development.svg", link: '/devops' },
  { title: 'Service Desk.', description: 'Поддержка работоспособности оборудования, ОС и ПО. Антивирусная защита. Управление данными.', icon: "/icons/marketing.svg", link: '/servicedesk' },
  { title: 'Установка и настройка видеонаблюдения', description: 'Комплексные решения по обеспечению безопасности для вашего бизнеса и частных объектов!', icon: "/icons/installation.svg", link: '/videoservice' },
  { title: 'Обслуживание сетей Компании', description: 'Мы предлагаем комплексные решения для планирования, настройки и поддержки корпоративных сетей, обеспечивая их стабильность и безопасность.', icon: "/icons/design.svg", link: '/lks' },


];

const Service = () => {
  return (
    <div className={styles.servicesContainer}>
      {services.map((service, index) => (
        <Link key={index} href={service.link} className={styles.card}>
          <div className={styles.cardContent}>
          <Image src={service.icon} alt={service.title} width={120} height={120} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </Link> 
      ))
      }
    </div>
  );
};

export default Service;
