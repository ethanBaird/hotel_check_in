import { deleteBooking, updateBooking } from "../Services/BookingsService"

const BookingItem = ({booking, name, email, date, checkedIn, id, index, removeBooking, checkIn}) => {
    
    const handleDelete = (event) => {
        deleteBooking(id)
        removeBooking(index)
    }
    
    const handleCheckIn = (event) => {
        checkIn(index);
        updateBooking(booking, id)
    }

    return(
        <li>
            <h2>{name} - {email}</h2>
            <p>Check In Date: {date}</p>
            {checkedIn ? <p>Checked In</p> : <button onClick={handleCheckIn}>Check In</button>}
            
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}

export default BookingItem