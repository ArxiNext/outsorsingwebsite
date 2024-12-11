import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';
//import Image from 'next/image';
import Contact from '../components/Contact';



export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <section className='hero'>
                    <h1>Добро пожаловать в наш аутсорсинг-центр!</h1>
                    <p> Мы продоставляем лучшие решения для вашего бизнеса и почти не наебываем!</p>
                </section>
                <section className='services' id='services'>
                    <h2>Наши услуги!</h2>
                    <Services />
                    <h2>Мы предлагаем!</h2>
                    <div className="textContainer">  
                        <p>Компания ИП Юнит предоставляет высококачественные и надежные IT-услуги. Наша команда профессионалов постоянно совершенствует 
                            свои навыки и использует современные технологии для обеспечения безопасности и эффективности вашей IT-инфраструктуры.</p>
                        <p>Мы предлагаем оптимальные цены, учитывая изменения на рынке, и работаем без скрытых платежей. Вы платите только за реальные услуги, 
                            а наши эксперты быстро решат возникшие проблемы.</p>
                        <p>Зачем тратиться на постоянные расходы для своего IT-отдела, когда можно заказать аутсорсинг у ИП Юнит и получать высококлассное обслуживание без лишних затрат?</p>
                    </div>
                    <hr />
                    <h2>Получите консультацию бесплатно</h2>
                        <div className='textContainer'>
                            <p>Наш IT-отдел полностью берет на себя общение с вашим персоналом и руководством, объясняя сложные вещи простым языком. Мы ясно и доступно расскажем, 
                                как работают ваши компьютеры и программное обеспечение, и подскажем, что можно сделать для их оптимизации.</p>
                            <p>После проведения аудита мы сможем точно спрогнозировать работу вашей IT-системы и предложить конкретные шаги для повышения ее эффективности и достижения ваших бизнес-целей.</p>
                        </div>
                    
                </section>
                <hr />
                <div id="contact">
                <Contact /> 
                </div>
            </main>
           
            <Footer />
        </div>
    );
}