/** Enforce Conventional Commits — the fuel for semantic-release. */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Allow a slightly longer header for descriptive commits
    'header-max-length': [2, 'always', 100],
  },
};
