import React from 'react';
import { connect } from 'react-redux';
import { calculateHeight, calculateWidth } from './../../services/viewport';
import { Pane, Text } from 'evergreen-ui';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { currentMonth } = {...this.props};

    return (
      <div>
        <Pane
          height={calculateHeight() - (calculateHeight() - 60)}
          width={calculateWidth()}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text>
            {currentMonth}
          </Text>
        </Pane>
      </div>
    )
  }
}
