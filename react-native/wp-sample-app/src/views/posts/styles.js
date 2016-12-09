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
  postsList: {

  },
  postsListItem: {

  },
  postsListItemTitle: {

  },
  postsListItemSubtitle: {
    color: '#999',
    fontSize: 12
  }
}

export default styles
