import React from "react";
import { Button as BaseButton} from "antd";
import PropType from 'prop-types'
import './button.scss'
import classNames from 'classnames'

const button = (props) => {
    return (
        <>
        <BaseButton {...props} 
        className={classNames('button', props.className, {'button--large': props.size === 'large'})}/>
        </>
    )
};



button.propType = {
    className: PropType.string
}


export default button;