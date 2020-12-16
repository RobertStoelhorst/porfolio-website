import Profile from '../images/profile-pic.jpeg';

export const About = () => {
    return (
        <div class="about">      
            <h1 class="title">About me</h1>
            <p>ahahahaAfter 12 years working in the Transport and Logistics industry for a company as a labourer, truck driver and project manager, 
               I have found a new passion in life, I have been inspired to make this change by my need to continually challenge myself and to give my brain some good quality fuel to stay fit and alive!
               All my life I have been passionate about Innovation and technology and I aim to further my knowledge and skill-sets working in computer sciences</p>
            <img class="profile-pic" src={ Profile } height="280px" alt="personal profile picture" />                           
        </div>
    );
}