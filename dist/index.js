/** @namespace react-props-provider */

import React from 'react';

const DEFAULT_CONTEXT_VALUE = {};
const PropsContext = React.createContext(DEFAULT_CONTEXT_VALUE);


const DEFAULT_PROPS_FROM_CONTEXT = (props, context) => {
	if (context === DEFAULT_CONTEXT_VALUE) {
		return props;
	} else {
		return { ...context, ...props };
	}
};

/**
*
* ```javascript
*   import React from 'react'
*   import { PropsConsumer } from 'react-props-provider'
*
*   // an example component
*   let ExampleComponent = (props) => (
*     <div>{props.name}</div>
*   );
*
*   ExampleComponent = PropsConsumer(ExampleComponent);
*
*   // name will always be bob, since the prop is defined directly
*   let a = (<ExampleComponent name="bob" />);
*
*   // if 'name' was provided by a parent component, it would be used
*   let b = (<ExampleComponent />);
* ```
*
* PropsConsumer is a React HOC that wraps a React class,
* and returns a new React class that uses the props-provider context
* to provide default props to the wrapped component
*
* @param {} reactClass - the react class / function to wrap with a prop.
* @param {function} propsFromContext - an optional function to customize which context props you want to consume.
* @returns {} a wrapped react class
* @memberof react-props-provider
*/
const PropsConsumer = (reactClass, propsFromContext = DEFAULT_PROPS_FROM_CONTEXT) => {

	class _propsConsumerInstance extends React.Component {
		render() {
			const { context, props } = this;
			const newProps = propsFromContext(props, context);
			return React.createElement(reactClass, newProps);
		}
	}
	_propsConsumerInstance.contextType = PropsContext;

	return _propsConsumerInstance;
};


const DEFAULT_PROPS_TO_CONTEXT = (props, context) => ({ ...context, ...props });

/**
*
* ```javascript
*   import React from 'react'
*   import { PropsProvider } from 'react-props-provider'
*
*   // an example component
*   let ExampleComponent = (props) => (
*     <div>{props.name}</div>
*   );
*
*   ExampleComponent = PropsProvider(ExampleComponent);
*
*   // ExampleComponent will provide 'name' as a contextual prop to any children
*   let a = (<ExampleComponent name="bob" />);
*
* ```
*
* PropsConsumer is a React HOC that wraps a React class,
* and returns a new React class that uses the props-provider context
* to provide default props to the wrapped component
*
* @param {} reactClass - the react class / function to wrap with a prop.
* @param {function} propsToContext - an optional function to customize which props are provided.
* @returns {} a wrapped react class
* @memberof react-props-provider
*/
const PropsProvider = (reactClass, propsToContext = DEFAULT_PROPS_TO_CONTEXT) => {

	class _propsProviderInstance extends React.Component {
		render() {
			const { context, props } = this;
			const newContext = propsToContext(props, context);
			const component = React.createElement(reactClass, props);
			const wrapper = React.createElement(
				PropsContext.Provider,
				{ value: newContext },
				component
			);

			return wrapper;
		}
	}
	_propsProviderInstance.contextType = PropsContext;

	return _propsProviderInstance;

};

export {
	PropsProvider,
	PropsConsumer,
};
