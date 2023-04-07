import React from 'react'

type Props = {
  children: any
  addClass?: string
}

function FormLabel({children, addClass}: Props) {
  return (
    <label className={`grid grid-flow-row min-w-16 ${addClass}`}>{children}</label>
  )
}

export default FormLabel