import React, { Fragment, useEffect, useContext } from 'react';

import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import styles from './styles.module.scss';

import IMG from '../../assets/images/login_bg.png';

import path from '../../utils/path';

import { StoreContext } from '../../store/reducer';
import { getAnnouncements } from '../../store/actions';

const Home = () => {
  const { state, dispatch } = useContext(StoreContext);
  const history = useHistory();

  useEffect(() => {
    getAnnouncements(dispatch, {});
  }, []);

  const onPostClick = (id) => {
    history.push(`${path.announcements}/${id}`);
  };

  const onTestButtonClick = () => {
    history.push(`${path.announcements}/test`);
  };

  return (
    <Fragment>
      <Header />
      <div className={styles.container}>
        <h2>系務公告</h2>
        <div className={styles.posts__wrapper}>
          {state.announcements.map((post) => (
            <div
              className={styles.posts_post}
              // to={`${path.announcements}/${post?.id}`}
              key={post?.title}
            >
              <p onClick={() => onPostClick(post?.id)}>{post?.title}1234</p>
              <sub>{DateFormatter(post?.date)}</sub>
              <div
                style={{
                  background: `url(${IMG})`,
                  backgroundSize: 'contain',
                  width: '50px',
                  height: '50px',
                }}
              />
              <div className="d-flex flex-row">
                <div
                  className={styles.posts_postButton}
                  onClick={() => onPostClick(post?.id)}
                >
                  Click me!
                </div>
                <div className={styles.posts_postButton__warning}>
                  Danger to Click!
                </div>
                <div
                  className={styles.posts_postButton__testing}
                  onClick={onTestButtonClick}
                >
                  連結本地 Docker 文章測試
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

const DateFormatter = (date) => {
  const dateObj = new Date(date);

  let year = dateObj.getFullYear();
  let month = dateObj.getMonth();
  let day = dateObj.getDay();

  let dateStr = `${year}-${month}-${day}`;

  return dateStr;
};

// return (
//   <Fragment>
//     <Header />
//     <div className="px-10 py-10 pt-5 xl:px-64">
//       <h2 className="text-xl">系務公告</h2>
//       <div className="flex-col mt-5 space-y-dtd-spacing">
//         {posts.map((post) => (
//           <Link
//             className="px-dtd-padding py-7 bg-white flex rounded-xl transition duration-150 shadow-lg hover:shadow-xl"
//             to={`/announcements/${post?.id}`}
//             key={post?.id}
//           >
//             <p className="text-dtd-general-text-color hover:text-dtd-primary duration-150">
//               {post?.title?.rendered}
//             </p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   </Fragment>
// );

// return (
//   <Fragment>
//     <Header />
//     <div className={styles.container}>
//       <h2>系務公告</h2>
//       <div className={styles.postWrapper}>
//         {posts.map((post) => (
//           <Link
//             className={styles.post}
//             to={`/announcements/${post?.id}`}
//             key={post?.id}
//           >
//             <p>{post?.title?.rendered}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   </Fragment>
// );

export default Home;
