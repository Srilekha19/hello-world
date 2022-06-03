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
