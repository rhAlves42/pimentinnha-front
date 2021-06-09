import styled from "styled-components";

export const DefaultButton = styled.button`
	width: 95%;
	padding: 10px 10px;
	background: #1f1d26;
	position: relative;
	background: #1f1d26;
	margin-bottom: 25px;
	border-radius: 1rem;
	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		opacity: 0.3;
	}
	&:active {
		opacity: 1;
		outline: none;
	}

	span {
		font-size: 1rem;
		transition: all 0.3s;
		color: #ffffff;
	}
	&.menu {
		background: transparent;
		border: none;
		border-radius: 0px;
		width: 100%;
		border-bottom: 1px solid var(--white);
	}
`;
