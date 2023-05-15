import verifyCredentials from './verify-credentials';
import isStillVerified from './is-still-verified';

export default {
  fields: [
    {
      key: 'version',
      label: 'PostgreSQL version',
      type: 'string' as const,
      required: true,
      readOnly: false,
      value: null,
      placeholder: null,
      description:
        'The version of PostgreSQL database that user want to connect with.',
      clickToCopy: false,
    },
    {
      key: 'host',
      label: 'Host',
      type: 'string' as const,
      required: true,
      readOnly: false,
      value: '127.0.0.1',
      placeholder: null,
      description: 'The host of the PostgreSQL database.',
      clickToCopy: false,
    },
    {
      key: 'port',
      label: 'Port',
      type: 'string' as const,
      required: true,
      readOnly: false,
      value: '5432',
      placeholder: null,
      description: 'The port of the PostgreSQL database.',
      clickToCopy: false,
    },
    {
      key: 'enableSsl',
      label: 'Enable SSL',
      type: 'dropdown' as const,
      required: true,
      readOnly: false,
      value: 'false',
      description: 'The port of the PostgreSQL database.',
      variables: false,
      clickToCopy: false,
      options: [
        {
          label: 'True',
          value: 'true',
        },
        {
          label: 'False',
          value: 'false',
        },
      ],
    },
    {
      key: 'database',
      label: 'Database name',
      type: 'string' as const,
      required: true,
      readOnly: false,
      value: null,
      placeholder: null,
      description: 'The database name of the PostgreSQL database.',
      clickToCopy: false,
    },
    {
      key: 'user',
      label: 'Database username',
      type: 'string' as const,
      required: true,
      readOnly: false,
      value: null,
      placeholder: null,
      description: 'The user who has access on postgres database.',
      clickToCopy: false,
    },
    {
      key: 'password',
      label: 'Password',
      type: 'string' as const,
      required: true,
      readOnly: false,
      value: null,
      placeholder: null,
      description: 'The password of the PostgreSQL database user.',
      clickToCopy: false,
    },
  ],

  verifyCredentials,
  isStillVerified,
};