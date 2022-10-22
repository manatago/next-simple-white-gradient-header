import React from 'react';
import './styles.css';
const NextSimpleWhiteGradientHeader = (props) => {
    const defaultRotate = '90deg';
    const defaultGradientColor = '#FFFFFF';
    const headerStyle = {
        backgroundImage: 'url('+props.backgroundImagePath+')'
    }
    const wrapperStyle = {
        background: 'linear-gradient('
            + (props.gradientRotate ? props.gradientRotate : defaultRotate)
            +','
            + (props.gradientColor ? props.gradientColor : defaultGradientColor)
            + (props.gradientStartOpacity ? props.gradientStartOpacity : 'FF')+' 0%,'
            + (props.gradientColor ? props.gradientColor : defaultGradientColor)
            + (props.gradientEndOpacity? props.gradientEndOpacity : '00') +' 100%)'
    }
    return(
    <header style={headerStyle} className="nextSimpleWhiteGradientHeader">
        <div style={wrapperStyle} className="nextSimpleWhiteGradientHeaderWraper">
            {props.children}
        </div>
    </header>
    )
};
export default NextSimpleWhiteGradientHeader;