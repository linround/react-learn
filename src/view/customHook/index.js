import { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {

        };
    });

    return isOnline;
}