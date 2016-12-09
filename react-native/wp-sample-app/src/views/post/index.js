import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

import { View, Image, Text } from 'react-native'
import { Container, Content, H3, Footer, FooterTab, Button, Icon, Spinner, List, ListItem, Thumbnail, InputGroup, Input } from 'native-base'
import theme from '../../template/baseTheme'
import styles from './styles'

import { getCommentsRequest, getNewCommentRequest } from '../../communications/postsApi'
import { serializeWpPostComments } from '../../serializers/postsSerializers'

class Post extends Component {

  constructor (props) {
    super(props)

    // set initial state
    this.state = {
      newCommentText: null,
      isLoadNewComment: false,
      showMoreCommentsButton: true,
      isLoadComments: true,
      commentsPage: 0,
      comments: []
    }
  }

  componentDidMount () {
    // load comments of posts
    this.setState({commentsPage: 1})
    this.loadComments(1)
  }

  /** @function public loadComments(page).

  This function load comments of the post and add them to comments array.

  @param {integer} page the page of comments to load.
  */

  loadComments (page) {
    getCommentsRequest(page, this.props.route.post.id)
    .then((response) => {
      console.log('getCommentsRequest', response)
      this.setState({
        isLoadComments: false,
        comments: this.state.comments.concat(serializeWpPostComments(response.data))
      })
      // remove more button if comments finished
      if (!response.data.length) {
        this.setState({ showMoreCommentsButton: false })
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  /** @function public sendComment().

  This function send a new comment to the post from the user.
  */

  sendComment () {
    this.setState({
      isLoadNewComment: true,
      newCommentText: null
    })
    getNewCommentRequest(this.state.newCommentText, this.props.route.post.id, this.props.userDatas.wordpressId, this.props.userDatas.username, this.props.userDatas.password)
    .then((response) => {
      console.log(response)
      // clear input and reload comments
      this.setState({
        isLoadNewComment: false,
        comments: []
      })
      this.loadComments(1)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  /** @function public loadOtherComments(page).

  This function load othe comments of the post and add them to comments array.

  @param {integer} page the page of comments to load.
  */

  loadOtherComments () {
    console.log(this.state)
    // load comments of posts
    let newPage = this.state.commentsPage + 1
    this.setState({
      isLoadComments: true,
      commentsPage: newPage
    })
    this.loadComments(newPage)
  }

  /** @function public renderPostData().

  This function render the main informations of the post.
  */

  renderPostData () {
    return (
      <View style={styles.postDataContainer}>
        {this.props.route.post.thumbnailLarge ? (
          <Image style={styles.postImage} source={{uri: this.props.route.post.thumbnailLarge}} />
        ) : null}
        <H3 style={styles.postTitle}>{this.props.route.post.title}</H3>
        <Text>
          {this.props.route.post.content}
        </Text>
      </View>
    )
  }

  /** @function public renderPostComments().

  This function render the list of comments of the post.
  */

  renderPostComments () {
    // render nothing if post can't accept comments
    if (!this.props.route.post.permitComments) {
      return null
    }
    // render comments
    if (this.state.comments.length) {
      return (
        <View style={styles.postCommentsContainer}>
          <H3 style={styles.postCommentsTitle}>Commenti</H3>
          <List style={styles.postCommentsList}>
            {this.state.comments.map((comment, key) => {
              return (
                <ListItem style={styles.postComment} key={key}>
                  <Thumbnail size={20} source={{uri: comment.authorImage}} />
                  <Text style={styles.postCommentTitle}>{comment.authorName}</Text>
                  <Text style={styles.postCommentSubtitle} note>{comment.content}</Text>
                </ListItem>
              )
            })}
          </List>
          {this.state.isLoadComments ? <Spinner color='#333' /> : (this.state.showMoreCommentsButton ? (
            <Button onPress={() => this.loadOtherComments()} style={styles.postCommentsMoreButton} block>Altri</Button>
          ) : null)}
        </View>
      )
    } else {
      return null
    }
  }

  /** @function public renderNewComment().

  This function render the form used to post a new comment.
  */

  renderNewComment () {
    // render nothing if post can't accept comments
    if (!this.props.route.post.permitComments) {
      return null
    }
    // render for comments
    if (this.props.userDatas.wordpressId) {
      return (
        <View style={styles.postNewCommentContainer}>
          <InputGroup >
            <Input onChange={(event) => this.setState({newCommentText: event.nativeEvent.text})} multiline value={this.state.newCommentText} placeholder='Scrivi un commento' style={styles.postNewCommentInput} />
          </InputGroup>
          {this.state.isLoadNewComment ? <Spinner color='#333' /> : (
            <Button onPress={() => this.sendComment()} block style={styles.postNewCommentButton}>Invia</Button>
          )}
        </View>
      )
    } else {
      return (
        <View style={styles.postNewCommentContainer}>
          <Text style={styles.postNewCommentText}>
            Per scrivere un commento devi prima essere loggato. Puoi registrarti o eseguire il login dalla sezione profilo dell'applicazione.
          </Text>
        </View>
      )
    }
  }

  render () {
    return (
      <Container theme={theme}>
        <View style={styles.content}>
          <Content style={styles.postContainer}>
            {this.renderPostData()}
            {this.renderNewComment()}
            {this.renderPostComments()}
          </Content>
          <Footer >
            <FooterTab>
              <Button onPress={() => this.props.navigator.pop()}>Indietro<Icon name='md-arrow-back' /></Button>
            </FooterTab>
          </Footer>
        </View>
      </Container>
    )
  }

}

Post.propTypes = {
  route: PropTypes.object,
  navigator: PropTypes.object,
  userDatas: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
  return {
    userDatas: state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
