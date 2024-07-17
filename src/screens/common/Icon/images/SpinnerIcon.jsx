export const SpinnerIcon = ({ ...props }) => (
  <svg
    aria-hidden='true'
    focusable='false'
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='spin'
    {...props}
  >
    <g>
      <circle cx='17' cy='17' r='15' strokeWidth='4' />
      <path
        d='M32 17C32 8.71573 25.2843 2 17 2'
        stroke='white'
        strokeWidth='4'
        strokeLinecap='round'
      />
    </g>
  </svg>
);
