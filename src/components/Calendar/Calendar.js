import React from 'react';
import { connect } from 'react-redux';
import { KwikCalendar, weekdays } from '../../services/calendar';
import { setCurrentDate } from '../../redux/Calendar/action';
import { calculateHeight, calculateWidth } from './../../services/viewport';
import { Pane, Card, Text } from 'evergreen-ui';
import { CalendarTitle } from './CalendarTitle';


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMode: 'MONTH',
      currentMonth: new Date().getMonth(),
      daysInYear: [],
      weeksInYear: [],
    }
  }
  componentDidMount() {
    const today = new Date();
    const { setCurrentDate } = {...this.props};

    let k = new KwikCalendar(new Date().getFullYear());
    if (this.props.daysInYear.length === 0 &&
      this.props.monthsInYear.length === 0) {
        let daysInYear = k.daysInYear;

      this.setState({ daysInYear });
      this.setState({ monthsInYear: k.calcMonthsInYear(daysInYear) });
    }
  }

  toDate = (unit) => {
    let { currentDate, currentMonth, currentYear } = {...this.props};

    switch(unit) {

      case "DAY":
        this.props.setCurrentDate({ currentDate: currentDate--, currentDay: weekdays[new Date(currentYear, currentMonth, currentDate - 1).getDay()]});
      case "MONTH":
        this.props.setCurrentMonth({ currentMonth: currentMonth-- });
      case "YEAR":
        this.props.setCurrentYear({ currentYear: currentYear-- });
      default:
        return {};
    }
  }

  nextDate = (unit) => {
    let { currentDate, currentMonth, currentYear } = {...this.props};

    switch(unit) {

      case "DAY":
        this.props.setCurrentDate({ currentDate: currentDate++, currentDay: weekdays[new Date(currentYear, currentMonth, currentDate + 1).getDay()]});
      case "MONTH":
        this.props.setCurrentMonth({ currentMonth: currentMonth++ });
      case "YEAR":
        this.props.setCurrentYear({ currentYear: currentYear++ });
      default:
        return {};
    }
  }
  prevDate = (unit) => {
    let { currentDate, currentMonth, currentYear } = {...this.props};

    switch(unit) {

      case "DAY":
        this.props.setCurrentDate({ currentDate: currentDate--, currentDay: weekdays[new Date(currentYear, currentMonth, currentDate - 1).getDay()]});
      case "MONTH":
        this.props.setCurrentMonth({ currentMonth: currentMonth-- });
      case "YEAR":
        this.props.setCurrentYear({ currentYear: currentYear-- });
      default:
        return {};
    }
  }


  render() {
    // let {  } = {...this.state};
    let { currentYear, currentMonth, currentWeek, currentDate, currentDay } = {...this.props};

    const renderWeek = () => {

    };

    return (
      <div>
        <CalendarTitle
          currentYear={currentYear}
          currentMonth={currentMonth}
          currentWeek={currentWeek}
          currentDate={currentDate}
          currentDay={currentDay}
          />
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
    daysInWeek: state.calendar.daysInWeek,
    daysInYear: state.calendar.daysInYear,
    weeksInMonth: state.calendar.weeksInMonth,
    weeksInYear: state.calendar.weeksInYear,
    monthsInYear: state.calendar.monthsInYear
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);