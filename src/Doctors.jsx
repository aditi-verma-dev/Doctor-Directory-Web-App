import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
export default function Doctors() {

    const [doctors, setDoctors] = useState([
        {
            id: 101,
            name: "Dr. John Doe",
            specialization: "Cardiologist",
            experience: "10 years",
            image: "https://png.pngtree.com/png-clipart/20250425/original/pngtree-3d-male-doctor-character-avatar-png-image_20870250.png"
        },
        {
            id: 102,
            name: "Dr. Jane Smith",
            specialization: "Dermatologist",
            experience: "8 years",
            image: "https://png.pngtree.com/png-clipart/20250425/original/pngtree-3d-male-doctor-character-avatar-png-image_20870250.png"
        }
    ]);

    return (
        <div>
            <center>
                <h1>Our Doctors</h1>
            </center>

            <div className="doctorContainer">

                {doctors.map((doctor) => {
                    return (
                        <div key={doctor.id} className="doctorCard">
                            <img src={doctor.image} alt={doctor.name} />

                            <div className="doctorInfo">
                                <h2>name: {doctor.name}</h2>
                                <p>Specialization: {doctor.specialization}</p>
                                <p>Experience: {doctor.experience}</p>
                                <Link to={`/doctors/${doctor.id}`}>
                                    <button>View Details</button>
                                </Link>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}