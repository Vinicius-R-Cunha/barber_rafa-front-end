import {
  Container,
  ScrollableDiv,
  Timetable,
  ButtonContainer,
  Price,
  Duration,
  Button,
} from "./style";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { sumPrices, sumDurations } from "../convertionFunctions";
import ScrollContainer from "react-indiana-drag-scroll";
import { useEffect, useState } from "react";

export default function ScheduleContainer({
  scheduleArray,
  scrollX,
  setScrollX,
  selectedTime,
  setSelectedTime,
  reservationsList,
  handleReservation,
}) {
  const [viewWidth, setViewWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", setViewWidth(window.innerWidth));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

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
        <BsFillArrowLeftCircleFill
          onClick={handleLeftArrow}
          className="nav-arrow-left"
        />
        <BsFillArrowRightCircleFill
          onClick={handleRightArrow}
          className="nav-arrow-right"
        />

        <ScrollableDiv>
          {viewWidth < 1024 ? (
            <ScrollContainer className="inside-scroll">
              {scheduleArray?.map((time) => {
                return (
                  <Timetable key={time} onClick={() => setSelectedTime(time)}>
                    {time}
                  </Timetable>
                );
              })}
            </ScrollContainer>
          ) : (
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
