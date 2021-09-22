import React from "react";

const About: React.FC = () => {

    const data = {
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Why": [
            "Lorem ipsum dolor",
            "Tempor incididunt",
            "Lorem ipsum dolor",
            "Incididunt ut labore"
        ],
        "Why2": [
            "Aliquip ex ea commodo",
            "Lorem ipsum dolor",
            "Exercitation ullamco",
            "Lorem ipsum dolor"
        ]
    }

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        {" "}
                        <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <h2>About Us</h2>
                            <p>{data ? data.paragraph : "loading..."}</p>
                            <h3>Why Choose Us?</h3>
                            <div className="list-style">
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        {data
                                            ? data.Why.map((d, i) => (
                                                <li key={`${d}-${i}`}>{d}</li>
                                            ))
                                            : "loading"}
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        {data
                                            ? data.Why2.map((d, i) => (
                                                <li key={`${d}-${i}`}> {d}</li>
                                            ))
                                            : "loading"}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;