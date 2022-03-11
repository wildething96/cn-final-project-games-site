import styled from 'styled-components';

export const LoginStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem 0.5rem;
  section {
    width: 100%;
    max-width: 420px;
    min-height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 2.5rem;
    background-color: rgba(200, 200, 200, 0.4);
    border-radius: 12px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    flex-grow: 1;
    padding-bottom: 1rem;
  }

  a,
  a:visited {
    color: #fff;
  }

  input[type='text'],
  input[type='password'],
  input[type='email'],
  button,
  textarea {
    font-size: 22px;
    padding: 0.25rem;
    border-radius: 0.5rem;
    color: var(--gray-1);
    background-color: var(--dark-bg);
    border: none;
  }
  button {
    background-color: var(--gray-1);
    color: var(--black);
    cursor: pointer;
  }

  label,
  button {
    margin-top: 1rem;
    font-size: 1.8rem;
  }

  button {
    padding: 0.5rem;
  }

  .instructions {
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background: #000;
    color: #fff;
    padding: 0.25rem;
    position: relative;
    bottom: -10px;
    text-align: left;
  }

  .instructions {
    & > svg {
      display: inline-block;
      width: 1em;
      margin-right: 0.5rem;
    }
  }

  .offscreen {
    position: absolute;
    left: -9999px;
  }

  .hide {
    display: none;
  }

  .valid {
    width: 1em;
    margin-left: 0.25rem;
    path {
      color: limegreen;
    }
  }

  .invalid {
    width: 1em;
    margin-left: 0.25rem;
    path {
      color: red;
    }
  }

  .errmsg {
    background-color: lightpink;
    color: firebrick;
    font-weight: bold;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .line {
    display: inline-block;
  }
`;
