export const schema = {
  models: {
    JobHistory: {
      name: "JobHistory",
      fields: {
        id: {
          type: "ID",
          isRequired: true,
        },
        title: {
          type: "String",
          isRequired: true,
        },
        company: {
          type: "String",
          isRequired: true,
        },
        location: {
          type: "String",
          isRequired: false,
        },
        startDate: {
          type: "String",
          isRequired: false,
        },
        endDate: {
          type: "String",
          isRequired: false,
        },
        icon: {
          type: "String",
          isRequired: false,
        },
        logo: {
          type: "String",
          isRequired: false,
        },
        mobile: {
          type: "String",
          isRequired: false,
        },
        description: {
          type: "[String]",
          isRequired: false,
        },
      },
    },
    Education: {
      name: "Education",
      fields: {
        id: { type: "ID", isRequired: true },
        university: { type: "String", isRequired: true },
        degree: { type: "String", isRequired: true },
        location: { type: "String", isRequired: true },
        start: { type: "String", isRequired: true },
        end: { type: "String", isRequired: true },
        icon: { type: "String", isRequired: true },
        description: { type: "String", isRequired: true },
      },
    },
    Certificate: {
      name: "Certificate",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        title: {
          name: "title",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        company: {
          name: "company",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        completionDate: {
          name: "completionDate",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        description: {
          name: "description",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Certificates",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["read"],
              },
            ],
          },
        },
      ],
    },
    Project: {
      name: "Project",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        title: {
          name: "title",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        description: {
          name: "description",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        technologies: {
          name: "technologies",
          isArray: true,
          type: "String",
          isRequired: true,
          attributes: [],
          isArrayNullable: false,
        },
        link: {
          name: "link",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        github: {
          name: "github",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Projects",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["read"],
              },
            ],
          },
        },
      ],
    },
  },
  enums: {},
  nonModels: {},
  codegenVersion: "3.4.4",
  version: "bb04d84c21a842df9673cf834151bd3f",
};
