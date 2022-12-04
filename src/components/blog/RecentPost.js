import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../../constants/blogData';
import style from './recentPost.module.css';

const RecentPost = () => {
  return (
    <div className={`${style.recentPostWrapper} mb-5`}>
        <h3 className={`${style.sidebarTitle} mb-4`}>Recent Post</h3>
        <hr className={style.hrSpan}/>
        <ul className={style.recentPostCollection}>
            {blogs.map((blog) =>{
                const {id, img, date, title, body} = blog
                return (
                  <li
                    className="d-flex align-items-center mb-3"
                    key={id}
                  >
                    <img
                      src={img}
                      alt=""
                      className={`${style.rpSmImg} mr-3`}
                    />
                    <div className={`${style.rpText} d-inline-block`}>
                      <p className={style.rpDate}>{date}</p>
                      <Link
                        className={style.rpTitle}
                        to={title}
                        state={{ img, title, body }}
                      >
                        {title}
                      </Link>
                    </div>
                  </li>
                );
            })}
        </ul>
    </div>
  )
}

export default RecentPost