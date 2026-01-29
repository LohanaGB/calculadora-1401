import styled from "styled-components";

export const CalculatorContent = styled.div`
    .calculatorContent {
        background: #3a3a3a;
        padding: 20px;
        border-radius: 16px;
        width: 320px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

        &__display {
            background: #1e1e1e;
            color: #fff;
            padding: 16px;
            border-radius: 12px;
            margin-bottom: 16px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            &__history {
                font-size: 14px;
                opacity: 0.6;
                margin-bottom: 4px;
            }

            &__main {
                font-size: 36px;
            }
        }


        &__buttonsGrid {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;

            button {
                width: 24%;
            }

            button.zero {
                width: 49%;
            }
        }
    }
`;
