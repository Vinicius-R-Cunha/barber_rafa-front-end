import styled from "styled-components"

const ScheduleDiv = styled.div`
    width: 60%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 9px;

    margin: 100px 0;
    padding: 50px 0 30px 0;

    border-top: 1px solid rgba(0,0,0,.2);
    border-bottom: 1px solid rgba(0,0,0,.2);

    .schedule-title {
        font-size: 30px;
        font-weight: 700;

        margin-bottom: 25px;

        text-transform: uppercase;
    }

    .weekday {
        width: 350px;

        font-size: 22px;
        color: rgba(0,0,0,.59);

        display: flex;
        justify-content: space-between;
        
        padding: 11px 0;

        .time {
            color: rgba(0,0,0,.90)
        }
    }

    @media (max-width: 879px) {
        .schedule-title {
            font-size: 25px;
        }

        .weekday {
            font-size: 20px;
        }
    }

    @media (max-width: 639px) {
        padding: 30px 0 10px 0;

        .schedule-title {
            width: 100%;

            font-size: 22px;
            text-align: center;
        }

        .weekday {
            width: 230px;

            font-size: 16px;
        }
    }
`

export { ScheduleDiv }