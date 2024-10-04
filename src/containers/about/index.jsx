import React from "react";
import { BsInfoCircleFill } from "react-icons/bs"
import { Animate } from "react-simple-animate"
import PageHeaderContent from "../../components/pageHeaderContent";
import './styles.scss'
// import { DiApple, DiAndroid } from 'react-icons/di'
// import { FaDev, FaDatabase , Fa} from 'react-icons/fa'
const About = () => {

    const personalDeatils = [
        {
            label: "Name",
            value: "Nandana S Nair"
        },
        {
            label: "Age",
            value: "21"
        },
        {
            label: "Address",
            value: "Kochi,Kerala"
        },
        {
            label: "Email",
            value: "nandanasnair2018@gmail.com"
        },
        {
            label: "Contact No",
            value: "+91 9778050942"
        },

    ];

    const job_summary = " Innovative and detail-oriented Full StackDeveloper with experience in web application development, proficient in HTML, CSS, JavaScript, React, and Python, skilled in agile environments,and passionate about learning and applying new technologies to solve real-world problems."
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />


            <div className="about__content">

                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={0.5}
                        delay={0}
                        start={{
                            transform: 'translateX(-900px)',
                        }}
                        end={{
                            transform: 'translatex(0px)',
                        }}
                    >
                        <h3>Full Stack Developer</h3>
                        <p>{job_summary}</p>


                    </Animate>

                    <Animate
                        play
                        duration={0.5}
                        delay={0}
                        start={{
                            transform: 'translateX(500px)',
                        }}
                        end={{
                            transform: 'translatex(0px)',
                        }}
                    >

                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDeatils.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                {/* <div className="about__content__serviceWrapper">
                    <div className="about__content__serviceWrapper__inner__content">
                        <div>
                            <FaDev size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiApple size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                    </div>
                </div> */}

            </div>



        </section>
    )
}
export default About;