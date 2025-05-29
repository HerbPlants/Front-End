/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'background': '#FAFDF2',
  			'foreground': '#E5F5BD',
  			'green-deep': '#1A3129',
				'green-shades-70': '#CBEA7B',
				'green-shades-75': '#D3EE91',
				'green-shades-80': '#DCF1A7',
				'green-shades-85': '#E5F5BD',
				'green-shades-90': '#EEF8D3',
				'green-shades-95': '#F6FBE9',
				'green-shades-97': '#FAFDF2',
				'green-shades-99': '#FDFEFB',
				'dark-green-shades-15': '#1A3129',
				'dark-green-shades-20': '#234338',
				'dark-green-shades-25': '#2C5446',
				'dark-green-shades-30': '#346454',
				'dark-green-shades-40': '#468671',
				'dark-green-shades-60': '#79B9A4',
				'dark-green-shades-80': '#BCDCD1',
				'dark-green-shades-90': '#DDEDE8',
				'dark-grey-shades-10': '#191919',
				'dark-grey-shades-15': '#262626',
				'dark-grey-shades-20': '#333333',
				'dark-grey-shades-30': '#4C4C4D',
				'dark-grey-shades-35': '#59595A9', 
				'dark-grey-shades-40': '#656567',
				'dark-grey-shades-60': '#98989A',
				'dark-grey-shades-90': '#E6E6E6',
				'dark-grey-shades-95': '#F2F2F2',
				'dark-grey-shades-97': '#F7F7F7',
				'dark-grey-shades-99': '#FCFCFC',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}