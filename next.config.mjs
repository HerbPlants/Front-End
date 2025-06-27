/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/predict',
        destination: 'http://47.129.222.248:5000/predict',
      },
    ]
  },

  images: {
    domains: ['ptuhihmtobhwyvesvgzz.supabase.co', 'localhost'],
  },
};

export default nextConfig;
