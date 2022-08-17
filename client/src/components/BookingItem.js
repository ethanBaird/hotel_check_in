import { deleteBooking } from "../Services/BookingsService"

const BookingItem = ({name, email, date, checkedIn, id, index, removeBooking}) => {
    
    const handleClick = (event) => {
        deleteBooking(id)
        removeBooking(index)
    }

    return(
        <li>
            <h2>{name} - {email}</h2>
            <p>Check In Date: {date}</p>
            {checkedIn ? <p>Checked In</p> : null}
            <button onClick={handleClick}>Delete</button>
        </li>
    )
}

export default BookingItem