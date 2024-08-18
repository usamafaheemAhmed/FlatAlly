// ScrollToTop.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { useRecoilState } from 'recoil';
import { LoggedInUserTokenJwt } from '../Atom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top using react-scroll
    scroller.scrollTo('top', {
      duration: 0,
      delay: 0,
      smooth: true,
      offset: -50 // Adjust this offset if needed
    });
  }, [pathname]);


  let [loggedUserToken, setLoggedUserToken] = useRecoilState(LoggedInUserTokenJwt)


  useEffect(() => {
    const storedToken = localStorage.getItem("LoginToken");
    if (storedToken) {
      setLoggedUserToken(JSON.parse(storedToken));
    }
  }, []);





  return (
    <div id="top" style={{ position: 'absolute', top: 0 }} />
  );
};

export default ScrollToTop;
