# node
16.14.0

## stepの切り替え
### デフォルト設定
```
$ yarn default {stepID}
```
### src → step
```
$ yarn up {stepID}
```
### step → src
```
$ yarn down {stepID}
```

## dev
```
$ yarn dev
```

## build
下記のビルドコマンドで`./docs/`内にビルド。  
`yarn up {stepID}`もしくは`yarn down {stepID}`で切り替えたIDのディレクトリにビルドされるので注意。
```
$ yarn build
```