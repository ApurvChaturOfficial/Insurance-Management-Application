import React from "react"

import TypicalUpdateComponent from "../../../../component/dTypicalUpdateComponent";


type BaseUpdateComponentType = {
  header: { title: string, subtitle: string, buttons: { text: string, to: string }[] },
  data: any,
  formSchema: any,
  formDefaultValue: any,
  params: any
}

const BaseUpdateComponent = (props: BaseUpdateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BaseUpdateComponent */}
      <TypicalUpdateComponent 
        header={props.header} 
        data={props.data} 
        formSchema={props.formSchema} 
        formDefaultValue={props.formDefaultValue} 
        params= {props.params}
      />
    </React.Fragment>
  )
}

export default BaseUpdateComponent;
