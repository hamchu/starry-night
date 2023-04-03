import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import * as MyStyle from '../../Components/MyComponents/MyStyle';
import MyGlobal from '../../Components/MyComponents/MyGlobalStyle';
import * as MyProfileBox from '../../Components/MyComponents/MyProfileComponent/MyProfileBox';
import { UserStore } from '../../../store';
// import MyHeader from '../../Layout/MyLayout/MyHeader';

function MyProfile() {
  const { name, profileImageUrl, setUser } = UserStore();
  return (
    <MyStyle.Container>
      <Outlet />
      <MyGlobal />
      <MyProfileBox.ProfileMainContainer>
        <MyProfileBox.ProfileSubContainer>
          <MyProfileBox.Photo src={profileImageUrl} />
          <MyProfileBox.Nick>
            <h2>비둘기가호롤롤롤로날아가</h2>
          </MyProfileBox.Nick>
        </MyProfileBox.ProfileSubContainer>
        <MyProfileBox.ProfileSubContainer>
          <MyProfileBox.ProfileButtonContainer>
            <Link to="/mypage/dict">
              <MyStyle.MyButton>나의 도감</MyStyle.MyButton>
            </Link>

            <MyProfileBox.MyProfileContent>
              <h1>23/60</h1>
            </MyProfileBox.MyProfileContent>
          </MyProfileBox.ProfileButtonContainer>
          <MyProfileBox.ProfileButtonContainer>
            <Link to="/mypage/posts">
              <MyStyle.MyButton>내가 쓴 글 </MyStyle.MyButton>
            </Link>

            <MyProfileBox.MyProfileContent>
              <h1>123개</h1>
            </MyProfileBox.MyProfileContent>
          </MyProfileBox.ProfileButtonContainer>
          <MyProfileBox.ProfileButtonContainer>
            <Link to="/mypage/reward">
              <MyStyle.MyButton>나의 업적</MyStyle.MyButton>
            </Link>

            <MyProfileBox.MyProfileContent>
              <h1>2/8</h1>
            </MyProfileBox.MyProfileContent>
          </MyProfileBox.ProfileButtonContainer>
        </MyProfileBox.ProfileSubContainer>
      </MyProfileBox.ProfileMainContainer>
    </MyStyle.Container>
  );
}

export default MyProfile;
