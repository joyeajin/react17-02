import React from "react";
import "./index.css";
import VideoItem from "../VideoItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getVideoList } from "./../../store/video/videoSlice";
import { videoUrl } from "../../lib/api";
import ClipLoader from "react-spinners/ClipLoader";

const VideoList = ({ display }) => {
  console.log("레이아웃은", display);
  const dispatch = useDispatch();
  const {data,loading} = useSelector((state)=>state.video)
  useEffect(() => {
    dispatch(getVideoList(videoUrl));
  }, []);
  if (loading) {
    return (
      <ClipLoader
        color="#05cf3e"
        loading={loading}
        cssOverride={{
          position: 'absolute',
          top:`50%`,
          left: `50%`,
          transform: `translate(-50%,-50%)`
        }}
        size={50}
        speedMultiplier={1}
      />
    );
  }
  return (
    <ul
      className={
        display === "grid" ? "videoList VideoGrid" : "videoList VideoRowList"
      }
    >
      {data.map((item, idx) => (
        <VideoItem
          key={item.snippet.thumbnails.default.url}
          item={item.snippet}
          value={item}
        />
      ))}
    </ul>
  );
};

export default VideoList;
