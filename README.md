# このコンポーネントの使い方

## インストール方法
```
npm install @tagosan/next-simple-white-gradient-header
```
で読み込みます。

## 使い方
```
import NextSimpleWhiteGradientHeader from '@tagosan/next-simple-white-gradient-header'
```
こんな感じでコンポーネントを読み込みます。

## パラメーター
### backgroundImagePath
背景画像のパスです。これだけは必須です。

### gradientRotate
回転角度をdegで指定します。
gradientRotate='90deg'のように指定します。

### gradientColor
背景の色を指定します。
gradientColor='#FFFFFF'のような感じです。
rgb(255,255,255)
white
#FFF
のようなスタイルではダメです。

### gradientStartOpacity
開始地点の背景の透明度を２桁の16進数で指定します。
gradientStartOpacity='FF'
のような感じです。

### gradientEndOpacity
終了地点の背景の透明度を２桁の16進数で指定します。
gradientEndOpacity='00'
のような感じです。

### height
高さを指定します。
初期値は400pxが入ります。
height='300px'
のように指定してください。

### as
一番外側のタグ名を指定できる。
考えたらheader以外でもこれ使えるな、という話になったので追加した。
が、もう名前を決めて公開してしまったので、とりあえずは初期値はheaderにしてある

### style
オブジェクト形式で適用すれば、一番外側の要素のスタイルを上書きできる。
