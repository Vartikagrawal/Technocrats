import { db } from './Headcount';
import { ref, onDisconnect, set } from 'firebase/database';
import { useEffect } from 'react';

const PresenceTracker = () => {
  useEffect(() => {
    const userId = Math.random().toString(36).substring(2); // Generate a unique ID for each user
    const userRef = ref(db, `onlineUsers/${userId}`);

    set(userRef, true);

    onDisconnect(userRef).remove();

    return () => {
      set(userRef, null);
    };
  }, []);

  return null;
};

export default PresenceTracker;
