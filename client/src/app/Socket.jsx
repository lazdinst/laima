import React from 'react';

class Socket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    const { heartRate } = this.props;
    return (
      <div>
        Heart Rate :
      </div>
    );
  }
}

const mapStateToProps = state => ({
  heartRate: state.app.heartRate
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default connect( mapStateToProps, mapDispatchToProps)(Socket);

