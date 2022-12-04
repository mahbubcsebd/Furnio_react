import React from 'react';
import { FiUser } from 'react-icons/fi';
import { MdOutlineDateRange } from 'react-icons/md';
import { Link } from 'react-router-dom';
import style from './singleBlog.module.css';

const SingleBlog = (props) => {
  const {
    id,
    img,
    date,
    author,
    title,
    body,
    alignClass,
    mbClass,
    bodyClass,
  } = props;

  // trucncate function for card body text reduce
  const truncateString = (str, num) => {
    if (str.length > num) {
      return `${str.slice(0, num)}...`;
    } else {
      return str;
    }
  };
  return (
    <div
      className={`${style.singleHomeBlog} mb-5`}
      id={id}
    >
      <div className={style.homeBlogImg}>
        <img
          src={img}
          alt=""
        />
      </div>
      <div className={`${style.blogPublished} ${alignClass}`}>
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
      <div className={`${style.homeBlogContent} ${alignClass}`}>
        <Link
          className={`${style.homeBlogTitle} ${mbClass}`}
          to={title}
          state={{date, author, img, title, body }}
        >
          {title}
        </Link>
        <p className={`${style.postBody} ${bodyClass}`}>
          {truncateString(body, 300)}
        </p>
        <Link
          className={style.readMoreBtn}
          to={title}
          state={{date, author, img, title, body }}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default SingleBlog