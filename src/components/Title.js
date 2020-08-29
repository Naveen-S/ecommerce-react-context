import React from 'react'

export default function Title({name}) {
    return (
        <div>
            <h3 className="text-center p-3 font-weight-bold text-uppercase">
                {name}
            </h3>
        </div>
    )
}
