import React from "react";
import { useHistory } from "react-router-dom";

function Reservation({ reservation }) {
  const history = useHistory();

  // seats the reservation on button click
  const handleSeat = () => {
    history.push(`reservations/${reservation.reservation_id}/seat`);
  }

  // seat button
  const SeatButton = <button 
    type="button" 
    className="btn btn-primary" 
    href={`/reservations/${reservation.reservation_id}/seat`} 
    onClick={handleSeat}>
      Seat
    </button>

  // html
  return (
    <tr>
      <th scope="row">{reservation.reservation_id}</th>
      <td>{reservation.first_name}</td>
      <td>{reservation.last_name}</td>
      <td>{reservation.mobile_number}</td>
      <td>{reservation.reservation_time}</td>
      <td>{reservation.people}</td>
      <td data-reservation-id-status={reservation.reservation_id}>{reservation.status}</td>
      <td>{reservation.status === "booked" ?  SeatButton : <></>}</td>
    </tr>
  )
}

export default Reservation;