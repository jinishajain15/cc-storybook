# Introduction
Design System for TruShield Insurance - Coverage Coach

[![Build & Release Status](https://dev.azure.com/nbfc/NBFC/_apis/build/status/DX-DesignSystem)](https://dev.azure.com/nbfc/NBFC/_build?definitionId=1552)

### [Builds & Releases](https://dev.azure.com/nbfc/NBFC/_build?definitionId=1552)
## Run Project Locally
### Prerequisites

- [Node.js v14.16.1 or greater](https://nodejs.org/en/download/)

### Setup
1. Navigate to the project root directory
    `````
    cd ./design-system
    `````
2. Install project dependencies using `npm install`
   If you got SSL errors, execute following commands and try installing again:

    ```
    set NODE_TLS_REJECT_UNAUTHORIZED=0
    set NVM_NODEJS_ORG_MIRROR="http://nodejs.org/dist"
    npm config set strict-ssl false
    ```
3. From the project root directory, run `ng serve`
   If the command `ng serve` is not found, install `angular/cli` globally

   ````
   npm install -g @angular/cli
   ````
4. Navigate to <http://localhost:4200>
   The app will automatically reload if you change any of the source files

## Run Storybook
1. Navigate to the project root directory
    `````
    cd ./design-system
    `````
2. From the project root directory, run `npm run storybook`
3. Navigate to <http://localhost:6006>
   The app will automatically reload if you change any of the source files

## Environments:
| Name | EN URL | App Service URL |
|------|--------|-----------|
Storybook | https://storybook.nbfc.com/ | https://portal.azure.com/#@NorthbridgeFinancial.onmicrosoft.com/resource/subscriptions/5c517d52-24d7-4d9c-bfb8-6809772f7d43/resourceGroups/AZCRG_TrushieldCC/providers/Microsoft.Web/staticSites/storybook/staticsite
Chromatic | https://64cd178802ef9fe2dfe71be0-wrylgvjhmd.chromatic.com/ | https://www.chromatic.com/setup?appId=64cd178802ef9fe2dfe71be0

## How to contribute to this project?
Follow development best practices and you'll be fine but here's short list for your reference:
* For every change, make sure there's a UserStory in Azure
* Create a feature branch with Azure UserStory/Task Id
* Create a Pull Request and get you code reviewed/merged by another team member

# Helpful Resources
* [Angular Storybook](https://storybook.js.org/docs/angular/get-started/install/)
* [Material Components](https://material.angular.io/components/categories)
* [Tailwind CSS](https://tailwindcss.com/docs/installation)
* [Storybook Crash Course](https://www.youtube.com/watch?v=x-x47qHq3nY)
* [Discord Storybook Community](https://discord.com/channels/486522875931656193/490770949910691862)
