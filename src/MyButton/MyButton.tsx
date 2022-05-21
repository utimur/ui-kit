import React, { FC } from 'react';
import './MyButton.css'

export interface MyButtonProps {
    color: string;
    big?: boolean;
}

const MyButton: FC<MyButtonProps> = ({
                                         children,
                                         color,
                                         big,
                                         ...props
                                     }) => {

    const rootClasses = ['my-button']
    if (big) {
        rootClasses.push('big-btn')
    }

    return (
        <button {...props} className={rootClasses.join(' ')} style={{color}}>
            {children}
        </button>
    );
};

export default MyButton;
