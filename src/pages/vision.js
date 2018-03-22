import React from 'react'
import ThumbsUp from 'react-icons/lib/md/thumb-up'
import Group from 'react-icons/lib/md/group'
import Headset from 'react-icons/lib/md/headset-mic'
import Payment from 'react-icons/lib/md/payment'

const VisionPage = () => (
  <div>
    <ul style={{ listStyle: 'none' }}>
      <li>
        <ThumbsUp /> Learn how to learn
      </li>
      <li>
        <Group /> Research
      </li>
      <li>
        <Headset /> Community
      </li>
      <li>
        <Payment /> Providing Solutions
      </li>
    </ul>
  </div>
)

export default VisionPage
