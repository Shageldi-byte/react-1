import styled, { css } from "styled-components";

export const MyHref = styled.a`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    ${props => css`
        background: ${props.color};
        color: white;
    `}
`

export const Avatar = styled.img`
    
`

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
`

const StyledComponent = () => {
    return (
        <div>
            <MyHref href="#" color={'green'}>Click me</MyHref>
            <a href="fdsfd">dfshh</a>
        </div>
    )
}

export default StyledComponent
