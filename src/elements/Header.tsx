import { faSnowflake } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header: React.FC = () => {

    const styles = (x: number) => (
        { animationDelay: `${x * 130}ms`, 
            left: `${Math.random() * 95 + 2.5}%`,
            "--rotation-speed": `${(Math.random() + 1) * 3}s`,
            "--falling-speed": `${(Math.random() + 1) * 15}s`,
            "--sway": `${(Math.random() * 300) - 150}px` 
        } as React.CSSProperties
    );
    
    const [snowFlakes, setSnowFlakes] = useState(true);

    return (
        <>
            <div className={`canvas ${snowFlakes ? "show" : ""}`}>
                {Array.from(Array(200).keys()).map(x => <FontAwesomeIcon key={x} icon={faSnowflake} className="snowflake" style={styles(x)} />)}
            </div>
            <div className="header">
                <p className="site-name">Jela iz Snova</p>
                <NavLink to={"/home"} className={({ isActive }) => `hyperlink ${isActive ? "current" : ""}`}>Home</NavLink>
                <NavLink to={"/supe"} className={({ isActive }) => `hyperlink ${isActive ? "current" : ""}`}> Supe</NavLink>
                <NavLink to={"/salate"} className={({ isActive }) => `hyperlink ${isActive ? "current" : ""}`}>Salate</NavLink>
                <NavLink to={"/glavna-jela"} className={({ isActive }) => `hyperlink ${isActive ? "current" : ""}`}>Glavna Jela</NavLink>
                <div className="hyperlink" style={{position: "relative"}} onClick={e => setSnowFlakes(x => !x)} >
                    <FontAwesomeIcon icon={faSnowflake} />
                    <FontAwesomeIcon icon={faXmark} className={`snowflake-cross ${snowFlakes ? "" : "show"}`} />
                </div>
            </div>
            <Outlet />
        </>
    );
};

export { Header };