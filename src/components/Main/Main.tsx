/* eslint-disable jsx-a11y/alt-text */
import './Main.scss'
// @ts-ignore-start
import main from '../../assets/main.jpg';
// @ts-ignore-end
// @ts-ignore-start
import serv4 from "../../assets/main-mobile3.jpg"
// @ts-ignore-end
import { Description } from '../Description/description';
import { Services } from '../Services/Services';
import Card from 'react-bootstrap/esm/Card';


export const Main = () => {
    return (

        <div className="main" >
            <div className="main__content">
                <h1>ПОДБОР АВТОМОБИЛЕЙ В РБ, США, ЕВРОПА!</h1>
                <h2>Доверьте профессионалам подбор автомобиля!</h2>
                <p>Основная задача нашей компании это подбор лучшего автомобиля для Вас со 100% окупаемости наших услуг. Мы индивидуально подходим к нашему каждому клиенту  и учитываем все Ваши пожелания по достижению наилучшего результата.
                    При оказании услуг мы наглядно показываем на преимущества и недостатки каждого автомобиля, поэтому у вас не останется сомнений при выборе автомобиля.
                </p>
            </div>
            <div className="main__image">
                <img className="user__image" src={main} />
            </div>

            <div className='main__mobile'>
                <Card className="md-ligh text-white">
                    <Card.Img src={serv4} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Text>
                            <h2>ПОДБОР АВТОМОБИЛЕЙ В РБ, США, ЕВРОПА!</h2>
                            <div className='usa__card'>
                                <h3>Доверьте профессионалам подбор автомобиля!</h3>
                                {/* <p>Основная задача нашей компании это подбор лучшего автомобиля для Вас со 100% окупаемости наших услуг. Мы индивидуально подходим к нашему каждому клиенту  и учитываем все Ваши пожелания по достижению наилучшего результата.
                                    При оказании услуг мы наглядно показываем на преимущества и недостатки каждого автомобиля, поэтому у вас не останется сомнений при выборе автомобиля.
                                </p> */}
                            </div>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <Description />
            <Services />
        </div>


    );
}