import { useState, useEffect } from 'react';

import { httpGetTypes } from './requests';

function useTypes() {
    const [types, setTypes] = useState([]);
    
    const getTypes = async () => {
        const fetchedTransactions = await httpGetTypes();
        setTypes(fetchedTransactions);
    };
    
    // Initial Loading
    useEffect(() => {
        getTypes()
    }, []);

    return types;
}

export default useTypes;
