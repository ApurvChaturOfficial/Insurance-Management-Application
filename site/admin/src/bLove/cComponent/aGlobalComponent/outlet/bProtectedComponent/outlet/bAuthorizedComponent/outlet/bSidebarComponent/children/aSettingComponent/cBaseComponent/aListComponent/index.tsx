import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type TypicalListComponentType = {
  header: { title: string, subtitle: string, buttons: { text: string, icon?: any, action?: any, to?: string }[] },
  data: any,
  columns: any,
  APICall: any
}

const BaseListComponent = (props: TypicalListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BaseListComponent */}
      <TypicalListComponent 
        header={props.header} 
        data={props.data} 
        columns={props.columns} 
        APICall={props.APICall} 
      />
    </React.Fragment>
  )
}

export default BaseListComponent;
