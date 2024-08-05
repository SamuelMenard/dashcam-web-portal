import { Device } from '../models/device';
import DeviceCard from './device-card/DeviceCard';
import './device-card/DeviceCard.scss';

const devices: Device[] = [
    {
        id: '1',
        name: 'iPhone Boby',
    },
    {
        id: '2',
        name: 'iPhone Jeff',
    },
];

const DevicesPage = () => {
    return (
        <div className="devices-container">
            {devices.map((device) => {
                return (
                    <DeviceCard
                        key={device.id}
                        id={device.id}
                        name={device.name}
                        onDeviceClick={function (id: string): void {
                            console.log(id);
                        }}
                    ></DeviceCard>
                );
            })}
        </div>
    );
};

export default DevicesPage;
