import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 6rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;

  p{
    margin-top: 2.3rem;
    font-size: 1.5em;
    align-text: center;
  }
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3rem;
    margin-bottom: 1rem;
    white-space: nowrap;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Desk 4 Team</h1>
          <p>
            We are junior developers starting out our journey with Code Nation,
            this is our colabrative group project.
          </p>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/getInTouch',
              },
              {
                type: 'Link',
                title: 'Login',
                path: '/login',
              },
              {
                type: 'Link',
                title: 'Register',
                path: '/register',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+0161 533 0541',
                path: 'tel:+0161 533 0541',
              },
              {
                title: 'random@gmail.com',
                path: 'http://gmail.com/',
              },
              {
                title: `UA92, Brian Statham Way, Old Trafford, Stretford, Manchester M16 0PU`,
                path: 'https://www.google.co.uk/maps/place/Code+Nation/@53.4570382,-2.2870365,15z/data=!4m5!3m4!1s0x0:0x965f3c33ead91c5d!8m2!3d53.4573771!4d-2.2872844',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Sattar GitHub',
                path: 'https://github.com/MrPiccolo23',
              },
              {
                title: 'Ben GitHuB',
                path: 'https://github.com/wildething96',
              },
              {
                title: 'Daniel GitHub',
                path: 'https://github.com/DannyABoat',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>
            © 2022 - Sattar, Ben and Daniel | Designed By{' '}
            <a 
              target="_blank"
              rel="noreferrer"
              href="https://wearecodenation.com/"
            >
              CodeNation
            </a>{' '}
          /</p>
        </div>
      </div>
    </FooterStyle>
  );
}
