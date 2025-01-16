import endpointRoute from "../aEndpointRoute";


const fullRoute = {
  aGlobalRoute: {
    aUnprotectedRoute: {},
    bProtectedRoute: {
    aAutheticatedRoute: {},
    bAuthorizedRoute: {
        aTopbarRoute: {},
        bSidebarRoute: {
          aSettingRoute: {
            aBaseRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.eDeleteRoute}`,
            }
          },
          bUserAdministrationRoute: {},
          cMainRoute: {
            aPolicyRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cMainRoute.aPolicyRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cMainRoute.aPolicyRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cMainRoute.aPolicyRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cMainRoute.aPolicyRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cMainRoute.aPolicyRoute.eDeleteRoute}`,
            }
          }
        }
      }
    }
  },
  zSampleRoute: {}
}

export default fullRoute;
