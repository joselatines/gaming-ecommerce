import styled from 'styled-components';

import variables from './assets/variables.json';
import { Button } from './Button';

export function Product(props) {
	const ratings = {
		sony: 4.7,
		samsung: 3.4,
		vizio: 2.3,
		panasonic: 3.6,
		phillips: 4.1,
	};
	const starsTotal = 5;

	return (
		<Container>
			<div className='product__imgContainer'>
				<img
					src='https://assets.spartangeek.com/cc/ew-thor-1_200106_021015.png'
					alt='pc gamer'
				/>
			</div>
			<div className='product__content'>
				<h2 className='product__content--title'>
					Xtreme PC Gamer AMD Radeon RX
				</h2>
				<div className='product__content--price'>
					<span className='price--main'>$900.00</span>
					<span className='price--old'>$1500.00</span>
				</div>
				<div className='product__content--description'>
					<p>Eligible for Shipping To Mars or somewhere else</p>
				</div>
				<div className='product__content--ratingAndBtn'>
					<div className='ratingAndBtn__rating'>
						<div className='stars-outer'>
							<div className='stars-inner'></div>
						</div>
						<span className='number-rating'>5/5</span>
					</div>
					<Button content='Read more' />
				</div>
			</div>
		</Container>
	);
}

const Container = styled.div`
	width: 200px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 16px;
	padding: 15px;
	.product__imgContainer {
		width: 100%;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.product__content {
		display: grid;
		gap: 10px;
		.product__content--title {
			font-size: 1rem;
		}
		.product__content--price {
			font-size: 1.2rem;
			font-weight: 700;
			color: ${variables.colors.secondary};
			gap: 5px;
			.price--old {
				font-weight: 300;
				font-size: 0.9rem;
				margin-left: 8px;
				text-decoration: line-through;
				color: ${variables.colors.font};
				opacity: 0.8;
			}
		}
	}
	.product__content--description {
		font-size: 0.8rem;
		opacity: 0.9;
	}

	.stars-outer {
		position: relative;
		display: inline-block;
	}

	.stars-inner {
		position: absolute;
		top: 0;
		left: 0;
		white-space: nowrap;
		overflow: hidden;
		width: 80%; // Get a propeerty for this
	}

	.stars-outer::before {
		content: '\f005 \f005 \f005 \f005 \f005';
		font-family: 'Font Awesome 5 Free';
		color: #ccc;
	}

	.stars-inner::before {
		content: '\f005 \f005 \f005 \f005 \f005';
		font-family: 'Font Awesome 5 Free';
		font-weight: 900;
		color: #f8ce0b;
	}
`;