import React from 'react'
import Search from '../global/Search'
import Category from '../shop/Category'
import Tag from '../shop/Tag'
import AboutAuthor from './AboutAuthor'
import RecentPost from './RecentPost'

const BLogSidebar = () => {
  return (
    <div className='blogSidebar'>
        <Search />
        <AboutAuthor/>
        <RecentPost/>
        <Category/>
        <Tag/>
    </div>
  )
}

export default BLogSidebar