import React from 'react';
import Logo from '../assets/logo.png';
import HamburgerMenu from '../assets/hamburger-menu.png';
import SettingsMenu from './SettingsMenu';
import {
    selectSettingsMenu,
    setSettingsMenu,
} from '../store/settingsMenuSlice';
import { useSelector, useDispatch } from 'react-redux';

const styles: { [key: string]: React.CSSProperties } = {
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px',
        backgroundColor: '#414141',
        paddingLeft: '100px',
        paddingRight: '20px',
    },
};

const GlobalHeader = () => {
    const showSettingsMenu = useSelector(selectSettingsMenu);
    const dispatch = useDispatch();
    return (
        <div style={styles.root}>
            <img src={Logo} alt="Logo" width={106} height={20} />
            <img
                src={HamburgerMenu}
                alt="HamburgerMenu"
                width={30}
                height={20}
                onClick={() => {
                    dispatch(setSettingsMenu(!showSettingsMenu));
                }}
            />
            {showSettingsMenu ? <SettingsMenu /> : null}
        </div>
    );
};

export default GlobalHeader;
