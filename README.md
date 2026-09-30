QA Automation Assignment

Overview

This repository contains an end-to-end QA Automation Assignment built using Playwright and TypeScript.

The framework is designed to demonstrate practical automation skills including:

UI automation
API testing
Page Object Model (POM)
Reusable test fixtures
Test data management
Assertions and validations
HTML test reporting
Continuous Integration with GitHub Actions

The project follows a structured and maintainable automation approach rather than relying on single, standalone test scripts.

Tech Stack
Technology	Purpose
Playwright	Browser automation & API testing
TypeScript	Test development
Node.js	Runtime environment
Git & GitHub	Version control
GitHub Actions	CI automation
Playwright HTML Report	Test execution reporting

Project Structure
QA_Automation_Assignment_RF/
│
├── tests/
│   ├── ui/
│   └── api/
│
├── pages/
│
├── fixtures/
│
├── test-data/
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── README.md
└── .github/
    └── workflows/


Testing Coverage
UI Automation

The UI automation covers functional scenarios through browser-based testing using Playwright.

Key areas include:
Page navigation
User interactions
Form handling
Element validation
Assertions
End-to-end workflows
API Testing

API tests validate backend behaviour independently of the UI.

The API layer includes validation of:
HTTP responses
Status codes
Response data
API behaviour
Request/response handling

Automation Framework Design

The framework follows the Page Object Model (POM) approach.

This separates:

Test Logic → Page Actions → Application UI

Benefits include:
Better maintainability
Reusable page actions
Reduced duplication
Cleaner test cases
Easier updates when the application changes

Reusable fixtures and test utilities are used wherever appropriate to keep the framework scalable.

▶Getting Started
1. Clone the repository
git clone https://github.com/Niveditajp/QA_Automation_Assignment_RF.git
2. Navigate to the project
cd QA_Automation_Assignment_RF
3. Install dependencies
npm install
4. Install Playwright browsers
npx playwright install

Running Tests
Run all tests
npx playwright test
Run tests with the browser visible
npx playwright test --headed
Run a specific test file
npx playwright test <test-file>
Run tests in debug mode
npx playwright test --debug

Test Reports

After execution, Playwright generates an HTML test report.

To open the report:

npx playwright show-report

The report provides information such as:
Passed tests
Failed tests
Execution duration
Test steps
Screenshots
Traces

Continuous Integration

The project is configured to support automated test execution through GitHub Actions.

This allows the test suite to be executed automatically in a CI environment and provides visibility into test results.

QA Automation Practices Demonstrated

This assignment demonstrates practical knowledge of:

End-to-end test automation
API testing
TypeScript
Playwright
Page Object Model
Test organization
Reusable fixtures
Assertions
Test reporting
Git version control
CI/CD concepts

Project Status

This repository is part of a QA Automation assignment and is actively maintained as part of the project development process.