import React from 'react';
import { bdQuote } from '../../assets/img';
import style from './blogQuote.module.css';

const BlogQuote = () => {
  return (
    <div className={`${style.blogDescQuotedBox} my-4`}>
        <div className={style.bdqLeft}>
            <img src={bdQuote} alt="" className={style.bdqQuoteImg}/>
        </div>
        <div className={style.bdqRight}>
            <p className={style.bdqText}>"The public is more familiar with bad design than good
                design. It is, in effect, conditioned to prefer bad design, because that
                is what it lives with. The new becomes threatening, the old reassuring."
            </p>
            <h5 className={style.bdqName}>-Paul Rand</h5>
        </div>
    </div>
  )
}

export default BlogQuote