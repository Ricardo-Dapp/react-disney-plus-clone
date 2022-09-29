import React from "react";
import styled from "styled-components";
import simpsonsCard from "../images/simpsons-card.jpeg";

function Movies() {
  const forYouData = [
    {
      id: 0,
      img: simpsonsCard,
    },
    {
      id: 1,
      img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5DC8B129C79DC2F396701E92F10DC3B905C0C8F0E4C5764122F6F580F3446524/scale?width=1200&aspectRatio=1.78&format=jpeg",
    },
    {
      id: 2,
      img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C5817A57A4D725F1E53C2C0169BF1678DD4CD8C71DAE605B2EFF3B082867CA48/scale?width=1200&aspectRatio=1.78&format=jpeg",
    },
    {
      id: 3,
      img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DC3351619B017FDD4BE8529C36EB43B6CD0DB6C9115F1D6E19372FBC7B917444/scale?width=1200&aspectRatio=1.78&format=jpeg",
    },

    {
      id: 4,
      img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/32BF5941765B045734A8DE2CDEF30EF5F940F26119A94BA4677414A4406ACFC9/scale?width=1200&aspectRatio=1.78&format=jpeg",
    },
    {
      id: 5,
      img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/946BE99BA9A923B548E7D2DF45361968076104FD7ABB7B705B897A5747084F47/scale?width=1200&aspectRatio=1.78&format=jpeg",
    },
  ];

  const newData = [
    {
      id: 0,
      img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/946BE99BA9A923B548E7D2DF45361968076104FD7ABB7B705B897A5747084F47/scale?width=1200&aspectRatio=1.78&format=jpeg",
    },
    {
      id: 1,
      img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B8E825F6BF9FA417FF13F3E4722349938ED44EA7CCB4A430305FAF2CA0C2B29A/scale?width=1200&aspectRatio=1.78&format=jpeg",
    },
    {
      id: 2,
      img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4B606EF36712FE9A3C3DE05E7C9FCCB142B725411857BA94AF0DD0F6860A183B/scale?width=1200&aspectRatio=1.78&format=jpeg",
    },
    {
      id: 3,
      img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C5817A57A4D725F1E53C2C0169BF1678DD4CD8C71DAE605B2EFF3B082867CA48/scale?width=1200&aspectRatio=1.78&format=jpeg",
    },
    {
      id: 4,
      img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/29859918D787A9A644D348B59AB90854C58DFD65DE68C50B9FBA28C423405167/scale?width=1200&aspectRatio=1.78&format=jpeg",
    },
    {
      id: 5,
      img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9678FC74FB52573A4F9E8CFEB7E05C930094B1590C1175C530B014E14AA19434/scale?width=1200&aspectRatio=1.78&format=jpeg",
    },
  ];

  const popularData = [
    {
      id: 0,
      img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9678FC74FB52573A4F9E8CFEB7E05C930094B1590C1175C530B014E14AA19434/scale?width=1200&aspectRatio=1.78&format=jpeg",
    },
    {
      id: 1,
      img: simpsonsCard,
    },
    {
      id: 2,
      img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BC43084FDE2395898283560F553EA284E5D9A65A3062564F9286891E0FD84F41/scale?width=1200&aspectRatio=1.78&format=jpeg",
    },
    {
      id: 3,
      img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DDB00475C29CBA60327DC03BC1AE0024F2CC75E9B9499CFA3371D9439084CC20/scale?width=1200&aspectRatio=1.78&format=jpeg",
    },
    {
      id: 4,
      img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/40A6D56F03C28A581BCB78725D56DE33787017EF2453E2A1096F56CDE88978E1/scale?width=1200&aspectRatio=1.78&format=jpeg",
    },
    {
      id: 5,
      img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4B606EF36712FE9A3C3DE05E7C9FCCB142B725411857BA94AF0DD0F6860A183B/scale?width=1200&aspectRatio=1.78&format=jpeg",
    },
  ];

  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        {forYouData.map((data) => {
          return (
            <Wrap key={data.id}>
              <img src={data.img} />
            </Wrap>
          );
        })}
      </Content>
      <h4>New To Disney+</h4>
      <Content>
        {newData.map((data) => {
          return (
            <Wrap key={data.id}>
              <img src={data.img} />
            </Wrap>
          );
        })}
      </Content>
      <h4>Popular shows on Disney+</h4>
      <Content>
        {popularData.map((data) => {
          return (
            <Wrap key={data.id}>
              <img src={data.img} />
            </Wrap>
          );
        })}
      </Content>
    </Container>
  );
}

export default Movies;

/* display: grid;
  grid-gap: 25px;
  overflow-x: auto;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
   grid-template-rows: minmax(100px, 1fr);
  padding: 15px;*/

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  overflow-x: scroll;
  grid-auto-flow: column;
  grid-template-columns: repeat(6, calc(50% - 200px));
  padding: 5% 0%;
  padding-left: 0px;
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgba(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: rgba(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
