import './App.css'


import img1 from '@/assets/Frame 28.png'
import img2 from '@/assets/Vector (2).png'
import img3 from '@/assets/Frame (19).png'
import img4 from '@/assets/Frame 2.png'
import img5 from '@/assets/Frame 3.png'
import img6 from '@/assets/Frame 4.png'
import img7 from '@/assets/Rectangle 17.png'
import img7_1 from '@/assets/Rectangle 17 (1).png'
import img8 from '@/assets/Frame 14.png'
import img9 from '@/assets/Frame 14 (1).png'
import img10 from '@/assets/Frame 14 (2).png'
import img11 from '@/assets/Frame 14 (4).png'
import img12 from '@/assets/Rectangle 17 (2).png'
import img13 from '@/assets/Frame (20).png'
import img14 from '@/assets/Rectangle 18.png'
import img15 from '@/assets/Group.png'
import img16 from '@/assets/Frame (21).png'
import img17 from '@/assets/Group (1).png'
import img18 from '@/assets/Vector (3).png'
import img19 from '@/assets/Frame 17.png'
import img20 from '@/assets/Frame 34.png'
import img21 from '@/assets/Group 1.png'
import img22 from '@/assets/Group 1 (1).png'
import img23 from '@/assets/Group 1 (2).png'
import img24 from '@/assets/diamond.fill.png'
import img25 from '@/assets/Group (2).png'
import img26 from '@/assets/Frame 46.png'
import img27 from '@/assets/Frame (22).png'
import img28 from '@/assets/Frame 49.png'

import img29 from '@/assets/customer-service 1.png';
import img30 from '@/assets/customer-service 1 (1).png';
import img31 from '@/assets/customer-service 1 (2).png';
import img32 from '@/assets/customer-service 1 (3).png';
import img33 from '@/assets/Frame 301.png'
import img34 from '@/assets/Frame 293.png'
import img35 from '@/assets/Frame 296.png'
export default function App() {
  return (
    <>

      <header className='header'>
        <aside style={{ color: "gray" }}>
          <img src={img1} alt="" />
          <div className='p1'>

            <p>Як це працює</p>
            <p>Переваги</p>
            <p>Пропозиції</p>
            <p>Можливості</p>
          </div>
        </aside>
        <div>
          <button style={{ backgroundColor: "#F2F7FF", color: "#015DFD", padding: "10px 20px", borderRadius: "50px", border: "0", width: "126px" }}>Вхід</button>
          <Button name="Реєстрація" />
        </div>
        <img src={img2} className='img2' alt="" />


      </header>

      <section className='section1'>
        <aside>
          <Button1 name="Твій помічник" />
          <h1>Голосовий робот  для дзвінків від  <span style={{ color: "#015DFD" }}>1,7 ₴ за хвилину</span> розмови</h1>
          <p style={{ color: "gray" }}>У декілька разів дешевше за оператора і може обдзвонити 1000 клієнтів за пару хвилин</p>
          <Button name="Спробувати" />
        </aside>
        <div className='img_position'>
          <img src={img7} className='img7' alt="" />
          <img src={img7_1} className='img7_1' alt="" />
          <div>
            <img src={img4} className='img4' alt="" />
            <img src={img3} className='img3' alt="" />
          </div>
        </div>
      </section>

      <section className='section2'>
        <Card1 img={img8} name="Холодні продажі" des="Голосовий робот рекламує послугу або товар за допомогою телефонних переговорів " />
        <Card1 img={img9} name="Опитування" des="Відстежуйте рівень задоволеності клієнтів продукцією без залучення операторів колл-центру" />
        <Card1 img={img10} name="Прийом даних" des="Надсилайте сервісні повідомлення в режимі реального часу" />
        <Card1 img={img11} name="Сповіщення" des="Повідомляйте клієнтів про нові акції або новини" />
      </section>

      <section className='section3'>
        <aside>
          <Button1 name="Переваги" />
          <h1>Дешевше, ніж  оператор в кілька разів</h1>
          <p style={{ color: "gray" }}>Веде спілкування по заданому скрипту: може завершити розмову, з’єднати з менеджером або розсилати прості смс</p>
        </aside>
        <div>
          <img src={img12} className='img12' alt="" />
          <img src={img14} className='img14' alt="" />
          <img src={img13} className='img13' alt="" />
          <img src={img15} className='img15' alt="" />
        </div>

      </section>
      <section className="section4">
        <Card2 number="1" name="Обдзвонює базу номерів або приймає дзвінки" img={img16} />
        <Card2 number="2" name="Штучний інтелект розпізнає мову і записує всі відповіді" img={img18} />
        <Card2 number="3" name="Реагує на словаза заданим алгоритмом:" img={img17} />
      </section>
      <section className='section5'>
        <img src={img19} className='img19' alt="" />
        <img src={img20} className='img20' alt="" />
      </section>
      <section className="section6">
        <h1 className='h1'>Пакетні пропозиції</h1>
        <div className='div2'>
          <Card3 img={img21} money="від 2 ₴0" des='за хвилину розмови. Одноразовий платіж від 0 ₴. ' />
          <Card3 img={img22} money="від 2 ₴0" des='за хвилину розмови. Одноразовий платіж від 0 ₴. ' />
          <Card3 img={img23} money="від 2 ₴0" des='за хвилину розмови. Одноразовий платіж від 0 ₴. ' />
        </div>
      </section>
      <section className="section7">
        <div className='div1'>
          <Button1 name="Можливості" />
          <h1>Робот може все і навіть більше</h1>
        </div>
        <div className='div_sec7'>
          <aside>
            <Card4 name="Залучення лідів від 3,5 ₴" />
            <Card4 name="Залучення лідів від 3,5 ₴" />
            <Card4 name="Залучення лідів від 3,5 ₴" />
          </aside>

          <img src={img25} className='img25' alt="" />

          <aside>
            <Card4 name="Залучення лідів від 3,5 ₴" />
            <Card4 name="Залучення лідів від 3,5 ₴" />
            <Card4 name="Залучення лідів від 3,5 ₴" />
          </aside>
        </div>
        <div className='div2_sec7'>
          <div>

            <Button2 name="на 62%" />
            <p>эффективней оператора</p>
          </div>
          <div>

            <Button2 name="250 000" />
            <p>минут разговоров в день</p>
          </div>
          <div>

            <Button2 name="97%" />
            <p>вероятность распознавания пола и возраста оппонента</p>
          </div>
          <div>

            <Button2 name="24/7" />
            <p>работа без перерывов и выходных</p>
          </div>
        </div>
      </section>

      <section className="section8">
        <img src={img26} className='img26' alt="" />
        <img src={img28} className='img28' alt="" />
        <img src={img27} className='img27' alt="" />
      </section>

      <section className="section9">
        <div className='div2_sec9'>
          <Button1 name="Інтеграція" />
          <h3>Інтеграція з відкритого API</h3>
        </div>
        <div className='div_sec9'>
          <Card5 style={{ backgroundColor: "#5E95FE" }} img={img29} des="Зателефонує клієнту після потрапляння його картки в CRM на певному етапі угоди." />
          <Card5 style={{ backgroundColor: "#4492F4" }} img={img30} des="Звірить номер з базою контактів і звернеться на ім’я та по батькові." />
          <Card5 style={{ backgroundColor: "#1EBBE0" }} img={img31} des="Зателефонує, як тільки замовлення надійде в пункт видачі" />
          <Card5 style={{ backgroundColor: "#38D5BC" }} img={img32} des="Повідомить про графік роботи магазину, перевірить і скаже, чи є товар в наявності і які проходять акції." />
        </div>
      </section>

      <section className="section10">
        <div className='div2_sec10'>
          <h1>Відгуки</h1>
          <img src={img33} alt="" />
        </div>
        <div className='div_sec10'>
          <Card6 name="Я у захоплені!" des="1,67 ₴ - вартість хвилини дзвінка, тарифікація посекундна. Ви платите тільки за час розмови робота з клієнтом. Якщо клієнт прийняв дзвінок і повісив трубку через 30 секунд, ви заплатите 0,8 ₴, не взяв трубку - не заплатите нічого." />
          <Card6 name="Я у захоплені!" des="1,67 ₴ - вартість хвилини дзвінка, тарифікація посекундна. Ви платите тільки за час розмови робота з клієнтом. Якщо клієнт прийняв дзвінок і повісив трубку через 30 секунд, ви заплатите 0,8 ₴, не взяв трубку - не заплатите нічого." />
          <Card6 name="Я у захоплені!" des="1,67 ₴ - вартість хвилини дзвінка, тарифікація посекундна. Ви платите тільки за час розмови робота з клієнтом. Якщо клієнт прийняв дзвінок і повісив трубку через 30 секунд, ви заплатите 0,8 ₴, не взяв трубку - не заплатите нічого." />

        </div>
      </section>

      <section className="section11">
        <div className='div2_sec11'>
          <Button1 name="FAQ"/>
          <h1>Відповіді на популярні за питання</h1>
        </div>

        <div className='div_sec11'>
          <div className='div_sec11_div'>

          <Card7 name="Скільки коштує дзвінок за допомогою Zvonobot?" des="1,67 ₴ - вартість хвилини дзвінка, тарифікація посекундна. Ви платите тільки за час розмови робота з клієнтом. Якщо клієнт прийняв дзвінок і повісив трубку через 30 секунд, ви заплатите 0,8 ₴, не взяв трубку - не заплатите нічого."/>
          <Card7 name="Який відсоток клієнтів здогадується, що дзвонить робот?" des="Робота розпізнають лише 5%, якщо скрипт враховує більшість відповідей клієнтів і ролики записані диктором. Скрипт безкоштовно допоможуть скласти наші менеджери. Запис роликів можна замовити у наших дикторів."/>
          </div>
          <div className='div_sec11_div'>

          <Card7 name="З якою швидкістю Zvonobot обдзвонює базу?" des="Максимальна швидкість - 50 000 дзвінків на годину. При бажанні ви можете знизити швидкість розсилки, вибравши потрібну в налаштуваннях."/>
          <Card7 name="Скільки часу займає налаштування розсилки і запуск?" des="3 хвилини займає запуск простий розсилки на кшталт «приходьте на знижки 50% до п'ятого числа». Більш складні сценарії налаштовуються довше. Запуск розсилки відбувається через 5-30 хвилин після того, як ви натиснули «запустити». "/>
          </div>
        </div>
        
      </section>

      <footer className='footer'>
        <div className='div_footer'>
          <div style={{color:"gray"}} className='div_div_footer'>

          <img src={img1} alt="" />
          <p>Як це працює</p>
          <p>Переваги</p>
          <p>Пропозиції</p>
          <p>Можливості</p>
          </div>
          <button className='orange'>Запустити голосову розсилку</button>
        </div>
        <div className='foter_footer'>
          <p style={{color:"gray",fontSize:"20px"}}>All right reserved</p>
        </div>
      </footer>
    </>
  )
}




function Button(props) {
  return (
    <button style={{ backgroundColor: "#5D3AEF", color: "white", padding: "10px 20px", border: "0", borderRadius: "50px" }}>{props.name}</button>
  )
}

function Button1(props) {
  return (
    <button style={{ color: "#015DFD", border: "0", borderRadius: "7px", backgroundColor: "#F2F7FF", textAlign: "center", width: "140px", height: "40px" }}>{props.name}</button>
  )
}
function Button2(props) {
  return (
    <button style={{ backgroundColor: "#5D3AEF", color: "white", padding: "10px 20px", border: "0", borderRadius: "10px", fontSize: "30px", fontStyle: "bold" }}>{props.name}</button>
  )
}

function Card1(props) {
  return (
    <div style={{ width: "290px", height: "200px", display: "flex", flexDirection: "column", gap: "20px", padding: "40px", borderRadius: "10px", boxShadow: "10px 10px 10px gray" }}>
      <img style={{ width: "70px" }} src={props.img} alt="" />
      <h1>{props.name}</h1>
      <p style={{ color: "gray", fontSize: "20px" }}>{props.des}</p>
    </div>
  )
}

function Card2(props) {
  return (
    <div className='card2'>
      <h1 style={{ backgroundColor: "#F2F7FF", width: "62px", height: "62px", borderRadius: "10px", textAlign: "center" }}>{props.number}</h1>
      <h2 style={{ textAlign: "center", fontSize: "20px" }}>{props.name}</h2>
      <img style={{ width: "260px", }} src={props.img} alt="" />
    </div>
  )
}

function Card3(props) {
  return (
    <div className='card3'>
      <img src={props.img} alt="" />
      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <Button1 name="Старт" />
        <h1>{props.money}</h1>
      </div>
      <p>{props.des}</p>
      <Button1 name="Спробувати >" />
    </div>
  )
}

function Card4(props) {
  return (
    <div className='card4'>
      <img src={img24} alt="" />
      <h4>{props.name}</h4>
    </div>
  )
}
function Card5(props) {
  return (
    <div style={props.style} className='card5'>
      <img src={props.img} alt="" />
      <p style={{ color: "white", padding: "0px 10px" }}>{props.des}</p>
    </div>
  )
}


function Card6(props) {
  return (
    <div className='card6'>
      <div style={{ backgroundColor: "#F2F7FF", borderRadius: "10px", height: "300px", display: "felx", flexDirection: "column", gap: "30px", padding: "10px 30px" }} >

        <img src={img34} alt="" />
        <h1>{props.name}</h1>
        <p style={{ color: "gray", fontSize: "20px" }}>{props.des}</p>
      </div>
      <img src={img35} alt="" />
    </div>
  )
}


function Card7(props) {
  return(
    <div className='card7'>
      <h1>{props.name}</h1>
      <p style={{color:"gray"}}>{props.des}</p>
    </div>
  )
}