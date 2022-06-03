import React from 'react'
import Presentation from './Presentation'                

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            bulb: false  
        }
    }

    switchHandler = () => {
        this.setState({
            bulb: this.state.bulb ? false : true,
        })
    }
    render() {
        return (
            <Presentation
                {...this.state}
                switchHandler={this.switchHandler}
            />
        )
    }
}

export default Container;