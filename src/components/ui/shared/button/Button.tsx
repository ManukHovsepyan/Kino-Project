import * as React from "react"
const Button = (props: any) => {
    const buttonStyle = {
        backgroundColor: props.backgroundColor || 'blue',
        width: props.width || "100%",
        border: props.border || "none",
        color: props.color || "white",
        height: props.height || "40px",
        backgroundImage: props.backgroundImage,
        borderRadius: props.borderRadius,

    }
    return (
        <button style={buttonStyle}>
            {props.text}
        </button>
    )
}

export default Button