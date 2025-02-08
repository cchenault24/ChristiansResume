/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateJobHistoryInput = {
  id?: string | null,
  title: string,
  company: string,
  location: string,
  startDate: string,
  endDate: string,
  icon: string,
  logo: string,
  mobile: string,
  description: Array< string | null >,
};

export type ModelJobHistoryConditionInput = {
  title?: ModelStringInput | null,
  company?: ModelStringInput | null,
  location?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelJobHistoryConditionInput | null > | null,
  or?: Array< ModelJobHistoryConditionInput | null > | null,
  not?: ModelJobHistoryConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type JobHistory = {
  __typename: "JobHistory",
  id: string,
  title: string,
  company: string,
  location: string,
  startDate: string,
  endDate: string,
  icon: string,
  logo: string,
  mobile: string,
  description: Array< string | null >,
  createdAt: string,
  updatedAt: string,
};

export type UpdateJobHistoryInput = {
  id: string,
  title?: string | null,
  company?: string | null,
  location?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  icon?: string | null,
  logo?: string | null,
  mobile?: string | null,
  description?: Array< string | null > | null,
};

export type DeleteJobHistoryInput = {
  id: string,
};

export type CreateEducationInput = {
  id?: string | null,
  university: string,
  degree: string,
  location: string,
  start: string,
  end: string,
  icon: string,
  description: string,
};

export type ModelEducationConditionInput = {
  university?: ModelStringInput | null,
  degree?: ModelStringInput | null,
  location?: ModelStringInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelEducationConditionInput | null > | null,
  or?: Array< ModelEducationConditionInput | null > | null,
  not?: ModelEducationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Education = {
  __typename: "Education",
  id: string,
  university: string,
  degree: string,
  location: string,
  start: string,
  end: string,
  icon: string,
  description: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEducationInput = {
  id: string,
  university?: string | null,
  degree?: string | null,
  location?: string | null,
  start?: string | null,
  end?: string | null,
  icon?: string | null,
  description?: string | null,
};

export type DeleteEducationInput = {
  id: string,
};

export type CreateCertificateInput = {
  id?: string | null,
  title: string,
  company: string,
  type?: string | null,
  description: string,
  completionDate: string,
  icon: string,
  certificate: string,
};

export type ModelCertificateConditionInput = {
  title?: ModelStringInput | null,
  company?: ModelStringInput | null,
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  completionDate?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  certificate?: ModelStringInput | null,
  and?: Array< ModelCertificateConditionInput | null > | null,
  or?: Array< ModelCertificateConditionInput | null > | null,
  not?: ModelCertificateConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Certificate = {
  __typename: "Certificate",
  id: string,
  title: string,
  company: string,
  type?: string | null,
  description: string,
  completionDate: string,
  icon: string,
  certificate: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCertificateInput = {
  id: string,
  title?: string | null,
  company?: string | null,
  type?: string | null,
  description?: string | null,
  completionDate?: string | null,
  icon?: string | null,
  certificate?: string | null,
};

export type DeleteCertificateInput = {
  id: string,
};

export type CreateProjectInput = {
  id?: string | null,
  title: string,
  description: string,
  technologies: Array< string >,
  link?: string | null,
  github?: string | null,
};

export type ModelProjectConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  technologies?: ModelStringInput | null,
  link?: ModelStringInput | null,
  github?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  title: string,
  description: string,
  technologies: Array< string >,
  link?: string | null,
  github?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProjectInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  technologies?: Array< string > | null,
  link?: string | null,
  github?: string | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type CreateSkillInput = {
  id?: string | null,
  skill: string,
  descriptor: string,
  category: string,
};

export type ModelSkillConditionInput = {
  skill?: ModelStringInput | null,
  descriptor?: ModelStringInput | null,
  category?: ModelStringInput | null,
  and?: Array< ModelSkillConditionInput | null > | null,
  or?: Array< ModelSkillConditionInput | null > | null,
  not?: ModelSkillConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Skill = {
  __typename: "Skill",
  id: string,
  skill: string,
  descriptor: string,
  category: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSkillInput = {
  id: string,
  skill?: string | null,
  descriptor?: string | null,
  category?: string | null,
};

export type DeleteSkillInput = {
  id: string,
};

export type ModelJobHistoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  company?: ModelStringInput | null,
  location?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelJobHistoryFilterInput | null > | null,
  or?: Array< ModelJobHistoryFilterInput | null > | null,
  not?: ModelJobHistoryFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelJobHistoryConnection = {
  __typename: "ModelJobHistoryConnection",
  items:  Array<JobHistory | null >,
  nextToken?: string | null,
};

export type ModelEducationFilterInput = {
  id?: ModelIDInput | null,
  university?: ModelStringInput | null,
  degree?: ModelStringInput | null,
  location?: ModelStringInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEducationFilterInput | null > | null,
  or?: Array< ModelEducationFilterInput | null > | null,
  not?: ModelEducationFilterInput | null,
};

export type ModelEducationConnection = {
  __typename: "ModelEducationConnection",
  items:  Array<Education | null >,
  nextToken?: string | null,
};

export type ModelCertificateFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  company?: ModelStringInput | null,
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  completionDate?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  certificate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCertificateFilterInput | null > | null,
  or?: Array< ModelCertificateFilterInput | null > | null,
  not?: ModelCertificateFilterInput | null,
};

export type ModelCertificateConnection = {
  __typename: "ModelCertificateConnection",
  items:  Array<Certificate | null >,
  nextToken?: string | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  technologies?: ModelStringInput | null,
  link?: ModelStringInput | null,
  github?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type ModelSkillFilterInput = {
  id?: ModelIDInput | null,
  skill?: ModelStringInput | null,
  descriptor?: ModelStringInput | null,
  category?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSkillFilterInput | null > | null,
  or?: Array< ModelSkillFilterInput | null > | null,
  not?: ModelSkillFilterInput | null,
};

export type ModelSkillConnection = {
  __typename: "ModelSkillConnection",
  items:  Array<Skill | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionJobHistoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  company?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  icon?: ModelSubscriptionStringInput | null,
  logo?: ModelSubscriptionStringInput | null,
  mobile?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionJobHistoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionJobHistoryFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionEducationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  university?: ModelSubscriptionStringInput | null,
  degree?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  start?: ModelSubscriptionStringInput | null,
  end?: ModelSubscriptionStringInput | null,
  icon?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEducationFilterInput | null > | null,
  or?: Array< ModelSubscriptionEducationFilterInput | null > | null,
};

export type ModelSubscriptionCertificateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  company?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  completionDate?: ModelSubscriptionStringInput | null,
  icon?: ModelSubscriptionStringInput | null,
  certificate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCertificateFilterInput | null > | null,
  or?: Array< ModelSubscriptionCertificateFilterInput | null > | null,
};

export type ModelSubscriptionProjectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  technologies?: ModelSubscriptionStringInput | null,
  link?: ModelSubscriptionStringInput | null,
  github?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectFilterInput | null > | null,
};

export type ModelSubscriptionSkillFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  skill?: ModelSubscriptionStringInput | null,
  descriptor?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSkillFilterInput | null > | null,
  or?: Array< ModelSubscriptionSkillFilterInput | null > | null,
};

export type CreateJobHistoryMutationVariables = {
  input: CreateJobHistoryInput,
  condition?: ModelJobHistoryConditionInput | null,
};

export type CreateJobHistoryMutation = {
  createJobHistory?:  {
    __typename: "JobHistory",
    id: string,
    title: string,
    company: string,
    location: string,
    startDate: string,
    endDate: string,
    icon: string,
    logo: string,
    mobile: string,
    description: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateJobHistoryMutationVariables = {
  input: UpdateJobHistoryInput,
  condition?: ModelJobHistoryConditionInput | null,
};

export type UpdateJobHistoryMutation = {
  updateJobHistory?:  {
    __typename: "JobHistory",
    id: string,
    title: string,
    company: string,
    location: string,
    startDate: string,
    endDate: string,
    icon: string,
    logo: string,
    mobile: string,
    description: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteJobHistoryMutationVariables = {
  input: DeleteJobHistoryInput,
  condition?: ModelJobHistoryConditionInput | null,
};

export type DeleteJobHistoryMutation = {
  deleteJobHistory?:  {
    __typename: "JobHistory",
    id: string,
    title: string,
    company: string,
    location: string,
    startDate: string,
    endDate: string,
    icon: string,
    logo: string,
    mobile: string,
    description: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEducationMutationVariables = {
  input: CreateEducationInput,
  condition?: ModelEducationConditionInput | null,
};

export type CreateEducationMutation = {
  createEducation?:  {
    __typename: "Education",
    id: string,
    university: string,
    degree: string,
    location: string,
    start: string,
    end: string,
    icon: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEducationMutationVariables = {
  input: UpdateEducationInput,
  condition?: ModelEducationConditionInput | null,
};

export type UpdateEducationMutation = {
  updateEducation?:  {
    __typename: "Education",
    id: string,
    university: string,
    degree: string,
    location: string,
    start: string,
    end: string,
    icon: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEducationMutationVariables = {
  input: DeleteEducationInput,
  condition?: ModelEducationConditionInput | null,
};

export type DeleteEducationMutation = {
  deleteEducation?:  {
    __typename: "Education",
    id: string,
    university: string,
    degree: string,
    location: string,
    start: string,
    end: string,
    icon: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCertificateMutationVariables = {
  input: CreateCertificateInput,
  condition?: ModelCertificateConditionInput | null,
};

export type CreateCertificateMutation = {
  createCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    company: string,
    type?: string | null,
    description: string,
    completionDate: string,
    icon: string,
    certificate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCertificateMutationVariables = {
  input: UpdateCertificateInput,
  condition?: ModelCertificateConditionInput | null,
};

export type UpdateCertificateMutation = {
  updateCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    company: string,
    type?: string | null,
    description: string,
    completionDate: string,
    icon: string,
    certificate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCertificateMutationVariables = {
  input: DeleteCertificateInput,
  condition?: ModelCertificateConditionInput | null,
};

export type DeleteCertificateMutation = {
  deleteCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    company: string,
    type?: string | null,
    description: string,
    completionDate: string,
    icon: string,
    certificate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description: string,
    technologies: Array< string >,
    link?: string | null,
    github?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description: string,
    technologies: Array< string >,
    link?: string | null,
    github?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description: string,
    technologies: Array< string >,
    link?: string | null,
    github?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSkillMutationVariables = {
  input: CreateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type CreateSkillMutation = {
  createSkill?:  {
    __typename: "Skill",
    id: string,
    skill: string,
    descriptor: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSkillMutationVariables = {
  input: UpdateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type UpdateSkillMutation = {
  updateSkill?:  {
    __typename: "Skill",
    id: string,
    skill: string,
    descriptor: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSkillMutationVariables = {
  input: DeleteSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type DeleteSkillMutation = {
  deleteSkill?:  {
    __typename: "Skill",
    id: string,
    skill: string,
    descriptor: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetJobHistoryQueryVariables = {
  id: string,
};

export type GetJobHistoryQuery = {
  getJobHistory?:  {
    __typename: "JobHistory",
    id: string,
    title: string,
    company: string,
    location: string,
    startDate: string,
    endDate: string,
    icon: string,
    logo: string,
    mobile: string,
    description: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListJobHistoriesQueryVariables = {
  filter?: ModelJobHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJobHistoriesQuery = {
  listJobHistories?:  {
    __typename: "ModelJobHistoryConnection",
    items:  Array< {
      __typename: "JobHistory",
      id: string,
      title: string,
      company: string,
      location: string,
      startDate: string,
      endDate: string,
      icon: string,
      logo: string,
      mobile: string,
      description: Array< string | null >,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEducationQueryVariables = {
  id: string,
};

export type GetEducationQuery = {
  getEducation?:  {
    __typename: "Education",
    id: string,
    university: string,
    degree: string,
    location: string,
    start: string,
    end: string,
    icon: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEducationsQueryVariables = {
  filter?: ModelEducationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEducationsQuery = {
  listEducations?:  {
    __typename: "ModelEducationConnection",
    items:  Array< {
      __typename: "Education",
      id: string,
      university: string,
      degree: string,
      location: string,
      start: string,
      end: string,
      icon: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCertificateQueryVariables = {
  id: string,
};

export type GetCertificateQuery = {
  getCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    company: string,
    type?: string | null,
    description: string,
    completionDate: string,
    icon: string,
    certificate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCertificatesQueryVariables = {
  filter?: ModelCertificateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCertificatesQuery = {
  listCertificates?:  {
    __typename: "ModelCertificateConnection",
    items:  Array< {
      __typename: "Certificate",
      id: string,
      title: string,
      company: string,
      type?: string | null,
      description: string,
      completionDate: string,
      icon: string,
      certificate: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description: string,
    technologies: Array< string >,
    link?: string | null,
    github?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      title: string,
      description: string,
      technologies: Array< string >,
      link?: string | null,
      github?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSkillQueryVariables = {
  id: string,
};

export type GetSkillQuery = {
  getSkill?:  {
    __typename: "Skill",
    id: string,
    skill: string,
    descriptor: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSkillsQueryVariables = {
  filter?: ModelSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSkillsQuery = {
  listSkills?:  {
    __typename: "ModelSkillConnection",
    items:  Array< {
      __typename: "Skill",
      id: string,
      skill: string,
      descriptor: string,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListSkillsByCategoryQueryVariables = {
  category: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSkillsByCategoryQuery = {
  listSkillsByCategory?:  {
    __typename: "ModelSkillConnection",
    items:  Array< {
      __typename: "Skill",
      id: string,
      skill: string,
      descriptor: string,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateJobHistorySubscriptionVariables = {
  filter?: ModelSubscriptionJobHistoryFilterInput | null,
};

export type OnCreateJobHistorySubscription = {
  onCreateJobHistory?:  {
    __typename: "JobHistory",
    id: string,
    title: string,
    company: string,
    location: string,
    startDate: string,
    endDate: string,
    icon: string,
    logo: string,
    mobile: string,
    description: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateJobHistorySubscriptionVariables = {
  filter?: ModelSubscriptionJobHistoryFilterInput | null,
};

export type OnUpdateJobHistorySubscription = {
  onUpdateJobHistory?:  {
    __typename: "JobHistory",
    id: string,
    title: string,
    company: string,
    location: string,
    startDate: string,
    endDate: string,
    icon: string,
    logo: string,
    mobile: string,
    description: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteJobHistorySubscriptionVariables = {
  filter?: ModelSubscriptionJobHistoryFilterInput | null,
};

export type OnDeleteJobHistorySubscription = {
  onDeleteJobHistory?:  {
    __typename: "JobHistory",
    id: string,
    title: string,
    company: string,
    location: string,
    startDate: string,
    endDate: string,
    icon: string,
    logo: string,
    mobile: string,
    description: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEducationSubscriptionVariables = {
  filter?: ModelSubscriptionEducationFilterInput | null,
};

export type OnCreateEducationSubscription = {
  onCreateEducation?:  {
    __typename: "Education",
    id: string,
    university: string,
    degree: string,
    location: string,
    start: string,
    end: string,
    icon: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEducationSubscriptionVariables = {
  filter?: ModelSubscriptionEducationFilterInput | null,
};

export type OnUpdateEducationSubscription = {
  onUpdateEducation?:  {
    __typename: "Education",
    id: string,
    university: string,
    degree: string,
    location: string,
    start: string,
    end: string,
    icon: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEducationSubscriptionVariables = {
  filter?: ModelSubscriptionEducationFilterInput | null,
};

export type OnDeleteEducationSubscription = {
  onDeleteEducation?:  {
    __typename: "Education",
    id: string,
    university: string,
    degree: string,
    location: string,
    start: string,
    end: string,
    icon: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCertificateSubscriptionVariables = {
  filter?: ModelSubscriptionCertificateFilterInput | null,
};

export type OnCreateCertificateSubscription = {
  onCreateCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    company: string,
    type?: string | null,
    description: string,
    completionDate: string,
    icon: string,
    certificate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCertificateSubscriptionVariables = {
  filter?: ModelSubscriptionCertificateFilterInput | null,
};

export type OnUpdateCertificateSubscription = {
  onUpdateCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    company: string,
    type?: string | null,
    description: string,
    completionDate: string,
    icon: string,
    certificate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCertificateSubscriptionVariables = {
  filter?: ModelSubscriptionCertificateFilterInput | null,
};

export type OnDeleteCertificateSubscription = {
  onDeleteCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    company: string,
    type?: string | null,
    description: string,
    completionDate: string,
    icon: string,
    certificate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description: string,
    technologies: Array< string >,
    link?: string | null,
    github?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description: string,
    technologies: Array< string >,
    link?: string | null,
    github?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description: string,
    technologies: Array< string >,
    link?: string | null,
    github?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnCreateSkillSubscription = {
  onCreateSkill?:  {
    __typename: "Skill",
    id: string,
    skill: string,
    descriptor: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnUpdateSkillSubscription = {
  onUpdateSkill?:  {
    __typename: "Skill",
    id: string,
    skill: string,
    descriptor: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnDeleteSkillSubscription = {
  onDeleteSkill?:  {
    __typename: "Skill",
    id: string,
    skill: string,
    descriptor: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
