module.exports = {
  // Type-check TypeScript files
  '**/*.(ts|tsx)': () => 'npm run type-check',

  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js|jsx)': filenames => [
    `npm run lint:fix`,
    `prettier --write ${filenames.join(' ')}`,
  ],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': filenames => `prettier --write ${filenames.join(' ')}`,

  // Run tests related to changed files
  '**/*.(ts|tsx|js|jsx)': (filenames) => 
    filenames.length > 0 ? `npm run test -- --findRelatedTests --passWithNoTests ${filenames.join(' ')}` : 'npm run test -- --passWithNoTests',
}
