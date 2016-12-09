import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as stateActions from '../../actions/stateActions'
import * as postsActions from '../../actions/postsActions'

import { View, Text } from 'react-native'
import { Container, Content, Spinner, List, ListItem, Thumbnail, Footer, FooterTab, Button, Icon } from 'native-base'
import Post from '../post'
import Profile from '../profile'
import theme from '../../template/baseTheme'
import styles from './styles'

import { getPostsRequest } from '../../communications/postsApi'
import { serializeWpPosts } from '../../serializers/postsSerializers'
import { findByKey } from '../../helpers/objectsHelpers'
import { alertConnectionError } from '../../helpers/applicationAlerts'

import default_post from '../../assets/default_post.jpg'

class Posts extends Component {

  constructor (props) {
    super(props)

    // set initial state
    this.state = {
      posts: [],
      isLoad: false
    }

    // set initia static datas
    this.currentCategory = findByKey(this.props.categories, this.props.currentCategory.id)
  }

  componentDidMount () {
    // set view title
    this.props.stateActions.setViewTitle('Wordpress sample app')
    // load posts to show to user
    this.loadPosts(this.props.currentPage)
  }

  /** @function public loadPosts(page).

  This function load and save as state the posts used to show to user news
  from the requested page.
  */

  loadPosts (page) {
    this.setState({isLoad: true})
    getPostsRequest(page, (this.currentCategory ? this.currentCategory.id : null))
    .then((response) => {
      console.log('getPostsRequest', response)
      // save posts on state
      this.setState({
        posts: serializeWpPosts(response.data),
        isLoad: false
      })
    })
    .catch((error) => {
      console.log(error)
      alertConnectionError()
    })
  }

  /** @function public loadBackPosts().

  This function update the current page and load back posts.
  */

  loadBackPosts () {
    if (this.props.currentPage > 1) {
      let newPage = this.props.currentPage - 1
      this.props.postsActions.setCurrentPage(newPage)
      this.loadPosts(newPage)
    }
  }

  /** @function public loadNextPosts().

  This function update the current page and load new posts.
  */

  loadNextPosts () {
    let newPage = this.props.currentPage + 1
    this.props.postsActions.setCurrentPage(newPage)
    this.loadPosts(newPage)
  }

  /** @function public goToPostView(post).

  This function send user to the single post view.

  @param {object} post the post object which must be show to user.
  */

  goToPostView (post) {
    this.props.navigator.push({
      component: Post,
      post
    })
  }

  /** @function public goToProfileView().

  This function send user to the profile view.
  */

  goToProfileView () {
    this.props.stateActions.setViewTitle('Profilo')
    this.props.navigator.push({
      component: Profile
    })
  }

  /** @function public renderPostsList().

  This function render the list of posts to user.
  */

  renderPostsList () {
    return (
      <List style={styles.postsList}>
        {this.state.posts.map((post, key) => {
          return (
            <ListItem key={key} style={styles.postsListItem} button onPress={() => this.goToPostView(post)}>
              {post.thumbnailSmall ? (
                <Thumbnail square size={80} source={{uri: post.thumbnailSmall}} />
              ) : (
                <Thumbnail square size={80} source={default_post} />
              )}
              <Text style={styles.postsListItemTitle}>{post.title}</Text>
              <Text style={styles.postsListItemSubtitle} numberOfLines={3} note>{post.excerpt}</Text>
            </ListItem>
          )
        })}
      </List>
    )
  }

  render () {
    return (
      <Container theme={theme}>
        <View style={styles.content}>
          <Content>
            {this.state.isLoad ? <Spinner color='#333' /> : this.renderPostsList()}
          </Content>
          <Footer>
            <FooterTab>
              <Button onPress={() => this.loadBackPosts()}><Icon name='md-arrow-back' /></Button>
              <Button onPress={() => this.goToProfileView()}>Profilo<Icon name='md-person' /></Button>
              <Button onPress={() => this.loadNextPosts()}><Icon name='md-arrow-forward' /></Button>
            </FooterTab>
          </Footer>
        </View>
      </Container>
    )
  }

}

Posts.propTypes = {
  route: PropTypes.object,
  navigator: PropTypes.object,
  stateActions: PropTypes.object,
  postsActions: PropTypes.object,
  currentPage: PropTypes.integer,
  currentCategory: PropTypes.object,
  categories: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.postsReducer.currentPage,
    currentCategory: state.postsReducer.currentCategory,
    categories: state.postsReducer.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    stateActions: bindActionCreators(stateActions, dispatch),
    postsActions: bindActionCreators(postsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
