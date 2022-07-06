import React from 'react'
import {Box} from '@mui/material'

import BodyPart from './BodyPart'

const HorizontalScrollBar = ({data}) => {
  return (
    <div>
      {
      data.map((element)=> (
        <Box
        key = {element.id || element}
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart = {setBodyPart} />
          </Box>
      ))
}
    </div>
  )
}

export default HorizontalScrollBar