import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Vehicle } from '../../models/vehicle';
import DummyData from '../../../../database/dummy-data';
import DeviceCard from '../../../devices/components/device-card/DeviceCard';

const VehiclePage = () => {
    let { vehicleId } = useParams();
    let [vehicle, setVehicle] = useState<Vehicle | null>(null);

    useEffect(() => {
        // Fetch vehicle informations
        const vehicle = DummyData.vehicles.find((v) => v.id === vehicleId);

        // Vehicle found, display its informations
        if (vehicle) {
            setVehicle(vehicle);
        }
    }, [vehicleId]);

    return (
        <>
            <h1>{vehicle?.name}</h1>
            <div className="devices-container">
                {DummyData.devices.map((device) => {
                    return (
                        <DeviceCard
                            key={device.id}
                            id={device.id}
                            name={device.name}
                        ></DeviceCard>
                    );
                })}
            </div>
        </>
    );
};

export default VehiclePage;
