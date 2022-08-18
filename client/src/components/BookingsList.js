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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export default BookingsList;