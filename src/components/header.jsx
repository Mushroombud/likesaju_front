import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PointModal } from './modals/point-modal';
import coin from '../assets/icons/coin.png';
import sajuIcon from '../assets/icons/saju.svg';
import chatIcon from '../assets/icons/chat.svg';
import profileIcon from '../assets/icons/profile.svg';
import { removeCookie } from '../utils/cookie';
import { signOut } from '../apis/api';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginState, setUserProfile } from '../redux/user-slice';
import { ProfileImage } from './profile-image';

export const Header = () => {
    const [isLogin, setIsLogin] = useState(true);
    const location = useLocation();

    const [showProfile, setShowProfile] = useState(false);
    const [isPointModalOpen, setIsPointModalOpen] = useState(false);

    const nickname = useSelector((state) => state.user.nickname);
    const point = useSelector((state) => state.user.remaining_points);
    const profileImgIndex = useSelector((state) => state.user.profilepic_id);
    const loggedIn = useSelector((state) => state.user.isLogin);

    const dispatch = useDispatch();

    useEffect(() => {
        setIsLogin(loggedIn);
    }, [loggedIn]);

    const onClickPoint = () => {
        setIsPointModalOpen(true);
    };

    const onClickLogout = async () => {
        const res = await signOut();
        if (res !== null) {
            removeCookie('access_token');
            removeCookie('refresh_token');
            dispatch(setLoginState(false));
            dispatch(
                setUserProfile({
                    user: null,
                    nickname: null,
                    profilepic_id: null,
                    remaining_points: null,
                })
            );
            window.location.href = '/';
        }
    };

    return (
        <div className="sticky top-0 w-full flex items-center justify-between bg-white drop-shadow h-[60px] md:h-[80px] px-4 md:px-[68px] z-[999]">
            {/* Left-aligned Title */}
            <Link
                to="/"
                className="text-lg md:text-[26px] font-extrabold text-[#14142B] leading-7 md:leading-9 tracking-tighter"
            >
                멋쟁이 사주처럼
            </Link>

            {/* Right-aligned Icons */}
            <div className="flex flex-row items-center gap-4 md:gap-[50px]">
                {/* Mobile Icons */}
                <Link to="/saju" className="block md:hidden">
                    <img
                        src={sajuIcon}
                        alt="사주"
                        className={`w-6 h-6 ${
                            location.pathname === '/saju' ? 'opacity-100' : 'opacity-60'
                        }`}
                    />
                </Link>
                <Link to="/chat" className="block md:hidden">
                    <img
                        src={chatIcon}
                        alt="채팅"
                        className={`w-6 h-6 ${
                            location.pathname === '/chat' ? 'opacity-100' : 'opacity-60'
                        }`}
                    />
                </Link>
                <span
                    className="block md:hidden"
                    onClick={() => setShowProfile(!showProfile)}
                >
          <img
              src={profileIcon}
              alt="프로필"
              className={`w-6 h-6 ${
                  showProfile ? 'opacity-100' : 'opacity-60'
              } cursor-pointer`}
          />
        </span>

                {/* Desktop Links */}
                <Link
                    to="/saju"
                    className={`hidden md:block ${
                        location.pathname === '/saju'
                            ? 'text-xl font-extrabold text-[#4A3AFF] leading-6'
                            : 'text-xl font-bold text-[#14142B] leading-6 hover:font-extrabold hover:text-[#4A3AFF]'
                    }`}
                >
                    사주
                </Link>
                <Link
                    to="/chat"
                    className={`hidden md:block ${
                        location.pathname === '/chat'
                            ? 'text-xl font-extrabold text-[#4A3AFF] leading-6'
                            : 'text-xl font-bold text-[#14142B] leading-6 hover:font-extrabold hover:text-[#4A3AFF]'
                    }`}
                >
                    채팅
                </Link>
                {isLogin && (
                    <div
                        className="hidden md:block relative"
                        onMouseOver={() => setShowProfile(true)}
                        onMouseLeave={() => setShowProfile(false)}
                    >
            <span className="text-xl font-bold text-[#14142B] leading-6 hover:font-extrabold hover:text-[#4A3AFF] hover:cursor-pointer">
              프로필
            </span>
                        {showProfile && (
                            <div className="absolute top-[25px] right-[-10px] md:right-[-25px] bg-white drop-shadow w-[180px] md:w-[221px] p-4 md:p-[25px] rounded-[12px] flex flex-col gap-3 md:gap-5">
                                {profileImgIndex && (
                                    <div className="flex flex-row gap-2 md:gap-[10px] items-center justify-start">
                                        <ProfileImage
                                            profileImageId={profileImgIndex}
                                            additionalClassName="w-[25px] h-[25px] md:w-[30px] md:h-[30px]"
                                        />
                                        <span className="text-base md:text-lg font-bold text-[#170F49] leading-6">
                      {nickname}
                    </span>
                                    </div>
                                )}
                                <div className="flex flex-row items-center justify-between">
                                    <div className="flex flex-row gap-2 md:gap-[10px] items-center">
                                        <img
                                            src={coin}
                                            alt="coin"
                                            className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]"
                                        />
                                        <span className="text-base md:text-lg font-bold text-[#170F49] leading-6">
                      포인트
                    </span>
                                    </div>
                                    <span className="text-base md:text-lg font-bold text-[#4A3AFF] leading-6">
                    {point}
                                        <span className="text-[#160F49]">P</span>
                  </span>
                                </div>
                                <button
                                    onClick={onClickPoint}
                                    className="bg-[#160F49] text-white text-sm md:text-base font-semibold leading-6 rounded-[50px] px-4 py-2 md:px-6 md:py-[6px]"
                                >
                                    충전하기
                                </button>
                                <span
                                    onClick={onClickLogout}
                                    className="text-sm md:text-base font-normal underline text-[#160F49] self-start cursor-pointer"
                                >
                  로그아웃
                </span>
                            </div>
                        )}
                    </div>
                )}
                {!isLogin && (
                    <Link
                        to="/login"
                        className="text-sm md:text-xl font-bold text-[#4A3AFF] leading-6 bg-[#F3F1FF] px-4 py-2 md:px-7 md:py-[17px] rounded-[50px]"
                    >
                        로그인
                    </Link>
                )}
            </div>
            {isPointModalOpen && <PointModal setIsModalOpen={setIsPointModalOpen} />}
        </div>
    );
};