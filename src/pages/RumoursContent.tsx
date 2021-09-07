import React, { Component, useState } from "react";
import { Card, Table, Button } from "antd";

const tabList = [
  {
    key: "tab1",
    tab: "已发布",
  },
  {
    key: "tab2",
    tab: "草稿箱",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
const data: Array<any> = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const AlreadyPublished = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (selectedRowKeys: any) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    // this.setState({ selectedRowKeys });
    setSelectedRowKeys(selectedRowKeys);
  };
  // const data=data
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};
const Drafts = () => {
  return <p>dsfdsfds</p>;
};
interface CardList {
  tab1: any;
  tab2: any;
}
const contentList: CardList = {
  tab1: <AlreadyPublished />,
  tab2: <Drafts />,
};
export class RumoursContent extends Component {
  state: {
    key: keyof CardList;
  } = {
    key: "tab1",
  };
  onTabChange = (key: string, type: string) => {
    // console.log(key, type);
    this.setState({
      [type]: key,
    });
  };
  render() {
    return (
      <Card
        style={{ width: "100%" }}
        title="疫情通报"
        extra={<a href="#">More</a>}
        tabList={tabList}
        activeTabKey={this.state.key}
        onTabChange={key => {
          this.onTabChange(key, "key");
        }}
      >
        {contentList[this.state.key]}
      </Card>
    );
  }
}

export default RumoursContent;
