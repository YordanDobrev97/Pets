const About = () => {
    return (
        <section className="about-container">
            <div className="about">
                <div className="title">
                    <h1>About The Company</h1>
                </div>
                <div className="desc">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores modi vel blanditiis doloribus commodi impedit!. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
            <div className="row">
                <div className="card">
                    <div className="card_img">
                        <img style={{ maxWidth: '100%' }} src="https://www.sfspca.org/wp-content/uploads/2019/04/heartlogo-transparent.png" />
                    </div>
                    <div className="card_title">Search for animals</div>
                    <div className="card_body">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card_img">
                        <img style={{ maxWidth: '100%' }} src="https://animalcarecenterofdownersgrove.com/wp-content/uploads/2018/04/help-save-pets-e1525188967454.jpg" />
                    </div>
                    <div className="card_title">Animal care</div>
                    <div className="card_body">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About