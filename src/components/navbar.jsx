import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useDimensions } from "../utils/dimensions";
import { motion } from "framer-motion";
import { linkData } from "../utils/linkData";

const flexVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 130.5px 128.5px)`,
    transition: {
      type: "spring",
      stiffness: 30,
      restDelta: 2,
      delayChildren: 0.15,
      staggerChildren: 0.1,
    },
  }),
  closed: {
    clipPath: "circle(45px at 130.5px 128.5px)",
    transition: {
      delay: 0.8,
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.11,
      staggerDirection: -1,
    },
  },
};

const linkVariants = {
  open: {
    opacity: 1,
    transition: {
      type: "tween",
    },
  },
  closed: {
    opacity: 0,
  },
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 21%, 92%)"
    strokeLinecap="round"
    {...props}
  />
);

export const Navbar = ({ loggedIn, setLoggedIn, setProfile }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const style = { textDecoration: "none", color: "white" };

  const logOut = () => {
    setLoggedIn(false);
    setOpen(false);
    setProfile({});
  };
  return (
    <div>
      <StyledNavbar>
        <Flex
          open={open}
          variants={flexVariants}
          initial={false}
          animate={open ? "open" : "closed"}
          height={height}
          ref={containerRef}
        >
          <Button
            onClick={() => setOpen(!open)}
            whileHover={{
              boxShadow: "0px 0px 8px rgb(255, 255, 255)",
              background: "LightBlue",
              filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))",
            }}
          >
            <svg width="50" height="50" viewBox="-1 0 23 23">
              <Path
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
              />
              <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
              />
              <Path
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
              />
            </svg>
          </Button>
          {linkData.map(
            (link) =>
              (link.loggedIn === 0 ||
                (link.loggedIn === 1 && loggedIn) ||
                (link.loggedIn === 2 && !loggedIn)) && (
                <SyledLink
                  key={linkData.indexOf(link)}
                  onClick={
                    link.title === "Log Out"
                      ? logOut
                      : () => setOpen(!open)
                  }
                  to={link.url}
                  style={style}
                  variants={linkVariants}
                  whileHover={{
                    background: "LightBlue",
                    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                  }}
                >
                  <h3>{link.title}</h3>
                </SyledLink>
              )
          )}
        </Flex>
        )
      </StyledNavbar>
    </div>
  );
};

const StyledNavbar = styled(motion.div)`
  box-styling: border-box;
  position: fixed;
  top: 0;
  height: 100%;
  z-index: 9000;
`;

const Button = styled(motion.div)`
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  width: 80px;
  height: 80px;
  border-radius: 100px;
  margin: 5.5rem 0 5.5rem 5.5rem;
  color: white;
  z-index: 9000;
  border: 2px solid lightgrey;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

const Flex = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border: 3px solid lightgrey;
  border-top: none;
  height: 100%; 
  width: 250px;
  background-color #7c3aa6;
  background-image linear-gradient(315deg,  #b33ba7 3%, #46265c 50%, #0c7aad 74%, #073f59 100% );
  z-index: 9000;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const SyledLink = styled(motion(Link))`
  text-align: center;
  padding: 2rem;
  white-space: nowrap;
  font-weight: 600;
  border-top: 3px solid lightgrey;
  background: transparent;
  box-shadow: rgba(52, 50, 54, 0.17) 0px -23px 25px 0px inset,
    rgba(52, 50, 544, 0.15) 0px -36px 30px 0px inset,
    rgba(52, 50, 54, 0.1) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  &:last-child {
    border-bottom: 3px solid lightgrey;
  }
`;
