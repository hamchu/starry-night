/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import * as HeaderStyle from './Header_Style';
import { UserStore } from '../../../store';
import api from '../api';
import UserModal from './UserModal';
import useDetectClose from '../../../Action/Hooks/Mainpage/LoginModalHook';
import Login from '../../Common/Components/Login';
// import { removeCookie, getCookie } from '../../../Action/Hooks/Mainpage/Cookie';

function Header() {
  const { name, profileImageUrl, setUser } = UserStore();
  const MySwal = withReactContent(Swal);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  const [test1, setTest1] = useState();

  const test = () => {
    window.location.href = 'http://localhost:8090/api/oauth2/authorization/kakao';
    // 카카오 로그인 정보 가져오기
    const getUser = async () => {
      await api.get(`/api/my-profile`, { withCredentials: true }).then((res) => {
        console.log(res.data.data);
        setUser(res.data.data.name, res.data.data.profileImageUrl);
        console.log(name, profileImageUrl);
      });
    };
  };

  // 카카오 로그인 정보 가져오기
  const getUser = async () => {
    await api.get(`/api/my-profile`, { withCredentials: true }).then((res) => {
      console.log(res.data.data);
      setUser(res.data.data.name, res.data.data.profileImageUrl);
      console.log(name, profileImageUrl);
      console.log(isOpen);
    });
  };

  // 로그인 모달
  const LoginModal = () => {
    MySwal.fire({
      // showLoaderOnConfirm: true,
      confirmButtonText: '취소',
      html: (
        <div>
          <Login test={test} />
        </div>
      ),
    });
  };

  return (
    <HeaderStyle.MainNav>
      <HeaderStyle.WrapNav>
        {/* 로고 */}
        <HeaderStyle.NavLogo onClick={getUser}>LOGO</HeaderStyle.NavLogo>
        {/* 유저 정보 */}
        {name === 'null' ? (
          // <HeaderStyle.NavLogin to="http://localhost:8090/api/oauth2/authorization/kakao">LOGIN</HeaderStyle.NavLogin>
          <HeaderStyle.NavLogin onClick={LoginModal}>LOGIN</HeaderStyle.NavLogin>
        ) : (
          <HeaderStyle.NavLogOut ref={dropDownRef}>
            <HeaderStyle.ProfileImg
              onClick={() => {
                setIsOpen(!isOpen);
                console.log(isOpen);
                // setIsOpen2(!isOpen);
              }}
              src={profileImageUrl}
            />
            {isOpen && <UserModal />}
          </HeaderStyle.NavLogOut>
        )}
      </HeaderStyle.WrapNav>
    </HeaderStyle.MainNav>
  );
}

export default Header;
