<div align="center">
    <img src="https://github.com/modorie/foxie/blob/dev/src/assets/Foxie1.png?raw=true"  width="100px"/>
    <h1>Foxie</h1>
    <a href="https://github.com/modorie"><img src="https://img.shields.io/badge/MADE%20BY%20Modorie-f67878.svg?style=for-the-badge&labelColor=000"></a> <img alt="" src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=3f3f46&color=ffcc99">
</div>

<br/>

## Contents

1. [Description](#Description)
2. [Get Started](#Get-Started)
3. [Overview](#Overview)
4. [Development](#Development)
    - [Schedule](#Schedule)
    - [Languages and Tools](#Languages-and-Tools)
    - [ERD](#ERD)
    - [Members](#Members)
5. [Retrospective](#Retrospective) 

<br/>

<!-- ![](https://i.imgur.com/aKLmoLX.png) -->

## Description

![](https://raw.githubusercontent.com/modorie/foxie/313db7241cfb8879609e40013d8af8a8a8932102/src/assets/prince-and-fox1.svg)

### 당신만을 위한 영화 커뮤니티, Foxie
- 유저 참여형 추천 시스템
- SNS 형식의 영화 커뮤니티
- UI/UX 중점

<br/>

## Get Started

### client
```bash
$ git clone https://github.com/modorie/foxie.git
$ cd foxie
$ yarn install
$ yarn serve
```

### server
```bash
$ git clone https://github.com/modorie/foxie-api.git
$ cd foxie-api
$ python -m venv venv
$ source venv/Scripts/activate
$ pip install -r requirements.txt

$ python manage.py makemigrations
$ python manage.py 

# tmdb 기반 영화 데이터 추가
$ python manage.py loaddata actors.json directors.json genres.json
$ python manage.py loaddata movies.json
$ python manage.py loaddata castings.json

# 서버 실행
$ python manage.py runserver
```

<br/>

Foxie의 유저 기반 추천 서비스를 사용해보고 싶다면 다음 코드를 실행해주세요.
```bash
# 가상 유저 700명 생성
$ python manage.py seed_users --number=700

# 영화 리뷰 데이터 추가 (kaggle)
$ python manage.py get_reviews

# 리뷰에 댓글 및 좋아요 추가
$ python manage.py seed_reviews --number=700

# 커뮤니티에 게시글, 댓글, 좋아요 추가
$ python manage.py seed_community --number=100
```

<br/>

## Overview

### 영화 추천 서비스
| ![](https://i.imgur.com/xNGQGAK.png) | ![](https://i.imgur.com/wXXMIAE.png) |
| --- | --- |


- Foxie는 **당신의 활동**을 기반으로 영화를 추천해드립니다.
- 영화 리뷰 작성, 유저 팔로잉 등의 활동을 많이 할수록 더 많은 영화 정보가 제공됩니다. 🤗



<br/>

### 메인 페이지
| ![](https://i.imgur.com/KP6ZDkU.jpg) | ![](https://i.imgur.com/OKOenoi.png) |
| --- | --- |




- 인기 영화, 리뷰, 게시글 모아보기
- 사이드바에 영화 추천 서비스 제공
- Global Style을 활용한 다크모드 구현

<br/>

### 영화 검색

| ![](https://i.imgur.com/6B8AOJp.png) | ![](https://i.imgur.com/x2UTCG7.png) |
| --- | --- |

- TMDB API를 활용한 실시간 영화 검색
- 글래스모피즘 레이아웃 및 UX 라이팅

<br/>

### 영화 페이지

| ![](https://i.imgur.com/tVurtrN.jpg) | ![](https://i.imgur.com/rcmmfBM.jpg) |
| --- | --- |
- 주제별 영화 리스트를 캐러셀을 통해 제공
- 영화 카드 클릭시 상세 페이지 이동

<br/>

### 영화 상세 페이지

| ![](https://i.imgur.com/AzOdpXz.png) | ![](https://i.imgur.com/jwUWd0t.png) |
| --- | --- |

- 줄거리, 출연배우, 감독, 예고편 정보 제공
- 영화별 리뷰 등록
- 리뷰에 좋아요 및 댓글 기능

<br/>

### 리뷰 피드 페이지

| ![](https://i.imgur.com/Y35szsw.png) | ![](https://i.imgur.com/xtlmBVG.png) |
| --- | --- |
- 모든 영화 리뷰 모아보기
- 리뷰 내 영화 카드를 통해 영화 상세 페이지 이동
- 인기 리뷰, 내 팔로워의 리뷰 모아보기

<br/>

### 커뮤니티 페이지

| ![](https://i.imgur.com/vRMepX3.png) | ![](https://i.imgur.com/uuo0A8o.png) |
| --- | --- |
- 게시판 형식의 커뮤니티 페이지
- 페이지네이션 구현
- 글 쓰기 기능

<br/>

### 커뮤니티 게시글 조회

| ![](https://i.imgur.com/pU3KF0U.jpg) | ![](https://i.imgur.com/tPzyMN3.png) |
| --- | --- |
- 작성자 클릭시 유저 프로필 이동
- 좋아요 및 댓글 기능

<br/>

### 커뮤니티 글쓰기

| ![](https://i.imgur.com/B3aCDc3.png) | ![](https://i.imgur.com/1RR2MHB.png) |
| --- | --- |
- TOAST UI Editor
- 에디터 디자인 커스터마이징
- base64 형식을 통해 사진, GIF 저장 및 조회 가능

<br/>

### 프로필 페이지

| ![](https://i.imgur.com/pgjATOT.jpg) | ![](https://i.imgur.com/dBWgVJM.png) |
| --- | --- |

- 나의 선호 영화 및 작성 리뷰 모아보기
- 대시보드를 통한 간단한 맞춤형 통계
- 닉네임, 프로필사진, 소개글 변경 기능

<br/>

### 메인 페이지 (비로그인)
| ![](https://i.imgur.com/MA9BvOk.png) | ![](https://i.imgur.com/tdoCU8I.png) |
| --- | --- |
- 블러 처리를 활용한 영화추천 시스템 미리보기
- UX 라이팅을 활용한 회원가입 안내

<br/>

### 로그인 페이지
| ![](https://i.imgur.com/nMeBK6v.png) | ![](https://i.imgur.com/oArXeax.png) |
| --- | --- |

<br/>

### 회원가입 페이지
| ![](https://i.imgur.com/KHp9sIv.png) | ![](https://i.imgur.com/Lw68cFn.png) |
| --- | --- |

<br/>

## Development

### Schedule

- **기간** : 2021.11.17 ~ 2021.11.25

![](https://i.imgur.com/MmGbUIf.png)

<br/>

### Languages and Tools

![](https://i.imgur.com/O6z6lEn.png)

<br/>

### ERD

![](https://i.imgur.com/EyqlakY.png)

<br/>

### Members

<!-- ![](https://i.imgur.com/VztpmKn.png) -->

<div align="center">
<table width="100%">
  <thead>
    <tr>
      <td align="center">
        <br />
        <a href="https://github.com/devpla"
          ><img
            src="https://avatars.githubusercontent.com/u/87457066?v=4"
            width="300px"
        /></a>
          <p>
            <br />
            <b>채연희</b>
          </p>
      </td>
      <td align="center">
        <br />
        <a href="https://github.com/seokzin">
          <img
            src="https://avatars.githubusercontent.com/u/43740455?v=4"
            width="300px"
        />
        </a>
        <p>
          <br />
          <b>소석진</b>
        </p>
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <b>백엔드</b>
        <ul>
          <li>Database 설계 및 데이터 소스 구축</li>
          <li>추천시스템 구현</li>
          <li>API 설계</li>
        </ul>
      </td>
      <td>
        <b>프로젝트 매니징</b>
        <ul>
          <li>협업 도구 및 컨벤션 관리</li>
          <li>Git 전략 수립</li>
          <li>일정 관리</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>프론트엔드</b>
        <ul>
          <li>Server - Client 연동</li>
          <li>서비스 기능 구현</li>
          <li>세부 컴포넌트</li>
        </ul>
      </td>
      <td>
        <b>프론트엔드</b>
        <ul>
          <li>프로젝트 초기 세팅</li>
          <li>페이지 레이아웃 설계</li>
          <li>기능 구현 (외부 라이브러리 지양)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>기획 및 디자인</b>
        <ul>
          <li>컨셉 디자인</li>
          <li>레퍼런스 수집</li>
          <li>Figma를 이용한 기본 UI 설계</li>
        </ul>
      </td>
      <td>
        <b>기획 및 디자인</b>
        <ul>
          <li>컨셉 디자인</li>
          <li>기술스택 조사</li>
          <li>디자인 시스템 CSS 정의</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
</div>
    
<br/>

## Retrospective

- [채연희](https://hing9u.tistory.com/89)
- [소석진](https://seokzin.tistory.com/entry/%ED%9A%8C%EA%B3%A011%EC%9B%94-%EB%81%9D%EC%9D%B4%EC%9E%90-%EC%8B%9C%EC%9E%91?category=695595)

<br/>
