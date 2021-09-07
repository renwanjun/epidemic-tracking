import styled from "styled-components";
export const EpidemicDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 158px 158px;
  // display: flex;
  // flex-flow: row wrap;
  // justify-content: space-between;
  // align-content: center;
  section {
    // width: calc(100% / 3);
    display: flex;
    flex-flow: column;
    justify-content: center;
    // flex: 1;
    font-style: normal;
    letter-spacing: 0px;
    text-decoration: none;
    color: ${props => props.color || "rgb(255, 162, 77)"};
    .title {
      font-family: SourceHanSansSC;
      font-weight: 700;
      font-size: 18px;
      color: rgb(38, 38, 38);
      line-height: 27px;
    }
    .nums {
      font-family: FZZongYi;
      font-weight: 400;
      font-size: 40px;

      line-height: 46px;
    }
    .change {
      font-family: SourceHanSansSC;
      font-weight: 400;
      font-size: 14px;
      color: rgb(135, 136, 138);
      line-height: 20px;
    }
    .mark {
      background: transparent;
      color: ${props => props.color || "rgb(255, 162, 77)"};
    }

    &:nth-child(2) {
      color: rgba(128, 58, 58, 1);
      .mark {
        color: rgba(128, 58, 58, 1);
      }
    }
    &:nth-child(3) {
      color: rgba(225, 51, 51, 1);
      .mark {
        color: rgba(225, 51, 51, 1);
        // color: rgb(255, 162, 77);
      }
    }

    &:nth-child(4) {
      color: rgba(159, 8, 8, 1);
      .mark {
        color: rgba(159, 8, 8, 1);
      }
    }
    &:nth-child(5) {
      color: rgba(0, 0, 0, 1);
      .mark {
        color: rgba(0, 0, 0, 1);
      }
    }
    &:nth-child(6) {
      color: rgba(34, 170, 64, 1);
      .mark {
        color: rgba(34, 170, 64, 1);
      }
    }
  }
`;
export const EpidemicNoticesContainer = styled.div`
  text-align: left;
  section {
    margin: 16px 0;
    border-bottom: solid 1px rgb(231 233 236);
    font-family: SourceHanSansSC;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 22px;
    font-size: 14px;
    color: rgb(89, 89, 89);
    .time {
      color: rgb(140, 140, 140);
      margin-bottom: 8px;
    }
    .news {
      // 多行文本溢出
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .agency {
      font-weight: 700;
      color: rgb(89, 89, 89);
    }
    .title {
      color: rgb(89, 89, 89);
    }
    &:first-child {
      .time > .latest {
        display: inline-block;
        width: 40px;
        border-radius: 5px;
        margin-left: 20px;
        text-align: center;
        color: #fff;
        background: rgb(215, 30, 30);
      }
    }
    &:last-child {
      border-bottom: none;
    }
  }
`;
export const VertialProgressLine = styled.div`
  // height: 100%;
  align-self: stretch;
  margin: 16px 0;
  width: 7px;
  border: red 1px dotted;
  margin-right: 12px;
`;

export const CitiesContrastContianer = styled.figure`
  padding-bottom: 20px;
  .cities-contrast {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    font-weight: 400;
    font-size: 14px;
    color: rgb(103, 103, 103);
    line-height: 22px;
    .nums {
      font-weight: 400;
      font-size: 28px;
      color: rgb(0, 157, 255);
      line-height: 22px;
      &.right {
        color: rgb(215, 30, 30);
      }
    }
  }

  figcaption {
    margin-top: 20px;
  }
`;
export const CitiesContrastBar = styled.span`
  position: relative;
  display: inline-block;
  height: 8px;
  border-radius: 5px;
  background-image: linear-gradient(
    to right,
    rgb(0, 157, 255) ${(props: { cities: string[] }) => props.cities[0]},
    rgb(215, 30, 30) ${(props: { cities: string[] }) => props.cities[1]}
  );
  flex-grow: 1;
  margin: 5px 7px auto;
  &::after {
    float: left;
    position: relative;
    left: ${(props: { cities: string[] }) => props.cities[2]};
    content: " ";
    height: 100%;
    min-width: 10px;
    width: 5%;
    background: #fff;
    z-index: 2;
    transform: rotateZ(-68deg);
  }
`;
