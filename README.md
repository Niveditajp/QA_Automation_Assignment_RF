# QA Assignment — Playwright + TypeScript

UI tests against [SauceDemo](https://www.saucedemo.com) and API tests against
[ReqRes](https://reqres.in), using Playwright’s `request` fixture (no browser)
for Part 2.

## Install

```bash
npm install
npx playwright install --with-deps chromium
```

## Run

Copy `.env.example` to `.env` and add your ReqRes API key (required for Part 2):

```bash
cp .env.example .env
```

```bash
npx playwright test              # all tests
npx playwright test tests/ui     # Part 1 — SauceDemo
npx playwright test tests/api    # Part 2 — ReqRes
npx playwright test --headed     # watch the browser
npx playwright show-report       # HTML report after a run
```

ReqRes requires an `x-api-key` header. The key is read from `.env`
(`REQRES_API_KEY`) and is never committed. SauceDemo credentials are also read
from `.env`; base URLs, expected messages, and other non-secret test data live
in `config/dev.json`.

## Scenario coverage

| # | Scenario | Spec |
|---|----------|------|
| 1 | Standard user lands on the products page | `tests/ui/login.spec.ts` |
| 2 | Locked-out user sees the error and is not logged in | `tests/ui/login.spec.ts` |
| 3 | Add two products; cart badge is `2` | `tests/ui/cart.spec.ts` |
| 4 | Full checkout; “Thank you for your order!” | `tests/ui/checkout.spec.ts` |
| 5 | Sort Price (low to high); first item is cheapest | `tests/ui/sort.spec.ts` |
| 6 | GET `/api/users?page=2` | `tests/api/users.spec.ts` |
| 7 | POST `/api/users` | `tests/api/users.spec.ts` |
| 8 | Bonus create-then-verify structure | `tests/api/users.spec.ts` |

## Structure

```
.env                          # secrets (gitignored) — API key and credentials
.env.example                  # placeholder for local setup
config/dev.json               # base URLs and non-secret test data
config/index.ts               # merges dev.json + .env
pages/                        # Page objects (locators + actions)
  LoginPage.ts
  ProductsPage.ts
  CheckoutPage.ts
tests/
  fixtures/saucedemo.ts       # page objects + logged-in fixture
  ui/                         # Part 1
  api/                        # Part 2 — request fixture only
playwright.config.ts          # separate `ui` and `api` projects
```

