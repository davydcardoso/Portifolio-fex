import React from "react";

const Team: React.FC = () => {
    const data = [
        {
            "img": "img/team/01.jpg",
            "name": "John Doe",
            "job": "Director"
        },
        {
            "img": "img/team/02.jpg",
            "name": "Mike Doe",
            "job": "Senior Designer"
        },
        {
            "img": "img/team/03.jpg",
            "name": "Jane Doe",
            "job": "Senior Designer"
        },
        {
            "img": "img/team/04.jpg",
            "name": "Karen Doe",
            "job": "Project Manager"
        }
    ]
    return (
        <div id='team' className='text-center'>
            <div className='container'>
                <div className='col-md-8 col-md-offset-2 section-title'>
                    <h2>Meet the Team</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                        dapibus leonec.
                    </p>
                </div>
                <div id='row'>
                    {data
                        ? data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                                <div className='thumbnail'>
                                    {' '}
                                    <img src={d.img} alt='...' className='team-img' />
                                    <div className='caption'>
                                        <h4>{d.name}</h4>
                                        <p>{d.job}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                        : 'loading'}
                </div>
            </div>
        </div>
    )
}

export default Team;