import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as postsAction from '../../actions/postsActions'

import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { H3 } from 'native-base'
import Posts from '../../views/posts'
import styles from './styles'

class Menu extends Component {

  constructor (props) {
    super(props)
  }

  /** @function public updateCategory(category).

  This function update the selected category from user and load the View
  with all posts of this category.

  @param {object} category the category object to show to user.
  */

  updateCategory (category) {
    this.props.postsAction.setCurrentPage(1)
    this.props.postsAction.setCurrentCategory(category)

    this.props.navigateTo({
      component: Posts
    })
  }

  render () {
    return (
      <View style={styles.menuContainer}>
        <ScrollView>
          <H3 style={styles.title}>Categorie</H3>
          <TouchableOpacity style={styles.category} onPress={() => this.updateCategory(null)}>
            <Text style={styles.categoryTitle}>All</Text>
          </TouchableOpacity>
          {this.props.categories.map((category, id) => {
            return (
              <TouchableOpacity style={styles.category} onPress={() => this.updateCategory(category)}>
                <Text style={styles.categoryTitle}>{category.name}</Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    )
  }

}

Menu.propTypes = {
  navigateTo: PropTypes.function,
  categories: PropTypes.array,
  postsAction: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories: Object.values(state.postsReducer.categories)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postsAction: bindActionCreators(postsAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
