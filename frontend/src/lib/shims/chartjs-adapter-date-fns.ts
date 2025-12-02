
/**
 * Shim for chartjs-adapter-date-fns to avoid requiring external dependency during build.
 * Exports nothing; Chart.js won't have date adapter features but compilation will succeed.
 */
export default {};
