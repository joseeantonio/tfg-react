import React from "react";
import styled from "styled-components";

const TextTarea = ({ label, height, width, onChange, placeholder, margin,name }) => {
    return (
        <Slabel margin={margin}>
            {label && <Sspan>{label}</Sspan>}
            <Stextarea height={height} width={width} placeholder={placeholder} onChange={onChange} name={name} />
        </Slabel>
    );
};

const Stextarea = styled.textarea`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  max-width: ${(props) => (props.width ? props.width : "100%")};
  min-width: ${(props) => (props.width ? props.width : "100%")};
  min-height: ${(props) => (props.height ? props.height : "100%")};
`;

const Sspan = styled.span`
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: 'Inter';
  font-size: 20px;
`;

const Slabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 3px;
  margin: ${(props) => props.margin};
`;

export default TextTarea;