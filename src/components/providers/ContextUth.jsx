/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';

export  const  ContextPrime = createContext(null);

const ContextUth = ({children}) => {
    const user = { displyNme: "somiy"}
    return (
       <ContextUth.provider value = {user}>
            {children}
       </ContextUth.provider>
    );
};

export default ContextUth;