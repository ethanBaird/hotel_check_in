import BookingItem from "./BookingItem";

const BookingsList = ({bookings, removeBooking}) => {
    
    const bookingNodes = bookings.map((booking, index) => {
        return(
            <BookingItem key={index}
                name={booking.name}
                email={booking.email}
                date={booking.date}
                checkedIn={booking.checkedIn}
                id={booking._id}
                index={index}
                removeBooking={removeBooking}
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