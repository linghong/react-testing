import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', ()=>{
	let app = mount (<App />);

	it ('renders the App title', ()=>{
		//console.log(app.debug());
		expect(app.find('h2').text()).toEqual('Notes');
	});

	it('render the clear button', ()=>{
		if(app.find('.btn').length==2){
			expect(app.find('.btn').at(1).text()).toEqual('Clear Notes');
		}
	});

	describe('when rendering the form', ()=>{
		it('creates a Form component', ()=>{
			expect(app.find('Form').exists()).toBe(true);
		});
		it('renders a FormControl component', ()=>{
			expect(app.find('FormControl').exists()).toBe(true);
		});
		it('render a submit button', ()=>{
			expect(app.find('Button').at(0).text()).toEqual('Submit');;
		});
	})
});