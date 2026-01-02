import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";

// Configure Amplify before creating the client
// This ensures Amplify is configured regardless of import order
const awsConfig = {
  aws_project_region: import.meta.env.VITE_AWS_PROJECT_REGION!,
  aws_appsync_graphqlEndpoint: import.meta.env
    .VITE_AWS_APPSYNC_GRAPHQL_ENDPOINT!,
  aws_appsync_region: import.meta.env.VITE_AWS_APPSYNC_REGION!,
  aws_appsync_authenticationType: import.meta.env
    .VITE_AWS_APPSYNC_AUTHENTICATION_TYPE!,
  aws_appsync_apiKey: import.meta.env.VITE_AWS_APPSYNC_API_KEY!,
};

// Configure Amplify (safe to call multiple times)
try {
  Amplify.configure(awsConfig);
} catch (error) {
  // Ignore if already configured
  console.warn("Amplify configuration:", error);
}

const client = generateClient();

export default client;
