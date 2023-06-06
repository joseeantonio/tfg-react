import React from "react";
import Checkbox from "./Checkbox";
import styled from "styled-components";

const Filter = ({name,options,width,margin,filters, setFilters}) => {

    const handleCheckbox = (option, checked) => {
      if (checked) {
        setFilters([...filters, option])
      } else {
        setFilters(filters.filter((filter) => filter !== option))
      }
    }

    return(
        <Sdiv width={width} margin={margin}>
            <Sh1>{name}</Sh1>
            {
                options.map((option, index) => (
                    <Checkbox key={index} label={option} fontSize={"19px"} onChange={handleCheckbox} />
                ))
            }
        </Sdiv>
    )
}

const Sh1 = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  border-bottom: 1px solid black;
  padding-left: 10px;
  margin-bottom: 10px;
`

const Sdiv = styled.div`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`
export default Filter