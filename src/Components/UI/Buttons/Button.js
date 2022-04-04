// import styled from 'styled-components'

// const Button = styled.button`
//     font: inherit;
//     background-color: blueviolet;
//     color: white;
//     border: 1px solid blueviolet;
//     padding: 0.75rem 3rem;
//     border-radius: 10px;
//     cursor: pointer;
//     font-size: 1.10rem;

//     &:disabled{
//         background-color: #ccc;
//         border-color: #ccc;
//         color: darkgrey;
//         cursor: not-allowed;
//     }


//     `;

// export default Button;



import './Button.css'

const Button = (props) => {
    return(
        <button
            type = {props.type || "button"}
            onClick = {props.onbtnClick}
            disabled = {props.btnDisable}
            className= {`button ${props.btnClassName}`}
        >
            {props.children}
        </button>
    )
}

export default Button;