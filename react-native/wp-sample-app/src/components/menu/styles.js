import {
  Dimensions
} from 'react-native'

import theme from '../../template/baseTheme'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const styles = {
  menuContainer: {
    width: screenWidth / 2,
    height: screenHeight,
    backgroundColor: theme.brandPrimary,
    paddingTop: 30,
    paddingLeft: 5,
    paddingRight: 5
  },
  title: {
    backgroundColor: '#fff',
    color: theme.brandPrimary,
    padding: 5,
    marginBottom: 15
  },
  category: {
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
  },
  categoryTitle: {
    color: '#fff',
    fontSize: 20
  }
}

export default styles
