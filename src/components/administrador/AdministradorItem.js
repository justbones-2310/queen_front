import React from 'react';

const AdministradorItem = (props) => {

    const { title, subtitle, imagen, body } = props;

    return (
        <div className='administrador'>
            <h1> {title} </h1>
            <h2> {subtitle} </h2>
            <img src={imagen} alt={title}></img>
            <div dangerouslySetInnerHTML={{ __html: body }}></div>
            <hr />
        </div>
    );
}

export default AdministradorItem;