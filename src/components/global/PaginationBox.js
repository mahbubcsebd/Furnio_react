import Pagination from 'react-bootstrap/Pagination';
import style from './paginationBox.module.css';

function PaginationBox() {
  return (
    <Pagination className='mb-4'>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item className={style.pageLink} >{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item className={style.pageLink}>{10}</Pagination.Item>
      <Pagination.Item className={style.pageLink}>{11}</Pagination.Item>
      <Pagination.Item className={style.pageLink} active>{12}</Pagination.Item>
      <Pagination.Item className={style.pageLink}>{13}</Pagination.Item>
      <Pagination.Item className={style.pageLink} disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item className={style.pageLink}>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default PaginationBox;
