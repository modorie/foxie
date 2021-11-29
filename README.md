# Foxie

![](https://i.imgur.com/aKLmoLX.png)

<br/>

## Foxie 시작하기

```bash
# 더미데이터 세팅
$ python manage.py makemigrations
$ python manage.py migrate

# tmdb 기반 영화 데이터 추가 (오래걸림 주의)
$ python manage.py loaddata actors.json directors.json genres.json
$ python manage.py loaddata movies.json
$ python manage.py loaddata castings.json

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

## 팀원 정보 및 업무 분담 내역

![](https://i.imgur.com/VztpmKn.png)

<br/>

## 개발 일정

![](https://i.imgur.com/MmGbUIf.png)

<br/>

## 기술 스택

![](https://i.imgur.com/O6z6lEn.png)

<br/>

## 목표 서비스 구현 및 실제 구현 정도

### 메인 페이지

- [x] 영화 캐러셀 기능
- [x] 다크 모드
- [x] 헤더 검색창 영화 검색
- [x] 영화 추천 기능
- [x] 인기 리뷰, 게시글 조회
- [x] 로그인 및 회원가입
- [ ] SNS 로그인

### 영화 페이지

- [x] 카테고리별 영화 출력
- [ ] 모든 영화 무한 스크롤 조회
- [x] 드래그를 통한 영화 별점 입력
- [x] 영화 리뷰 및 좋아요 구현

### 리뷰 페이지

- [x] 인기, 실시간, 내 주변 리뷰 정렬
- [x] 리뷰에 댓글 및 좋아요 구현
- [ ] 리뷰 무한스크롤 조회

### 커뮤니티 페이지

- [x] 게시판 기능 구현
- [x] 게시판 페이지네이션 구현
- [ ] 게시판 검색 기능 구현
- [x] 글쓰기 에디터 도입

### 프로필 페이지

- [x] 내가 본 영화 모아보기
- [x] 내가 쓴 리뷰 모아보기
- [x] 대시보드 기능 구현 (임시 구현)
- [x] 프로필 설정 바꾸기

<br/>

## 데이터베이스 모델링 (ERD)

![](https://i.imgur.com/kIY1oEm.png)

<br/>

## 필수 기능에 대한 설명

### 메인 페이지

![](https://i.imgur.com/KP6ZDkU.jpg)

- 전체 컨텐츠 요약
- 영화 추천 : 사용자 활동 기반

<br/>

### 영화 메인 페이지

![](https://i.imgur.com/tVurtrN.jpg)

![](https://i.imgur.com/OKOenoi.png)

- 영화 정보 캐러셀 + 카드 형식으로 제공
- 클릭 시 상세 페이지로 이동

<br/>

### 영화 상세 페이지

![](https://i.imgur.com/AzOdpXz.png)

![](https://i.imgur.com/jwUWd0t.png)

- 영화 정보 및 줄거리, 유튜브 트레일러, 감독 및 배우진 정보 제공
- 하단에 해당 영화 리뷰 피드 제공

<br/>

### 리뷰 피드 페이지

![](https://i.imgur.com/Y35szsw.png)

![](https://i.imgur.com/xtlmBVG.png)

- SNS 형식 리뷰 페이지
- 인기 글, 최신 글, 팔로잉 중인 유저의 글 제공

<br/>

### 커뮤니티 페이지

![](https://i.imgur.com/vRMepX3.png)

![](https://i.imgur.com/uuo0A8o.png)

- 리뷰 외 자유로운 글을 작성할 수 있는 커뮤니티

<br/>

### 커뮤니티 상세 페이지

![](https://i.imgur.com/pU3KF0U.jpg)

![](https://i.imgur.com/tPzyMN3.png)

<br/>

### 커뮤니티 에디터

![](https://i.imgur.com/B3aCDc3.png)

![](https://i.imgur.com/1RR2MHB.png)

- 마크다운 및 이미지 지원

<br/>

### 프로필 페이지

![](https://i.imgur.com/pgjATOT.jpg)

![](https://i.imgur.com/dBWgVJM.png)

- 개인 활동 내역과 기타 정보 제공
