const LoadingSpinner = ({ message = "Loading" }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <style>
        {`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes spin2 {
            0% {
              stroke-dasharray: 1, 800;
              stroke-dashoffset: 0;
            }
            50% {
              stroke-dasharray: 400, 400;
              stroke-dashoffset: -200px;
            }
            100% {
              stroke-dasharray: 800, 1;
              stroke-dashoffset: -800px;
            }
          }

          .spin2 {
            transform-origin: center;
            animation: spin2 1.5s ease-in-out infinite, spin 2s linear infinite;
            animation-direction: alternate;
          }

          @keyframes dots {
            0%   { content: "."; }
            33%  { content: ". ."; }
            66%  { content: ". . ."; }
            100% { content: ""; }
          }

          .dots::after {
            content: "."; 
            animation: dots 1.2s steps(4, end) infinite;
          }
        `}
      </style>

      <svg viewBox="0 0 800 800" className="h-28 w-28" xmlns="http://www.w3.org/2000/svg">
        <circle
          className="spin2 stroke-dark-green-shades-40"
          cx="400"
          cy="400"
          fill="none"
          r="300"
          strokeWidth="25"
          strokeDasharray="800 1400"
          strokeLinecap="round"
        />
        <image
          href="/images/assets/mascot/ser.png"
          width="300"
          height="300"
          x="250"
          y="250"
        />
      </svg>

      {message && (
        <p className="text-dark-green-shades-20 font-medium text-sm sm:text-base">
          {message} <span className="dots" />
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
