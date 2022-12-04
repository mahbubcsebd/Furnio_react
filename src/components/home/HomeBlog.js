import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import blogs from '../../constants/blogData';
import SingleBlog from '../blog/SingleBlog';

const HomeBlog = () => {
  return (
    <section class="homeBlogArea">
      <Container>
        <h2 class="sectionTopTitle text-center">News & updates</h2>
        <Row className="laProductWrapper">
          {blogs.map((item) => (
            <Col
              md={4}
              key={item.id}
            >
              <SingleBlog
                id={item.id}
                img={item.img}
                date={item.date}
                author={item.author}
                title={item.title}
                body={item.body}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default HomeBlog