# CODEX

## Project goal

Generate a Google Form for real estate investor buy-needs collection using Google Apps Script.

## Commands

```bash
npm test
npm run lint
```

## Important files

- `google-apps-script/CreateInvestorNeedsForm.gs`: production Apps Script file
- `src/formSpec.js`: structured form specification for tests and future generation
- `test/form_spec.test.js`: tests for core survey coverage
- `docs/setup.md`: end-user setup guide
- `docs/architecture.md`: architecture overview

## Development notes

Keep `google-apps-script/CreateInvestorNeedsForm.gs` and `src/formSpec.js` aligned when adding or removing survey questions.

No secrets are required for the default implementation.
