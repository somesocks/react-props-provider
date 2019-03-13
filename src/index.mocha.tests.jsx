/* eslint-env node, mocha */

import React from 'react';

import { mount } from 'enzyme';

import { PropsProvider, PropsConsumer } from './';

describe('react-props-provider', () => {
	it('can import PropsProvider');

	it(
		'can render 1',
		() => {
			mount((<div />));
		}
	);

	it(
		'can pass props correctly',
		() => {
			const ExampleConsumer = PropsConsumer(
				(props) => {
					console.log('ExampleConsumer props', props);
					return (<div />);
				}
			);

			const ExampleProvider = PropsProvider(
				(props) => {
					console.log('ExampleProvider props', props);
					return (<ExampleConsumer />);
				}
			);

			mount((<ExampleProvider a="1" b={2} c />));
		}
	);

	it(
		'can pass props correctly 2',
		() => {
			const ExampleConsumer = PropsConsumer(
				(props) => {
					console.log('ExampleConsumer props', props);
					return (<div />);
				}
			);

			const ExampleMiddle = (props) => {
				console.log('ExampleMiddle props', props);
				return (<ExampleConsumer />);
			};

			const ExampleProvider = PropsProvider(
				(props) => {
					console.log('ExampleProvider props', props);
					return (<ExampleMiddle />);
				}
			);

			mount((<ExampleProvider a="1" b={2} c />));
		}
	);

	it(
		'direct props take precedence',
		() => {
			const ExampleConsumer = PropsConsumer(
				(props) => {
					console.log('ExampleConsumer props', props);
					return (<div />);
				}
			);

			const ExampleProvider = PropsProvider(
				(props) => {
					console.log('ExampleProvider props', props);
					return (<ExampleConsumer a="2" />);
				}
			);

			mount((<ExampleProvider a="1" b={2} c />));
		}
	);


});
