import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.corpfarm.app',
  appName: 'CropFarm',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
