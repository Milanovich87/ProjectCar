import './Services.scss'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// @ts-ignore-start
import serv1 from "../../assets/passat.jpeg";
// @ts-ignore-end
// @ts-ignore-start
import serv2 from "../../assets/mustang.jpeg";
// @ts-ignore-end
// @ts-ignore-start
import serv3 from "../../assets/bmw.jpeg";
// @ts-ignore-end
import { NavLink } from 'react-router-dom';
import ScrollToTop from '../scroll111';
export const Services = () => {

    return (
        <div className="services"  >
            <div className="services__header" >
                <h2 className='services__title' >НАШИ УСЛУГИ</h2>
                <p className='services__text' >Здесь вы можете ознакомиться с нашими услугами более подробно</p>
            </div>
            <CardGroup>
                <Card className="md-light text-white">
                    <Card.Img src={serv1} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>ПОДБОР АВТОМОБИЛЕЙ В РБ</Card.Title>
                        <NavLink onClick={ScrollToTop} className='btn btn-outline-warning' to='/rb' >Подробнее</NavLink>
                    </Card.ImgOverlay>
                </Card>
                <Card className="md-light text-white">
                    <Card.Img src={serv2} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>ПОДБОР АВТОМОБИЛЕЙ ИЗ США</Card.Title>
                        <NavLink onClick={ScrollToTop} className='btn btn-outline-warning' to='/usa'>Подробнее</NavLink>
                    </Card.ImgOverlay>
                </Card>
                <Card className="md-light text-white">
                    <Card.Img src={serv3} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>ПОДБОР АВТОМОБИЛЕЙ ИЗ ЕВРОПЫ</Card.Title>
                        <NavLink onClick={ScrollToTop} className='btn btn-outline-warning' to='/ec'>Подробнее</NavLink>
                    </Card.ImgOverlay>
                </Card>
            </CardGroup>
        </div >
    );
}