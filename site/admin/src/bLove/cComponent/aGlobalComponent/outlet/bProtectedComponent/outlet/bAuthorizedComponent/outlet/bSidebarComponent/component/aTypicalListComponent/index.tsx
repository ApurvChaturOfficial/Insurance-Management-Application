import React from "react"
import { Link } from "react-router-dom"

import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"

import { DataTable } from "./components/data-table"


type TypicalListComponentType = {
  header: { title: string, subtitle: string, buttons: { text: string, icon?: any, action?: any, to?: string }[] },
  data: any,
  columns: any,
  APICall: any,
}

const TypicalListComponent = (props: TypicalListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* TypicalListComponent */}
      
      <div className="h-full flex-1 flex-col space-y-8 md:flex px-4">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{props.header.title}</h2>
            <p className="text-muted-foreground">{props.header.subtitle}</p>
          </div>
          {props.header.buttons.length > 0 && (
            <div className="flex items-center space-x-2">
              {props.header.buttons.map(each => (
                <React.Fragment>
                  {each.action && (
                    <Button onClick={() => each.action()} >
                      {each.icon && <each.icon />}
                      {each.text}
                    </Button>
                  )}
                  {each.to && (
                    <Button asChild >
                      <Link to={each.to} >
                        {each.icon && <each.icon />}
                        {each.text}
                      </Link>
                    </Button>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>

        <DataTable data={props.data} columns={props.columns} APICall={props.APICall} />
      </div>
    </React.Fragment>
  )
}

export default TypicalListComponent
