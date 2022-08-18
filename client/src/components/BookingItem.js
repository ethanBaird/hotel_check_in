import { deleteBooking, updateBooking } from "../Services/BookingsService"
import styled from 'styled-components'

const BookingItem = ({booking, name, email, date, checkedIn, id, index, removeBooking, checkIn}) => {
    
    const handleDelete = (event) => {
        deleteBooking(id)
        removeBooking(index)
    }
    
    const handleCheckInOut = (event) => {
        checkIn(index);
        updateBooking(booking, id)
    }

    return(
        <>
            {checkedIn? 
                <CheckedIn>
                    <Name>{name}</Name>
                    <h3>{email}</h3>
                    <Button onClick={handleCheckInOut}>Check Out</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </CheckedIn>
            :
                <CheckedOut>
                    <Name>{name}</Name>
                    <h3>{email}</h3>
                    <Button onClick={handleCheckInOut}>Check In</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </CheckedOut>
            }
        </>
    )
}

const CheckedIn = styled.li`
    background-color: whitesmoke;
    border: solid green 2px;
    border-radius: 5px;
    box-shadow: 0 0 8px green;
    width: 30%;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: 250ms;

    &:hover{
        transform: scale(1.01, 1.01);
    }
`
const CheckedOut = styled.li`
    background-color: whitesmoke;
    border: solid red 2px;
    border-radius: 5px;
    box-shadow: 0 0 8px red;
    width: 30%;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: 250ms;

    &:hover{
        transform: scale(1.01, 1.01);
    }
`

const Name = styled.h2`
    margin-top: 0;
`

const Button = styled.button`
    width: 25%;
    margin: 3px;
    background-color: whitesmoke;
    border-radius: 5px;
    box-shadow: 0 0 4px grey
`

export default BookingItem