/* eslint-disable jsx-a11y/alt-text */
import './EC.scss'
// @ts-ignore-start
import main from '../../assets/main.jpg';
// @ts-ignore-end
// @ts-ignore-start
import serv3 from "../../assets/bmw.jpeg";
import Card from 'react-bootstrap/esm/Card';
// @ts-ignore-end


export const EC = () => {
    return (
        // <div className="ec" >
        //     <div className="ec__content">
        //         <h2>ПОДБОР АВТОМОБИЛЕЙ ИЗ ЕВРОПЫ</h2>
        //         <div className='ec__cards'>
        //             <div className='ec__card'>
        //                 <h3>Стоимость услуги 1500 бел.руб.</h3>
        //                 <ul>
        //                     <li>поиск, консультация и покупка автомобиля на аукционах ЕС</li>
        //                     <li>доставка автомобиля на застрахованном автовозе в Минск ( оплачивается отдельно)</li>
        //                     <li>помощь при оформлении на таможне</li>
        //                     <li>консультация по указу номер 140</li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="main__image">
        //         <img className="user__image" src={main} />
        //     </div>
        // </div>



        <div className="ec" >
            <div className="ec__content">
                <div className="ec__content1">
                    <h2>ПОДБОР АВТОМОБИЛЕЙ ИЗ ЕВРОПЫ</h2>
                    <div className='ec__cards'>
                        <div className='ec__card'>
                            <h3>Стоимость услуги 1500 бел.руб.</h3>
                            <ul>
                                <li>поиск, консультация и покупка автомобиля на аукционах ЕС</li>
                                <li>доставка автомобиля на застрахованном автовозе в Минск ( оплачивается отдельно)</li>
                                <li>помощь при оформлении на таможне</li>
                                <li>консультация по указу номер 140</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main__image">
                    <img className="user__image" src={main} />
                </div>
            </div>

            <div className='ec__mobile'>
                <Card className="md-ligh text-white">
                    <Card.Img src={serv3} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>ПОДБОР АВТОМОБИЛЕЙ ИЗ ЕВРОПЫ</Card.Title>
                        <Card.Text>
                            <div className='ec__card'>
                                <h3>Стоимость услуги 1500 бел.руб.</h3>
                                <ul>
                                    <li>поиск, консультация и покупка автомобиля на аукционах ЕС</li>
                                    <li>доставка автомобиля на застрахованном автовозе в Минск ( оплачивается отдельно)</li>
                                    <li>помощь при оформлении на таможне</li>
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