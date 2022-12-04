import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import BLogSidebar from '../blog/BLogSidebar';
import BlogDescription from '../blogDetails/BlogDescription';

const BlogDetails = () => {
  const location = useLocation();

  return (
    <div className="blogDetailsPage pt-5">
      <Container>
        <Row>
          <Col md={8}>
            <div className="blogDetailsWrapper">
              {/* Blog description start */}
              <Row>
                <Col md={12}>
                  <BlogDescription desc={location.state}/>
                </Col>
              </Row>
              {/* Blog description end */}
            </div>
          </Col>
          <Col md={4}>
            <BLogSidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlogDetails