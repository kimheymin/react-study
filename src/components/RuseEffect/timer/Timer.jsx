import React, { useEffect } from "react";

export default function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는 중....");
    }, 1000);

    //useEffect는 렌더링될 때마다 실행됨
    //무언가 정리 작업이 필요할 때는 useEffect의 return값으로 함수를 넣어줌
    return () => {
      clearInterval(timer);
      console.log("타이머 종료");
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔 확인!</span>
    </div>
  );
}
