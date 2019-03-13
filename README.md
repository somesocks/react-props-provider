# react-props-provider

## About

## API

<a name="react-props-provider"></a>

## react-props-provider : <code>object</code>
**Kind**: global namespace  

* [react-props-provider](#react-props-provider) : <code>object</code>
    * [.PropsConsumer(reactClass, propsFromContext)](#react-props-provider.PropsConsumer) ⇒
    * [.PropsProvider(reactClass, propsToContext)](#react-props-provider.PropsProvider) ⇒


* * *

<a name="react-props-provider.PropsConsumer"></a>

### react-props-provider.PropsConsumer(reactClass, propsFromContext) ⇒
```javascript
  import React from 'react'
  import { PropsConsumer } from 'react-props-provider'

  // an example component
  let ExampleComponent = (props) => (
    <div>{props.name}</div>
  );

  ExampleComponent = PropsConsumer(ExampleComponent);

  // name will always be bob, since the prop is defined directly
  let a = (<ExampleComponent name="bob" />);

  // if 'name' was provided by a parent component, it would be used
  let b = (<ExampleComponent />);
```

PropsConsumer is a React HOC that wraps a React class,
and returns a new React class that uses the props-provider context
to provide default props to the wrapped component

**Kind**: static method of [<code>react-props-provider</code>](#react-props-provider)  
**Returns**: a wrapped react class  
**Params**

- reactClass - the react class / function to wrap with a prop.
- propsFromContext <code>function</code> - an optional function to customize which context props you want to consume.


* * *

<a name="react-props-provider.PropsProvider"></a>

### react-props-provider.PropsProvider(reactClass, propsToContext) ⇒
```javascript
  import React from 'react'
  import { PropsProvider } from 'react-props-provider'

  // an example component
  let ExampleComponent = (props) => (
    <div>{props.name}</div>
  );

  ExampleComponent = PropsProvider(ExampleComponent);

  // ExampleComponent will provide 'name' as a contextual prop to any children
  let a = (<ExampleComponent name="bob" />);

```

PropsConsumer is a React HOC that wraps a React class,
and returns a new React class that uses the props-provider context
to provide default props to the wrapped component

**Kind**: static method of [<code>react-props-provider</code>](#react-props-provider)  
**Returns**: a wrapped react class  
**Params**

- reactClass - the react class / function to wrap with a prop.
- propsToContext <code>function</code> - an optional function to customize which props are provided.


* * *

