import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import blogs from '../blogData';
import SingleBlog from '../SingleBlog';

const HomeBlog = () => {
  return (
    <section class="homeBlogArea">
      <Container>
        <h2 class="sectionTopTitle text-center">News & updates</h2>
        <Row className="laProductWrapper">
          {blogs.map((item) => (
            <Col
              md={4}
              key={uuidv4}
            >
              <SingleBlog
                id={item.id}
                img={item.img}
                date={item.date}
                author={item.author}
                title={item.title}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default HomeBlog