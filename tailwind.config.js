module.exports = {
  theme: {
    animations: {
      spin: {
        from: {
          transform: 'rotate(0deg)'
        },
        to: {
          transform: 'rotate(360deg)'
        }
      },
      jump: {
        '0%': {
          transform: 'translateY(0%)'
        },
        '50%': {
          transform: 'translateY(-100%)'
        },
        '100%': {
          transform: 'translateY(0%)'
        }
      }
    },
    animationDuration: {
      default: '1s',
      '0s': '0s',
      '1s': '1s',
      '2s': '2s',
      '3s': '3s',
      '4s': '4s',
      '5s': '5s'
    },
    animationTimingFunction: {
      default: 'ease',
      linear: 'linear',
      ease: 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out'
    },
    animationDelay: {
      default: '0s',
      '0s': '0s',
      '1s': '1s',
      '2s': '2s',
      '3s': '3s',
      '4s': '4s',
      '5s': '5s'
    },
    animationIterationCount: {
      default: 'infinite',
      once: '1',
      infinite: 'infinite'
    },
    animationDirection: {
      default: 'normal',
      normal: 'normal',
      reverse: 'reverse',
      alternate: 'alternate',
      'alternate-reverse': 'alternate-reverse'
    },
    animationFillMode: {
      default: 'none',
      none: 'none',
      forwards: 'forwards',
      backwards: 'backwards',
      both: 'both'
    },
    animationPlayState: {
      running: 'running',
      paused: 'paused'
    },
    extend: {}
  },
  variants: {
    animations: ['responsive'],
    animationDuration: ['responsive'],
    animationTimingFunction: ['responsive'],
    animationDelay: ['responsive'],
    animationIterationCount: ['responsive'],
    animationDirection: ['responsive'],
    animationFillMode: ['responsive'],
    animationPlayState: ['responsive']
  },
  plugins: [require('tailwindcss-animations')]
}
