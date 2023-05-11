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
                <span>{label}</span>
            }
        </Sbutton>
    )
}


const Sbutton = styled.button`

  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

`
export default ButtonSubmit