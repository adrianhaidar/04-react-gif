
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    // Si se deja el useState vacío este sería undefined, por ello, se deja un string vacío
    const [inputValue, setinputValue] = useState(''); //useState('') es lo que va en el buscador

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        // Debido a que ya no es muy usado la parte del refresh completo del navegador, que es un comportamiento por default de los formularios se utiliza la siguiente linea de código
        e.preventDefault();
        console.log('handleSubmit llamado');

        if (inputValue.trim().length > 1) {
            // Como no se tiene acceso a las categorias del componente padre hace uso un callback como se muestra, el inputValue seria el nuevo valor.
            setCategories((cats) => [inputValue, ...cats]);
            setinputValue('');
            //esto para que quede vacio el coso
        }
    };

    return (
        // Cuando se retorna na unica etiqueta agrupadora como es en este caso el form no es necesario agruparla dentro de un Fragment
        <form onSubmit={handleSubmit}>    
            <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};
//el onSubmit es para que no haga refresh osea el handlesubmit con preventdefault
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

export default AddCategory;