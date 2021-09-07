import { Content } from "antd/lib/layout/layout";
import React, { memo } from "react";
// import { Col, Row } from "antd";
import cn from "classnames";
import styled from "styled-components";
import styles from "./index.module.less";
// const styels = require("./index.module.less");
const Article = styled.article`
  background-color: #fff;
  margin: 20px 0;
  header.header {
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    height: 57px;
    line-height: 57px;
    border-bottom: solid 1px #e9e9e9;
    font-weight: 400;
    font-size: 16px;
    .title {
      text-align: left;
      font-weight: inherit;
      font-size: inherit;
    }
  }

  &.large {
    header.header > .title {
      font-weight: 400;
      font-size: 20px;
    }
  }
  .content {
    margin: 12px 0;
    padding: 0 25px;
  }
`;
function ArticleComponent(props: any) {
  let { children, header, className, type } = props;
  return (
    <Article className={cn(styles[className], type)}>
      <header className="header">
        <h3 className="title">{header[0]}</h3>
        {header[1]}
      </header>
      <section className={cn("content", styles.content)}>{children}</section>
    </Article>
  );
}
export default memo(ArticleComponent);
