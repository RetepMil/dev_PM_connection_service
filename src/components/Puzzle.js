import styled from "styled-components";

const RIGHT_CIRCLE = styled.div`
  width: calc(${(props) => props.height} * 0.4);
  height: calc(${(props) => props.height} * 0.4);
  border-radius: 50%;
  background-color: ${(props) => props.color};
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
`;

const LEFT_CIRCLE = styled.div`
  width: calc(${(props) => props.height} * 0.4);
  height: calc(${(props) => props.height} * 0.4);
  border-radius: 50%;
  background-color: ${(props) => props.color};
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-50%, -50%);
`;

const TOP_CIRCLE = styled.div`
  width: calc(${(props) => props.height} * 0.4);
  height: calc(${(props) => props.height} * 0.4);
  border-radius: 50%;
  background-color: ${(props) => props.color};
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BOTTOM_CIRCLE = styled.div`
  width: calc(${(props) => props.height} * 0.4);
  height: calc(${(props) => props.height} * 0.4);
  border-radius: 50%;
  background-color: ${(props) => props.color};
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  font-size: calc(${(props) => props.width} * 0.14);
`;

const SPAN = styled.span`
  position: absolute;
  z-index: 1;
`;

const Puzzle = ({ children, t, b, l, r, ...props }) => {
  return (
    <DIV {...props}>
      {t === "1" ? (
        <TOP_CIRCLE {...props} />
      ) : t === "2" ? (
        <TOP_CIRCLE {...props} color="white" />
      ) : null}
      {l === "1" ? (
        <LEFT_CIRCLE {...props} />
      ) : l === "2" ? (
        <LEFT_CIRCLE {...props} color="white" />
      ) : null}
      {r === "1" ? (
        <RIGHT_CIRCLE {...props} />
      ) : r === "2" ? (
        <RIGHT_CIRCLE {...props} color="white" />
      ) : null}
      {b === "1" ? (
        <BOTTOM_CIRCLE {...props} />
      ) : b === "2" ? (
        <BOTTOM_CIRCLE {...props} color="white" />
      ) : null}
      <SPAN>{children}</SPAN>
    </DIV>
  );
};

export default Puzzle;
