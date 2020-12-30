import {
  Button,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap'
import Navbar from '../components/Navbar'

import fetch from 'node-fetch'

export default class index extends React.Component {

  static async getInitialProps() {
    const res = await fetch('http://127.0.0.1:3000/index/get')
    const posts = await res.json()
    return { posts }
  }

  render() {
    return (
      <div>
        <Navbar />

        <Row className="mt-2">
          <Col xs={12} md={{ span: 6, offset: 3 }}>
            <Button href="/addUser" block>
              ユーザーを登録する
            </Button>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={12} md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Header>ユーザー一覧</Card.Header>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  {this.props.posts.map((user) => (
                    <div>
                      <Card.Title>{user.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {user.created}
                      </Card.Subtitle>
                      <Card.Text>{user.email}</Card.Text>
                    </div>
                  ))}
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
