import React from "react"
//import PropTypes from "prop-types"
import { Avatar, CssBaseline, Grid, Box, Typography, Container, IconButton, InputAdornment, Link, makeStyles, TextField, withStyles, Switch, Button } from "@material-ui/core"
import { LockOutlined as LockOutlinedIcon, Visibility as VisibilityIcon, VisibilityOff as VisibilityOffIcon } from "@material-ui/icons"


const useStyles = makeStyles((theme) => ({

  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },

  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  submit: {
    margin: theme.spacing(3, 0, 2)
  }

}))

/*const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);*/

/*const [state,setState] =  useState({
    checked: true,
})

const handleChange = (event) => {
  setState({ ...state, [event.target.name]: event.target.checked });
};*/

/*function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}*/

function Presentation(props) {
  //const { fname, lname, phneno, email, password, frn, showPassword, setFname, setLname, setPhneno, setEmail, setPassword, setFrn, onSignUp } = props
  const classes = useStyles()
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form >

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fname"
            label="First Name"
            autoFocus
            //value={fname}
            //onChange={(e) => { setFname(e.target.value) }}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lname"
            label="Last Name"
            autoFocus
            //value={lname}
            //onChange={(e) => { setLname(e.target.value) }}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phneno"
            label="Phone"
            name="phneno"
            autoFocus
            //value={phneno}
            //onChange={(e) => { setPhneno(e.target.value) }}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="frn"
            label="FRN"
            name="frn"
            autoFocus
            //value={frn}
            //onChange={(e) => { setFrn(e.target.value) }}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            //value={email}
            //onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Create Password"
            name="Password"
            autoFocus
            //onChange={(e) => setPassword(e.target.value)}
            //value={password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={(e) => handleKeyValue("showPassword", !showPassword)}
                    /*onMouseDown={(e) => {
                      e.preventDefault()
                    }}*/
                    edge="end"
                  >
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

      <Button type="submit" variant="contained" color="secondary" className={classes.root}>
        SignUp
      </Button>

          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Have an account? Login"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

/*Presentation.propTypes = {
  fname: PropTypes.any,
  lname: PropTypes.any,
  email: PropTypes.any,
  phneno: PropTypes.any,
  password: PropTypes.any,
  frn: PropTypes.any,
  onSignUp: PropTypes.any,
  setFname: PropTypes.func,
  setLname: PropTypes.func,
  setPhneno: PropTypes.func,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
  showPassword: PropTypes.any,
  setFrn: PropTypes.func
}*/

export default Presentation
