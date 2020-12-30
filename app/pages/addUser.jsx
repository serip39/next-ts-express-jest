import Router from 'next/router'
import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import Navbar from '../components/Navbar'

export default class addUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: null,
      gender: '',
      email: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const name = target.name
    const value = target.value

    this.setState({
      [name]: value,
    })
  }

  handleSubmit(event) {
    fetch('/addUser/post', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        age: this.state.age,
        gender: this.state.gender,
        email: this.state.email,
      }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
    Router.push({
      pathname: '/index',
    })
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <Navbar />

        <Row className="mt-4">
          <Col xs={12} md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Header>ユーザー登録</Card.Header>
              <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label>名前</Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder="Please enter your name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>年齢</Form.Label>
                    <Form.Control
                      name="age"
                      type="number"
                      placeholder="Please enter your age"
                      value={this.state.age}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>性別</Form.Label>
                    <Form.Control
                      name="gender"
                      type="gender"
                      placeholder="Please enter your gender"
                      value={this.state.gender}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>メールアドレス</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Please enter your email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    送信
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
