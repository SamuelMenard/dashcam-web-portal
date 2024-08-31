import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Vehicle } from '../../models/vehicle';

const vehicles: Vehicle[] = [
    {
        id: '1',
        name: 'Tesla Model 3',
    },
    {
        id: '2',
        name: 'Subaru WRX',
    },
];

const VehiclePage = () => {
    let { vehicleId } = useParams();
    let [vehicle, setVehicle] = useState<Vehicle | null>(null);

    useEffect(() => {
        // Fetch vehicle informations
        const vehicle = vehicles.find((v) => v.id === vehicleId);

        // Vehicle found, display its informations
        if (vehicle) {
            setVehicle(vehicle);
        }
    }, [vehicleId]);

    return (
        <>
            <h1>{vehicle?.name}</h1>
        </>
    );
};

export default VehiclePage;
