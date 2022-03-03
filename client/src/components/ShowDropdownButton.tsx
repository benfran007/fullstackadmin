import React from 'react';
import DownArrow from '../assets/down-arrow.png';
import { User } from '../models/User';

const styles: { [key: string]: React.CSSProperties } = {
    dropdownButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#C6C6C6',
        borderRadius: '5px',
        borderStyle: 'solid',
        borderWidth: '1px',
        paddingLeft: '10px',
        paddingRight: '10px',
        width: '450px',
        height: '60px',
    },
    rotate180: {
        transform: 'rotate(180deg)',
    },
};

type ShowDropdownButtonProps = {
    showDropdown: boolean;
    nextUser?: User;
    onClick: () => void;
};

const ShowDropdownButton = (props: ShowDropdownButtonProps) => {
    return (
        <div style={styles.dropdownButton} onClick={() => props.onClick()}>
            <div>
                {props.nextUser?.firstname} {props.nextUser?.lastname}
            </div>
            <img
                src={DownArrow}
                alt="DownArrow"
                width={18}
                height={18}
                style={props.showDropdown ? styles.rotate180 : {}}
            />
        </div>
    );
};

export default ShowDropdownButton;
