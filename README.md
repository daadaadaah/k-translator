<h1 align="center">
  <br>
  🚀 K-Translator 🚀
  <br>
</h1>
<div align="center">
  <img width="125" alt="스크린샷 2023-07-30 오후 11 27 56" src="https://github.com/daadaadaah/k-translator/assets/60481383/03940b83-357b-4349-ab45-4b5a26e40a55">
  
</div>
  
<p align="center">
 🎈 This is a vscode extension which can help you write names for variables, function and classes.
</p>
  

## 🎯 Features
- 한글(영어)를 영어(한글)로 번역합니다.
  ![main](https://user-images.githubusercontent.com/60481383/101379329-7cfd8880-38f7-11eb-93e8-e1e6164f1833.gif)


## 🎯 사용법
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
- Window: `Ctrl + Shift + alt + t`


## 🎯 Tutorial
> [K-Translaotr Tutorial Notion](https://www.notion.so/k-translator-Tutorial-81edd91a164a4519a28dd568bd03c090)

<img width="500" alt="K-Translaotr Tutorial Notion" src="https://user-images.githubusercontent.com/60481383/101383601-aec51e00-38fc-11eb-8323-d7d005c2aed8.png">




## 🎯 Extension Settings
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


## 🎯 Release Notes
### 1.0.3
- Fix Bug ([#4](https://github.com/daadaadaah/k-translator/issues/4))

### 1.0.2
- Fix Bug ([#1](https://github.com/daadaadaah/k-translator/issues/1))
- Specify restrictions on the use of Google Translate

### 1.0.1
- Modify shortcuts for window version

### 1.0.0
- Initial release of Translator.
