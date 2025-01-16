import React from "react"
import { Link } from "react-router-dom"

import { Trash2Icon } from "lucide-react";

import { Button, buttonVariants } from "@/aConnection/bShadcnConnection/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/aConnection/bShadcnConnection/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/aConnection/bShadcnConnection/components/ui/alert";
import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/aConnection/bShadcnConnection/components/ui/alert-dialog";

import TextReadComponent from "./component/aTextReadComponent";
import { cn } from "@/aConnection/bShadcnConnection/lib/utils";


type TypicalDeleteComponentType = {
  header: { title: string, subtitle: string, buttons: { text: string, icon?: any, to: string }[] },
  data: any,
  params: any
}

const TypicalDeleteComponent = (props: TypicalDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* TypicalDeleteComponent */}
      
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
          <div className="flex flex-col gap-2" >
            <Alert className="bg-muted/50 flex flex-col flex-1 gap-2" >
              <Trash2Icon className="h-4 w-4" />
              <AlertTitle className="-mb-1" >Are You Sure!</AlertTitle>
              <AlertDescription>
                You want to delete the following instance?
              </AlertDescription>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Sure Delete</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete this
                      instance and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction 
                      className={cn(buttonVariants({ variant: "destructive" }))} 
                      onClick={() => {
                        toast({
                          description: "Your instance has been deleted.",
                        })
                      }}
                    >Sure Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </Alert>
          </div>

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

export default TypicalDeleteComponent