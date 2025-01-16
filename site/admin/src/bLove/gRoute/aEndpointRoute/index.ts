const endpointRoute = {
  aGlobalRoute: {
    aUnprotectedRoute: {},
    bProtectedRoute: {
      aAutheticatedRoute: {},
      bAuthorizedRoute: {
        aTopbarRoute: {},
        bSidebarRoute: {
          aSettingRoute: {
            aBaseRoute: {
              aListRoute: "base-list",
              bCreateRoute: "base-create",
              cRetrieveRoute: "base-retrieve",
              dUpdateRoute: "base-update",
              eDeleteRoute: "base-delete",
            }
          },
          bUserAdministration: {},
          cMainRoute: {
            aPolicyRoute: {
              aListRoute: "policy-list",
              bCreateRoute: "policy-create",
              cRetrieveRoute: "policy-retrieve",
              dUpdateRoute: "policy-update",
              eDeleteRoute: "policy-delete",
            }
          }
        }
      }
    }
  },
  zSampleRoute: {}
}

export default endpointRoute;
