import React from "react";

interface IHeaderData {
    title: string;
    paragraph: string;

}

const Header: React.FC = () => {
    return (
        <header id='header'>
            <div className='intro'>
                <div className='overlay'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8 col-md-offset-2 intro-text'>
                                <h1>
                                    Faxina Express
                                    <span></span>
                                </h1>
                                <p>Bem Vindo</p>
                                <a
                                    href='#features'
                                    className='btn btn-custom btn-lg page-scroll'
                                >
                                    Baixe nosso Aplicativo
                                </a>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;