import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import icon from '../../../assets/home/quote-left 1.svg'


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle subHeading="What Our Client Say"
                heading={'Testimonials'}></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review.id} >

                        <div className=" flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <img className="w-[100px] h-[100px] pt-6" src={icon} alt="" />
                            <p className="py-8">{review.details}</p>
                            <h2 className=" text-2xl text-orange-400">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>

        </section>
    );
};

export default Testimonials;