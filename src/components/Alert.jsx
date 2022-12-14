import React, { useState, useEffect } from 'react';

const Alert = (props) => {

    const { mensaje, setMensaje } = props;
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(mensaje){
            setVisible(true)
        }
    },[mensaje])

    const ClickBoton = () => {
        setVisible(false)
        setMensaje()
    }

    return(

        visible &&

        <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong> {mensaje}</strong> 
            <button 
                type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                onClick={() => ClickBoton()}
            ></button>
        </div>
    
    )
}

export default Alert
