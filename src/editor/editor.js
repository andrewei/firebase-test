
import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class EditorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            title: "",
            id: ""
        }
    }

    componentDidMount() {
        this.setState({
            body: this.props.selectedNote.body,
            title: this.props.selectedNote.title,
            id: this.props.selectedNote.id
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.selectedNote.id !== prevProps.selectedNote.id )  {
            this.setState({
                body: this.props.selectedNote.body,
                title: this.props.selectedNote.title,
                id: this.props.selectedNote.id
            });
        }
    }

    render() {
        const { classes } = this.props;
        const { body } = this.state;

        return (
            <div className={classes.editorContainer}>
                <BorderColorIcon className={classes.editIcon} />
                <input
                    className={classes.titleInput}
                    placeholder={"Note title..."}
                    value={this.state.title? this.state.title : ""}
                    onChange={(e) => this.updateTitle(e.target.value)}
                />
                <ReactQuill
                    value={ body }
                    onChange={this.updateBody}
                />
            </div>
        );
    }

    updateTitle = async (val) => {
        await this.setState({title: val});
        this.update();
    }

    updateBody = async (val) => {
        await this.setState({body: val});
        this.update();
    };

    update = debounce(() => {
        this.props.updateNote(this.state.id, {
            title: this.state.title,
            body: this.state.body
        });
        //TODO
    }, 1500);
}

export default withStyles(styles)(EditorComponent);