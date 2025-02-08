export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string | null;
  github?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Skill {
  id: string;
  skill: string;
  descriptor: string;
  category: string;
}

export interface Certificate {
  id: string;
  title: string;
  company: string;
  type?: string | null;
  completionDate: string;
  description: string;
  certificate: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
  __typename: "Certificate";
}

export interface EducationEntry {
  __typename: "Education";
  id: string;
  university: string;
  degree: string;
  location: string;
  start: string;
  end: string;
  description: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
}
