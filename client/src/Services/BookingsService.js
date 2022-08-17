const baseUrl = 'http://localhost:9000/api/bookings'

export const getBookings = () => {
    return fetch(baseUrl)
        .then(res => res.json())
}