/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  images: {
    domains: ['drfurithemes.com']
  },
  env: {
    FIREBASE_API_KEY: "AIzaSyAGS2SPk9CGbdqJT98Gup-c1Futw-nUvPI",
    FIREBASE_AUTH_DOMAIN: "farmart-ecommerce.firebaseapp.com",
    FIREBASE_PROJECT_ID: "farmart-ecommerce",
    FIREBASE_STORAGE_BUCKET: "farmart-ecommerce.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID:"634328199939",
    FIREBASE_APP_ID: "1:634328199939:web:b3e705f3df847f51fbaf36",

  }
}

module.exports = nextConfig
