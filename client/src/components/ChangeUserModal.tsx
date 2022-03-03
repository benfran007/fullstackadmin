import React, { useEffect, useState } from 'react';
import ChangeUserDropdown from './ChangeUserDropdown';
import ShowDropdownButton from './ShowDropdownButton';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/currentUser';
import { setChangeUserModal } from '../store/changeUserModalSlice';
import {
    selectSettingsMenu,
    setSettingsMenu,
} from '../store/settingsMenuSlice';
import { User } from '../models/User';
import {
    selectFetchUsersState,
    fetchUsers,
    selectUsers,
} from '../store/usersSlice';
import { setCurrentUser } from '../store/currentUser';
import { APIStatus } from '../models/APIStatus';

const styles: { [key: string]: React.CSSProperties } = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        left: '0',
        top: '0',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(8px)',
    },
    modal: {
        width: '500px',
        height: '300px',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        paddingLeft: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        color: '#414141',
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '450px',
        padding: '20px',
        fontWeight: 600,
    },
    cancelButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EDEDED',
        width: '140px',
        height: '50px',
        borderRadius: '5px',
        marginRight: '15px',
        cursor: 'default',
    },
    changeUserButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ABEFEB',
        width: '140px',
        height: '50px',
        borderRadius: '5px',
        cursor: 'default',
    },
};

const ChangeUserModal = () => {
    const dispatch = useDispatch();
    const [showDropdown, setShowDropdown] = useState(false);
    const showSettingsMenu = useSelector(selectSettingsMenu);
    const currentUser = useSelector(selectCurrentUser);
    const [nextUser, setNextUser] = useState<User>();
    const users = useSelector(selectUsers);
    const fetchUsersStatus = useSelector(selectFetchUsersState);

    useEffect(() => {
        if (fetchUsersStatus === APIStatus.idle) {
            dispatch(fetchUsers());
        }
    });

    if (fetchUsersStatus === APIStatus.loading) {
        return <p data-testid="loading">Loading...</p>;
    }

    return (
        <div style={styles.root} data-testid="change_user_modal">
            <div style={styles.modal}>
                <h1>
                    Logged in as {currentUser.firstname} {currentUser.lastname}
                </h1>
                <h4>Change User</h4>
                <ShowDropdownButton
                    showDropdown={showDropdown}
                    nextUser={nextUser}
                    onClick={() => {
                        setShowDropdown(!showDropdown);
                    }}
                />

                {showDropdown ? (
                    <ChangeUserDropdown
                        users={users ? users : []}
                        onSelect={(user) => {
                            setShowDropdown(!showDropdown);
                            setNextUser(user);
                        }}
                    />
                ) : null}

                <div style={styles.footer}>
                    <div
                        style={styles.cancelButton}
                        onClick={() => {
                            dispatch(setChangeUserModal(false));
                            dispatch(setSettingsMenu(!showSettingsMenu));
                        }}
                    >
                        Cancel
                    </div>
                    <div
                        style={styles.changeUserButton}
                        onClick={() => {
                            dispatch(setChangeUserModal(false));
                            dispatch(setCurrentUser(nextUser));
                            setNextUser({
                                _id: '',
                                firstname: '',
                                lastname: '',
                                email: '',
                            });
                            dispatch(setSettingsMenu(!showSettingsMenu));
                        }}
                    >
                        Change User
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangeUserModal;
