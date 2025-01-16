import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type BaseRetrieveComponentType = {
  header: { title: string, subtitle: string, buttons: { text: string, to: string }[] },
  data: any,
  params: any
}

const BaseRetrieveComponent = (props: BaseRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BaseRetrieveComponent */}
      <TypicalRetrieveComponent 
        header={props.header} 
        data={props.data}
        params= {props.params}
      />
    </React.Fragment>
  )
}

export default BaseRetrieveComponent;
