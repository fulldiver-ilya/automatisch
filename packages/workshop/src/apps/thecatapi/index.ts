import defineApp from '../../helpers/define-app';
import auth from './auth';
import triggers from './triggers';
import actions from './actions';

export default defineApp({
  name: 'The Cat API',
  key: 'thecatapi',
  iconUrl: '{WORKSHOP_URL}/apps/thecatapi/assets/favicon.svg',
  authDocUrl: '{DOCS_URL}/apps/thecatapi/connection',
  supportsConnections: true,
  baseUrl: 'https://thecatapi.com',
  apiBaseUrl: 'https://api.thecatapi.com',
  primaryColor: '000000',
  auth,
  triggers,
  actions,
});