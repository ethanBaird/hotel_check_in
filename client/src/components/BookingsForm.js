import { useState } from "react"
import styled from "styled-components";
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

    const handleCheck = (event) => {
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
        <Form onSubmit={handleSubmit}>
            <h2>Booking Form</h2>
            <input type='text' name="name" placeholder="Enter name" value={formData.name} onChange={handleChange} required/>

            <input type='text' name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required/>

            <Date>
                <label htmlFor="date">Check in Date:</label>
                <input type='date' name="date" value={formData.date} onChange={handleChange}/>
            </Date>

            <Checkbox>
                <label htmlFor="checked-in">Checked In:</label>
                <input type='checkbox' name="checkedIn" checked={formData.checkedIn} value={formData.checkedIn} onChange={handleCheck}/>
            </Checkbox>

            <button type="submit">Add Booking</button>
        </Form>
    )
 }

 const Form = styled.form`
    background-color: whitesmoke;
    border: 2px solid black;
    border-radius: 5px;
    box-shadow: 0 0 16px grey;

    display: flex;
    flex-direction: column;

    height: 250px;
    width: 25%;
    padding: 1rem;
    margin: 1rem;

    h2 {
        margin-top: 0;
    }

    input {
        margin: 0.5rem;
    }
 `

 const Checkbox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    label {
        width: 40%;
    }
 `

 const Date = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    label {
        width: 40%;
    }
 `

 export default BookingsForm