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
  postContainer: {

  },
  postDataContainer: {
    padding: 15
  },
  postTitle: {
    textAlign: 'left',
    marginBottom: 10
  },
  postImage: {
    width: screenWidth - 30,
    height: 200,
    marginBottom: 15
  },
  postCommentsContainer: {

  },
  postCommentsTitle: {
    textAlign: 'left',
    marginBottom: 10,
    paddingLeft: 15
  },
  postCommentsList: {

  },
  postComment: {

  },
  postCommentTitle: {

  },
  postCommentSubtitle: {
    color: '#999',
    fontSize: 12
  },
  postCommentsMoreButton: {
    margin: 15
  },
  postNewCommentContainer: {
    padding: 15,
    marginBottom: 15
  },
  postNewCommentText: {
    color: '#999',
    fontSize: 12
  },
  postNewCommentButton: {
    marginTop: 15
  },
  postNewCommentInput: {
    color: '#999',
    fontSize: 12,
    height: 50
  }
}

export default styles
