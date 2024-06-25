import React, { useState } from 'react'
import styled from "styled-components";
import Button_cp from './Button_cp';

const Header_cp = (props) => {

  const [selectBtn, setSelectedBtn] = useState("all");

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      props.setFilteredData(props.data); // Reset filtered data when search input is empty
    } else {
      const filters = props.data?.filter((food) =>
        food.name.toLowerCase().includes(searchValue)
      );
      props.setFilteredData(filters); // Update filtered data based on search value
    }


  };

  const filter_by_type = (type) => {

    if (type === "all") {
      props.setFilteredData(props.data);
      return;
    }

    const filters = props.data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    // console.log(filters)
    props.setFilteredData(filters); // Update filtered data based on search value
    return;
  };

// this is more precise way to add button so that our task becomes less... alternative see in one note
  const filter_buttons =[
    {
      name:"all",
      type:"all",
    },
    {
      name:"breakfast",
      type:"breakfast",
    },
    {
      name:"lunch",
      type:"lunch",
    },
    {
      name:"dinner",
      type:"dinner",
    },
  ]

  return (
    <>
      <Container>
        <div className="main_header">
          <div className="logo">FOODY CORNER</div>
          <div className="search_bar"><input type="search" onChange={searchFood} name="" id="" placeholder="search..." /></div>
        </div>

        {/* <div className="filter_buttons">
          <Button_cp onClick={filter_by_type} temp="all" className='btn' name="ALL" />
          <Button_cp onClick={filter_by_type} temp="breakfast" className='btn' name="BREAKFAST" />
          <Button_cp onClick={filter_by_type} temp="lunch" className='btn' name="LUNCH" />
          <Button_cp onClick={filter_by_type} temp="dinner" className='btn' name="DINNER" />
        </div> */}

<div className="filter_buttons">
{filter_buttons.map((value)=>(

<Button_cp key={value.name} onClick={filter_by_type} temp={value.type} className='btn' name={value.name} />
))}
</div>




      </Container>
    </>
  )
}

export default Header_cp;


const Container = styled.div`
height : 150px;
width : 100%;
background-color : black;
color : white;


.logo{
font-size:30px;
}

.main_header{
display:flex;
justify-content:space-between;
padding:2%;

}

.search_bar input{
height:36px;
padding:4px;
border-radius:10px;
width:300px;
color:red;
}

.filter_buttons{
display:flex;
justify-content:center;
}


`;

