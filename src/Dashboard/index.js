import React from "react";
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TitleBar from './TitleBar';
import AddInput from './AddInput';
import TodoList from './TodoList';
import getList from './get-list';

const styles = {
    root: {
        width: '100%',
    },
    title: {
        marginLeft: 12,
        marginTop: 10
    }
};

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: "", loading: true }
    }
    componentDidMount() {
        getList(this.props.userId, (data) => {
            this.setState({ data: data, loading: false });
        }, (error) => {
            this.setState({ loading: false });
            // alert("列表请求失败");

        });
    }

    handleDelete(id) {
        const data = this.state.data;
        if (data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].id === id) {
                    data[i].completed = true;
                    this.setState(data);
                    break;
                }
            }
            console.log(this.getCount(data));
            
        } else {
            alert('无法删除');
        }

    }

    handleAdd(name) {

        let data = this.state.data;
        if (!data) {
            data = [];
        }
        const maxId = this.getMaxId(data);
        data.push(
            {
                "userId": this.props.userId,
                "id": (maxId + 1),
                "title": name,
                "completed": false
            }
        );
        this.setState(data);
        console.log(this.getCount(data));

    }

    getMaxId(data) {
        let id = 0;
        data.forEach(element => {
            id = element.id > id ? element.id : id;
        });
        return id;
    }

    getCount(data) {
        let count = 0;
        data.forEach((ele) => {
            if (!ele.completed) {
                count++;
            }
        });
        return count;
    }

    render() {
        const { classes } = this.props;
        return (

            <div className={classes.root}>
                <TitleBar loading={this.state.loading} />
                <Typography className={classes.title} variant="h4" gutterBottom>
                    Todo Form
                </Typography>
                <AddInput handleAdd={(name) => this.handleAdd(name)} />
                <Typography className={classes.title} variant="h4" gutterBottom>
                    Todo List
                </Typography>
                {this.state.data &&
                    <TodoList list={this.state.data} handleDelete={(id) => this.handleDelete(id)}></TodoList>
                }
            </div>

        );
    }
}

// export default Dashboard;
Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
