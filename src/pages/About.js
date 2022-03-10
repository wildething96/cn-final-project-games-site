import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export const About = () => {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, <span>Welcome Player and Creators</span>
              </p>
              <h2 className="about__heading">Our Mission</h2>
              <div className="about__info">
                <PText>
                  Are you enthusiast about playing classic arcade games PlayFree
                  arcade games online right here,right now! Our collection of
                  classic browser games means no downloads are necessary.
                  <br /> <br />
                  Whether you're feeling nostalgic for classic arcade games,
                  including Street fighter and Doom, or looking to try more
                  modern favourites, we've got all the arcade games needed to
                  keep you entertained for hours. Forget fumbling with coins at
                  an arcade game machine; simply play for free instantly here.
                  <br />
                  <br />
                  If you want us to add more games or create your own. Please
                  feel free to contact us, your request will go through our
                  review process and we will get back to you soon as possible.
                </PText>
              </div>
              <Button btnText="Download Brochure" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Info</h1>

              <AboutInfoItem
                title="Monetization"
                items={['We are collection of game and web developes']}
              />
              <AboutInfoItem
                title="Data"
                items={['2 million unique players, get access to data insigns']}
              />
              <AboutInfoItem
                title="Studios"
                items={['Bandai Namco, Supercell ,Capcom, Nintendo']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Tech</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT', 'Netlify']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'Heroku', 'MongoDB', 'Mongoose']}
              />
              <AboutInfoItem
                title="Design"
                items={['Photoshop', 'After Effects', 'Figma']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2020-2022"
                items={['Junior developer at Code Nation']}
              />
              <AboutInfoItem
                title="2020-2022"
                items={['Front end developer at Code nation ']}
              />
              <AboutInfoItem
                title="2022-"
                items={['Freelance web Developer']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
