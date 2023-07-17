import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { productsUrl } from '../fetches/productsFetching';
const HomeSlider = () => {

    const [sliderData, setSliderData] = useState([])
    const fetchSlider = async () => {
        try {
            const resp = await fetch(productsUrl + `/api/slider/`)
            const data = await resp.json()
            setSliderData(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchSlider()
    }, [])


    return (
        <div>
            <>
                <Swiper
                    centeredSlides={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {sliderData.length ? sliderData.map((slider,index)=>(
                        <SwiperSlide key={index}>
                            <img className='h-[250px] sm:h-[350px] md:h-[500px] rounded-xl object-cover object-center w-full' src={slider?.image} alt="" />
                        </SwiperSlide>
                    )) : ''}
                </Swiper>
            </>
        </div>
    )
}

export default HomeSlider