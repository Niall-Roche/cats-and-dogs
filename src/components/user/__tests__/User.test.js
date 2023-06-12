import React from 'react'
import User from '../User'
import 'jest-styled-components'
import renderCreate from '../../../utils/test-utils/renderCreate'

describe('User', () => {
  it('should match snapshot', () => {
    const comp = renderCreate(
      <User
        data={{
          avatar_url: 'https://media3.giphy.com/avatars/bestfriends/4Ja63d50vmML.gif',
          description: 'DESCRIPTION',
          instagram_url: 'https://www.instagram.com/bestfriendsanimalsociety/',
          profile_url: 'https://giphy.com/bestfriends/',
          username: 'bestfriends',
        }}
      />
    )
    const tree = comp.toJSON()

    expect(tree).toMatchSnapshot()
  })
})