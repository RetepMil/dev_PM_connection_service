import styled from "styled-components";

const RIGHT_CIRCLE = styled.div`
  position: absolute;
  width: 45.317%;
  height: 45.317%;
  left: 79.4%;
  border-radius: 50%;
  background-color: ${(props) => props.color || "white"};
`;

const LEFT_CIRCLE = styled.div`
  position: absolute;
  width: 45.317%;
  height: 45.317%;
  left: -20.6%;
  border-radius: 50%;
  background-color: ${(props) => props.color || "white"};
`;

const TOP_CIRCLE = styled.div`
  position: absolute;
  width: 45.317%;
  height: 45.317%;
  top: -20.6%;
  border-radius: 50%;
  background-color: ${(props) => props.color || "white"};
`;

const BOTTOM_CIRCLE = styled.div`
  position: absolute;
  width: 45.317%;
  height: 45.317%;
  top: 79.4%;
  border-radius: 50%;
  background-color: ${(props) => props.color || "white"};
`;

const DIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color || "white"};
  top: 100px;
  left: 100px;
  font-size: ${(props) => props.fontsize};
`;

const Puzzle = ({ children, top, bottom, left, right, ...props }) => {
  return (
    <DIV {...props}>
      {left === "1" ? (
        <LEFT_CIRCLE {...props} />
      ) : left === "2" ? (
        <LEFT_CIRCLE />
      ) : null}
      {right === "1" ? (
        <RIGHT_CIRCLE {...props} />
      ) : right === "2" ? (
        <RIGHT_CIRCLE />
      ) : null}
      {top === "1" ? (
        <TOP_CIRCLE {...props} />
      ) : top === "2" ? (
        <TOP_CIRCLE />
      ) : null}
      {bottom === "1" ? (
        <BOTTOM_CIRCLE {...props} />
      ) : bottom === "2" ? (
        <BOTTOM_CIRCLE />
      ) : null}
      {children}
    </DIV>
  );
};

export default Puzzle;
