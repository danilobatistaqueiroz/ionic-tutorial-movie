import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.labs.whatsclone',
  appName: 'whatsclone',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
