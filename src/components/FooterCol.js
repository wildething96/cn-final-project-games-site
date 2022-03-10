import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ColStyle = styled.div`
  .heading {
    font-size: 2rem;
    margin: 2.9rem 0;
    white-space: nowrap;
  }
  ul {
    list-style: none;
    margin-left: -2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.4rem;
    text-decoration: none;
    color: var(--grey-1);
  }
`;

export default function FooterCol({
  heading = "Col Heading",
  links = [
    {
      type: "Link",
      title: "Home",
      path: "/home",
    },
    {
      type: "Link",
      title: "About",
      path: "/about",
    },
  ],
}) {
  return (
    <ColStyle>
      <h2 className="heading">{heading}</h2>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === "Link" ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyle>
  );
}
