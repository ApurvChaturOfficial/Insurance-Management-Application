import fullRoute from "@/bLove/gRoute/bFullRoute";
import { RefreshCcw } from "lucide-react";


export const header = ({ listAPIResponse }: { listAPIResponse: any }) => ({
  title: "Base List",
  subtitle: "This is just some subtitle for the base list",
  buttons: [
    { text: "Refetch", icon: RefreshCcw, action: listAPIResponse.refetch },
    { text: "Create Base", to: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.bCreateRoute },
  ]
})
