import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import StoriesContainer from '../StoriesContainer'
import EditableText from './'

storiesOf('EditableText', module)
  .add('basic usage', () => <StoriesContainer><EditableText value="Click to edit" onChange={action('Change of value')} /></StoriesContainer>)
