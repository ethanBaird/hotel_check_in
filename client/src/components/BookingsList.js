import BookingItem from "./BookingItem";
import styled from "styled-components";

const BookingsList = ({bookings, removeBooking, checkIn}) => {
    
    const bookingNodes = bookings.map((booking, index) => {
        return(
            <BookingItem key={index}
                booking={booking}
                name={booking.name}
                email={booking.email}
                date={booking.date}
                checkedIn={booking.checkedIn}
                id={booking._id}
                index={index}
                removeBooking={removeBooking}
                checkIn={checkIn}
            />
        )
    })
    
    return (
        <Wrapper>
            {bookingNodes}
        </Wrapper>
    )
}

const Wrapper = styled.ul`
    list-style: none;
    padding: 1rem;
    margin: 1rem;
    width: 75%;

    display: grid;
    grid-template-columns: 50% 50%;

    background-color: whitesmoke;
    border: solid black 2px;
    border-radius: 5px;
    box-shadow: 0 0 16px grey;
`

export default BookingsList;