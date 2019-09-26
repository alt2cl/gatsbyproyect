import React from 'react'

import './vista_01.sass'

export default class IndexPage extends React.Component {
    render() {
        const { title } = this.props
        return (
            <div className="vista1">
                <p>{title}</p>
            </div>
        )
    }
}