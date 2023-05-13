import styled from "styled-components";

const ButtonSubmit = ({label,onclick,color,backgroundColor,margin,padding,height,width,borderRadius}) => {
    return(
        <Sbutton
            type="submit"
            color={color}
            onClick={onclick}
            backgroundColor={backgroundColor}
            margin={margin}
            padding={padding}
            height={height}
            width={width}
            borderRadius={borderRadius}
        >
            {
                label &&
                <Sspan>{label}</Sspan>
            }
        </Sbutton>
    )
}


const Sbutton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  width: 504px;
  height: 37px;
  margin: 0 auto;
  border-radius: 5px;
`

const Sspan = styled.span`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`


export default ButtonSubmit