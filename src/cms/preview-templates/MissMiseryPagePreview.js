import React from 'react'
import PropTypes from 'prop-types'
import { MissMiseryPageTemplate } from '../../templates/miss-misery-page'

const MissMiseryPagePreview = ({ entry, widgetFor }) => (
  <MissMiseryPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MissMiseryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MissMiseryPagePreview
