import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import styled from "styled-components";
import "../css/MyProjects.css";
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
  margin-top: 5%;
`;

const ProjectList = () => {
  const [datas, setDatas] = useState([
    {
      image: "1.png",
      title: "BookItOut: ������б� �кλ��� ��Ȱ�� ���� ���� �ڷ� �̿��� ...",
    },
    {
      image: "2.png",
      title: "��Ҹ��� ������ ����ģ��! ��ȭ��",
    },
    {
      image: "3.png",
      title: "�ǵ�� ���� �÷��� #posTree",
    },
    {
      image: "4.png",
      title: "PODO. �н� ������ ���� ���� ������Ʈ",
    },
    {
      image: "5.png",
      title: "ArtRecipe: ������ǰ��������� ���� �÷���",
    },
  ]);

  const TOTAL_SLIDES = 5;
  const [slide, setSlide] = useState(1);
  const slideRef = useRef();

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
  }, [slide]);

  return (
    <Container>
      <button id="left-arrow">
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
      <button id="right-arrow">
        <Arrow onClick={nextSlide} />
      </button>
    </Container>
  );
};

export default ProjectList;
