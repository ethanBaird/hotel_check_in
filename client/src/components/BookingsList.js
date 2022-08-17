import BookingItem from "./BookingItem";

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
        <ul>
            {bookingNodes}
        </ul>
    )
}

export default BookingsList;