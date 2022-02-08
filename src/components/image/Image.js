import React, { useState } from 'react';
import vahak from '../../assets/images/images.png'; 

/**
 * Image component
 * @param {string} id - id of image container
 * @param {string} src - src of image container
 * @param {string} className - class to override default styles
 * @param {string} alt - 
 * @param {function} onClick - onclick callback function
 * @returns
 */
const Image = ({
    id,
    src,
    className,
    alt,
    shape,
    onClick,
}) => {

    const [error, setError] = useState(false);

    const classes = [
        className,
    ].join(' ').trim();

    const onImageError = () => {
        setError(true);
    }

    return (
        <picture>
            <img id={id} className={classes} src={vahak} alt={error} onClick={onClick} onError={onImageError} />
        </picture>
    )
}

export default Image;