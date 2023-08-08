# Introduction
Design System for Coverage Coach

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