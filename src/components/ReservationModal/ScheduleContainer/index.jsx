import {
  Container,
  LeftArrow,
  RightArrow,
  ScrollableDiv,
  Timetable,
  ButtonContainer,
  Price,
  Duration,
  Button,
} from "./style";
import { sumPrices, sumDurations } from "../auxiliarFunctions";
import ScrollContainer from "react-indiana-drag-scroll";

export default function ScheduleContainer({
  scheduleArray,
  scrollX,
  setScrollX,
  selectedTime,
  setSelectedTime,
  reservationsList,
  handleReservation,
}) {
  function handleLeftArrow() {
    let margin = scrollX + 350;
    if (margin > 0) {
      margin = 0;
    }
    setScrollX(margin);
  }

  function handleRightArrow() {
    let margin = scrollX - 350;
    //array size * (Timetable size + gap size) - last gap
    let listWidth = scheduleArray.length * (94 + 20) - 20;
    const ScrollableDivSize = 469.797;

    if (ScrollableDivSize - listWidth > margin) {
      margin = ScrollableDivSize - listWidth;
    }
    setScrollX(margin);
  }

  return (
    <>
      <Container>
        <LeftArrow onClick={handleLeftArrow} />
        <RightArrow onClick={handleRightArrow} />

        <ScrollableDiv>
          {window.innerWidth < 1024 && (
            <ScrollContainer className="inside-scroll">
              {scheduleArray?.map((time) => {
                return (
                  <Timetable key={time} onClick={() => setSelectedTime(time)}>
                    {time}
                  </Timetable>
                );
              })}
            </ScrollContainer>
          )}
          {window.innerWidth >= 1024 && (
            <div
              className="inside-scroll"
              style={{
                marginLeft: scrollX,
                width: scheduleArray?.length * 114 - 20,
                transition: "all ease 0.9s",
              }}
            >
              {scheduleArray?.map((time) => {
                return (
                  <Timetable key={time} onClick={() => setSelectedTime(time)}>
                    {time}
                  </Timetable>
                );
              })}
            </div>
          )}
        </ScrollableDiv>
      </Container>
      {selectedTime !== "" && (
        <ButtonContainer>
          <div>
            <Price>{`R$ ${sumPrices(reservationsList)}`}</Price>
            <Duration>{sumDurations(reservationsList)}</Duration>
          </div>
          <Button
            onClick={handleReservation}
          >{`Reservar horário - ${selectedTime}`}</Button>
        </ButtonContainer>
      )}
    </>
  );
}
