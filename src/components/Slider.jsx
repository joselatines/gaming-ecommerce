import styled from 'styled-components';
import { motion } from 'framer-motion';

import image1 from './assets/img/pc.png';
import image2 from './assets/img/chair.png';
import image3 from './assets/img/headset.png';
import image4 from './assets/img/keyboard.png';
import image5 from './assets/img/light.png';

const images = [image1, image2, image3, image4, image5];
let id = 0;
export function Slider() {
	return (
		<Container>
			<motion.div className='slider-container'>
				<motion.div
					className='slider'
					drag='x'
					dragConstraints={{ right: 0, left: 0 }}
				>
					{images.map((image) => (
						<motion.div key={id++} className='item'>
							<img src={image} alt='' />
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</Container>
	);
}

const Container = styled.div`
	width: auto;
	.slider-container {
		overflow-x: hidden;
	}
	.item {
		width: 80%;
		height: auto;
		margin: 0 10px;
	}
	.item img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		pointer-events: none;
	}
	.slider {
		display: flex;
		/* cursor: grab; */
	}
`;
