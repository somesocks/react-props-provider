
const React = require('react');

const DEFAULT_CONTEXT_VALUE = {};
const PropsContext = React.createContext(DEFAULT_CONTEXT_VALUE);


const DEFAULT_PROPS_FROM_CONTEXT = (props, context) => {
	if (context === DEFAULT_CONTEXT_VALUE) {
		return props;
	} else {
		return { ...context, ...props };
	}
};

const Consumer = (reactClass, propsFromContext = DEFAULT_PROPS_FROM_CONTEXT) => {

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

const Provider = (reactClass, propsToContext = DEFAULT_PROPS_TO_CONTEXT) => {

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

module.exports = {
	Provider,
	Consumer,
};
