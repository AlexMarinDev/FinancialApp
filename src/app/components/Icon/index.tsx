import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

type TIconProps = {
    icon: IconDefinition;
    size: SizeProp;
    label: string;
    description: string;
    onClickHandler?: Function;
}

const Icon = ({ icon, size, label, description, onClickHandler }: TIconProps) => (<div className='invoice-button-icon' onClick={() => onClickHandler && onClickHandler()}>
    <div className={`invoice-icon-wrapper ${description.toLocaleLowerCase().replace(' ', '-')}`}>
        <FontAwesomeIcon icon={icon} size={size} />
    </div>
    <div className="invoice-button-label">{label}</div>
</div>)

export default Icon;