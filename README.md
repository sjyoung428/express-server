# API 스펙

## Auth

- login

  method

  - post

  endpoint

  - `/auth/login`

  parameter

  - email: string
  - password:string

    응답 예시

  ```json
  {
    "message": "로그인 성공",
    "token": "jwt-token"
  }
  ```

- signup

  method

  - post

  endpoint

  - `/auth/signup`

  parameter

  - email: string
  - password:string

    응답 예시

  ```json
  {
    "message": "회원가입 성공"
  }
  ```

## User

- getMe

  method

  - get

  endpoint

  - `/users/me`

  headers

  - Authorization: login token

  응답 예시

  ```json
  {
    "id": "96aa8621-726a-4407-b87e-6d5f0102ffb2",
    "email": "test@naver.com",
    "username": "test",
    "createdAt": "2023-05-16T16:54:30.568Z",
    "updatedAt": "2023-05-16T16:54:30.568Z"
  }
  ```

- updateMe

  method

  - patch

  endpoint

  - `/users/me`

  headers

  - Authorization: login token

  parameter

  - username: string

  응답 예시

  ```json
  {
    "message": "닉네임 변경 성공"
  }
  ```
