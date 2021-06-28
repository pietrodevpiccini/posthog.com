module.exports = {
    mode: 'jit',
    purge: {
        content: ['./src/**/*.{js,jsx,ts,tsx}'],
        options: {
            safelist: [
                'w-full',
                'w-56',
                'w-64',
                'w-72',
                '-mt-2',
                '-ml-2',
                '-mr-2',
                '-mb-2',
                '-mt-4',
                '-mr-4',
                '-mb-4',
                '-ml-4',
                'max-w-xl',
                'max-w-2xl',
                'max-w-3xl',
                'max-w-4xl',
                'max-w-5xl',
            ],
        },
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            mdlg: '900px',
            // specifically for plans

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        flex: {
            '1/3': '0 0 33%',
            '2/3': '0 0 66%',
            half: '0 0 49%',
            full: '0 0 100%',
        },
        backgroundColor: (theme) => ({
            purple: '#2A0B46',
            white: '#fff',
        }),
        extend: {
            fontFamily: {
                gosha: ['Gosha Sans', 'Arial', 'Helvetica', 'sans-serif'],
                serif: ['Gosha Sans', 'Arial', 'Helvetica', 'sans-serif'],
                sans: [
                    'SK Curiosity',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'avenir next',
                    'avenir',
                    'segoe ui',
                    'helvetica neue',
                    'helvetica',
                    'Ubuntu',
                    'roboto',
                    'noto',
                    'arial',
                    'sans-serif',
                ],
                button: ['Osiris', 'sans-serif'],
                nav: ['Osiris', 'sans-serif'],
                osiris: ['Osiris', 'sans-serif'],
            },
            fontSize: {
                '2xs': '0.65rem',
                base: '.875rem',
                'base-larger': '.933rem',
                'text-sm': '.8rem',
            },
            colors: {
                primary: 'rgba(255, 99, 39, 0.9)',
                'primary-dark': 'rgba(218, 72, 16, 0.9)',
                purpleish: '#802f6a',
                'purpleish-dark': '#72286E',
                orange: '#EF7632',
                'darkmode-purple': '#220f3f',
                'offwhite-purple': '#F4F1F8',
                'baby-blue': '#CDD0FF',
                'deep-blue': '#160431',
                'royal-blue': '#232D69',
                yellow: '#F7A501',
                footer: '#08042f',
                pink: '#A970DC',
            },
            minHeight: {
                780: '780px',
            },
            borderRadius: {
                sm: '4px',
                lg: '20px',
            },
            borderWidth: {
                3: '3px',
                8: '8px',
                12: '12px',
                16: '16px',
            },
            padding: {
                'fluid-video': '56.25%',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
