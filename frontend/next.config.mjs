// next.config.mjs
export default {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://unityviddb.database.windows.net/api/:path*' // Proxy to Backend
        }
      ];
    }
  };
  
