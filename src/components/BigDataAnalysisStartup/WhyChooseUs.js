import React from 'react';
import {Link} from 'gatsby'

import MapShape2 from '../../assets/images/shape/map-shape2.png'
import Partner1 from '../../assets/images/partner/partner1.png'
import Partner2 from '../../assets/images/partner/partner2.png'
import Partner3 from '../../assets/images/partner/partner3.png'
import Partner4 from '../../assets/images/partner/partner4.png'
import Partner5 from '../../assets/images/partner/partner5.png'
import Partner6 from '../../assets/images/partner/partner6.png'

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us-area bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="why-choose-us-content">
                            <h2>О Компании</h2>
                            <p>
                                Компания OOO “Rage Corp” работает в сфере IT в Узбекистане, мы оказываем услуги для сотовых операторов, интернет провайдеров и онлайн кинотеатров. Компания оказывать всестороннюю помощь нашим клиентам в создании и развитии ИТ-систем, способствующих успеху их бизнеса. Rage Corp - это компания, которая была создано за счёт собственных средств и имеет собственный Дата-центр.
                            </p>

                            <div className="map-shape2">
                                <img src={MapShape2} alt="MapShape" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="our-brand-partners-list">
                            <h2>Наши партнеры</h2>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-md-4">
                                    <img src={Partner1} alt="Partner" />
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-4">
                                    <img src={Partner2} alt="Partner" />
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-4">
                                    <img src={Partner3} alt="Partner" />
                                </div>
                                
                                <div className="col-lg-6 col-sm-6 col-md-4">
                                    <img src={Partner4} alt="Partner" />
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-4">
                                    <img src={Partner5} alt="Partner" />
                                </div>
                                
                                <div className="col-lg-6 col-sm-6 col-md-4">
                                    <img src={Partner6} alt="Partner" />
                                </div>
                            </div>

                            {/* <Link to="/partner" className="view-all">
                                View All
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;