import React from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Icon from "./Icon";
import LoginInfo from "./LoginInfo";
import Button from "@material-ui/core/Button";
import LoginInput from "../containers/LoginInput";
const styles = theme => ({
  root: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "white",
  },
  button: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width:"50%"
  },
  paper: {
    paddingTop:10,
    marginTop: "10%",
    width: 400,
    marginLeft: "auto",
    marginRight: "auto",
    display:"flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

class Login extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { loading:false,userName: "", password: "", error: "" };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleClick() {
  //   if ((!this.state.userName) && this.state.userName.length <= 0) {
  //     alert("用户名不能为空");
  //     return;
  //   }
  //   if ((!this.state.password) && this.state.password.length <= 0) {
  //     alert("密码不能为空");
  //     return;
  //   }
  //   this.setState({loading:true});
  //   fetchLogin(this.state.userName, this.state.password).then(
  //     value => {
  //       this.setState({loading:false});
  //       this.props.handleLoginChange({ login: true, userId: value.userId,userName:value.username });
        
  //     },
  //     error => {
  //       this.setState({ loading:false,error: (error.error?error.error:"Uh oh,some error happened!") });
  //     }
  //   );
  // }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Icon />
          <LoginInfo loginInfo={this.props.loginInfo} />
          <LoginInput/>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={()=>this.props.handleClick()}
            disabled = {this.props.loading}>
            {this.props.loading?"Loggin in...":"Login"}
          </Button>
        </Paper>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
