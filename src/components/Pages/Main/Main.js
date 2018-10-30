import React from 'react';
import { connect } from 'react-redux';
import { KwikCalendar } from '../../services/calendar';
import { setDaysInYear } from '../../redux/Calendar/action';
import { calculateHeight, calculateWidth } from './../../services/viewport';
import { Pane, Card, Text } from 'evergreen-ui';
import Header from '../Header';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date().getMonth(),
      daysInYear: [],
      weeksInYear: [],
    }
  }
  componentDidMount() {
    const { setCurrentDate, main } = {...this.props};
    const today = new Date();
    let k = new KwikCalendar(new Date().getFullYear());

    if (main === {}) {
      setCurrentDate({ currentDay: k.todayOfTheWeek, currentDate: today.getDate(), currentMonth: k.currentMonth, currentYear: today.getFullYear()})
    }
    if (this.props.daysInYear.length === 0 &&
      this.props.monthsInYear.length === 0) {
        let daysInYear = k.daysInYear;

      this.setState({ daysInYear });
      this.setState({ monthsInYear: k.calcMonthsInYear(daysInYear) });
    }
  }

  render() {
    // let {  } = {...this.state};
    let { currentMonth } = {...this.props};

    const renderWeek = () => {

    };

    return (
      <div>
        <Header currentMonth={currentMonth} />
        <Pane
          is="section"
          background="tint2"
          elevation={2}
          // hoverElevation={3}
          // marginY={60}
          marginX={20}
          // padding={30}
          width={calculateWidth() - 40}
          height={calculateHeight() - 100}
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
    daysInYear: state.daysInYear,
    weeksInMonth: state.weeksInMonth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setDaysInYear: (days) => dispatch(setDaysInYear(days))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);