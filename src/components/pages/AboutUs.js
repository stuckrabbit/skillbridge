import AchievementsTemplate from "../aboutus/AchievementsTemplate";
import Banner from "../aboutus/Banner";
import GoalsTemplate from "../aboutus/GoalsTemplate";
import FooterSection from "../shared/FooterTemplate";
import HeaderTemplate from "../shared/HeaderTemplate";
import PageHeadingTemplate from "../shared/PageHeadingTemplate";
import SaleLinkTemplate from "../shared/SaleLinkTemplate";

function AboutUs()
{
    return(<>
        <SaleLinkTemplate linkText="Free Courses 🌟 Sale Ends Soon, Get It Now  &#8594;"/>
        <HeaderTemplate/>
        <PageHeadingTemplate heading="About Skillbridge" description="Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and 
        knowledge needed to succeed in the ever-evolving digital landscape."/>
        <AchievementsTemplate/>
        <GoalsTemplate/>
        <Banner/>
        <FooterSection/>
    </>);
}

export default AboutUs;