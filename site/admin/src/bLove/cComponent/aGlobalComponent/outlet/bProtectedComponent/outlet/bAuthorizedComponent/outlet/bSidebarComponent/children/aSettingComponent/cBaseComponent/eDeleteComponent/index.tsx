import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type BaseDeleteComponentType = {
  header: { title: string, subtitle: string, buttons: { text: string, to: string }[] },
  data: any,
  params: any
}

const BaseDeleteComponent = (props: BaseDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BaseDeleteComponent */}
      <TypicalDeleteComponent 
        header={props.header} 
        data={props.data}
        params= {props.params}
      />
    </React.Fragment>
  )
}

export default BaseDeleteComponent;
