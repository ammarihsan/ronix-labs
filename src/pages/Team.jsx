import React from 'react';
import Layout from '../layouts/Layout';

const Team = () => {
    const teamMembers = [
        {
            name: "Delwar hossain",
            designation: "web developer",
            image: "/assets/img/home-2/team/teamThumb1_2.png"
        },
        {
            name: "Sophia williams",
            designation: "Creative Director",
            image: "/assets/img/home-2/team/teamThumb1_1.png"
        },
        {
            name: "David johnson",
            designation: "Lead Developer",
            image: "/assets/img/home-2/team/teamThumb1_3.png"
        },
        {
            name: "Olivia davis",
            designation: "Content Strategist",
            image: "/assets/img/home-2/team/teamThumb1_4.png"
        }
    ];

    return (
        <Layout>
            <div className="breadcrumb-page-area-one">
                <div className="breadcrumb-page-wrap pb-150">
                    <div className="container">
                        <div className="gt-breadcrumb-wrapper mb-0">
                            <div className="title title-1">Our awesome team</div>
                            <div className="right-contents">
                                <p className="pra-text">
                                    We work together by prioritizing quality, time, and innovation in every project. Client satisfaction is our main goal, and that is the true strength of our team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-members team-members-page pb-150">
                <div className="container">
                    <div className="section-title mb-75">
                        <div className="title">Core team the driving force behind our vision and success</div>
                    </div>
                    <div className="row gy-5">
                        {teamMembers.map((member, index) => (
                            <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                                <div className="team-card">
                                    <div className="thumb">
                                        <img src={member.image} alt={member.name} />
                                    </div>
                                    <div className="team-member-info mt-3">
                                        <div className="name"><a className="text-black" href="#">{member.name}</a></div>
                                        <p className="designation text-black">{member.designation}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Team;
