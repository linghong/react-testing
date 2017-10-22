import React, { Component } from 'react';
import {Form, FormControl, Button} from  'react-bootstrap';
import Note from './note';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const cookie_key = 'NOTES';

class App extends Component {
	constructor(){
			super();
			this.state= {
				text: '',
				notes: []
			};
		}

	componentDidMount(){
		this.setState ({
			notes: read_cookie(cookie_key)
		});
	}

	onFormChange=(e)=>{
		this.setState({
			text: e.target.value
		});
	}

	onFormSubmission=()=>{
		let { notes, text} = this.state;
		const newNote ={ text };
		notes.push(newNote);
		this.setState({notes});
		bake_cookie(cookie_key, this.state.notes);
	}

	clearNotes =()=>{
		delete_cookie(cookie_key);
		this.setState({notes: []});
	}

	render(){		
		return (
			<div>
				<h2>Notes</h2>
				<Form inline>
					<FormControl onChange={this.onFormChange}/>
					<Button onClick={this.onFormSubmission}>Submit</Button>
				</Form>

				{
					this.state.notes.map((note,i)=>{
						return (
							<Note key={i} note={note} />
						);
					})
				}
				<Button onClick={this.clearNotes} >
					Clear Notes
				</Button>
			</div>
		)
	}
}

export default App;