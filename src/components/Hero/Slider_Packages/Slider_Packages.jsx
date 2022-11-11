import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";


import {
	front_box,
	left_box,
	right_box,
} from '@/img_video';

export default class Slider_Packages extends React.PureComponent {
	render() {
		return (
			<section className='section_slider' >
				<div className='container_slider'>

					<div className='bg_boxes' >
						<img className='right_box' src={right_box} alt='' />
						<img className='left_box' src={left_box} alt='' />
					</div>

					<div className="wrapper_slider">

						<Swiper
							rewind={true}
							navigation={true}
							loop={true}
							modules={[Navigation]}
							className="mySwiper"
						>

							<SwiperSlide>
								<img id='front_box' src={front_box} />
							</SwiperSlide>
							<SwiperSlide>
								<img id='front_box' src={front_box} />
							</SwiperSlide>
							<SwiperSlide>
								<img id='front_box' src={front_box} />
							</SwiperSlide>
						</Swiper>

					</div>
				</div>
				<a href='#'>Где купить  {'>'}</a>
			</section>
		);
	}
}