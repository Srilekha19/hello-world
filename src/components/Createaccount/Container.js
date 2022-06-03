import React, { useState } from "react"
//import { create_account } from "../../middleware"
import { connect } from "react-redux"
import Presentation from "./Presentation"

const Container = () => {

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [phneno, setPhneno] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [frn, setFrn] = useState('')

  const onSignUp = (e) => {
    e.preventDefault()
    _signup(fname, lname, phneno, email, password, frn)
  }

  return (
    <div>
      <Presentation
        onSignUp={onSignUp}
        setFname={setFname}
        setLname={setLname} 
        setPhneno={setPhneno}
        setEmail={setEmail}
        setPassword={setPassword}
        setFrn={setFrn}
        fname={fname}
        lname={lname}
        phneno={phneno}
        email={email}
        password={password}
        frn={frn}
        //auth={auth}
      />
    </div>
  )
}

Container.propTypes = {
  _signup: PropTypes.func,
  auth: PropTypes.object
}

const mapStateToProps = (state) => ({ auth: state.auth });

const mapDispatchToProps = { _signup: signup };

export default connect(mapStateToProps, mapDispatchToProps)(Container);
