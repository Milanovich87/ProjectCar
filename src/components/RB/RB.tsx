/* eslint-disable jsx-a11y/alt-text */
import './RB.scss'
// @ts-ignore-start
import main from '../../assets/main.jpg';
// @ts-ignore-end
// @ts-ignore-start
import serv1 from "../../assets/passat.jpeg";
// @ts-ignore-end
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';


export const RB = ({ name, ...props }: any) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    return (
        <div className="rb" >
            <div className="rb__content">
                <div className="rb__content1">
                    <h2>ПОДБОР АВТОМОБИЛЕЙ В РБ</h2>
                    <div className='rb__cards'>
                        <div className='rb__card'>
                            <h3>Разовый осмотр 100 бел.руб.</h3>
                            <ul>
                                <li>выезд эксперта на место осмотра </li>
                                <li>проверка кузова профессиональным оборудованием ( выявление мест ремонта, шпаклевки и крашеных деталей)</li>
                                <li>компьютерная диагностика всех электронных систем и выявление оригинального пробега</li>
                                <li>осмотр двигателя и навесного оборудования на предмет подтекание технических жидкостей и наличие посторонних шумов</li>
                                <li>тест драйв для проверки ходовой части и работоспособности трансмиссии </li>
                                <li>выезд эксперта за пределы МКАД оговаривается отдельно</li>
                                <li>фото видео отчет</li>
                            </ul>
                        </div>
                        <div className='rb__card'>
                            <h3>Эксперт на день 500 бел.руб.</h3>
                            <ul>
                                <li>выезд эксперта на место осмотра</li>
                                <li>проверка кузова профессиональным оборудованием ( выявление мест ремонта, шпаклевки и крашеных деталей)</li>
                                <li>компьютерная диагностика всех электронных систем и выявление оригинального пробега</li>
                                <li>осмотр двигателя и навесного оборудования на предмет подтекание технических жидкостей и наличие посторонних шумов</li>
                                <li>тест драйв для проверки ходовой части и работоспособности трансмиссии</li>
                                <li>8 часовой рабочий день эксперта</li>
                                <li>неограниченное количество просмотренных авто</li>
                                <li>выезд эксперта за пределы МКАД оговаривается отдельно</li>
                                <li>фото видео отчет</li>
                            </ul>
                        </div>
                        <div className='rb__card'>
                            <h3>Подбор под ключ 1000 бел.руб.</h3>
                            <ul>
                                <li>поиск и подбор автомобилей по вашим критериям</li>
                                <li>выезд эксперта к месту осмотра (не ограничено) </li>
                                <li>проверка кузова профессиональным оборудованием ( выявление мест ремонта, шпаклевки и крашеных деталей) ( не ограничено)</li>
                                <li>компьютерная диагностика всех электронных систем и выявление оригинального пробега ( не ограничено)</li>
                                <li>осмотр двигателя и навесного оборудования на предмет подтекание технических жидкостей и наличие посторонних шумов ( не ограничено)</li>
                                <li>тест драйв для проверки ходовой части и работоспособности трансмиссии ( не ограничено)</li>
                                <li>проверка юридической чистоты</li>
                                <li>проверка по базам РБ, ЕС , РФ, США</li>
                                <li>контрольная проверка выбранного автомобиля на СТО</li>
                                <li>сопровождаем сделку купли - продажи</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main__image">
                    <img className="user__image" src={main} />
                </div>
            </div>

            <div className='rb__tablet'>
                <Card className="md-ligh text-white">
                    <Card.Img src={serv1} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>ПОДБОР АВТОМОБИЛЕЙ В РБ</Card.Title>
                        <Card.Text>
                            <div className='rb__cards'>
                                <div className='rb__card'>
                                    <h3>Разовый осмотр 100 бел.руб.</h3>
                                    <ul>
                                        <li>выезд эксперта на место осмотра </li>
                                        <li>проверка кузова профессиональным оборудованием ( выявление мест ремонта, шпаклевки и крашеных деталей)</li>
                                        <li>компьютерная диагностика всех электронных систем и выявление оригинального пробега</li>
                                        <li>осмотр двигателя и навесного оборудования на предмет подтекание технических жидкостей и наличие посторонних шумов</li>
                                        <li>тест драйв для проверки ходовой части и работоспособности трансмиссии </li>
                                        <li>выезд эксперта за пределы МКАД оговаривается отдельно</li>
                                        <li>фото видео отчет</li>
                                    </ul>
                                </div>
                                <div className='rb__card'>
                                    <h3>Эксперт на день 500 бел.руб.</h3>
                                    <ul>
                                        <li>выезд эксперта на место осмотра</li>
                                        <li>проверка кузова профессиональным оборудованием ( выявление мест ремонта, шпаклевки и крашеных деталей)</li>
                                        <li>компьютерная диагностика всех электронных систем и выявление оригинального пробега</li>
                                        <li>осмотр двигателя и навесного оборудования на предмет подтекание технических жидкостей и наличие посторонних шумов</li>
                                        <li>тест драйв для проверки ходовой части и работоспособности трансмиссии</li>
                                        <li>8 часовой рабочий день эксперта</li>
                                        <li>неограниченное количество просмотренных авто</li>
                                        <li>выезд эксперта за пределы МКАД оговаривается отдельно</li>
                                        <li>фото видео отчет</li>
                                    </ul>
                                </div>
                                <div className='rb__card'>
                                    <h3>Подбор под ключ 1000 бел.руб.</h3>
                                    <ul>
                                        <li>поиск и подбор автомобилей по вашим критериям</li>
                                        <li>выезд эксперта к месту осмотра (не ограничено) </li>
                                        <li>проверка кузова профессиональным оборудованием ( выявление мест ремонта, шпаклевки и крашеных деталей) ( не ограничено)</li>
                                        <li>компьютерная диагностика всех электронных систем и выявление оригинального пробега ( не ограничено)</li>
                                        <li>осмотр двигателя и навесного оборудования на предмет подтекание технических жидкостей и наличие посторонних шумов ( не ограничено)</li>
                                        <li>тест драйв для проверки ходовой части и работоспособности трансмиссии ( не ограничено)</li>
                                        <li>проверка юридической чистоты</li>
                                        <li>проверка по базам РБ, ЕС , РФ, США</li>
                                        <li>контрольная проверка выбранного автомобиля на СТО</li>
                                        <li>сопровождаем сделку купли - продажи</li>
                                    </ul>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>

            <div className='rb__mobile'>
                <Card className="md-ligh text-white">
                    <Card.Img src={serv1} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>ПОДБОР АВТОМОБИЛЕЙ В РБ</Card.Title>
                        <>
                            <Button variant="outline-warning" onClick={handleShow}>
                                Разовый осмотр 100 бел.руб.
                            </Button>
                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Разовый осмотр 100 бел.руб.</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <ul>
                                        <li>выезд эксперта на место осмотра </li>
                                        <li>проверка кузова профессиональным оборудованием ( выявление мест ремонта, шпаклевки и крашеных деталей)</li>
                                        <li>компьютерная диагностика всех электронных систем и выявление оригинального пробега</li>
                                        <li>осмотр двигателя и навесного оборудования на предмет подтекание технических жидкостей и наличие посторонних шумов</li>
                                        <li>тест драйв для проверки ходовой части и работоспособности трансмиссии </li>
                                        <li>выезд эксперта за пределы МКАД оговаривается отдельно</li>
                                        <li>фото видео отчет</li>
                                    </ul>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </>
                        <>
                            <Button variant="outline-warning" onClick={handleShow1}>
                                Эксперт на день 500 бел.руб.
                            </Button>
                            <Offcanvas show={show1} onHide={handleClose1}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Эксперт на день 500 бел.руб.</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <ul>
                                        <li>выезд эксперта на место осмотра</li>
                                        <li>проверка кузова профессиональным оборудованием ( выявление мест ремонта, шпаклевки и крашеных деталей)</li>
                                        <li>компьютерная диагностика всех электронных систем и выявление оригинального пробега</li>
                                        <li>осмотр двигателя и навесного оборудования на предмет подтекание технических жидкостей и наличие посторонних шумов</li>
                                        <li>тест драйв для проверки ходовой части и работоспособности трансмиссии</li>
                                        <li>8 часовой рабочий день эксперта</li>
                                        <li>неограниченное количество просмотренных авто</li>
                                        <li>выезд эксперта за пределы МКАД оговаривается отдельно</li>
                                        <li>фото видео отчет</li>
                                    </ul>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </>
                        <>
                            <Button variant="outline-warning" onClick={handleShow2}>
                                Подбор под ключ 1000 бел.руб.
                            </Button>
                            <Offcanvas show={show2} onHide={handleClose2}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Подбор под ключ 1000 бел.руб.</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <ul>
                                        <li>поиск и подбор автомобилей по вашим критериям</li>
                                        <li>выезд эксперта к месту осмотра (не ограничено) </li>
                                        <li>проверка кузова профессиональным оборудованием ( выявление мест ремонта, шпаклевки и крашеных деталей) ( не ограничено)</li>
                                        <li>компьютерная диагностика всех электронных систем и выявление оригинального пробега ( не ограничено)</li>
                                        <li>осмотр двигателя и навесного оборудования на предмет подтекание технических жидкостей и наличие посторонних шумов ( не ограничено)</li>
                                        <li>тест драйв для проверки ходовой части и работоспособности трансмиссии ( не ограничено)</li>
                                        <li>проверка юридической чистоты</li>
                                        <li>проверка по базам РБ, ЕС , РФ, США</li>
                                        <li>контрольная проверка выбранного автомобиля на СТО</li>
                                        <li>сопровождаем сделку купли - продажи</li>
                                    </ul>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div>


    );
}