import React from 'react';

const Column = props => {
    return <div className={`${props.size} ${props.size === 'one' ? 'column' : 'columns'}`} style={{position: 'relative'}}>{props.children}</div>
}

export default Column;