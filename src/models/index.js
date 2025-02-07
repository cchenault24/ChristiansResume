// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { JobHistory, Education, Certificate, Project } = initSchema(schema);

export {
  JobHistory,
  Education,
  Certificate,
  Project
};