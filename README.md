QA Automation Assignment

A structured end-to-end test automation framework built with Playwright and TypeScript, covering both UI and API testing.
The project is organized using reusable components and follows a maintainable automation structure with dedicated page objects, fixtures, configuration, and test suites.

Tech Stack
Technology	             Usage
Playwright	             UI and API test automation
TypeScript	             Test implementation
Node.js / npm	         Project runtime and dependency management
dotenv	                 Environment configuration
Git & GitHub	         Source control
GitHub Actions	         Continuous Integration
Playwright HTML Report	 Test execution reporting

Project Structure
QA_Automation_Assignment_RF/
│
├── .github/
│   └── workflows/          # CI workflow configuration
│
├── config/                 # Project configuration
│
├── pages/                  # Page Object Model classes
│
├── tests/
│   ├── api/
│   │   └── user.spec.ts    # API test scenarios
│   │
│   ├── fixtures/           # Reusable Playwright fixtures
│   │
│   └── ui/
│       ├── cart.spec.ts
│       ├── checkout.spec.ts
│       ├── login.spec.ts
│       └── sort.spec.ts
│
├── .env                    # Environment variables
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
├── tsconfig.json
└── README.md

Test Coverage
UI Automation
The UI test suite is organized into independent test specifications covering key application workflows:
Login — authentication and login scenarios
Cart — shopping cart functionality
Checkout — checkout workflow
Sorting — product sorting functionality

API Automation
The API test suite contains scenarios for user-related API functionality.
tests/api/user.spec.ts
UI and API tests can be executed independently, making it easier to isolate failures and troubleshoot issues.

Framework Design
The framework follows a structured automation approach using:

Page Object Model

Page-specific interactions are separated from test specifications through the pages/ directory.

This helps provide:

Reusable page actions
Cleaner test specifications
Reduced code duplication
Easier maintenance
Reusable Fixtures

Common test setup and reusable functionality are maintained under:

tests/fixtures/
Centralized Configuration

Playwright configuration is maintained in:

playwright.config.ts

Environment-specific values can be managed through:

.env

Installation
Prerequisites

Make sure the following are installed:
Node.js
npm
Git
Clone the repository
git clone https://github.com/Niveditajp/QA_Automation_Assignment_RF.git
Navigate to the project
cd QA_Automation_Assignment_RF
Install dependencies
npm install
Install Playwright browsers
npx playwright install

Running Tests
Run all tests
npm test
Run UI tests
npm run test:ui
Run API tests
npm run test:api
Run tests in headed mode
npm run test:headed


Test Reports

After test execution, Playwright generates an HTML report.

Open the report using:

npm run report

The Playwright report provides detailed information about test execution and helps with failure analysis.

Continuous Integration

The repository includes GitHub Actions configuration under:

.github/workflows/

This allows the automation suite to be integrated into a CI pipeline so that tests can be executed automatically in a controlled environment.


Available npm Scripts
Command	              Description
npm test	          Run the complete Playwright test suite
npm run test:ui	      Run UI tests
npm run test:api	  Run API tests
npm run test:headed	  Run tests with the browser visible
npm run report	      Open the Playwright HTML report


Key Automation Practices

This project demonstrates practical implementation of:

End-to-end UI automation
API automation
Playwright
TypeScript
Page Object Model
Reusable fixtures
Test suite organization
Environment configuration
Automated test reporting
Git-based version control
CI integration with GitHub Actions