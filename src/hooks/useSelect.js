import React, {useState} from 'react';

const useSelect = (stateinicial, opciones) => {

    const [state, actualizaState] = useState(stateinicial);

    const SelectNoticia = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => actualizaState(e.target.value)}
        >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    );

    return [state, SelectNoticia];
    
};
 
export default useSelect;