import ProjecImgGarageHub from "./img/Project1.png"
import ProjecImgMyPhoto from "./img/Project2.png"



const CompleteApps = () => {
    return (
        <>

            <div className="container">
                <div className="project-container">

                    <div className="project-card">
                        <div className="project-image bode project-outline">
                            <img src={ProjecImgGarageHub} alt="Project1" />
                        </div>
                        <div className="project-language project-outline">
                            HTML, CSS, Django (Python), Bootstrap
                        </div>
                        <div className="project-details project-outline">
                            <p className="project-title">GarageHub</p>
                            <p className="project-description">
                                Онлайн магазин продажу автозапчастин
                            </p>
                            <button className="project-more-info">Детальніше ←→</button>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-image bode project-outline">
                            <img src={ProjecImgMyPhoto} alt="Project1" />
                        </div>
                        <div className="project-language project-outline">
                            HTML, CSS, React
                        </div>
                        <div className="project-details project-outline">
                            <p className="project-title">Портфоліо</p>
                            <p className="project-description">
                                Власне портфоліо, створене з метою почати вивчення React та розповісти про себе
                            </p>
                            <button className="project-more-info"> Детальніше ←→</button>
                        </div>
                    </div>

                </div>

            </div>




        </>
    );
}

export default CompleteApps;