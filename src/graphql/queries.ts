/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../api";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getJobHistory = /* GraphQL */ `query GetJobHistory($id: ID!) {
  getJobHistory(id: $id) {
    id
    title
    company
    location
    startDate
    endDate
    icon
    logo
    mobile
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetJobHistoryQueryVariables,
  APITypes.GetJobHistoryQuery
>;
export const listJobHistories = /* GraphQL */ `query ListJobHistories(
  $filter: ModelJobHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listJobHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      company
      location
      startDate
      endDate
      icon
      logo
      mobile
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListJobHistoriesQueryVariables,
  APITypes.ListJobHistoriesQuery
>;
export const getEducation = /* GraphQL */ `query GetEducation($id: ID!) {
  getEducation(id: $id) {
    id
    university
    degree
    location
    start
    end
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEducationQueryVariables,
  APITypes.GetEducationQuery
>;
export const listEducations = /* GraphQL */ `query ListEducations(
  $filter: ModelEducationFilterInput
  $limit: Int
  $nextToken: String
) {
  listEducations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      university
      degree
      location
      start
      end
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEducationsQueryVariables,
  APITypes.ListEducationsQuery
>;
export const getCertificate = /* GraphQL */ `query GetCertificate($id: ID!) {
  getCertificate(id: $id) {
    id
    title
    company
    completionDate
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCertificateQueryVariables,
  APITypes.GetCertificateQuery
>;
export const listCertificates = /* GraphQL */ `query ListCertificates(
  $filter: ModelCertificateFilterInput
  $limit: Int
  $nextToken: String
) {
  listCertificates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      company
      completionDate
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCertificatesQueryVariables,
  APITypes.ListCertificatesQuery
>;
export const getProject = /* GraphQL */ `query GetProject($id: ID!) {
  getProject(id: $id) {
    id
    title
    description
    technologies
    link
    github
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProjectQueryVariables,
  APITypes.GetProjectQuery
>;
export const listProjects = /* GraphQL */ `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      technologies
      link
      github
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProjectsQueryVariables,
  APITypes.ListProjectsQuery
>;
