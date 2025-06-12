/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/predict',
        destination: 'http://13.213.77.209:5000/predict',
      },
    ]
  },

  images: {
    domains: ['ptuhihmtobhwyvesvgzz.supabase.co', 'localhost'],
  },
};

export default nextConfig;
