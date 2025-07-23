import { useState } from 'react';
import '../styles/Menu.css';

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { icon: 'ICON - Search.png', label: 'Search' },
        { icon: 'Group 46.png', label: 'Home' },
        { icon: 'Group 47.png', label: 'TV Shows' },
        { icon: 'Group 53.png', label: 'Movies' },
        { icon: 'Group 54.png', label: 'Genres' },
        { icon: 'Group 56.png', label: 'Watch Later' }
    ];

    return (
        <div
            className={`menu ${menuOpen ? 'open' : ''}`}
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
        >
            <div className="profile">
                <div className="profile-icon">D</div>
                <span>Daniel</span>
            </div>

            <div className="menu-items">
                {menuItems.map((item, index) => (
                    <div key={index} className="menu-item">
                        <img
                            src={`/assets/icons/${item.icon}`}
                            alt={item.label}
                        />
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>

            <div className="menu-footer">
                <button>LANGUAGE</button>
                <button>GET HELP</button>
                <button>EXIT</button>
            </div>
        </div>
    );
};

export default Menu;
