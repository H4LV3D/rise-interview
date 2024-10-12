// "use client"; // Error components must be Client Components

// import { useEffect } from "react";

// export default function Error({
//   error,
//   reset,
// }: {
//   error: Error & { digest?: string };
//   reset: () => void;
// }) {
//   useEffect(() => {
//     console.error(error);
//   }, [error]);

//   return (
//     <div className="min-h-[90vh]bg-white flex items-center justify-center  ">
//       <div className="text-center p-6 border ">
//         <h2>Something went wrong!</h2>
//         <button
//           onClick={() => reset()}
//           className="bg-brand-teal text-white px-4 py-2 rounded-md mt-4"
//         >
//           Try again
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
