import React from 'react';

const NextSimpleWhiteGradientHeader = (props) => {
    const defaultRotate = '90deg';
    const defaultGradientColor = '#FFFFFF';
    //タグ名を自由に指定できる。
    //とりあえず初期値はheader
    const TagName = props.as || 'header';

    const headerStyle = {
        backgroundImage: 'url('+props.backgroundImagePath+')',
        height: props.height ? props.height : 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    
    const wrapperStyle = {
        width: '100%',
        height: '100%',
        background: 'linear-gradient('
            + (props.gradientRotate ? props.gradientRotate : defaultRotate)
            +','
            + (props.gradientColor ? props.gradientColor : defaultGradientColor)
            + (props.gradientStartOpacity ? props.gradientStartOpacity : 'FF')+' 0%,'
            + (props.gradientColor ? props.gradientColor : defaultGradientColor)
            + (props.gradientEndOpacity? props.gradientEndOpacity : '00') +' 100%)'
    }
    return(
    <TagName style={Object.assign(headerStyle,props.style)} className="nextSimpleWhiteGradientHeader">
        <div style={wrapperStyle} className="nextSimpleWhiteGradientHeaderWraper">
            {props.children}
        </div>
    </TagName>
    )
};
export default NextSimpleWhiteGradientHeader;