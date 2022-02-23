import React from 'react';

class Lifecycles extends React.Component {
   constructor() {
      super();
      console.log('constructor!');
   }

   componentDidMount() {
      console.log('componentDidMount!');
   }

   componentDidUpdate() {
      console.log('componentDidUpdate!');
   }

   componentWillUnmount() {
      console.log('componentWillUnmount!');
   }

   /*  Decide whethere or not we want to go through the other UPDATING lifecycle methods (including re-rendering) 
    *  EX: If we update "message" in the App.js which <Lifecycles> doesn't care about, why rerender <Lifecycles>?
    */
   shouldComponentUpdate(nextProps, nextState) { // allows us to selectively hijack and not go through rerendering process
      console.log('shouldComponentUpdate!', nextProps);
      //return true; // if return true, the component will update/will go through the cycles and run through componentDidUpdate
      // return false -> not go through any of lifecycle methods except shouldComponentUpdate()
      return nextProps.text !== this.props.text;
   }

   render() {
      console.log('render!');
      return (
         <div className='lifecycles'>
         <h3>LIFECYCLES COMPONENT</h3>
         {this.props.text} {/*text is a property of data passed in here from the parent node*/}
         </div>
      );
   }
}

export default Lifecycles;