import React from "react";
import VideoList from "./../components/VideoList";
import SideMenu from "../components/SideMenu";
import { useDispatch } from 'react-redux';
import { videoListLayout } from "../store/video/videoSlice";
import {useEffect} from 'react'
import { useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const display = useSelector((state)=>state.video.listLayout);
  useEffect(()=>{
    dispatch(videoListLayout('grid'))
  },[])
  return (
    <>
      <SideMenu />
      <section className="main-content">
        <VideoList display={display} />
      </section>
    </>
  );
};

export default Home;
