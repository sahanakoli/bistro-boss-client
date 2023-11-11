import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='mt-10 mb-24'>
            <section>
                <SectionTitle
                subHeading={"From 11.00am to 10.00pm"}
                heading={"Order Online"}
                ></SectionTitle>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
      >
        <SwiperSlide>
            <img className=' w-full h-[400px]' src={slider1} alt="" />
            <h2 className=' text-3xl text-center -mt-16 text-white'>SALADS</h2>
            </SwiperSlide>
        <SwiperSlide>
            <img className=' w-full h-[400px]' src={slider2} alt="" />
            <h2 className=' text-3xl text-center -mt-16 text-white'>PIZZA</h2>
            </SwiperSlide>
        <SwiperSlide>
            <img  className=' w-full h-[400px]' src={slider3} alt="" />
            <h2 className=' text-3xl text-center -mt-16 text-white'>SOUPS</h2>
            </SwiperSlide>
        <SwiperSlide>
            <img className=' w-full h-[400px]' src={slider4} alt="" />
            <h2 className=' text-3xl text-center -mt-16 text-white'>DESSERTS</h2>
            </SwiperSlide>
        <SwiperSlide>
            <img className=' w-full h-[400px]' src={slider5} alt="" />
            <h2 className=' text-3xl text-center -mt-16 text-white'>SALADS</h2>
            </SwiperSlide>
      </Swiper>
            </section>
        </div>
    );
};

export default Category;