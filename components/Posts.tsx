import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Posts.module.scss';
import Image from 'next/legacy/image';

interface IPost {
  img: string;
  date: Date;
  content: string;
}

const Posts: FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    axios.get('/api/posts').then((response) => {
      setPosts(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <>
      <div className={styles.cardGrid}>
        {posts.map((post, index) => {
          return (
            <div className={styles.cardWrapper} data-aos="fade-up" key={index}>
              <div className={styles.cardImage}>
                {post.img ? (
                  <Image
                    src={post.img}
                    alt="A placeholder for images"
                    width={320}
                    height={320}
                    layout="responsive"
                    objectFit="cover"
                  />
                ) : (
                  <></>
                )}
              </div>
              <div className={styles.cardText}>
                <p>{post.content}</p>
              </div>
              <svg
                className={styles.cardWave}
                viewBox="0 0 1292 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M72.1367 2.81796L0 4.24584V26H1292V7.10162L1219.86 9.00547C1148.8 10.9093 1004.53 14.717 861.333 12.8132C718.137 10.9093 573.863 3.29392 430.667 0.914104C287.47 -1.46571 143.197 1.39007 72.1367 2.81796Z"
                  fill="#F2F3DA"
                />
              </svg>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Posts;
