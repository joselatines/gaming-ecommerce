import { Fragment } from 'react';
import styled from 'styled-components';
import { StyledLink } from './ReactRouterStyled';

import variables from './assets/variables.json';
import { Button } from './Button';

export function Product(props) {
	const { title, description } = props;

	let numberOfProducts = 0;
	const sumNumber = () => {
		numberOfProducts++;
	};
	const convertToPercentage = (ratingNumber) => {
		const totalStars = 5;
		const starPercentage = (ratingNumber / totalStars) * 100;
		const starPercentageRounded = Math.round(starPercentage / 10) * 10;
		return starPercentageRounded;
	};

	return (
		<Fragment>
			<Container
				starScore={convertToPercentage(product.rating)}
				key={product.id}
			>
				<div className='product__imgContainer'>
					<img src={product.image} alt='pc gamer' />
				</div>
				<div className='product__content'>
					<h2 className='product__content--title'>{title}</h2>
					<div className='product__content--price'>
						<span className='price--main'>${product.price}</span>
						{product.old_price ? (
							<span className='price--old'>${product.old_price}</span>
						) : null}
					</div>
					<div className='product__content--description'>
						<p>{description}</p>
					</div>
					<div className='product__content--ratingAndBtn'>
						<div className='ratingAndBtn__rating'>
							<div className='stars-outer'>
								<div className='stars-inner'></div>
							</div>
						</div>
						<Button
							color={variables.colors.primary}
							icon={<ion-icon name='heart-outline'></ion-icon>}
							content='Read more'
						/>
					</div>
				</div>
				{sumNumber()}
			</Container>
		</Fragment>
	);
}

const Container = styled.div`
	width: 15rem;
	height: auto;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 16px;
	padding: 15px;
	background-color: #fff;
	color: ${variables.colors.font};
	cursor: pointer;
	.product__imgContainer {
		width: 100%;
		height: 13rem;
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
	.product__content {
		display: grid;
		gap: 10px;
		padding: 1rem 0;
		.product__content--title {
			font-size: 1rem;
			font-weight: 700;
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
	.product__content--ratingAndBtn {
		display: grid;
		grid-template-columns: auto auto;
		align-items: center;
		font-size: 13px;
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
		/* width: 80%; // Get a propeerty for this */
		width: ${(props) => props.starScore}%; // Get a propeerty for this
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
