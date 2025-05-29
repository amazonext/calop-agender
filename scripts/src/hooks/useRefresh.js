import { useState } from 'react';

export function useRefresh(delay = 2000) {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, delay);
    };

    return { refreshing, onRefresh };
}