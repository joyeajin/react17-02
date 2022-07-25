import React from "react";
import "./index.css";
import { channelUrl } from "../../lib/api";
import { useEffect } from "react";
import { getChannelInfo } from "../../store/video/videoSlice";
import { useDispatch, useSelector } from "react-redux";

const VideoView = ({ id, channelId }) => {
  const dispatch = useDispatch();
  const { channel } = useSelector((state) => state.video);
  useEffect(() => {
    const channelIdInfo = channelUrl(channelId);
    dispatch(getChannelInfo(channelIdInfo));
  }, [channelId, dispatch]);
  return (
    <div className="playVideoBox">
      <div className="iframeBox">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title="youtube video"
          allowFullScreen
        ></iframe>
      </div>
      {channel && (
      <div className="descriptionContainer">
        <div className="channel-img">
          <img src={channel[0].snippet.thumbnails.default.url} alt='' />
        </div>
        <div className="channel-data">
          <h3 className="channel-title">
            {}
          </h3>
          <p className="channel-des">
            {}
          </p>
        </div>
      </div>)}
    </div>
  );
};

export default VideoView;
