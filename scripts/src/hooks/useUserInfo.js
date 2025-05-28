import { useEffect, useState } from 'react';
import { getUserInfos } from '../utils/user_db';

export default function useUserInfo() {
    const [userInfos, setUserInfos] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const infos = await getUserInfos();
            setUserInfos(infos);
        }

        fetchData();
    }, []);

    return userInfos;
}