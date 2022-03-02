import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { withTheme } from "styled-components";

export const Navbar = ({ loggedIn }) => {
  const [open, setOpen] = useState(false);

  const style = { textDecoration: "none", color: "white" };

  return (
    <div>
      <StyledNavbar>
        <Button onClick={() => setOpen(!open)}>Open</Button>
        <Flex open={open}>
          <SyledLink to="/" style={style}>
            {" "}
            Home{" "}
          </SyledLink>
          {loggedIn ? (
            <SyledLink to="/profile" style={style}>
              {" "}
              Profile{" "}
            </SyledLink>
          ) : (
            <SyledLink to="/login" style={style}>
              {" "}
              Login{" "}
            </SyledLink>
          )}
          {!loggedIn && (
            <SyledLink to="/register" style={style}>
              {" "}
              Register{" "}
            </SyledLink>
          )}
          <SyledLink to="/faqs" style={style}>
            {" "}
            FAQs{" "}
          </SyledLink>
          <SyledLink to="/getintouch" style={style}>
            {" "}
            Get in Touch
          </SyledLink>
        </Flex>
        )
      </StyledNavbar>
    </div>
  );
};

const StyledNavbar = styled.div`
  box-styling: border-box;
  position: fixed;
  top: 0;
  height: 100%;
`;

const Button = styled.div`
  border: 3px solid lightgrey;
  ${({ open }) =>
    open
      ? `
  width: 50px;
  `
      : `width : 250;`}
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  padding: 1rem;
  color: white;
  background-color: #073f59;
  background-image linear-gradient( #073f59 30%, #0c7aad 74%);
  z-index: 10;
  border-bottom-right-radius: 5px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid lightgrey;
  border-top: none;
  ${({ open }) =>
    open
      ? `
  width: 250px;
  padding: 1rem;
  height: 100%;
  `
      : `
    display: none;
  width: 0px;
  padding: 0rem;
  `}
  height: 100%;
  color: white;
  background-color #9921e8;
  background-image linear-gradient(315deg, #f062fc 3%, #9921e8 50%, #0c7aad 74% );
  #z-index: 10;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: 1s ease;
`;

const SyledLink = styled(Link)`
  margin: 2rem 0;
`;
