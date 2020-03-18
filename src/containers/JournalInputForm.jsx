import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";
import {addEntry} from '../actions/journal'
// import '../JournalInputForm.styles.css'

class JournalInputForm extends React.Component {
    state = {
        entry_text: "",
        feeling_name: "", 
        song_id: this.props.songId
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        debugger
        e.preventDefault()
        console.log(this.state)
        this.props.addEntry(this.state).then(() =>
        this.props.history.push('/journal'));
        
  

        this.setState({
            entry_text: "",
            feeling_name: "", 
            song_id: ""
        })

        this.props.resetForm()
    }

    render () {
        return (
            <div>
                <h3>Create a Journal Entry</h3>
                <form onSubmit={this.handleSubmit} >
                    <label>How does this song make you feel?</label><br/>
                    <input type="text" name="feeling_name" value={this.state.feeling_name} onChange={this.handleChange} placeholder="Happy" />
                    <br/><br/>
                    <label>What do you think of this song?</label><br/>
                    <textarea name="entry_text" value={this.state.entry_text} onChange={this.handleChange} placeholder="Love to listen when cooking" />
                    <br/><br/>
                    <button type="submit">Add Entry</button> 
                </form>
            </div>
        )
    }      

    
}
    
export default withRouter(connect (null, {addEntry}) (JournalInputForm));