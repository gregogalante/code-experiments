import {
  Dimensions
} from 'react-native'

import theme from '../../template/baseTheme'

const screenHeight = Dimensions.get('window').height - 64
const screenWidth = Dimensions.get('window').width

const styles = {
  content: {
    backgroundColor: '#fff',
    width: screenWidth,
    height: screenHeight
  },
  profileContainer: {
    padding: 15
  },
  profileActions: {
    marginTop: 30
  },
  profileAction: {
    marginBottom: 15
  },
  profileData: {

  },
  formInputGroup: {
    marginBottom: 15
  },
  formIcon: {
    color: theme.brandPrimary
  }
}

export default styles
