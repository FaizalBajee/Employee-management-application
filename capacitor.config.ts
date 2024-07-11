import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'attendanceIonic',
  webDir: 'www',
  plugins: {
    GoogleMaps: {
      apiKey: 'AIzaSyC6H3lsmFh4_Sh6yt6SArnk1gJbF-Upvvk'
    }
  }
};

export default config;
