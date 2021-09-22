import React from "react";

interface IImageData {
    title: string;
    largeImage: string;
    smallImage: string;
}

const Image: React.FC<IImageData> = (props) => {
    return (
        <div className='portfolio-item'>
            <div className='hover-bg'>
                {' '}
                <a
                    href={props.largeImage}
                    title={props.title}
                    data-lightbox-gallery='gallery1'
                >
                    <div className='hover-text'>
                        <h4>{props.title}</h4>
                    </div>
                    <img
                        src={props.smallImage}
                        className='img-responsive'
                        alt={props.title}
                    />{' '}
                </a>{' '}
            </div>
        </div>
    )
}

export default Image;