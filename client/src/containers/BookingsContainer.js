import { useEffect, useState } from 'react'
import BookingsList from "../components/BookingsList";
import { getBookings, postBookings } from '../Services/BookingsService';


const BookingsContainer = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings()
            .then((allBookings)=> setBookings(allBookings) )
    }, [] );

    return(
        <BookingsList bookings={bookings}/>
    )
}

export default BookingsContainer;