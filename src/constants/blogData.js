import { blog1, blog2, blog3 } from '../assets/img';

import { v4 as uuidv4 } from 'uuid';

const blogs = [
  {
    id: uuidv4(),
    img: blog1,
    date: '01 May 22',
    aithor: 'admin',
    title: 'Handmade Pieces That Took Time To Make',
  },
  {
    id: uuidv4(),
    img: blog2,
    date: '01 May 22',
    aithor: 'admin',
    title: 'Handmade Pieces That Took Time To Make',
  },
  {
    id: uuidv4(),
    img: blog3,
    date: '01 May 22',
    aithor: 'admin',
    title: 'Handmade Pieces That Took Time To Make',
  },
];

export default blogs;
