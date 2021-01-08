// import { useEffect, useRef } from "react";
// import { graphql, useStaticQuery } from "gatsby";

// export const useSiteMetadata = () => {
//   const { site } = useStaticQuery(
//     graphql`
//       query SITE_METADATA_QUERY {
//         site {
//           siteMetadata {
//             title
//             description
//           }
//         }
//       }
//     `,
//   );
//   return site.siteMetadata;
// };

// export function useInterval(callback, delay) {
//   const savedCallback = useRef();

//   // Remember the latest callback.
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   // Set up the interval.
//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// }
