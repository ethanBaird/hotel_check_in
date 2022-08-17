import BookingItem from "./BookingItem";

const BookingsList = ({bookings}) => {
    
    const bookingNodes = bookings.map((booking) => {
        return(
            <BookingItem 
                name={booking.name}
                email={booking.email}
                date={booking.date}
                checkedIn={booking.checkedIn}
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