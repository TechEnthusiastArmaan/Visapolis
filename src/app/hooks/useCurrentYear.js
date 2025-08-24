import { useState, useEffect } from 'react';

export function useCurrentYear() {
    const [currentYear, setCurrentYear] = useState('');

    useEffect(() => {
        setCurrentYear(new Date().getFullYear().toString());
    }, []);

    return currentYear;
}
