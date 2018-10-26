import React, { Component } from 'react';
import { connect } from 'react-redux';
import { KwikCalendar } from '../../services/calendar';
import { setDaysInYear } from '../../redux/Calendar/action';
import { Pane, Card } from 'evergreen-ui';


const Today = new Date();
class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: []
    }
  }
  componentDidMount() {
    let k = new KwikCalendar(new Date().getFullYear());
    console.log("Kwik: ", k.daysInYear);
    console.log("Weeks: ", k.monthsInYear);

    // api call to get foodList and mealList for each day of the year
    // this.props.setDaysInYear(k.daysInYear);
    this.setState({ year: k.daysInYear})
  }

  render() {
    let { daysInWeek } = {...this.state};
    return (
      <div>
        <Pane
          height={120}
          width={240}
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="default"
          >
          </Pane>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    daysInYear: state.daysInYear
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setDaysInYear: (days) => dispatch(setDaysInYear(days))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);