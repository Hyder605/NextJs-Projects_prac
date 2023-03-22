import React, { FC } from 'react'

const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className="max-w-screen-[1400px] mx-auto">
        {children}
        </div>
  )
}

export default Wrapper