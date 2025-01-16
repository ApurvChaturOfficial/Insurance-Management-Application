import React from "react"
import { Link } from "react-router-dom"

import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/aConnection/bShadcnConnection/components/ui/card";

import TextReadComponent from "./component/aTextReadComponent";


type TypicalRetrieveComponentType = {
  header: { title: string, subtitle: string, buttons: { text: string, icon?: any, to: string }[] },
  data: any,
  params: any
}

const TypicalRetrieveComponent = (props: TypicalRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* TypicalRetrieveComponent */}
      
      <div className="flex-1 px-4">
        <div className="flex items-center justify-between space-y-2 mb-8" >
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              {props.header.title} {" "}
              <small className="text-sm font-normal tracking-wide italic" >({props.params.id})</small> 
            </h2>
            <p className="text-muted-foreground">{props.header.subtitle}</p>
          </div>
          {props.header.buttons.length > 0 && (
            <div className="flex items-center space-x-2">
              {props.header.buttons.map((each: any) => (
                <Button asChild >
                  <Link to={each.to} >
                    {each.icon && <each.icon />}
                    {each.text}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-8">

          {/* Section */}
          {props.data?.filter((eachSection: any) => eachSection.display)?.map((eachSection: any, indexSection: number) => eachSection.display && (
            <React.Fragment key={indexSection} >
              <Card className="overflow-hidden" >
                <CardHeader className="flex flex-row items-start bg-muted/50">
                  <div className="grid gap-0.5">
                    <CardTitle className="group flex items-center gap-2 text-lg">
                      {eachSection.title}
                    </CardTitle>
                    <CardDescription>{eachSection.subtitle}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 pt-4">
                    {eachSection.fields.map((eachField: any, indexInput: any) => (
                      <React.Fragment>

                        {/* For I/P Type: Text, Email, Number */}
                        {((eachField.type === "text" || eachField.type === "email" || eachField.type === "number" || eachField.type === "password") && 
                          <TextReadComponent key={indexInput} eachField={eachField} />
                        )}

                      </React.Fragment>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </React.Fragment>
          ))}
        </div>

      </div>
    </React.Fragment>
  )
}

export default TypicalRetrieveComponent
