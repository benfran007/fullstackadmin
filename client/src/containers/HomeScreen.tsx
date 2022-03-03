import React, { useEffect } from 'react';
import GlobalHeader from '../components/GlobalHeader';
import LeftNav from '../components/LeftNav';
import ScreenContent from '../components/ScreenContent';
import { selectFetchCurrentUserState, fetchUser } from '../store/currentUser';
import { useSelector, useDispatch } from 'react-redux';
import { APIStatus } from '../models/APIStatus';

const styles: { [key: string]: React.CSSProperties } = {
    leftNavAndScreenContent: {
        display: 'flex',
        flexDirection: 'row',
        height: 'calc(100vh - 80px)',
    },
};

const HomeScreen = () => {
    const fetchUserStatus = useSelector(selectFetchCurrentUserState);
    const dispatch = useDispatch();
    useEffect(() => {
        if (fetchUserStatus === APIStatus.idle) {
            dispatch(fetchUser());
        }
    });

    if (fetchUserStatus === APIStatus.loading) {
        return <p>Loading...</p>;
    } else {
        return (
            <div>
                <GlobalHeader />
                <div style={styles.leftNavAndScreenContent}>
                    <LeftNav />
                    <ScreenContent />
                </div>
            </div>
        );
    }
};

export default HomeScreen;
