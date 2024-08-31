import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './modules/core/components/nav-bar/NavBar';
import VehiclesPage from './modules/vehicles/components/vehicles-page/VehiclesPage';
import HomePage from './modules/core/components/home/HomePage';
import NotFoundPage from './modules/core/components/not-found/NotFoundPage';
import VehiclePage from './modules/vehicles/components/vehicle-page/VehiclePage';

function App() {
    return (
        <>
            <div className="app-layout">
                <div className="nav-bar-area">
                    <NavBar></NavBar>
                </div>
                <div className="main-content-area container-fluid">
                    <Routes>
                        <Route path="*" element={<NotFoundPage />} />
                        <Route path="/" element={<HomePage />} />
                        <Route path="/vehicles" element={<VehiclesPage />} />
                        <Route
                            path="/vehicles/:vehicleId"
                            element={<VehiclePage />}
                        />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
