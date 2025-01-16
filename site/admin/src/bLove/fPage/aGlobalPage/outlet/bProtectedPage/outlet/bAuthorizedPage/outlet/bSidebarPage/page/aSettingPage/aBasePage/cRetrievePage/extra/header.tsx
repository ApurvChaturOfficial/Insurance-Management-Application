import fullRoute from "@/bLove/gRoute/bFullRoute";


export const header = {
  title: "Base Retrieve",
  subtitle: "This is just some subtitle for the base retrieve",
  buttons: [
    { text: "Update Base", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.cRetrieveRoute}/id` },
    { text: "Delete Base", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.dUpdateRoute}/id` },
  ]
}
