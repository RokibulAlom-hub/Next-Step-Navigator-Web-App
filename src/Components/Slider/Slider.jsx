import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';

const Slider = ({ slides }) => {
    console.log(slides);

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={true} // Enable navigation
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div
                        className="h-80 w-full flex flex-col justify-center items-center"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                            <h2 className="text-white text-4xl font-bold">{slide.title}</h2>
                            <p className="text-gray-300 w-3/5 text-center font-semibold">{slide.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
