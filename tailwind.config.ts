import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate' // 1. Add this import

export default {
    darkMode: ['class'],
    content: [
        // These are relative to the project root
        './app/**/*.{vue,js,ts}',
        './app/components/**/*.{vue,js,ts}',
        './app/layouts/**/*.vue',
        './app/pages/**/*.vue',
        // Keep the root files
        './nuxt.config.{js,ts}',
    ],
    prefix: '',
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
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			},
    			skloud: {
    				yellow: 'hsl(var(--skloud-yellow))',
    				pink: 'hsl(var(--skloud-pink))',
    				blue: 'hsl(var(--skloud-blue))',
    				purple: 'hsl(var(--skloud-purple))'
    			},
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
    			sm: 'calc(var(--radius) - 4px)',
    			xl: 'calc(var(--radius) + 4px)',
    			'2xl': 'calc(var(--radius) + 8px)',
    			'3xl': '1.5rem',
    			'4xl': '2rem'
    		},
    		fontFamily: {
    			sans: [
    				'Inter',
    				'system-ui',
    				'sans-serif'
    			],
    			display: [
    				'Poppins',
    				'Inter',
    				'system-ui',
    				'sans-serif'
    			]
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			fadeIn: {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(10px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			scaleIn: {
    				'0%': {
    					transform: 'scale(0.95)',
    					opacity: '0'
    				},
    				'100%': {
    					transform: 'scale(1)',
    					opacity: '1'
    				}
    			},
    			slideUp: {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(20px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			pulseGlow: {
    				'0%, 100%': {
    					opacity: '1',
    					boxShadow: '0 0 20px hsl(var(--skloud-blue) / 0.4)'
    				},
    				'50%': {
    					opacity: '0.8',
    					boxShadow: '0 0 30px hsl(var(--skloud-blue) / 0.6)'
    				}
    			},
    			'mesh-wave': {
    				'0%, 100%': {
    					transform: 'translate(0, 0) scale(1)'
    				},
    				'25%': {
    					transform: 'translate(20px, -30px) scale(1.05)'
    				},
    				'50%': {
    					transform: 'translate(-20px, 20px) scale(0.95)'
    				},
    				'75%': {
    					transform: 'translate(30px, 10px) scale(1.02)'
    				}
    			},
    			'mesh-wave-reverse': {
    				'0%, 100%': {
    					transform: 'translate(0, 0) scale(1)'
    				},
    				'25%': {
    					transform: 'translate(-30px, 20px) scale(0.98)'
    				},
    				'50%': {
    					transform: 'translate(25px, -25px) scale(1.03)'
    				},
    				'75%': {
    					transform: 'translate(-15px, -10px) scale(0.97)'
    				}
    			},
    			pulse: {
    				'0%, 100%': {
    					opacity: '1'
    				},
    				'50%': {
    					opacity: '0.5'
    				}
    			},
    			'spin-slow': {
    				from: {
    					transform: 'rotate(0deg)'
    				},
    				to: {
    					transform: 'rotate(360deg)'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'fade-in': 'fadeIn 0.5s ease-out',
    			'scale-in': 'scaleIn 0.3s ease-out',
    			'slide-up': 'slideUp 0.4s ease-out',
    			'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
    			'mesh-wave': 'mesh-wave 15s ease-in-out infinite',
    			'mesh-wave-reverse': 'mesh-wave-reverse 18s ease-in-out infinite',
    			pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    			'spin-slow': 'spin-slow 20s linear infinite'
    		}
    	}
    },
    plugins: [tailwindcssAnimate], // 2. Change require() to the variable name
} satisfies Config