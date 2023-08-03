import React from "react";
import { Row, Skeleton, Col } from "antd";
const DetailsSekelon = () => {
  return (
    <Row
      justify="center"
      gutter={[40, 40]}
      align="middle"
      style={{ height: "400px" }}
    >
      <Col span={9}>
        <Skeleton.Image active />
      </Col>
      <Col span={9}>
        <Skeleton
          paragraph={{
            rows: 4,
          }}
          active
        ></Skeleton>
      </Col>
    </Row>
  );
};

export default DetailsSekelon;
