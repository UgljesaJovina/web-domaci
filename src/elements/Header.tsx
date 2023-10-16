import { NavLink, Outlet } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <>
            <div className="header">
                <p className="site-name">Jela iz Snova</p>
                <NavLink to={"/home"} className={({ isActive }) => `hyperlink ${isActive ? "current" : ""}`}>Home</NavLink>
                <NavLink to={"/supe"} className={({ isActive }) => `hyperlink ${isActive ? "current" : ""}`}> Supe</NavLink>
                <NavLink to={"/salate"} className={({ isActive }) => `hyperlink ${isActive ? "current" : ""}`}>Salate</NavLink>
                <NavLink to={"/glavna-jela"} className={({ isActive }) => `hyperlink ${isActive ? "current" : ""}`}>Glavna Jela</NavLink>
            </div>
            <Outlet />
        </>
    );
};

export { Header };