import React from 'react'
import PropTypes from 'prop-types'
import { TheJokesPageTemplate } from '../../templates/the-jokes-page'

const TheJokesPagePreview = ({ entry, widgetFor }) => (
  <TheJokesPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

TheJokesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TheJokesPagePreview
