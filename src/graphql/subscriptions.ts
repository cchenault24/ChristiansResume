/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../api";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateJobHistory = /* GraphQL */ `subscription OnCreateJobHistory(
  $filter: ModelSubscriptionJobHistoryFilterInput
) {
  onCreateJobHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateJobHistorySubscriptionVariables,
  APITypes.OnCreateJobHistorySubscription
>;
export const onUpdateJobHistory = /* GraphQL */ `subscription OnUpdateJobHistory(
  $filter: ModelSubscriptionJobHistoryFilterInput
) {
  onUpdateJobHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateJobHistorySubscriptionVariables,
  APITypes.OnUpdateJobHistorySubscription
>;
export const onDeleteJobHistory = /* GraphQL */ `subscription OnDeleteJobHistory(
  $filter: ModelSubscriptionJobHistoryFilterInput
) {
  onDeleteJobHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteJobHistorySubscriptionVariables,
  APITypes.OnDeleteJobHistorySubscription
>;
export const onCreateEducation = /* GraphQL */ `subscription OnCreateEducation($filter: ModelSubscriptionEducationFilterInput) {
  onCreateEducation(filter: $filter) {
    id
    university
    degree
    location
    start
    end
    icon
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEducationSubscriptionVariables,
  APITypes.OnCreateEducationSubscription
>;
export const onUpdateEducation = /* GraphQL */ `subscription OnUpdateEducation($filter: ModelSubscriptionEducationFilterInput) {
  onUpdateEducation(filter: $filter) {
    id
    university
    degree
    location
    start
    end
    icon
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEducationSubscriptionVariables,
  APITypes.OnUpdateEducationSubscription
>;
export const onDeleteEducation = /* GraphQL */ `subscription OnDeleteEducation($filter: ModelSubscriptionEducationFilterInput) {
  onDeleteEducation(filter: $filter) {
    id
    university
    degree
    location
    start
    end
    icon
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEducationSubscriptionVariables,
  APITypes.OnDeleteEducationSubscription
>;
export const onCreateCertificate = /* GraphQL */ `subscription OnCreateCertificate(
  $filter: ModelSubscriptionCertificateFilterInput
) {
  onCreateCertificate(filter: $filter) {
    id
    title
    company
    type
    description
    completionDate
    icon
    certificate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCertificateSubscriptionVariables,
  APITypes.OnCreateCertificateSubscription
>;
export const onUpdateCertificate = /* GraphQL */ `subscription OnUpdateCertificate(
  $filter: ModelSubscriptionCertificateFilterInput
) {
  onUpdateCertificate(filter: $filter) {
    id
    title
    company
    type
    description
    completionDate
    icon
    certificate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCertificateSubscriptionVariables,
  APITypes.OnUpdateCertificateSubscription
>;
export const onDeleteCertificate = /* GraphQL */ `subscription OnDeleteCertificate(
  $filter: ModelSubscriptionCertificateFilterInput
) {
  onDeleteCertificate(filter: $filter) {
    id
    title
    company
    type
    description
    completionDate
    icon
    certificate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCertificateSubscriptionVariables,
  APITypes.OnDeleteCertificateSubscription
>;
export const onCreateProject = /* GraphQL */ `subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
  onCreateProject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProjectSubscriptionVariables,
  APITypes.OnCreateProjectSubscription
>;
export const onUpdateProject = /* GraphQL */ `subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
  onUpdateProject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProjectSubscriptionVariables,
  APITypes.OnUpdateProjectSubscription
>;
export const onDeleteProject = /* GraphQL */ `subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
  onDeleteProject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProjectSubscriptionVariables,
  APITypes.OnDeleteProjectSubscription
>;
export const onCreateSkill = /* GraphQL */ `subscription OnCreateSkill($filter: ModelSubscriptionSkillFilterInput) {
  onCreateSkill(filter: $filter) {
    id
    skill
    descriptor
    category
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSkillSubscriptionVariables,
  APITypes.OnCreateSkillSubscription
>;
export const onUpdateSkill = /* GraphQL */ `subscription OnUpdateSkill($filter: ModelSubscriptionSkillFilterInput) {
  onUpdateSkill(filter: $filter) {
    id
    skill
    descriptor
    category
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSkillSubscriptionVariables,
  APITypes.OnUpdateSkillSubscription
>;
export const onDeleteSkill = /* GraphQL */ `subscription OnDeleteSkill($filter: ModelSubscriptionSkillFilterInput) {
  onDeleteSkill(filter: $filter) {
    id
    skill
    descriptor
    category
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSkillSubscriptionVariables,
  APITypes.OnDeleteSkillSubscription
>;
