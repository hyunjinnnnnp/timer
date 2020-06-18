const datetime = document.querySelector(".datetime"),
  result = document.querySelector(".result");

function caculateDistance(getDistance) {
  //결과값을 시간단위로 계산
  const days = Math.floor(getDistance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (getDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((getDistance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((getDistance % (1000 * 60)) / 1000);
  result.innerHTML = `${days !== 0 ? `${days}일` : ``} ${
    hours !== 0 ? `${hours}시간` : ``
  } ${minutes !== 0 ? `${minutes}분` : ``} ${
    seconds !== 0 ? `${seconds}초` : ``
  } 남았습니다`;
}
function getDistance(countDownDate) {
  //몇 초 남았는지 밀리세컨
  const now = new Date().getTime();
  const getDistance = countDownDate - now;
  caculateDistance(getDistance);
}

function handleInput(event) {
  const currentValue = datetime.value;
  const countDownDate = new Date(currentValue).getTime();
  //밀리세컨단위로 currentValue를 받는다
  getDistance(countDownDate);
}

function init() {
  datetime.addEventListener("change", handleInput);
  setInterval(handleInput, 1000);
}
init();
