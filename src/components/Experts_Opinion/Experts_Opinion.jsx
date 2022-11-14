import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";


import { expert_1 } from "@/img_video";


export default function Experts_Opinion() {

	return (
		<section className="section_experts" >
			<div className="wrapper">
				<div className="text_effects" >
					<h1 className="h1_section_title" >Мнение <br /> специалистов</h1>
					<p className="subtitle" >
						Фармакотерапия —<br />
						неотъемлемый компонент <br />
						современного лечения<br />
						хронического заболевания вен.
					</p>
				</div>

				<div className="experts_container" >
					<Swiper
						pagination={{
							clickable: true,
						}}
						autoplay={{
							delay: 2000
						}}
						modules={[Pagination, Autoplay]}
						className="my_swiper_experts"
					>
						<SwiperSlide>
							<img id='front_box' src={expert_1} />
						</SwiperSlide>
						<SwiperSlide>
							<img id='front_box' src={expert_1} />
						</SwiperSlide>
						<SwiperSlide>
							<img id='front_box' src={expert_1} />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>


		</section>

	);
}