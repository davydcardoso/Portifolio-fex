import React from "react";

const Features: React.FC<{}> = (props: any) => {

    const data = [
        {
            "icon": "fa fa-comments-o",
            "title": "Lorem ipsum",
            "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
        },
        {
            "icon": "fa fa-bullhorn",
            "title": "Lorem ipsum",
            "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
        },
        {
            "icon": "fa fa-group",
            "title": "Lorem ipsum",
            "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
        },
        {
            "icon": "fa fa-magic",
            "title": "Lorem ipsum",
            "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
        }
    ]

    return (
        <div id='features' className='text-center'>
            <div className='container'>
                <div className='col-md-10 col-md-offset-1 section-title'>
                    <h2>Features</h2>
                </div>
                <div className='row'>
                    {data
                        ? data.map((d: any, i: number) => (
                            <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                                {' '}
                                <i className={d.icon}></i>
                                <h3>{d.title}</h3>
                                <p>{d.text}</p>
                            </div>
                        ))
                        : 'Loading...'}
                </div>
            </div>
        </div>
    )
}

export default Features;