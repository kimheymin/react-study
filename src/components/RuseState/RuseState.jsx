import React, { useState } from "react";

//무거운 작업을 하는 함수가 밖에 있다면?
const heaveWork = ()=> {
  console.log('엄청 무거운 작업');
  return ["홍길동", "김철수"];
}

export default function RuseState() {
  // const [name, setName] = useState(heaveWork()); //값이 바뀔때마다 렌더링 됨
  const [name, setName] = useState(()=> { //맨 처음 화면에 렌더링 될때만 호출
    return heaveWork();
  }); 
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName((prev)=> {
      console.log('이전 상태' , prev);
      return ([...prev, text]);
    })
    setText('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button>추가</button>
      </form>
      <div>
        <ul>
          {name.map((item,index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </>
  );
}
