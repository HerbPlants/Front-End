const LoadingOverlay = ({ message = "Loading" }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex flex-col justify-center items-center">
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

      <svg viewBox="0 0 800 800" className="h-48 w-48" xmlns="http://www.w3.org/2000/svg">
        <circle
          className="spin2 stroke-green-shades-70"
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
          width="460"
          height="460"
          x="170"
          y="150"
        />
      </svg>

      <h2 className="text-dark-green-shades-15 font-semibold bg-green-shades-70 py-2 px-6 md:px-8 text-sm sm:text-base rounded-lg flex items-center">
        {message} <span className="dots" />
      </h2>
    </div>
  );
};

export default LoadingOverlay;
