import react from 'react'

const PageTitle = ({title}) => {
    return (
        <section className="page-title-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>

            <div className="shape1"><img src="assets/img/shape1.png" alt="img"/></div>
			<div className="shape2"><img src="assets/img/shape2.png" alt="img"/></div>
			<div className="shape3"><img src="assets/img/shape3.png" alt="img"/></div>
			<div className="shape6"><img src="assets/img/shape6.png" alt="img"/></div>
			<div className="shape8 rotateme"><img src="assets/img/shape8.svg" alt="shape"/></div>
            <div className="shape9"><img src="assets/img/shape9.svg" alt="shape"/></div>

            <div className="bubble-animate">
                <div className="circle small square1"></div>
                <div className="circle small square2"></div>
                <div className="circle small square3"></div>
                <div className="circle small square4"></div>
                <div className="circle small square5"></div>
                <div className="circle medium square1"></div>
                <div className="circle medium square2"></div>
                <div className="circle medium square3"></div>
                <div className="circle medium square4"></div>
                <div className="circle medium square5"></div>
                <div className="circle large square1"></div>
                <div className="circle large square2"></div>
                <div className="circle large square3"></div>
                <div className="circle large square4"></div>
            </div>
        </section>
    )
}
    
export default PageTitle;