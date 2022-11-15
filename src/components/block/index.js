import React from "react";
import './block.scss'
import classNames from 'classnames'



const block = ({children, className}) => {
    return (
        <>
        <div className={classNames('block', className)}>{children}</div>
        </>
    )
};

export default block;