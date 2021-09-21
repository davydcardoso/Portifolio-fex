import React from 'react';
import "./styles.css";

const HeaderMenu: React.FC = () => {
    return (
        <>
            <nav className="menu">
                <div className="menu-item">
                    <div className="menu-text">
                        <a href="#">Serviços</a>
                    </div>
                    <div className="sub-menu">
                        <div className="icon-box">
                            <div className="icon"><i className="fal fa-wind-turbine"></i></div>
                            <div className="text">
                                <div className="title">Turbo Editor <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">Edit your code while slowing down time.</div>
                            </div>
                        </div>
                        <div className="icon-box">
                            <div className="icon"><i className="fal fa-lightbulb-on"></i></div>
                            <div className="text">
                                <div className="title">Idea Creator <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">Think of an idea, and have an AI create it.</div>
                            </div>
                        </div>
                        <div className="icon-box">
                            <div className="icon"><i className="fal fa-bomb"></i></div>
                            <div className="text">
                                <div className="title">Super Collider <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">Remove mass from any object.</div>
                            </div>
                        </div>
                        <div className="sub-menu-holder"></div>
                    </div>
                </div>
                <div className="menu-item highlight">
                    <div className="menu-text">
                        <a href="#">Sobre Nós</a>
                    </div>
                    <div className="sub-menu double">
                        <div className="icon-box gb a">
                            <div className="icon"><i className="far fa-question-circle"></i></div>
                            <div className="text">
                                <div className="title">Consult <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">From Professionals</div>
                            </div>
                        </div>
                        <div className="icon-box gb b">
                            <div className="icon"><i className="far fa-users-class"></i></div>
                            <div className="text">
                                <div className="title">Teach <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">In Classroom</div>
                            </div>
                        </div>
                        <div className="icon-box gb c">
                            <div className="icon"><i className="far fa-school"></i></div>
                            <div className="text">
                                <div className="title">Learn <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">By Video</div>
                            </div>
                        </div>
                        <div className="icon-box gb d">
                            <div className="icon"><i className="far fa-chess-rook"></i></div>
                            <div className="text">
                                <div className="title">Keep <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">The Castle</div>
                            </div>
                        </div>
                        <div className="icon-box gb e">
                            <div className="icon"><i className="far fa-video-plus"></i></div>
                            <div className="text">
                                <div className="title">Become <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">A Creator</div>
                            </div>
                        </div>
                        <div className="icon-box gb f">
                            <div className="icon"><i className="far fa-cat"></i></div>
                            <div className="text">
                                <div className="title">Understand <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">Our Journey</div>
                            </div>
                        </div>
                        <div className="bottom-container">
                            Ready to dive in? <a href="#">Get Started</a>
                        </div>
                        <div className="sub-menu-holder"></div>
                    </div>
                </div>
                <div className="menu-item highlight">
                    <div className="menu-text">
                        <a href="#">Parceiros</a>
                    </div>
                    <div className="sub-menu triple">
                        <div className="top-container gb c icon-box">
                            <div className="icon big"><i className="far fa-book"></i></div>
                            <div className="text">
                                <div className="title">Where to start</div>
                                <div className="sub-text">Find out where to begin below</div>
                            </div>
                        </div>
                        <div className="box">
                            <h3>Your Journey</h3>
                            <a href="#">Get Started</a>
                            <a href="#">Learn the Basics</a>
                            <a href="#">Get Advanced</a>
                            <a href="#">Start Teaching</a>
                        </div>
                        <div className="box">
                            <h3>Your Tools</h3>
                            <a href="#">Turbo Editor</a>
                            <a href="#">Time Stopper</a>
                            <a href="#">Brain Enhancer</a>
                            <a href="#">Network Maker</a>
                        </div>
                        <div className="icon-box flat">
                            <div className="icon"><i className="fal fa-plug"></i></div>
                            <div className="text">
                                <div className="title">API Guide <i className="far fa-arrow-right"></i></div>
                            </div>
                        </div>
                        <div className="icon-box flat">
                            <div className="icon"><i className="fal fa-comments"></i></div>
                            <div className="text">
                                <div className="title">Support Line <i className="far fa-arrow-right"></i></div>
                            </div>
                        </div>
                        <div className="icon-box flat">
                            <div className="icon"><i className="fal fa-phone-volume"></i></div>
                            <div className="text">
                                <div className="title">Live Chat <i className="far fa-arrow-right"></i></div>
                            </div>
                        </div>
                        <div className="icon-box flat">
                            <div className="icon"><i className="fal fa-book-spells"></i></div>
                            <div className="text">
                                <div className="title">Documentation <i className="far fa-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-text">
                        <a href="#">Contato</a>
                    </div>
                    <div className="sub-menu">
                        <div className="icon-box">
                            <div className="icon"><i className="far fa-satellite"></i></div>
                            <div className="text">
                                <div className="title">Forum <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">Join our passionate community.</div>
                            </div>
                        </div>
                        <div className="icon-box">
                            <div className="icon"><i className="fab fa-twitter-square"></i></div>
                            <div className="text">
                                <div className="title">Twitter <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">Follow us on twitter.</div>
                            </div>
                        </div>
                        <div className="icon-box">
                            <div className="icon"><i className="fab fa-twitch"></i></div>
                            <div className="text">
                                <div className="title">Live Stream <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">We stream content every day.</div>
                            </div>
                        </div>
                        <div className="sub-menu-holder"></div>
                    </div>
                </div>
                <div id="sub-menu-container">
                    <div id="sub-menu-holder">
                        <div id="sub-menu-bottom">

                        </div>
                    </div>
                </div>
            </nav>



        </>
    )
}

export default HeaderMenu;