import React from "react";
import styled from "styled-components";
import HeroImg from "../assets/images/Arcade.jpg";
import SocialMediaArrow from "../assets/images/social-media-arrow.svg";
import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg";

const HeroStyles = styled.div`
margin-top: -10rem;
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: 0rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: "Montserrat SemiBold";
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -13rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 45px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 60px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 5rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  margin-top: 7rem;
  padding: 1rem 4rem;
  font-size: 2em;
  cursor: pointer;
  border-radius: 15px;
  background: var(--gray-2);
  color: var(--gray-1);
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(200, 200, 200, 0.8) 0px 0px 16px 8px;
`;

export const HeroSection = () => {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            {/* <span>Hello</span> */}
            <span className="hero__name">Games Library</span>
          </h1>
          <div className="hero__img">
            <Image src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            {/* <PText>
              My name is sattar.
            </PText> */}
            <Button btnLink="/projects">Click For Games</Button>
          </div>

        </div>
      </div>
    </HeroStyles>
  );
};

// </div>
// <div className="hero__social">
//   <div className="hero__social__indicator">
//     <p>GitHub</p>
//     <img src={SocialMediaArrow} alt="icon" />
//   </div>
//   <div className="hero__social__text">
//     <ul>
//       <li>
//         <a
//           href="https://github.com/MrPiccolo23"
//           target="_blank"
//           rel="noreferrer"
//         >
//           SN
//         </a>
//       </li>
//       <li>
//         <a
//           href="https://github.com/wildething96"
//           target="_blank"
//           rel="noreferrer"
//         >
//           BW
//         </a>
//       </li>
//       <li>
//         <a
//           href="https://github.com/DannyABoat"
//           target="_blank"
//           rel="noreferrer"
//         >
//           DB
//         </a>
//       </li>
//       <li>
//         <a
//           href="https://wearecodenation.com/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           LI
//         </a>
//       </li>
//     </ul>
//   </div>
// </div>
// <div className="hero__scrollDown">
//   <p>Scroll</p>
//   <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
// </div>
// </div>
// </div>