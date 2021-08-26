import React, { memo } from "react";
// import { Col, Row } from "antd";
import styled from "styled-components";
import styles from "./index.module.less";
const Article = styled.article`
  .header {
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    height: 57px;
    line-height: 57px;
    border-bottom: solid 1px #e9e9e9;
  }
  .content {
    padding: 0 25px;
  }
`;
function ArticleComponent(props: any) {
  let { children, header, className } = props;
  //   console.log(props);
  //   console.log(styles[className]);
  return (
    <Article className={styles[className]}>
      <header className="header">
        <h3 style={{ textAlign: "left" }}>{header[0]}</h3>
        {header[1] && (
          <p style={{ textAlign: "right" }}>
            截止<time>{header[1]}</time>
          </p>
        )}
      </header>
      <section className="content">{children}</section>
    </Article>
  );
}
export default memo(ArticleComponent);
