
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function DoctorDetails() {
  const { id } = useParams();

  const doctors = [
    {
      id: 101,
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      experience: "10 years",
      image:
        "https://png.pngtree.com/png-clipart/20250425/original/pngtree-3d-male-doctor-character-avatar-png-image_20870250.png",
    },
    {
      id: 102,
      name: "Dr. Jane Smith",
      specialization: "Dermatologist",
      experience: "8 years",
      image:
        "https://png.pngtree.com/png-clipart/20250425/original/pngtree-3d-male-doctor-character-avatar-png-image_20870250.png",
    },
  ];

  const doctor = doctors.find((doc) => doc.id === Number(id));

if (!doctor) {
return <h2>Doctor not found!</h2>;
}

return (
<div className="doctorCard">
<img src={doctor.image} alt={doctor.name} width="150" />

  <h1>{doctor.name}</h1>
  <p>Specialization: {doctor.specialization}</p>
  <p>Experience: {doctor.experience}</p>

  <Link to="/doctors">Back to Doctors</Link>
</div>

);
}
