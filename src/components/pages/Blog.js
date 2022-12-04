import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import blogs from '../../constants/blogData';
import BLogSidebar from '../blog/BLogSidebar';
import SingleBlog from '../blog/SingleBlog';
import PaginationBox from '../global/PaginationBox';

const Blog = () => {
  return (
    <div className="blogPage pt-5">
      <Container>
        <Row>
          <Col md={8}>
            <div className="postWrapper">
              <Row className="laProductWrapper">
                {blogs.map((item) => (
                  <Col
                    md={12}
                    key={item.id}
                  >
                    <SingleBlog
                      id={item.id}
                      img={item.img}
                      date={item.date}
                      author={item.author}
                      title={item.title}
                      body={item.body}
                      alignClass="text-start justify-content-start pb-2"
                      mbClass="mb-3"
                      bodyClass="d-block"
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col md={4}>
            <BLogSidebar/>
          </Col>
        </Row>
        {/* Pagination */}
        <Row>
          <div className="paginationBox">
            <PaginationBox/>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Blog