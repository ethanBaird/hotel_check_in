import { useState } from "react"
import { postBookings } from "../Services/BookingsService";

const BookingsForm = ({addBooking}) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        checkedIn: false
    })

    const handleChange = (event) => {
        const newFormData = Object.assign({}, formData);
        newFormData[event.target.name] = event.target.value;
        setFormData(newFormData)
    }

    const handleRadio = (event) => {
        const newFormData = Object.assign({}, formData);
        newFormData.checkedIn = !newFormData.checkedIn
        setFormData(newFormData)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postBookings(formData)
            .then((result) => {
                console.log(result)
                addBooking(result)
            });
        setFormData({
            name: '',
            email: '',
            date: '',
            checkedIn: false
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Booking Form</h2>
            <input type='text' name="name" placeholder="Enter name" value={formData.name} onChange={handleChange} required/>

            <input type='text' name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required/>

            <label htmlFor="date">Check in Date:</label>
            <input type='date' name="date" value={formData.date} onChange={handleChange}/>

            <label htmlFor="checked-in">Checked In?</label>
            <input type='checkbox' name="checkedIn" checked={formData.checkedIn} value={formData.checkedIn} onChange={handleRadio}/>

            <button type="submit">Add Booking</button>
        </form>
    )
 }

 export default BookingsForm