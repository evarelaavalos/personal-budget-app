import { useState } from 'react';

function useTransactionState() {
    const [transactionState, setTransactionState] = useState('');

    const RESET_TIME_AFTER_MILLISECONDS = 1000;

    const resetState = () => {
      setTimeout(() => {
        setTransactionState('')
      }, RESET_TIME_AFTER_MILLISECONDS);
    }
  
    const resolveTransaction = () => {
      setTransactionState('fulfilled');
      resetState();
    }
  
    const rejectTransaction = () => {
      setTransactionState('rejected');
      resetState();
    }

    return {
        transactionState,
        resolveTransaction,
        rejectTransaction,
    };
}

export default useTransactionState;