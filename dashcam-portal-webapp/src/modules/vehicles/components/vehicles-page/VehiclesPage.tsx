import { Vehicle } from '../../models/vehicle';
import VehicleCard from '../vehicle-card/VehicleCard';
import './VehiclesPage.scss';

const devices: Vehicle[] = [
    {
        id: '1',
        name: 'Tesla Model 3',
    },
    {
        id: '2',
        name: 'Subaru WRX',
    },
];

const VehiclesPage = () => {
    return (
        <>
            <h1>My vehicles</h1>
            <div className="vehicles-container">
                {devices.map((device) => {
                    return (
                        <VehicleCard
                            key={device.id}
                            id={device.id}
                            name={device.name}
                        ></VehicleCard>
                    );
                })}
            </div>
        </>
    );
};

export default VehiclesPage;
