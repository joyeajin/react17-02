import React from "react";
import "./index.css";
import VideoItem from "../VideoItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getVideoList } from "./../../store/video/videoSlice";
import { videoUrl } from "../../lib/api";

const VideoList = ({display}) => {
  console.log('레이아웃은',display)
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state.video.data);
  useEffect(() => {
    dispatch(getVideoList(videoUrl));
  }, []);
  return (
    <ul className={display === 'grid' ? 'videoList VideoGrid' : 'videoList VideoRowList'}>
      {videoData.map((item, idx) => (
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
