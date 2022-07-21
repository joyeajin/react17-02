import React from 'react';
import VideoView from './../components/VideoView';
import { useSearchParams } from "react-router-dom";
import {useSelector} from "react-redux";
import VideoItem from '../components/VideoItem';
const Watch = () => {
    const [query,setQuery]  = useSearchParams();
    const id=query.get('id')
    const videoData = useSelector((state) => state.video.data);
    const lt10VideoData = videoData.filter((item,idx)=>idx<10)
    return (
        <section className='list content'>
            <VideoView id={id} />
            <ul className='watchList'>
            { 
                lt10VideoData.map((item,idx)=>(
                    <VideoItem 
                    key={item.snippet.thumbnails.default.url} 
                    item={item.snippet} value={item}
                    />
                ))
             }
            </ul>
        </section>
    );
};

export default Watch;