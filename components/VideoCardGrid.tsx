import VideoCard from "./VideoCard";

const VideocardGrid = ()=>{
    return(
        <div className="grid md:grid-cols-2 gap-3 lg:grid-cols-4 gap-3">
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
        </div>
    );
}

export default VideocardGrid;