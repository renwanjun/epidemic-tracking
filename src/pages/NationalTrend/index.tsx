import React, { Component } from "react";
import { Row, Col, Dropdown, Menu, message } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

import Article from "components/article";
import Map from "components/map";

// import styled from "styled-components";
// 局部样式
import {
  EpidemicDetailContainer,
  EpidemicNoticesContainer,
  VertialProgressLine,
  CitiesContrastBar,
  CitiesContrastContianer,
} from "./national-trend-styled";
// import styles from "./index.module.less";

const SwitchMapViews = function () {
  const onClick = ({ key }: any) => {
    message.info(`Click on item ${key}`);
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <CaretDownOutlined /> 切换视图
      </a>
    </Dropdown>
  );
};

declare interface isNationalTrendState {
  epidemicDetail: { title: string; nums: number; change: number }[];
  epidemicNotices: { title: string; agency: string; time: Date }[];
  citiesContrast: number[];
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
        {
          agency: "湖北省卫生健康委员会",
          title: "2020年4月22日湖北省新冠肺炎疫情情况",
          time: new Date(),
        },
        {
          agency: "湖北省卫生健康委员会",
          title:
            "黑龙江新馆肺炎疫情防控指挥部物资保障组织工作进展汇报黑龙江新馆肺炎疫情防控指挥部物资保障组织工作进展汇报黑龙江新馆肺炎疫情防控指挥部物资保障组织工作进展汇报黑龙江新馆肺炎疫情防控指挥部物资保障组织工作进展汇报",
          time: new Date(),
        },
        {
          agency: "黑龙江新冠肺炎疫情防控指挥部",
          title: "黑龙江新馆肺炎疫情防控指挥部物资保障组织工作进展汇报",
          time: new Date(),
        },
      ],
      citiesContrast: [271, 67, 338],
    };
  }
  render() {
    // console.log(this.state.epidemicDetail);
    const { epidemicDetail, epidemicNotices, citiesContrast } = this.state;
    const [greenCities, redCities, allCities] = citiesContrast;
    // console.log(epidemicDetail);
    return (
      <Row justify="space-between">
        <Col span={15}>
          <Article
            type="large"
            className="map"
            header={[
              "全国实时疫情",
              <p style={{ textAlign: "right" }}>
                截止<time>{new Date().toLocaleString()}</time>
              </p>,
            ]}
          >
            <EpidemicDetailContainer>
              {epidemicDetail.map(({ title, nums, change }, index) => (
                <section key={index}>
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
          <Article type="large" header={["疫情地图分布", <SwitchMapViews />]}>
            <Map></Map>
          </Article>
        </Col>
        <Col span={8}>
          <Article header={["全国疫情通报"]} className="article-notices">
            <VertialProgressLine />
            <EpidemicNoticesContainer>
              {epidemicNotices.map(({ title, agency, time }, index) => (
                <section key={index}>
                  <p className="time">
                    <span>{time.toLocaleString()}</span>
                    {index === 0 && <label className="latest">最新</label>}
                  </p>
                  <p className="news">
                    <strong className="agency">{agency}</strong>
                    &nbsp;&nbsp;发布&nbsp;&nbsp;
                    <span className="title">
                      <a href="">{title}</a>
                    </span>
                  </p>
                </section>
              ))}
            </EpidemicNoticesContainer>
          </Article>
          <Article header={["城市疫情", `累计确诊城市${allCities}`]}>
            <CitiesContrastContianer>
              <section className="cities-contrast">
                <span>
                  <strong className="nums">{greenCities}</strong>
                  <br />
                  零病例城市
                </span>
                <CitiesContrastBar
                  cities={[
                    ((greenCities / allCities) * 100).toFixed(1) + "%",
                    ((redCities / allCities) * 100).toFixed(1) + "%",
                    ((greenCities / allCities) * 100 - 2).toFixed(1) + "%",
                  ]}
                />
                <span>
                  <strong className="nums right">{redCities}</strong>
                  <br />
                  有病例城市
                </span>
              </section>

              <figcaption>
                <small>
                  全国累计确诊患者分布于338个城市，目前268个城市已实现现有确诊"清零"。sdsa本统计数据不包含境外输入病例。
                </small>
              </figcaption>
            </CitiesContrastContianer>
          </Article>
        </Col>
      </Row>
    );
  }
}
