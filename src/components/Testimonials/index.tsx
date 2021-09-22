import React from "react";

const Testimonials: React.FC = () => {

    const data = [
        {
            "img": "img/testimonials/01.jpg",
            "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
            "name": "John Doe"
        },
        {
            "img": "img/testimonials/02.jpg",
            "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
            "name": "Johnathan Doe"
        },
        {
            "img": "img/testimonials/03.jpg",
            "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
            "name": "John Doe"
        },
        {
            "img": "img/testimonials/04.jpg",
            "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
            "name": "Johnathan Doe"
        },
        {
            "img": "img/testimonials/05.jpg",
            "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
            "name": "John Doe"
        },
        {
            "img": "img/testimonials/06.jpg",
            "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
            "name": "Johnathan Doe"
        }
    ]

    return (
        <div id='testimonials'>
            <div className='container'>
                <div className='section-title text-center'>
                    <h2>What our clients say</h2>
                </div>
                <div className='row'>
                    {data
                        ? data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className='col-md-4'>
                                <div className='testimonial'>
                                    <div className='testimonial-image'>
                                        {' '}
                                        <img src={d.img} alt='' />{' '}
                                    </div>
                                    <div className='testimonial-content'>
                                        <p>"{d.text}"</p>
                                        <div className='testimonial-meta'> - {d.name} </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        : 'loading'}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;