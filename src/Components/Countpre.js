import { db } from './Headcount';
import { ref, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import Style from './Count.module.css'
import Liveicon from "../Assets/Red_circle.gif";

const OnlineUserCount = () => {
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        const usersRef = ref(db, 'onlineUsers');

        onValue(usersRef, (snapshot) => {
            const users = snapshot.val();
            const count = users ? Object.keys(users).length : 0;
            setUserCount(count);
        });

    }, []);

    return (
        <div className={Style.ribbon}>
            <h3> 
                <img src={Liveicon} alt="Live Icon" className={Style.icon} />
                {userCount+22} people watching </h3>
        </div>

    );
};


export default OnlineUserCount;
