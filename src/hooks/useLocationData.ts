import { useLocation } from 'react-router-dom';

interface returnedPropsTypes {
    hash: string
    key: string,
    pathname: string,
    search: string,
    state: string,
}

export function useLocationData(): returnedPropsTypes {
    const location = useLocation();

    return location;
};