import './VehicleCard.scss';
import carIcon from '../../../../assets/car.svg';

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
            </div>
        </div>
    );
};

export default VehicleCard;
