import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DummyData from '../../../../database/dummy-data';
import { Device } from '../../models/device';
import './DevicePage.scss';

function CameraPage() {
    let { deviceId } = useParams();
    let [device, setDevice] = useState<Device | null>(null);

    useEffect(() => {
        // Fetch device informations
        const device = DummyData.devices.find((d) => d.id === deviceId);

        // Device found, display its informations
        if (device) {
            setDevice(device);
        }
    }, [deviceId]);

    return (
        <div className="camera-layout">
            <div className="stream">stream</div>
            <div className="side-pane">side pane</div>
            <div className="footer">{device?.name}</div>
        </div>
    );
}

export default CameraPage;
