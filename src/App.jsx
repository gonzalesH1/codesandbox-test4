import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(true);

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setfaceShowFlag(true);
    } else {
      faceShowFlag && setfaceShowFlag(false);
    }
    //eslink-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  const onClickSwitchShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {faceShowFlag && <p>( *´艸｀)</p>}
    </>
  );
};

export default App;
