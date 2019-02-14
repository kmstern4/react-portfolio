import React from 'react';

const Column = props => {
    return <div className={`${props.size} ${props.size === 'one' ? 'column' : 'columns'}`}>{props.children}</div>
}

export default Column;