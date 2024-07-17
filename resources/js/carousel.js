document.addEventListener("DOMContentLoaded", function () {
  // 로딩 시 리스트 데이터 받기
  /*let docs = await getDocs(collection(db, doc));
  docs.forEach((doc) => {
    let row = doc.data();
    console.log(row); // 데이터 확인

    let carouselImg = row["image"];
    const carouselItemHtml = `
      <div class="carousel-slide-item">
          <img src="${carouselImg}" alt="">
        </div>
    `;
    const carouselThumbHtml = `
      <div class="carousel-thumb-item">
        <img src="${carouselImg}" alt="">
      </div>
    `;

    carouselSlide.innerHTML += carouselItemHtml;
  });
  */

  const carouselWrap = document.getElementById("carousel-wrap"); // 전체 감싸고있는 슬라이드 영역
  const carouselSlide = document.getElementById("carousel-slide"); // 큰 이미지 슬라이드 (자동)
  const carouselSlideItems = document.querySelectorAll(".carousel-slide-item"); // 큰 이미지 슬라이드 아이템
  const carouselSlideLength = carouselSlideItems.length;
  const carouselThumb = document.getElementById("carousel-thumb");
  const carouselThumbItems = document.querySelectorAll(".carousel-thumb-item");
  const carouselBtnArea = document.getElementById("carousel-btn-area");
  const carouselBtnPrev = document.getElementById("btn-prev");
  const carouselBtnNext = document.getElementById("btn-next");

  let slideWid; // 슬라이드 넓이 값
  let slideAllWid; // 슬라이드 요소 전체 넓이 값
  let slideCurrentIdx = 0; // 슬라이드 현재 인덱스 값
  let slideMoveDelay = 0; // 슬라이드 돌아가는 속도
  let slideMoveTimer; // interval 초기화

  // 슬라이드 리스트 초기 넓이 세팅
  slideWid = carouselSlide.offsetWidth;
  carouselSlideItems.forEach((item, idx) => {
      // console.log(item);
      item.style.width = slideWid + "px";
  });

  // 슬라이드 자동 롤링
  const carouselSlideMove = () => {
      // console.log(slideMoveDelay);
      slideMoveDelay = 3000;
      slideMoveTimer = setInterval(() => {
          slideCurrentIdx = (slideCurrentIdx + 1) % carouselSlideItems.length; // 현재 인덱스값 구하기
          carouselSlide.style.transform = `translate3d(-${slideCurrentIdx * slideWid}px, 0px, 0px)`;
          // 활성화된 썸네일 업데이트
          carouselThumbItems.forEach((thumb, idx) => {
              thumb.classList.toggle("curr", idx === slideCurrentIdx);
          });
      }, slideMoveDelay);
  };
  carouselSlideMove();

  // 슬라이드 썸네일 클릭 기능
  carouselThumbItems.forEach((item, idx) => {
      // 썸네일 클릭 이벤트
      item.addEventListener("click", () => {
          clearInterval(slideMoveTimer); // 롤링 초기화
          slideCurrentIdx = idx; // 인덱스값을 클릭한 인덱스 값과 동일하게 변경해줌

          //클릭한 요소에 맞춰 슬라이드 이동 : carouselSlide의 transform3d의 값을 클릭한 요소의 -(인덱스*슬라이드) 넓이로 적용
          carouselSlide.style.transform = `translate3d(-${slideCurrentIdx * slideWid}px, 0px, 0px)`;

          carouselThumbSet(); // 현재 인덱스 값에 맞춰 썸네일 엑티브
          carouselSlideMove(); // 다시 롤링 시작
      });
  });

  // 현재 인덱스 값에 맞춰 썸네일 엑티브
  const carouselThumbSet = () => {
      carouselThumbItems.forEach((thumb) => thumb.classList.remove("curr"));
      carouselThumbItems[slideCurrentIdx].classList.add("curr");
  };

  // 슬라이드 뒤로가기
  const carouselPrevMove = () => {
      clearInterval(slideMoveTimer); // 롤링 초기화
      slideCurrentIdx == 0 ? (slideCurrentIdx = 4) : slideCurrentIdx--; // 슬라이드 맨 앞이면 마지막으로 이동
      carouselSlide.style.transform = `translate3d(-${slideCurrentIdx * slideWid}px, 0px, 0px)`;

      carouselThumbSet(); // 현재 인덱스 값에 맞춰 썸네일 엑티브
      carouselSlideMove(); // 다시 롤링 시작
  };

  // 슬라이드 앞으로가기
  const carouselNextMove = () => {
      clearInterval(slideMoveTimer); // 롤링 초기화
      slideCurrentIdx == 4 ? (slideCurrentIdx = 0) : slideCurrentIdx++; // 슬라이드 마지막이면 맨 앞으로 이동
      carouselSlide.style.transform = `translate3d(-${slideCurrentIdx * slideWid}px, 0px, 0px)`;

      carouselThumbSet(); // 현재 인덱스 값에 맞춰 썸네일 엑티브
      carouselSlideMove(); // 다시 롤링 시작
  };

  carouselBtnPrev.addEventListener("click", carouselPrevMove); // 이전 버튼 클릭
  carouselBtnNext.addEventListener("click", carouselNextMove); // 다음 버튼 클릭

  /*****************************************
   **************** 드래그 기능 ****************
   ******************************************
   **/
  let isDragChk = false; // [drag] 초기화
  let downClientX; // [drag] 마우스 클릭했을 때 포인터 위치
  let upClientX; // [drag] 마우스 땟을 때 포인터 위치

  // 마우스 클릭했을 때 이벤트
  carouselSlide.addEventListener("mousedown", (e) => {
      isDragChk = true;
      downClientX = e.clientX; // 처음 클릭할 때 클릭 지점 체크
  });

  // 마우스 클릭에서 땟을 때 이벤트
  carouselSlide.addEventListener("mouseup", (e) => {
      // 이미지 들어가면 실행이 안되가지고 css 에서 img에 user-drag: none; 넣어줘야함
      isDragChk = false;
      upClientX = e.clientX; // 클릭후 땟을 때 클릭 지점 체크

      // 첫클릭 > 클릭땟을때 ? 오른쪽 이동 : 왼쪽 이동;
      downClientX > upClientX ? carouselNextMove() : carouselPrevMove();
      carouselThumbSet(); // 현재 인덱스 값에 맞춰 썸네일 엑티브
  });

  // 마우스 이동 이벤트
  carouselSlide.addEventListener("mousemove", (e) => {
      if (isDragChk) {
          //console.log(e);
      }
  });

  // 마우스 들어올 때 이벤트
  carouselSlide.addEventListener("mouseover", (e) => {
      isDragChk = false;
      clearInterval(slideMoveTimer); // 자동 슬라이드 종료
  });

  // 마우스 나갔을 때 이벤트
  carouselSlide.addEventListener("mouseleave", (e) => {
      isDragChk = false;
      carouselSlideMove(); // 자동 슬라이드 실행
  });

  // 마우스 이벤트 종류 참고: https://hianna.tistory.com/492
});