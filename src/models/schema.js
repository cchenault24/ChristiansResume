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
          isRequired: true,
        },
        startDate: {
          type: "String",
          isRequired: true,
        },
        endDate: {
          type: "String",
          isRequired: true,
        },
        icon: {
          type: "String",
          isRequired: true,
        },
        logo: {
          type: "String",
          isRequired: true,
        },
        mobile: {
          type: "String",
          isRequired: true,
        },
        description: {
          type: "[String]",
          isRequired: true,
        },
        createdAt: {
          name: "createdAt",
          type: "AWSDateTime",
          isRequired: false,
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          type: "AWSDateTime",
          isRequired: false,
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "JobHistories",
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
        createdAt: {
          name: "createdAt",
          type: "AWSDateTime",
          isRequired: false,
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          type: "AWSDateTime",
          isRequired: false,
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Education",
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
    Certificate: {
      name: "Certificate",
      fields: {
        id: { type: "ID", isRequired: true },
        title: { type: "String", isRequired: true },
        company: { type: "String", isRequired: true },
        type: { type: "String", isRequired: true },
        description: { type: "String", isRequired: true },
        completionDate: { type: "String", isRequired: true },
        icon: { type: "String", isRequired: true },
        certificate: { type: "String", isRequired: true },
        createdAt: {
          name: "createdAt",
          type: "AWSDateTime",
          isRequired: false,
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          type: "AWSDateTime",
          isRequired: false,
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
    Skills: {
      name: "Skills",
      fields: {
        id: {
          type: "ID",
          isRequired: true,
        },
        name: {
          type: "String",
          isRequired: true,
        },
        category: {
          type: "String",
          isRequired: true,
        },
        proficiency: {
          type: "Int",
          isRequired: true,
        },
        icon: {
          type: "String",
          isRequired: true,
        },
      },
      syncable: true,
      pluralName: "Skills",
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
