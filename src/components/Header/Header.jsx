import React, { Fragment, useState } from "react";
import { search, drop_a, logo } from "@/img_video";
import classnames from 'classnames'
import Menu from "@/components/Menu/Menu.jsx";


export default function Header() {
	const [is_hide, set_visibility] = useState(true)

	function toggle_menu() {
		set_visibility(is_hide => !is_hide)
	}

	return (
		<Fragment>
			<header>
				<img className="logo" src={logo} alt="" />

				<div className="icons" >
					<img src={search} alt="" />
					<img src={drop_a} alt="" />
					<svg onClick={toggle_menu} width="68" height="45" viewBox="0 0 68 45" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path className={classnames({ 'hide': !is_hide })} d="M1 4.4837C6.3473 2.88065 14.9897 1.17301 21.32 2.8695C30.8501 5.4235 38.9139 13.6762 52.957 11.1048C58.5783 10.0755 63.3366 8.24065 67 6.36585" stroke="#47093E" strokeWidth="3" />
						<path d="M1 20.1028C6.3473 18.4998 14.9897 16.7922 21.32 18.4886C30.8501 21.0426 38.9139 29.2954 52.957 26.724C58.5783 25.6947 63.3366 23.8598 67 21.985" stroke="#47093E" strokeWidth="3" />
						<path className={classnames({ 'hide': !is_hide })} d="M1 35.7217C6.3473 34.1187 14.9897 32.411 21.32 34.1075C30.8501 36.6615 38.9139 44.9143 52.957 42.3429C58.5783 41.3136 63.3366 39.4787 67 37.6039" stroke="#47093E" strokeWidth="3" />
					</svg>
				</div>
			</header>
			<Menu visibility={is_hide} />

		</Fragment>
	);
}