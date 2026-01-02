// main.tsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify } from "aws-amplify";
import App from "./App";
import "./index.css";

// Configure Amplify before importing any components that use it
const awsConfig = {
  aws_project_region: import.meta.env.VITE_AWS_PROJECT_REGION!,
  aws_appsync_graphqlEndpoint: import.meta.env
    .VITE_AWS_APPSYNC_GRAPHQL_ENDPOINT!,
  aws_appsync_region: import.meta.env.VITE_AWS_APPSYNC_REGION!,
  aws_appsync_authenticationType: import.meta.env
    .VITE_AWS_APPSYNC_AUTHENTICATION_TYPE!,
  aws_appsync_apiKey: import.meta.env.VITE_AWS_APPSYNC_API_KEY!,
};

Amplify.configure(awsConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
