import styled from "styled-components";
import { useState } from "react";
import { GoSettings } from "react-icons/go";
import React, { Component } from "react";
import { ToggleSwitch } from "../components/toggleSwitch";

export const Profile = () => {
  const [editable, setEditable] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div>
      <Title>Profile Dashboard</Title>
      <Container>
        <InnerContainer>
          <Menu>
            <Picture
              src="https://www.nicepng.com/png/full/799-7998295_profile-placeholder-woman-720-profile-photo-placeholder-png.png"
              alt="Profile Picture"
            />
            <h2>My Profile</h2>
            <p>First Name</p>
            <Input editable={editable} contentEditable={editable}>
              Bill
            </Input>
            <p>Last Name</p>
            <Input editable={editable} contentEditable={editable}>
              Jones
            </Input>
            <p>Username</p>
            <Input editable={editable} contentEditable={editable}>
              TheBills91
            </Input>
            <p>Email</p>
            <Input editable={editable} contentEditable={editable}>
              BillJ@email.co.uk
            </Input>
            <Buttons>
              <button onClick={() => setEditable(true)}>Edit</button>
              <button onClick={() => setEditable(false)}>Save</button>
            </Buttons>
          </Menu>
        </InnerContainer>
        <InnerContainer>
          <Menu>
            <Split>
              <div>
                <h2>Settings</h2>
                <p>Dark Theme</p>
              </div>
              <div>
                <Icon size={28} />
                <React.Fragment>
                  <ToggleSwitch label=" " />
                </React.Fragment>
              </div>
            </Split>
            {/* <h2>
              Settings <Icon />
              <React.Fragment>
                <ToggleSwitch label="Dark Theme" />
              </React.Fragment>
            </h2> */}
          </Menu>
          <Menu></Menu>
        </InnerContainer>
      </Container>
    </div>
  );
};

const Title = styled.h1`
  text-align: center;
  color: lightgrey;
  font-size: 3.5em;
  margin: 6rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 70%;
  padding: 0.5rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-flow: wrap;
  background: rgba(200, 200, 200, 0.3);
  color: white;
  border-radius: 15px;
`;

const InnerContainer = styled.div`
  width: 50%;
  display: flex;
  flex-flow: nowrap column;
`;

const Menu = styled.div`
  width: 80%;
  background: white;
  padding: 2.1rem;
  border-radius: 10px;
  margin: 0.75rem auto;
  flex-grow: 1;
  color: #342f38;
  h2 {
    margin: 0 0 3rem 0;
  }
  p {
    font-weight: 600;
    font-size: 1.2em;
  }
`;

const Picture = styled.img`
  background: rgba(70, 70, 50, 0.4);
  width: 100%;
  display: block;
  margin-bottom: 2rem;
  border-radius: 5px;
  border-top: 10px solid #342f38;
  border-bottom: 10px solid #342f38;
`;

const Input = styled.div`
  width: 97%;
  border-bottom: 1px solid lightgrey;
  border-radius: 5px;
  padding: 0.2rem;
  color: #342f38;
  font-weight: 400;
  font-size: 1em;
  ${({ editable }) =>
    editable && `background: #eae6ed; border: 1px solid black `}
`;

const Buttons = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  button {
    padding: 0.7rem 4rem;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.1em;
    color: white;
    background: #3b7494;
  }
`;

const Split = styled.div`
  display: flex;
  flex-flow: nowrap row;
  width: 100%;
  justify-content: space-between;
`;

const Icon = styled(GoSettings)`
  margin-left: 1.5rem;
`;
