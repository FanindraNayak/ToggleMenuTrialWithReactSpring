import useStore from "./GlobelState";
import { useSpring, animated } from "react-spring";

const Togeele = () => {
  const toggle = useStore((state) => state.toggle);
  const prevToggle = useStore((state) => state.prevToggle);
  const props = useSpring({
    to:
      toggle === true
        ? {
            background: "red",
            opacity: 1,
            width: 200,
            height: 200,
            textAlign: "center",
          }
        : {
            background: "green",
            textAlign: "center",
            opacity: 0,
            width: 200,
            height: 0,
            // clipPath: "circle(50.4% at 50% 0)",
          },
    from: {
      opacity: 0,
      width: 0,
      height: 0,
    },
    delay: 200,
    config:  {  duration:toggle===true? 1000 :500 },
});

const props1 = useSpring({
    to:
    toggle === true
    ? {
        width: 100,
        height: 100,
        opacity:1,
    }
    : {
        width: 100,
        height: 0,
        opacity:0,
    },
    from: {
        width: 100,
        height: 0,
    },
    config:  {  duration:toggle===true? 2000 :300 },
  });
  return (
    <div>
      <button onClick={() => prevToggle(!toggle)}>Toggle</button>
      <br />
      <div>
        {toggle === true ? <h1>True</h1> : <h1>False</h1>}
        <animated.div style={props}>
          <animated.div style={props1} >
            <ul>
              <li>Hi</li>
              <li>Hi</li>
              <li>Hi</li>
              <li>Hi</li>
              <li>Hi</li>
            </ul>
          </animated.div>
        </animated.div>
      </div>
    </div>
  );
};

export default Togeele;
