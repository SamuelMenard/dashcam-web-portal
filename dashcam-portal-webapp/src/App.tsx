import './App.css';
import NavBar from './modules/core/components/nav-bar/NavBar';
import VehiclesPage from './modules/vehicles/components/vehicles-page/VehiclesPage';

function App() {
    return (
        <>
            <div className="app-layout">
                <div className="nav-bar-area">
                    <NavBar></NavBar>
                </div>
                <div className="main-content-area container-fluid">
                    <VehiclesPage></VehiclesPage>
                </div>
            </div>
        </>
    );
}

export default App;
