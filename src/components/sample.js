//import bulboff from '../images/bulboff'
//import bulbon from '../images/bulbon'

const Presentation = ({ bulb, switchHandler, image }) => {
    return (
        <div>
            
            <button onClick={switchHandler}>
                {
                    bulb ? "ON" : "OFF"
                }
            </button>

            {
                bulb
                ?
                <img src="../images/bulbon.jpg" alt=""/>
                :
                <img src="../images/bulboff.jpg" alt=""/>
            }

        </div>
    )
}
export default Presentation




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
            bulb: this.state.bulb ? false : true
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

export default Container