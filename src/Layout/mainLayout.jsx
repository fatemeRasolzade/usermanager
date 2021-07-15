import React from 'react'

const mainLayout = (props) => {
    return (
        <div>
            <nav>
                Main layout
            </nav>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default mainLayout
