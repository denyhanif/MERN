import React from 'react'
import propTypes from  'prop-types'

export default function index() {
    return (
        <div>
            
        </div>
    )
}

Text.dafaultProps = {
    type: "text",
    pattern: "",
    placeholder: "Please type here..",
    errorResponse: "Please match the requested format"
}

Text.propTypes = {
    name: propTypes.string.isRequired,
    value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
    onChange: propTypes.func.isRequired,
    prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
    append: propTypes.oneOfType([propTypes.number, propTypes.string]),
    type: propTypes.string,
    placeholder: propTypes.string,
    outerClassName: propTypes.string,
   inputClassName: propTypes.string,  
   
}
