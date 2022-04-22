import React from 'react'
import PropTypes from 'prop-types'
import { CoursesPageTemplate } from '../../templates/courses-page'

const CoursesPagePreview = ({ entry, widgetFor }) => (
  <CoursesPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

CoursesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CoursesPagePreview
