/* eslint-disable jsx-a11y/alt-text */
import './USA.scss'
// @ts-ignore-start
import main from '../../assets/main.jpg';
// @ts-ignore-end
// @ts-ignore-start
import serv2 from "../../assets/mustang.jpeg";
import Card from 'react-bootstrap/esm/Card';
// @ts-ignore-end


export const USA = () => {
    return (
        <div className="usa" >
            <div className="usa__content">
                <div className="usa__content1">
                    <h2>ПОДБОР АВТОМОБИЛЕЙ ИЗ США</h2>
                    <div className='usa__cards'>
                        <div className='usa__card'>
                            <h3>Стоимость услуги 1500 бел.руб.</h3>
                            <ul>
                                <li>поиск, консультация и покупка автомобиля на аукционах США</li>
                                <li>доставка автомобиля до Минска (оплачивается отдельно)</li>
                                <li>помощь при оформлении на таможне</li>
                                <li>помощь в ремонте и поиске запчастей ( оплачивается отдельно)</li>
                                <li>консультация по указу номер 140</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main__image">
                    <img className="user__image" src={main} />
                </div>
            </div>

            <div className='usa__mobile'>
                <Card className="md-ligh text-white">
                    <Card.Img src={serv2} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>ПОДБОР АВТОМОБИЛЕЙ ИЗ США</Card.Title>
                        <Card.Text>
                            <div className='usa__card'>
                                <h3>Стоимость услуги 1500 бел.руб.</h3>
                                <ul>
                                    <li>поиск, консультация и покупка автомобиля на аукционах США</li>
                                    <li>доставка автомобиля до Минска (оплачивается отдельно)</li>
                                    <li>помощь при оформлении на таможне</li>
                                    <li>помощь в ремонте и поиске запчастей (оплачивается отдельно)</li>
                                    <li>консультация по указу номер 140</li>
                                </ul>
                            </div>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div>
    );
}