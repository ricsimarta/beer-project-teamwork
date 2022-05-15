import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation'
import SwiperData from '../SwiperData.json'


function CartSwiper() {

    const[swiperData, setSwiperData] = useState(SwiperData)


    return (
        <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        {swiperData.map(({id, name, amount, price, image}) =>(

           <SwiperSlide key={id}>
                <div className="swiper-card">
                    <div><img src={require(`../images/${image}`)} alt="" width="150px" /></div>
                    <div>
                        <h4>{name}</h4>
                        <p>{amount} g</p>
                        <br/>
                        <p className="cart-item-price">{price} Ft</p>
                        <br/>
                        <button className="swiper-button">Add to cart</button>
                    </div>
                </div>
            </SwiperSlide>
            
        ))}
        </Swiper>
    );

}

export default CartSwiper
