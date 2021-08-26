import React, { Component } from "react";
import { Row, Col } from "antd";
// import styles from "../styles/article.module.scss";

import Article from "../components/article";
import {
  EpidemicDetailContainer,
  EpidemicNoticesContainer,
  VertialProgressLine,
} from "./styled";

declare interface isNationalTrendState {
  epidemicDetail: { title: string; nums: number; change: number }[];
  epidemicNotices: { title: string; agency: string; time: Date }[];
}
export default class NationalTrend extends Component<
  any,
  isNationalTrendState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      epidemicDetail: [
        {
          title: "境外输入",
          nums: 26,
          change: +2,
        },
        {
          title: "无症状感染者",
          nums: 96,
          change: +4,
        },
        {
          title: "现有确诊",
          nums: 752,
          change: +2,
        },
        {
          title: "累计确诊",
          nums: 42306,
          change: +3,
        },
        {
          title: "累计死亡",
          nums: 1500,
          change: -6,
        },
        {
          title: "累计治愈",
          nums: 39094,
          change: +50,
        },
      ],
      epidemicNotices: [
        {
          agency: "湖北省卫生健康委员会",
          title: "2020年4月22日湖北省新冠肺炎疫情情况",
          time: new Date(),
        },
      ],
    };
  }
  render() {
    // console.log(this.state.epidemicDetail);
    const { epidemicDetail, epidemicNotices } = this.state;
    console.log(epidemicDetail);
    return (
      <Row justify="space-between">
        <Col span={15}>
          <Article
            className="map"
            header={["全国实时疫情", new Date().toLocaleString()]}
          >
            <EpidemicDetailContainer>
              {epidemicDetail.map(({ title, nums, change }) => (
                <section>
                  <span className="title">{title}</span>
                  <span className="nums">{nums}</span>
                  <small className="change">
                    较昨日
                    <mark className="mark">
                      {change > 0 ? `+${change}` : change}
                    </mark>
                  </small>
                </section>
              ))}
            </EpidemicDetailContainer>
          </Article>
        </Col>
        <Col span={8}>
          <Article header={["全国疫情通报"]} className="article-notices">
            <VertialProgressLine />
            <EpidemicNoticesContainer className="notices">
              {epidemicNotices.map(({ title, agency, time }) => (
                <section>
                  <span className="time">{time.toLocaleString()}</span>
                  <p>
                    <strong className="agency">{agency}</strong>
                    发布
                    <span className="title">
                      <a href="">{title}</a>
                    </span>
                  </p>
                </section>
              ))}
            </EpidemicNoticesContainer>
          </Article>
        </Col>
      </Row>
    );
  }
}
