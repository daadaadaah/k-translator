# K-Translator

This is a vscode extension which can help you write names for variables, function and classes.

## Features
- 한글(영어)를 영어(한글)로 번역합니다.
  ![main](https://user-images.githubusercontent.com/60481383/101379329-7cfd8880-38f7-11eb-93e8-e1e6164f1833.gif)


### [방법 1] 명령어로 이용하기
- MacOS: `Cmd + shift + p`
- Window: `Ctrl + shift + p`

<img width="500" alt="명령어로 이용하기" src="https://user-images.githubusercontent.com/60481383/101379660-dbc30200-38f7-11eb-80f9-0deaf5f2bbb9.png">




### [방법 2] 메뉴로 이용하기
<img width="500" alt="메뉴로 이용하기" src="https://user-images.githubusercontent.com/60481383/101380832-5c363280-38f9-11eb-96a0-2d6ff972e8b7.png">


### [방법 3] 단축키로 이용하기
#### (1) 기본 (단, 사용자 선호 번역 API 등록시 해당 API로 자동으로 번역)
- MacOS: `Cmd + Shift + t`
- Window: `Ctrl + Shift + t`


#### (2) Naver Papago 로 번역하기
- MacOS: `Cmd + Ctrl +t`
- Window: `Ctrl + Window + t`



#### (3) Google 로 번역하기
- MacOS: `cmd + Shift + Ctrl + t`
- Window: `Ctrl + Shift + Window + t`


## Tutorial
> [K-Translaotr Tutorial Notion](https://www.notion.so/k-translator-Tutorial-81edd91a164a4519a28dd568bd03c090)

<img width="500" alt="K-Translaotr Tutorial Notion" src="https://user-images.githubusercontent.com/60481383/101383601-aec51e00-38fc-11eb-8323-d7d005c2aed8.png">




## Extension Settings
* `k-translator.preferenceType`: 선호하는 번역 API (google|naver)
* `k-translator.naver.clientId`: Naver API ClientID
* `k-translator.naver.clientSecret`: Naver API clientSecret

```js
{
  // ...
	"k-translator.preferenceType": "선호하는 번역 API",
	"k-translator.naver": {
		"clientId": "Naver API ClientID 값",
		"clientSecret": "Naver API clientSecret 값"
	},
}
```


## Release Notes

### 1.0.0
- Initial release of Translator.
