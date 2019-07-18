
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebarItem';

class SidebarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addingNote: false,
            title: null
        }
    }

    render() {
        const { notes, classes, selectedNoteIndex } = this.props;
        const { addingNote, title } = this.state;

        if(notes) {
            return (
                <div className={classes.sidebarContainer}>
                    <Button
                        onClick={this.newNoteBtnClick}
                        className={classes.newNoteBtn}
                        href={""}
                    >
                        {addingNote ? "Cancel" : "New Note"}
                    </Button>
                    {
                        addingNote ?
                            <div>
                                <input
                                    type={"body"}
                                    className={"Classes.newNoteInput"}
                                    placeholder={"Enter note title"}
                                    onKeyUp={(e) => this.updateTitle(e.target.value)}
                                />
                                <Button
                                    className={classes.newNoteSubmitBtn}
                                    onClick={this.newNote}
                                >
                                    Submit Note
                                </Button>
                            </div> :
                            null
                    }
                    <List>
                        {
                            notes.map((_note, _index) => {
                                return(
                                    <div key={_index}>
                                        <SidebarItemComponent
                                            _note={_note}
                                            _index={_index}
                                            selectedNoteIndex={selectedNoteIndex}
                                            selectNote={this.selectNote}
                                            deleteNote={this.deleteNote}
                                        />
                                        <Divider/>
                                    </div>
                                )
                            })
                        }
                    </List>
                </div>
            );
        }
        else {
            return(<div>Loading</div>);
        }

    }

    newNoteBtnClick = () => {
        console.log("NEW NOTE");
        this.setState({
            addingNote: !this.state.addingNote,
            title: ""
        })
    }

    updateTitle = (title) => {
        this.setState({title: title});
    };

    newNote = () => {
        this.props.newNote(this.state.title);
        this.setState({title: null, addingNote: false});
    }

    selectNote = (note, index) => {
        this.props.selectNote(note, index);
    }

    deleteNote = (note) => {
        this.props.deleteNote(note);
    }
}

export default withStyles(styles)(SidebarComponent);