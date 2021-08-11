import React from 'react';

function printHOC(WrappedComponent) {
  return class NewComponent extends React.Component {
    print = param => console.log({ param });

    render() {
      return <WrappedComponent print={this.print} {...this.props} />;
    }
  };
}

export default printHOC;
