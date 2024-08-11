import React from 'react';

interface Props {
    selectedVehicleId: string;
}

const VehiclePage = ({ selectedVehicleId }: Props) => {
    return (
        <>
            <h1>My vehicle</h1>
        </>
    );
};

export default VehiclePage;
