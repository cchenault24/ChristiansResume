import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerJobHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobHistory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly company: string;
  readonly title: string;
  readonly location: string;
  readonly start: string;
  readonly end: string;
  readonly description: string[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJobHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobHistory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly company: string;
  readonly title: string;
  readonly location: string;
  readonly start: string;
  readonly end: string;
  readonly description: string[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type JobHistory = LazyLoading extends LazyLoadingDisabled ? EagerJobHistory : LazyJobHistory

export declare const JobHistory: (new (init: ModelInit<JobHistory>) => JobHistory) & {
  copyOf(source: JobHistory, mutator: (draft: MutableModel<JobHistory>) => MutableModel<JobHistory> | void): JobHistory;
}

type EagerEducation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Education, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly university: string;
  readonly degree: string;
  readonly location: string;
  readonly start: string;
  readonly end: string;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEducation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Education, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly university: string;
  readonly degree: string;
  readonly location: string;
  readonly start: string;
  readonly end: string;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Education = LazyLoading extends LazyLoadingDisabled ? EagerEducation : LazyEducation

export declare const Education: (new (init: ModelInit<Education>) => Education) & {
  copyOf(source: Education, mutator: (draft: MutableModel<Education>) => MutableModel<Education> | void): Education;
}

type EagerCertificate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Certificate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly company: string;
  readonly completionDate: string;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCertificate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Certificate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly company: string;
  readonly completionDate: string;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Certificate = LazyLoading extends LazyLoadingDisabled ? EagerCertificate : LazyCertificate

export declare const Certificate: (new (init: ModelInit<Certificate>) => Certificate) & {
  copyOf(source: Certificate, mutator: (draft: MutableModel<Certificate>) => MutableModel<Certificate> | void): Certificate;
}

type EagerProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly technologies: string[];
  readonly link?: string | null;
  readonly github?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly technologies: string[];
  readonly link?: string | null;
  readonly github?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}