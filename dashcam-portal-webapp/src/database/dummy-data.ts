import { Device } from '../modules/devices/models/device';
import { Vehicle } from '../modules/vehicles/models/vehicle';

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

export default { vehicles, devices };
