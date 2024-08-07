const Video = ({width, height, src, className}) => {
    return (
        <div className={className}>
            <video width={width}
                   height={height}
                   controls
                   autoPlay={true}
                   preload="none">
                <source src={src}
                        type="video/webm"/>
                Twoja przeglądarka nie obsługuje formatu video.
            </video>
        </div>

    )
}

export default Video