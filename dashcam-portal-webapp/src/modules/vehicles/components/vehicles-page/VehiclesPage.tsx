import VehicleCard from '../vehicle-card/VehicleCard';
import DummyData from '../../../../database/dummy-data';
import './VehiclesPage.scss';

const VehiclesPage = () => {
    return (
        <>
            <h1>My vehicles</h1>
            <div className="vehicles-container">
                {DummyData.vehicles.map((device) => {
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
