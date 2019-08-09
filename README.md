
# pubg-replay
이 레포지토리는 사용자가 입력한 데이터가 올바른 포맷인지 확인하고, 올바른 포맷인 경우 하단에 설명할 [`pubg-minimap-replay`](https://github.com/Web-Engine/pubg-minimap-replay)를 활용하여 사용자에게 리플레이를 보여주는 서버입니다.
또한, 배틀그라운드의 리플레이 데이터를 `포맷된 데이터`로 변경해주는 기능 또한 포함되어 있습니다.

## dotenv
서버를 구동하기에 앞서 dotenv 설정이 필요합니다.
working directory 안에 .env 파일을 다음과 같이 작성해 주셔야 합니다.
(아래에서 설명하는대로는 working directory가 backend이므로 backend/.env로 만들어주시면 됩니다.)

```
API_KEY={PUBG_API_KEY}
SERVER_PORT=3000
```
위 PUBG_API_KEY는 [https://developer.pubg.com](https://developer.pubg.com/)에서 발급 받을 수 있습니다.

## 구동
아래와 같이 backend 폴더로 이동하여 npm package들을 설치하시고, npm start를 통해 서버를 구동할 수 있습니다.
```
$ cd backend
$ npm install
$ npm start
```

## 리플레이 웹
서버를 구동하면 dotenv의 SERVER_PORT 설정에 따라 3000 포트에 서버가 구동됩니다.
`http://localhost:3000`에 접속해 replay를 재생 할 수 있는 웹 사이트를 확인 할 수 있습니다.

### 리플레이 파일 로드
웹 왼쪽 상단의 Select replay file 옆의 파일 선택 상자를 통해 포맷 된 리플레이 파일을 선택하면 해당 리플레이를 재생 할 수 있습니다.
리플레이 파일을 불러오면 멈춰있는 상태로 불러오므로 Play 버튼을 눌러 재생할 수 있습니다.

### 재생 시간 변경
상단의 긴 막대를 움직여 재생 시점을 옮길 수 있습니다.

### 재생 속도 변경
우측 상단의 짧은 막대를 움직여 1배속부터 30배속까지 재생 속도를 조절할 수 있습니다.

### 카메라 확대/축소 (`pubg-minimap-replay` 기능)
마우스 휠을 통해 미니맵을 확대/축소 할 수 있습니다.

### 카메라 이동 (`pubg-minimap-replay` 기능)
확대 한 상태에서 마우스 드래그를 통해 미니맵이 보여지는 위치를 옮길 수 있습니다.

##  APIs

### 데이터 유효성 검사: `POST` /check
Request body에 JSON 형태의 포맷된 데이터를 보내면 해당 데이터가 올바른 데이터인지 아닌지 검사합니다.
올바르지 않은 데이터의 경우 올바르지 않은 부분을 찾아서 알려줍니다.

#### Request Header
```
Content-Type: application/json;
```

#### Request Body
```
{
    Formatted Data
}
```

#### Success Response: 200
```
{
    "isValid": true
}
```

#### Failed Response: 200
```
{
    "isValid": false,
    "message": "some error message"
}
```

### 배틀 그라운드 데이터: `GET`/pubg/matches/:platform/:match_id
배틀그라운드의 platform과 match id를 통해 포맷된 배틀그라운드 데이터를 가져올 수 있습니다.
이 데이터는 바로 replay 웹 사이트에서 실행할 수 있습니다.

## Data format
pubg-minimap-replay 레포지토리의 문서를 참조 부탁드립니다.
