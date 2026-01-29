import styled from "styled-components";

export const CalculatorContent = styled.div`
    .calculatorContent {
        background: #462929;
        border-radius: 35px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        margin: 150px auto 0 auto;
        padding: 20px;
        width: 320px;

        &__display {
            align-items: flex-end;
            background: #764444;
            border-radius: 23px;
            color: #fff;
            display: flex;
            flex-direction: column;
            margin-bottom: 16px;
            overflow: hidden;
            padding: 16px;

            &__history {
                color: #aaaaaa;
                font-size: 14px;
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
