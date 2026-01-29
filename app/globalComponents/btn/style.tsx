import styled from "styled-components";

export const ButtonContainer = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	font-family: 'Poppins', sans-serif;
	padding: 0;

	.buttonContainer {
		align-items: center;
		background: #916677;
		border-radius: 24px;
		color: #fff;
		display: flex;
		font-size: 20px;
		height: 60px;
		justify-content: center;
		transition: all 0.2s ease;
		width: 100%;
		box-shadow: 0 10px 6px rgba(0, 0, 0, 0.2);
	}

	&:hover .buttonContainer {
		filter: brightness(1.15);
	}

	&.operator .buttonContainer {
		background: #7a5151;
	}

	&.function .buttonContainer {
		background: #616d7c;
		font-weight: 600;
	}

	&.result .buttonContainer {
		background: #586e70;
		font-weight: 600;
	}

	&.zero .buttonContainer {
		width: 100%;
	}
`;
