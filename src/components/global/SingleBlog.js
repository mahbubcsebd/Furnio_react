import React from 'react';
import { FiUser } from 'react-icons/fi';
import { MdOutlineDateRange } from 'react-icons/md';
import style from './singleBlog.module.css';

const SingleBlog = (props) => {
    const { id, img, date, author, title } = props;
  return (
    <div
      className={style.singleHomeBlog}
      id={id}
    >
      <div className={style.homeBlogImg}>
        <img
          src={img}
          alt=""
        />
      </div>
      <div className={style.blogPublished}>
        <p className={style.bpDate}>
          <span className="mr-2">
            <MdOutlineDateRange />
          </span>{' '}
          {date}
        </p>
        <p className={style.bpAdmin}>
          <span className="mr-2">
            <FiUser />
          </span>{' '}
          {author}
        </p>
      </div>
      <div className={style.homeBlogContent}>
        <h3 className={style.homeBlogTitle}>
          {title}
        </h3>
        <a
          href="blog-details.html"
          className={style.readMoreBtn}
        >
          Real More
        </a>
      </div>
    </div>
  );
}

export default SingleBlog