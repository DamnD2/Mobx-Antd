import { Col, Row } from 'antd';
import Table from './Table';

function TablePage() {
  return (
    <div style={{ flex: '1 0 auto' }}>
      <Row>
        <Col xs={24} md={{ span: 14, offset: 5 }}>
          {<Table />}
        </Col>
      </Row>
    </div>
  );
}

export default TablePage;
