import { NavLink } from 'react-router-dom';

interface Props {
    id: string;
    name: string;
}

const DeviceCard = ({ name, id }: Props) => {
    return (
        <div className="card">
            <h5 className="card-header">{name}</h5>
            <div className="card-body">
                <h5 className="card-title">LIVESTREAM HERE</h5>
                <NavLink className="btn btn-primary" to={'/devices/' + id}>
                    View device
                </NavLink>
            </div>
        </div>
    );
};

export default DeviceCard;
