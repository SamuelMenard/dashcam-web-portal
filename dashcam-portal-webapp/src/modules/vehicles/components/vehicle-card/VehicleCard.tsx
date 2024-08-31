import './VehicleCard.scss';
import carIcon from '../../../../assets/car.svg';
import { NavLink } from 'react-router-dom';

interface Props {
    id: string;
    name: string;
}

const VehicleCard = ({ id, name }: Props) => {
    return (
        <div className="card card-container">
            <img src={carIcon} alt="Car" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <NavLink className="btn btn-primary" to={'/vehicles/' + id}>
                    View vehicle
                </NavLink>
            </div>
        </div>
    );
};

export default VehicleCard;
