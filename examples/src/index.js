import React from 'react';
import { render } from 'react-dom'
import NextSimpleWhiteGradientHeader from '../../src'

const App = () => <NextSimpleWhiteGradientHeader 
                    backgroundImagePath="https://picsum.photos/id/1015/1000/300"
                    gradientRotate="270deg"
                    gradientColor="#FFFFFF"
                    gradientStartOpacity="FF"
                    gradinetEndOpacity="00"
                >
                </NextSimpleWhiteGradientHeader>;
render(<App />, document.getElementById('root'));