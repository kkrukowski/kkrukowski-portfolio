const Video = ({width, height, src}) => {
    return (
        <video width={width}
               height={height}
               controls
               preload="none">
            <source src={src}
                    type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    )
}

export default Video