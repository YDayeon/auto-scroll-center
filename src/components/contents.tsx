import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Box = styled.div`
  width: 100%;
  height: 1000px;
  background-color: #cffde1;
`;
const Box2 = styled(Box)`
  background-color: #ffe5f1;
`;
const Box3 = styled(Box)`
  background-color: #c0deff;
`;
const Box4 = styled(Box)`
  background-color: #dae2b6;
`;
const Box5 = styled(Box)`
  background-color: #f5ebe0;
`;

export default function Contents() {
  const ref = useRef<any>([]);
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    let i = 0;
    window.addEventListener(
      "wheel",
      (e) => {
        setIsScroll(true);
        e.preventDefault();
        if (!isScroll) {
          if (e.deltaY > 0 && i < 4) {
            if (i >= 0) {
              i++;
            }
          } else if (e.deltaY < 0) {
            if (i > 0 && i <= 4) {
              i--;
            }
          }
          ref.current[i].scrollIntoView({ behavior: "smooth" });
          setIsScroll(false);
        }
      },
      { passive: false }
    );
  }, []);
  return (
    <Container>
      <Box
        ref={(el) => {
          ref.current[0] = el;
        }}
      />
      <Box2
        ref={(el) => {
          ref.current[1] = el;
        }}
      />
      <Box3
        ref={(el) => {
          ref.current[2] = el;
        }}
      />
      <Box4
        ref={(el) => {
          ref.current[3] = el;
        }}
      />
      <Box5
        ref={(el) => {
          ref.current[4] = el;
        }}
      />
    </Container>
  );
}
