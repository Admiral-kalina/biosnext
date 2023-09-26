import {useEffect, useState} from 'react';

export const usePreviousRoute = () => {
    const [currentPath, setCurrentPath] = useState(null);
    const [previousSearch, setPreviousSearch] = useState(null)
    const [previousPath, setPreviousPath] = useState(null);

    useEffect(() => {
        if (location.pathname !== currentPath) {
            setPreviousSearch(location.search)
            setPreviousPath(currentPath);
            setCurrentPath({pathname:location.pathname , search:location.search});
        }
    }, [location.pathname]);



    return  previousPath
};