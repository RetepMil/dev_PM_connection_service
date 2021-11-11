import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import styled from "styled-components";
import "../css/ProjectList.css";
import Project from "./Project";

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto 0;
  display: flex;
  order: 2px solid black;
  overflow: hidden;
`;

const Slider = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 2%;
`;

const ProjectList = () => {
  const [datas, setDatas] = useState([
    {
      image: "1.png",
      title:
        "BookItOut: 고려대학교 학부생의 원활한 지식 정보 자료 이용을 위한 앱",
    },
    {
      image: "2.png",
      title: "목소리로 만나는 대학친구! 통화링",
    },
    {
      image: "3.png",
      title: "피드백 보관 플랫폼 #posTree",
    },
    {
      image: "4.png",
      title: "PODO. 학습 목적의 영상 모음 웹사이트",
    },
    {
      image: "5.png",
      title: "ArtRecipe: 예술작품·재료정보 공유 플랫폼",
    },
  ]);

  const TOTAL_SLIDES = 5;
  const [slide, setSlide] = useState(1);
  const slideRef = useRef();
  const nextButton = useRef();
  const prevButton = useRef();

  const nextSlide = () => {
    if (slide + 5 > TOTAL_SLIDES) {
      setSlide(TOTAL_SLIDES - 2);
    } else {
      setSlide(slide + 3);
    }
  };

  const prevSlide = () => {
    if (slide - 3 <= 0) {
      setSlide(1);
    } else {
      setSlide(slide - 3);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${(slide - 1) * 28.2}vw)`;

    if (!prevButton.current.classList.contains("on"))
      prevButton.current.classList.add("on");
    if (!nextButton.current.classList.contains("on"))
      nextButton.current.classList.add("on");

    if (slide === TOTAL_SLIDES - 2) {
      if (nextButton.current.classList.contains("on"))
        nextButton.current.classList.remove("on");
    }
    if (slide === 1) {
      if (prevButton.current.classList.contains("on"))
        prevButton.current.classList.remove("on");
    }
  }, [slide]);

  return (
    <Container>
      <button className="arrows left-arrow" ref={prevButton}>
        <Arrow onClick={prevSlide} />
      </button>
      <ListContainer>
        <Slider ref={slideRef}>
          {datas.map((data, index) => (
            <Project
              key={index}
              image={data.image}
              title={data.title}
            ></Project>
          ))}
        </Slider>
      </ListContainer>
      <button className="arrows right-arrow" ref={nextButton}>
        <Arrow onClick={nextSlide} />
      </button>
    </Container>
  );
};

export default ProjectList;
