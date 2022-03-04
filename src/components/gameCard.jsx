import styled from "styled-components";
import styledComponents from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
export const GameCard = (props) => {
  let navigate = useNavigate();

  return (
    <div>
      <Card>
        <div>
          <img src={props.img} alt={props.title} />
        </div>
        <div>
          <h4
            onClick={() => {
              navigate("/Profile");
            }}
          >
            {props.title}
          </h4>
          <p>{props.description}</p>
        </div>
      </Card>
    </div>
  );
};

const Card = styled.div`
  text-align: center;
  width: 400px;
  height: 250px;
  padding: 1rem;
  line-height: 10px;
  margin: 0 2rem;
  border: 5px solid #4d4057;
  border-radius: 20px;
  background: #695669;
  display: flex;
  align-items: space-between;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    0 0 0.05em #fff, 0 0 2.5em #bf52b3, 0 0 0.2em #fe05e1,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    z-index: -1;
  div: first-child { 
    box-sizing: border-box;
    width: 395px;
    height: 163px;
    img {
      background: #695669;
      color: lightgrey;
      border: 3px solid #4d4057;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      width: 99.7%;
      height: 99%;
      pointer-events: none;
      box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
}
div: last-child {
    border: 4px solid #4d4057;
    border-top: 2px solid #4d4057;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    background: #f7f2f7;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
  }
`;
