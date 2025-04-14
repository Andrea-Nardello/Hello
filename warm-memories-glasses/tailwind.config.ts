
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: 'hsl(var(--primary))',
				"primary-foreground": 'hsl(var(--primary-foreground))',
				secondary: 'hsl(var(--secondary))',
				"secondary-foreground": 'hsl(var(--secondary-foreground))',
				destructive: 'hsl(var(--destructive))',
				"destructive-foreground": 'hsl(var(--destructive-foreground))',
				muted: 'hsl(var(--muted))',
				"muted-foreground": 'hsl(var(--muted-foreground))',
				accent: 'hsl(var(--accent))',
				"accent-foreground": 'hsl(var(--accent-foreground))',
				popover: 'hsl(var(--popover))',
				"popover-foreground": 'hsl(var(--popover-foreground))',
				card: 'hsl(var(--card))',
				"card-foreground": 'hsl(var(--card-foreground))',
        
        // Custom colors for Reminis
        reminis: {
          blue: "#90B8F8",
          teal: "#83D0CB",
          cream: "#F5F3EC",
          sand: "#E6DED1",
          navy: "#2D3142",
          coral: "#FF8C7E",
        },
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Playfair Display', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-delay': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'50%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'zoom-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'blur-in': {
					'0%': { filter: 'blur(8px)', opacity: '0' },
					'100%': { filter: 'blur(0)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-in-delay': 'fade-in-delay 1s ease-out',
				'slide-in': 'slide-in 0.7s ease-out',
				'slide-in-left': 'slide-in-left 0.7s ease-out',
				'zoom-in': 'zoom-in 0.7s ease-out',
				'blur-in': 'blur-in 0.7s ease-out',
				'float': 'float 3s ease-in-out infinite',
			},
			boxShadow: {
				'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'glass': '0 8px 32px rgba(0, 0, 0, 0.06)',
				'elevated': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
				'button': '0 2px 10px rgba(0, 0, 0, 0.05)',
			},
			backdropBlur: {
				'xs': '2px',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
