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
        font-size: 40px;
        font-weight: 700;

        margin-bottom: 40px;

        text-transform: uppercase;
    }

    .weekday {
        width: 450px;

        font-size: 25px;
        color: rgba(0,0,0,.59);

        display: flex;
        justify-content: space-between;
        
        padding: 15px 0;

        .time {
            color: rgba(0,0,0,.90)
        }
    }
`

export { ScheduleDiv }