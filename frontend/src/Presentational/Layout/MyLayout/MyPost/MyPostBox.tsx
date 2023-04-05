import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as MyPostBox from '../../../Components/MyComponents/MyPostComponents/MyPostBoxStyle';
import * as MyPageApi from '../../../../Action/Modules/MyPage/MyPage';
import { UserStore } from '../../../../store';

function MyArticle() {
  const offset = 10;

  const { id } = UserStore();

  const [userPostInfo, setUserPostInfo] = useState<null | MyPageApi.UserPostInfos>(null);

  useEffect(() => {
    const getUserPostInfo = async () => {
      const request = await MyPageApi.getUserPostInfo(id);
      console.log('request', request);
      setUserPostInfo(request);
    };
    getUserPostInfo();
  }, []);

  if (userPostInfo != null) {
    console.log(userPostInfo[0].images[0]);
  }

  const [index, setIndex] = useState(0);

  const [leaving, setLeaving] = useState(false);

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const increaseIndex = () => {
    if (userPostInfo) {
      if (leaving) return;
      toggleLeaving();
      const totalPosts = userPostInfo.length;
      const maxIndex = Math.ceil(totalPosts / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  // const bigMovieMatch = useRouteMatch<{ movieId: string }>("/movies/:movieId");
  // console.log(bigMovieMatch);

  // const onBoxClicked = (movieId: number) => {
  //   history.push(`/movies/${movieId}`);
  // };

  return (
    <MyPostBox.SliderWrapper onClick={increaseIndex}>
      <MyPostBox.Slider>
        <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
          <MyPostBox.Row
            variants={MyPostBox.rowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: 'tween', duration: 1 }}
            key={index}
          >
            {userPostInfo?.slice(offset * index, offset * index + offset).map((post) => (
              <MyPostBox.Box
                key={post.id}
                variants={MyPostBox.boxVariants}
                whileHover="hover"
                initial="normal"
                transition={{ type: 'tween' }}
                bgPhoto={post.images[0] ? post.images[0].url : 'https://j8d206.p.ssafy.io/api/datafiles/8'}
              >
                <MyPostBox.PostInfo variants={MyPostBox.PostInfoVariants}>
                  <h5>
                    날짜 : {post.createdDate.substring(0, 10)}
                    <br />
                    위치 : {post.lng.toFixed(4)} / {post.lat.toFixed(4)}
                    <br />
                    {post.constellationTags[0] ? `별자리 : ${post.constellationTags[0].name}` : null}
                  </h5>
                </MyPostBox.PostInfo>
              </MyPostBox.Box>
            ))}
          </MyPostBox.Row>
        </AnimatePresence>
      </MyPostBox.Slider>
    </MyPostBox.SliderWrapper>
  );
}

export default MyArticle;
