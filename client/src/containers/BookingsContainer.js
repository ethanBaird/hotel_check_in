import { useEffect, useState } from 'react'
import styled from 'styled-components';
import BookingsForm from '../components/BookingsForm';
import BookingsList from "../components/BookingsList";
import { getBookings, postBookings, updateBooking } from '../Services/BookingsService';


const BookingsContainer = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings()
            .then((allBookings)=> setBookings(allBookings) )
    }, [] );

    const addBooking = (newBooking) => {
        const copyBookings = [...bookings]
        copyBookings.push(newBooking);
        setBookings(copyBookings);
    }

    const removeBooking = (index) => {
        const copyBookings = [...bookings]
        copyBookings.splice(index, 1)
        setBookings(copyBookings)
    }

    const checkIn = (index) => {
        const copyBookings = [...bookings]
        const bookingToUpdate = copyBookings[index]
        bookingToUpdate.checkedIn = !bookingToUpdate.checkedIn
        setBookings(copyBookings)
    }

    return(
        <Wrapper>
            <BookingsForm addBooking={addBooking}/>
            <BookingsList bookings={bookings} removeBooking={removeBooking} checkIn={checkIn}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
`

export default BookingsContainer;