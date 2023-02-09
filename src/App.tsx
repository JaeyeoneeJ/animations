import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-400, 400], [-360, 360]);

  // useEffect(() => {
  //   x.onChange(() => console.log(x.get));
  // }, [x]);
  useMotionValueEvent(rotateZ, "change", (i) => {
    console.log(i);
  });
  return (
    <Wrapper>
      <Box style={{ x, rotateZ }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
