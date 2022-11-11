import React, { useEffect, useState } from "react";
import { factory_img, factory_bg_svg } from "@/img_video";

export default function Factory_Video() {

	const arr_items = []

	useEffect(() => {
		const items = document.querySelectorAll('.item')

		for (let item of items) {
			arr_items.push(item)
		}
	})


	function next_slide() {


		const el_1 = arr_items[0].classList.contains("active")
		const el_2 = arr_items[1].classList.contains("active")


		if (el_1) {
			arr_items[0].classList.remove('active')
			arr_items[0].classList.add("transform")

			arr_items[1].classList.add("active")
			arr_items[1].classList.remove('transform')

		} else if (el_2) {
			arr_items[1].classList.remove('active')
			arr_items[1].classList.add("transform")

			arr_items[2].classList.add("active")
			arr_items[2].classList.remove('transform')
		}


	}



	function prev_slide() {

		// arr_items.map((item, index) => {
		// 	index = index + 1

		// 	if (!item.classList.contains('item_currect')) { return }

		// 	item.classList.remove('item_slider')
		// 	item.classList.add("item_currect")
		// })

	}

	return (
		<section className="section_factory" >
			<img id="bg_section_factory" src={factory_bg_svg} alt="" />


			<div className="container_factory">
				<h1 className="h1_section_title" >О производстве <br /> Венарус</h1>

				<div className="wrapper">
					<div className="window">


						<div className="item  active" >
							<img src={factory_img} />
						</div>
						<div className="item  transform" >
							<img src={factory_img} />
						</div>
						<div className="item  transform" >
							<img src={factory_img} />
						</div>


					</div>
					<div className="navigation" >
						<div onClick={prev_slide} className="btn_prev" ></div>
						<div onClick={next_slide} className="btn_next" ></div>
					</div>
				</div>

			</div>
		</section>
	);
}