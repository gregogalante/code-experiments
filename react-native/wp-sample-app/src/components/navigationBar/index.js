import React, { Component, PropTypes } from 'react'

import { Header, Title, Button, Icon } from 'native-base'
import styles from './styles'

class NavigationBar extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Header style={styles.navigationBar}>
        <Button onPress={() => this.props.updateDrawerStatus()} transparent>
          <Icon name='md-menu' style={styles.navigationBarIcon} />
        </Button>
        <Title style={styles.title}>{this.props.title}</Title>
      </Header>
    )
  }

}

NavigationBar.propTypes = {
  title: PropTypes.string,
  updateDrawerStatus: PropTypes.function
}

export default NavigationBar
