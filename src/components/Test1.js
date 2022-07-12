import styled from 'styled-components';

const StyledWrapper = styled.section`
  max-width: 100%;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
`;
const StyledTitle = styled.h1`
  max-width: 500px;
  padding: 5rem 6rem;
  margin-bottom: 30px;
  margin-left: 10%;

  span {
    color: blue;
  }
`;

const StyledSubTitleWrapper = styled.div`
  width: 100%;
  background-color: blueviolet;
`;

const StyledSubTitle = styled.h2`
  max-width: 340px;
  padding-top: 5rem;
  padding-left: 6rem;
  margin-bottom: 100px;
  margin-left: 10%;
  color: #fff;
  font-size: 1.5rem;
  line-height: 1.3;
  position: relative;

  span {
    color: #fff;
    position: absolute;
    bottom: -20px;
    left: 6rem;
    font-size: 0.5rem;
  }
`;

const StyledImageBox = styled.div`
  width: 350px;
  height: 250px;
  position: absolute;
  border: 1px solid #000;
  top: 25%;
  right: 20%;
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
  align-items: flex-end;

  @media (max-width: 700px) {
    top: 50%;
    right: 10%;
  }
  transition: all 0.3s;
`;

const StyledArrowBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`;

const Test1 = () => {
  return (
    <StyledWrapper>
      <StyledTitle>
        With <span>withyou company</span> Will be better.
      </StyledTitle>
      <StyledSubTitleWrapper>
        <StyledSubTitle>
          위드유 컴퍼니만의 <br />
          독보적인 마케팅 전략
          <span>AD Senior</span>
        </StyledSubTitle>
      </StyledSubTitleWrapper>
      <StyledImageBox>
        <StyledArrowBox>
          <span>&lt;</span>
          <span>&gt;</span>
        </StyledArrowBox>
        <div>Image</div>
      </StyledImageBox>
    </StyledWrapper>
  );
};

export default Test1;
