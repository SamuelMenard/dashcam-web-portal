import React from 'react';

interface Props {
    id: string;
    name: string;
    onDeviceClick: (id: string) => void;
}

const DeviceCard = ({ name, id, onDeviceClick }: Props) => {
    return (
        <div className="card">
            <h5 className="card-header">{name}</h5>
            <div className="card-body">
                <h5 className="card-title">LIVESTREAM HERE</h5>
                <button
                    className="btn btn-primary"
                    onClick={() => onDeviceClick(id)}
                >
                    Go somewhere
                </button>
            </div>
        </div>
    );
};

export default DeviceCard;
