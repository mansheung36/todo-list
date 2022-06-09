import React from 'react'

export default function TodoItem({ content }) {
    return (
        <div>

            <div className="card" style={{ margin: "20px 0" }}>

                <div className="card-body">
                    <p className="card-text">{content}</p>


                </div>
            </div>

        </div>
    )
}
