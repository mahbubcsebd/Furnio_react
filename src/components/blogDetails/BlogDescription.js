import React from 'react';
import { FiUser } from 'react-icons/fi';
import { MdOutlineDateRange } from 'react-icons/md';
import style from './blogDescription.module.css';
import BlogQuote from './BlogQuote';

const BlogDescription = (props) => {
    const {date, author,img, title, body} = props.desc;
  return (
    <div className={`${style.singleHomeBlog} mb-5`}>
      <div className={style.homeBlogImg}>
        <img
          className={style.bdImg}
          src={img}
          alt=""
        />
      </div>
      <div className={`${style.blogPublished}`}>
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
      <div className={`${style.homeBlogContent}`}>
        <h3 className={style.homeBlogTitle}>{title}</h3>
        <p className={`${style.postBody} mb-3`}>{body.slice(0, 500)}</p>

        <BlogQuote/>


        <p className={`${style.postBody} mb-3`}>{body.slice(501, )}</p>
      </div>
    </div>
  );
}

export default BlogDescription