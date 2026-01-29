import styled from "styled-components";

export const ButtonContainer = styled.button`
	padding: 0;
	border: none;
	background: transparent;
	cursor: pointer;

	.buttonContainer {
		height: 60px;
		width: 100%;
		border-radius: 12px;
		font-size: 20px;
		font-weight: 500;
		color: #fff;
		background: #5a5a5a;

		display: flex;
		align-items: center;
		justify-content: center;

		transition: all 0.2s ease;
	}

	&:hover .buttonContainer {
		filter: brightness(1.15);
	}

	&.operator .buttonContainer {
		background: #6b6b6b;
	}

	&.function .buttonContainer {
		background: #777;
		font-weight: 600;
	}

	&.result .buttonContainer {
		background: #ff9500;
		font-weight: 600;
	}

	&.zero .buttonContainer {
		width: 100%;
	}
`;
