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

export const EpidemicNoticesContainer = styled.div``;
export const VertialProgressLine = styled.div`
  height: 100%;
  width: 7px;
  border: red 1px dotted;
  margin-left: 12px;
`;
