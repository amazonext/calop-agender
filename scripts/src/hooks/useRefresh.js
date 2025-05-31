import { useState } from 'react';

export function useRefresh(callback, delay = 2000) {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        Promise.resolve(callback())
            .finally(() => {
                setTimeout(() => {
                    setRefreshing(false);
                }, delay);
            });
    };

    return { refreshing, onRefresh };
}