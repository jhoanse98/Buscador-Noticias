import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({actualizarcategoria}) => {

    const Opciones = [
        {value: 'general', label: 'General'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'}
    ]

    const [categoria, SelectNoticia]= useSelect('general', Opciones);
    //34c367febf8e497e8af89b5e7b950452

    //cuando se haga submit

    const consultar = e =>{
        e.preventDefault()
        actualizarcategoria(categoria)
    }
    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={consultar}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por categoria</h2>
                    <SelectNoticia />
                    <div className= "input-field col s12">
                        <input 
                            type="submit"
                            value="Buscar"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                        />
                    </div>
                </form>
            </div>
        </div>
      );
}
 
export default Formulario;