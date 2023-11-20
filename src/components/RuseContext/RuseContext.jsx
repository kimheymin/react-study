import React, { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function RuseContext() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page />
    </ThemeContext.Provider>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  const { isDark } = useContext(ThemeContext);

  return (
    <header
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      나는 헤더
    </header>
  );
}

function Content() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      나는 컨텐트
    </div>
  );
}

function Footer() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const handleClick = () => setIsDark(!isDark);

  return (
    <footer
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
      }}
    >
      <button onClick={handleClick}>다크모드</button>
    </footer>
  );
}
