import express from 'express';

import bodyParserMiddleware from 'body-parser';
import cookieParserMiddleware from 'cookie-parser';
import corsMiddleware from 'cors';
import compressionMiddleware from 'compression';
import morganMiddleware from 'morgan';

import errorMiddleware from '../bLove/bMiddleware/aErrorMiddleware';

import { baseRouter } from '../bLove/aMCVR/dRoute/admin/aSetting/cBaseRoute';
import { policyRouter } from '../bLove/aMCVR/dRoute/admin/cMain/aPolicyRoute';


const appConnection = express();

// Third Party Middleware
appConnection.use(morganMiddleware("dev"));
appConnection.use(corsMiddleware({ origin: 
  process.env.ENVIRONMENT === "Production" ? [ String(process.env.FRONTEND_URL) ] :
  process.env.ENVIRONMENT === "Testing" ?  [ String(process.env.FRONTEND_URL) ] :
  process.env.ENVIRONMENT === "Development" ?  [ "http://localhost:5173" ] : 
  [ "http://localhost:5173" ],
  credentials: true
}));
appConnection.use(bodyParserMiddleware.urlencoded({ extended: true }));
appConnection.use(bodyParserMiddleware.json());
appConnection.use(cookieParserMiddleware());
appConnection.use(compressionMiddleware());

// Routing Middleware
appConnection.get("/", (_request, response) => { response.send(`Welcome to ${process.env.APPLICATION}`) })
appConnection.use("/api/v1/base/", baseRouter);
appConnection.use("/api/v1/policy/", policyRouter);

// Error Middleware
appConnection.use(errorMiddleware)

export default appConnection;
