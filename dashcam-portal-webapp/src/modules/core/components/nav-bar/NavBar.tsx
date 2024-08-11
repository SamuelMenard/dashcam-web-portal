import NavBarRoutes from '../nav-bar-routes/NavBarRoutes';
import './NavBar.scss';

function NavBar() {
    return (
        <>
            <div className="nav-bar-container">
                <div className="nav-bar-layout">
                    <div className="branding-area">Branding</div>
                    <div className="routes-area">
                        <NavBarRoutes></NavBarRoutes>
                    </div>
                    <div className="profile-area">Profile</div>
                </div>
            </div>
        </>
    );
}

export default NavBar;
