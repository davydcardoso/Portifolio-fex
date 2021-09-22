import React from "react";

const Services: React.FC = () => {

    const data = [
        {
            "icon": "fa fa-wordpress",
            "name": "Lorem ipsum dolor",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
        },
        {
            "icon": "fa fa-cart-arrow-down",
            "name": "Consectetur adipiscing",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
        },
        {
            "icon": "fa fa-cloud-download",
            "name": "Lorem ipsum dolor",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
        },
        {
            "icon": "fa fa-language",
            "name": "Consectetur adipiscing",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
        },
        {
            "icon": "fa fa-plane",
            "name": "Lorem ipsum dolor",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
        },
        {
            "icon": "fa fa-pie-chart",
            "name": "Consectetur adipiscing",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
        }
    ]
    
    return (
        <div id='services' className='text-center'>
            <div className='container'>
                <div className='section-title'>
                    <h2>Our Services</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                        dapibus leonec.
                    </p>
                </div>
                <div className='row'>
                    {data
                        ? data.map((d: any, i: number) => (
                            <div key={`${d.name}-${i}`} className='col-md-4'>
                                {' '}
                                <i className={d.icon}></i>
                                <div className='service-desc'>
                                    <h3>{d.name}</h3>
                                    <p>{d.text}</p>
                                </div>
                            </div>
                        ))
                        : 'loading'}
                </div>
            </div>
        </div>
    )
}

export default Services;