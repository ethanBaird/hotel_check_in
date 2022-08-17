const BookingItem = ({name, email, date, checkedIn}) => {
    return(
        <li>
            <h2>{name} - {email}</h2>
            <p>Check In Date: {date}</p>
        </li>
    )
}

export default BookingItem