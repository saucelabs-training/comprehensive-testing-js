# CICD

## 🏋️‍♀️Let's add this code to our CI system.

1. In the repository's Github, go to `Actions` tab
2. Configure `Node.js`
3. Keep the name of the file and on line 4, or change, up to you
4. Paste in the following configuration

```yml
name: Comprehensive Testing
env:
  SCREENER_API_KEY: ${{ secrets.SCREENER_API_KEY }}
  SAUCE_USERNAME: ${{ secrets.SAUCE_USERNAME }}
  SAUCE_ACCESS_KEY: ${{ secrets.SAUCE_ACCESS_KEY }}

on:
  push:
    # Only trigger if files in this path changed
    paths:
      - 'tado-sec/my-react-app/**'
      - '.github/workflows/tado.sec.yml'
      # Don't run on Markdown changes
      - '!**.md'
    branches: [main]
  pull_request:
    # Only trigger if files in this path changed
    paths:
      - 'tado-sec/my-react-app/**'
      - '.github/workflows/tado.sec.yml'
      # Don't run on Markdown changes
      - '!**.md'
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [16.x]

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - name: Install dependencies 📦
        #Using npm ci is generally faster than running npm install
        run: |
          npm ci
      - name: Build the app 🏗
        run: |
          npm run build
      # If we had more time, at this point we can actually deploy our app
      # to a staging server and then run functional tests
      - name: Start the app 📤
        run: |
          npm start &
          npx wait-on --timeout 60000
      - name: Run functional UI tests 🖥
        run: |
          npm run cy:ci
      - name: Run visual tests 👁
        run: |
          npm run test:visual
```

3. Add New repository secrets for the repo

![adding secrets](../../../graphics/secrets.png)

1. Commit the new file
2. `git push` all of your changes to your repo

## 🧪Current Test Coverage

[Look here](TEST-COVERAGE.md)

## 📝Summary

✅We can use Github Workflows for free and easy continuous integration pipelines

## ⏭️[Let's add visual tests](./VISUAL.md)
