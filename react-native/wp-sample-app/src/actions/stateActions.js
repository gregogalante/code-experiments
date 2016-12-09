export const SET_STATE_VIEW_TITLE = 'SET_STATE_VIEW_TITLE'
export const SET_STATE_DRAWER_STATUS = 'SET_STATE_DRAWER_STATUS'

/** @function public setViewTitle(title).

This function set the current view title on the store.

@param {string} title the title of the current view.
*/

export function setViewTitle (title) {
  return {
    type: SET_STATE_VIEW_TITLE,
    title
  }
}

/** @function public setDrawerStatus(status).

This function set the new drawer status on the store.

@param {boolean} status the new boolean status of the drawer.
*/

export function setDrawerStatus (status) {
  return {
    type: SET_STATE_DRAWER_STATUS,
    status
  }
}
