import React, { Component } from 'react';
import {Form, FormControl, Button} from  'react-bootstrap';
import Note from './note';
class App extends Component {
	constructor(){
			super();
			this.state= {
				text: '',
				notes: []
			};
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
	}

	render(){		
		return (
			<div>
				<h2> Notes</h2>
				<Form inline>
					<FormControl onChange={this.onFormChange}/>
					{''}
					<Button onClick={this.onFormSubmission}>Submit</Button>
				</Form>
				{
					this.state.notes.map((note,i)=>{
						return (
							<Note key={i} note={note} />
						);
					})
				}
			</div>
		)
	}
}

export default App;