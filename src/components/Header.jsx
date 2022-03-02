import styled from 'styled-components';
import variables from './assets/variables.json';

export function Header() {
	return (
		<HeaderContainer>
			<GlassContainer>
				<div>
					<TitleL>DRX</TitleL>
					<TitleR>Setup</TitleR>
				</div>
				<ContentBelow>
					<p>The best shop to build your perfect gamer cave</p>
				</ContentBelow>
			</GlassContainer>
		</HeaderContainer>
	);
}

const bgIMG =
	'https://wallpapercave.com/wp/wp8937965.jpg';

const HeaderContainer = styled.header`
	background: url(${bgIMG}) center no-repeat fixed;
	background-size: cover;
	background-color: ${variables.colors.bg};
	height: 100vh;
	width: 100%;
	overflow: hidden;
	color: #fff;

	@media (max-width: ${variables.mediaQueries.mobile_l}) {
		display: flex;
		align-items: center;
		text-align: center;
	}
`;

const GlassContainer = styled.div`
	background: rgba(255, 255, 255, 0.25);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border: 1px solid rgba(255, 255, 255, 0.18);
	width: 50%;
	height: 100%;
	padding: 3.5rem;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (max-width: ${variables.mediaQueries.mobile_l}) {
		width: 100%;
		height: auto;
		padding: 3rem 1.5rem;
	}
`;

const TitleL = styled.h1`
	position: relative;
	font-size: clamp(1rem, 12vw, 20vw);
	display: inline-block;
	left: 40%;
	line-height: 80%;

	background: url(${bgIMG}) center no-repeat fixed;
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;

	@media (max-width: ${variables.mediaQueries.mobile_l}) {
		left: unset;
		right: unset;
	}
`;

const TitleR = styled(TitleL)`
	left: 118%;
	background: none;
	-webkit-text-fill-color: unset;

	@media (max-width: ${variables.mediaQueries.mobile_l}) {
		left: unset;
		right: unset;
		margin: 10px;
	}
`;

const ContentBelow = styled.div`
	position: absolute;
	bottom: 70px;
	left: 50px;
	font-size: clamp(0.7rem, 1.8vw, 1.2rem);
	word-wrap: break-word;
	@media (max-width: ${variables.mediaQueries.mobile_l}) {
		position: unset;
		left: unset;
	}
`;
