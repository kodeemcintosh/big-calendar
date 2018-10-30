import React from 'react';
import { KwikCalendar } from '../../services/calendar';
import { calculateHeight, calculateWidth } from './../../services/viewport';
import { Pane, Card, Text } from 'evergreen-ui';


export const CalendarTitle = ({}) => {

  changeYear = (upDown) => {
    this.props.setCurrentYear({...this.props.currentYear} + upDown);
  }
  changeMonth = (upDown) => {
    this.props.setCurrentMonth({...this.props.currentMonth} + upDown);
  }
  changeDate = (upDown) => {
  }

    // let {  } = {...this.state};
    let { currentMonth } = {...this.props};


  return (
    <div>
      <Pane
        is="section"
        // marginY={60}
        marginX={10}
        // padding={30}
        width={calculateWidth() - 40}
        height={calculateHeight() - (calculateHeight() - 100)}
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="default"
        >
        </Pane>
    </div>
  )
}