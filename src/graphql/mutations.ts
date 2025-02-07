/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../api";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createJobHistory = /* GraphQL */ `mutation CreateJobHistory(
  $input: CreateJobHistoryInput!
  $condition: ModelJobHistoryConditionInput
) {
  createJobHistory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateJobHistoryMutationVariables,
  APITypes.CreateJobHistoryMutation
>;
export const updateJobHistory = /* GraphQL */ `mutation UpdateJobHistory(
  $input: UpdateJobHistoryInput!
  $condition: ModelJobHistoryConditionInput
) {
  updateJobHistory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateJobHistoryMutationVariables,
  APITypes.UpdateJobHistoryMutation
>;
export const deleteJobHistory = /* GraphQL */ `mutation DeleteJobHistory(
  $input: DeleteJobHistoryInput!
  $condition: ModelJobHistoryConditionInput
) {
  deleteJobHistory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteJobHistoryMutationVariables,
  APITypes.DeleteJobHistoryMutation
>;
export const createEducation = /* GraphQL */ `mutation CreateEducation(
  $input: CreateEducationInput!
  $condition: ModelEducationConditionInput
) {
  createEducation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateEducationMutationVariables,
  APITypes.CreateEducationMutation
>;
export const updateEducation = /* GraphQL */ `mutation UpdateEducation(
  $input: UpdateEducationInput!
  $condition: ModelEducationConditionInput
) {
  updateEducation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateEducationMutationVariables,
  APITypes.UpdateEducationMutation
>;
export const deleteEducation = /* GraphQL */ `mutation DeleteEducation(
  $input: DeleteEducationInput!
  $condition: ModelEducationConditionInput
) {
  deleteEducation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteEducationMutationVariables,
  APITypes.DeleteEducationMutation
>;
export const createCertificate = /* GraphQL */ `mutation CreateCertificate(
  $input: CreateCertificateInput!
  $condition: ModelCertificateConditionInput
) {
  createCertificate(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCertificateMutationVariables,
  APITypes.CreateCertificateMutation
>;
export const updateCertificate = /* GraphQL */ `mutation UpdateCertificate(
  $input: UpdateCertificateInput!
  $condition: ModelCertificateConditionInput
) {
  updateCertificate(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCertificateMutationVariables,
  APITypes.UpdateCertificateMutation
>;
export const deleteCertificate = /* GraphQL */ `mutation DeleteCertificate(
  $input: DeleteCertificateInput!
  $condition: ModelCertificateConditionInput
) {
  deleteCertificate(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCertificateMutationVariables,
  APITypes.DeleteCertificateMutation
>;
export const createProject = /* GraphQL */ `mutation CreateProject(
  $input: CreateProjectInput!
  $condition: ModelProjectConditionInput
) {
  createProject(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProjectMutationVariables,
  APITypes.CreateProjectMutation
>;
export const updateProject = /* GraphQL */ `mutation UpdateProject(
  $input: UpdateProjectInput!
  $condition: ModelProjectConditionInput
) {
  updateProject(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProjectMutationVariables,
  APITypes.UpdateProjectMutation
>;
export const deleteProject = /* GraphQL */ `mutation DeleteProject(
  $input: DeleteProjectInput!
  $condition: ModelProjectConditionInput
) {
  deleteProject(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProjectMutationVariables,
  APITypes.DeleteProjectMutation
>;
