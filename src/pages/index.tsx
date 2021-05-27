import { history, useLocation   } from 'umi';
import styles from './index.less';

export default function IndexPage() {

  const handle = () => {
    history.push('/books/1234')
  }

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div onClick={handle}>
        go to books 1234
      </div>
    </div>
  );
}
