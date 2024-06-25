
import React from 'react'
import styled from 'styled-components';
import { BASE_URL } from '../App';

const Card_cp = ({ data }) => {   // here i have used destructuring........instead of props i destructured into data so i can direct acces data
  console.log(data);
  return (

    //here instead of div we used this names ...so that below we can use styled components and give what tag we want like div or button

    <div style={{ display: "flex", flexWrap: "wrap" }}>

      {data?.map((food) => (
        <MainContainer key={food.name}>
          <LeftContainer>
            <img src={BASE_URL + (food.image)} />
          </LeftContainer>
          <RightContainer>
            <div className="heading">{food.name}</div>

            <div className="para">{food.text}</div>
            <div className="button"><button>{"$" + food.price}</button></div>
          </RightContainer>
        </MainContainer>
      ))}

    </div>
  )
}

export default Card_cp;


const MainContainer = styled.div`
width: 390px;
display: flex;
padding: 20px;
border: 2px solid red;
margin: 20px;

`
const LeftContainer = styled.div`
margin: 10px;
img{
  /* width: 100%;
  height:100%;
  border-radius: 50%; */
}

`
const RightContainer = styled.div`
margin: 10px;

.heading{
  font-weight: bold;
  margin-bottom: 5%;
}

.button{
  margin-top: 5%;
}

`