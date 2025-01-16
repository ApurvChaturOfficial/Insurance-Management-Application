import fullRoute from "@/bLove/gRoute/bFullRoute";


export const header = {
  title: "Policy Retrieve",
  subtitle: "This is just some subtitle for the policy retrieve",
  buttons: [
    { text: "Update Policy", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cMainRoute.aPolicyRoute.cRetrieveRoute}/id` },
    { text: "Delete Policy", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cMainRoute.aPolicyRoute.dUpdateRoute}/id` },
  ]
}
