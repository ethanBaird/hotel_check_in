import { useEffect, useState } from 'react'
import BookingsList from "../components/BookingsList";
import { getBookings } from '../Services/BookingsService';


const BookingsContainer = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings()
            .then((allBookings)=> setBookings(allBookings) )
    }, [] )

    return(
        <BookingsList/>
    )
}

export default BookingsContainer;