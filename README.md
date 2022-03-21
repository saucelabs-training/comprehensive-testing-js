# comprehensive testing with javascript workshop

[#testing4good](https://twitter.com/hashtag/Testing4Good)

In this workshop you will learn the latest and greatest tools and techniques to improve your ability to test modern web applications.

You will focus on a holistic approach of testing front-end, APIs, and back-end.

You will analyze risks and prevent those risks with functional testing, api testing, visual testing and a lot more 💪

## 🧠 You will learn

✅API testing w/ Cypress

✅how to test a React web app using different types of tests

✅E2E ui tests w/ Cypress

✅visual cross-browser + cross-platform tests

✅CICD with Github Actions

## 🔧Technologies you will use

1. ReactJS
2. Cypress
3. WebdriverIO
4. Screener.io
5. Sauce Labs
6. Github Actions

## Table Of Contents

- [E2E UI testing w/ Cypress](./my-react-app/docs/E2E-TESTS.md)
- [CICD](./my-react-app/docs/CICD.md)
- [Visual e2e tesing](./my-react-app/docs/VISUAL.md)
- [Component testing](./my-react-app/docs/COMPONENT-TESTS.md)
- [Conclusions](./my-react-app/docs/CONCLUSIONS.md)

## Key

💡 this is a tip

🏋️‍♀️ this is an exercise for you to do

❓ this is a question for us to think and talk about. Try not to scroll beyond this question before we discuss

## Your Instructor: Nikolay Advolodkin

<img src="./../graphics/me-and-mia.jpg" alt="me" width="150"/>

- 🏢 I’m a Sr Solutions Architect at Sauce Labs
- 🔭 I’m the founder of [Ultimate QA](https://ultimateqa.com/)
- 🌱 I’m currently working on [Sauce Bindings](https://github.com/saucelabs/sauce_bindings)
- 💬 Ask me about environmentalism, veganism, test automation, and fitness
- 😄 Pronouns: he/him
- ⚡ Fun fact: I'm a vegan that's super pasionate about saving the planet, saving animals, and helping underpriveleged communities
- 📫 Follow me for testing and dev training
  - [JS Testing Newsletter](https://ultimateqa.ck.page/js-testing-tips)
  - [Testing training on Youtube](https://youtube.com/ultimateqa)
  - [LinkedIn for professional connections](https://www.linkedin.com/in/nikolayadvolodkin/)
  - [Twitter for 🔥 Dev quotes](https://twitter.com/Nikolay_A00)

## Your TA: Josh Grant

<img src="./../graphics/josh-grant.jpeg" alt="josh" width="150"/>

Josh Grant is a test automation professional who has worked in this space for nearly a decade. In that time he has worked on automation at all levels, in a variety of languages, frameworks and organizations.
Currently he is a solution architect at Sauce Labs, helping enterprise teams succeed with their test automation. He’s based in Toronto, Ontario.

## ⚙️ Setup

### 1. Install Node 14 LTS

1.  Use NVM for this installation by [following instructions](https://github.com/nvm-sh/nvm#install--update-script)
    - It should be just a single command to run in our terminal
      - **!Don't forget to restart your terminal!**
2.  After installation, confirm install with `nvm --version`
3.  Intall Node 14 with `nvm install 14`

  <br/>
  <details>
    <summary>
      <strong>Click here</strong> to see an example output.
    </summary>

        Downloading and installing node v14.16.1...
        Downloading https://nodejs.org/dist/v14.16.1/node-v14.16.1-darwin-x64.tar.xz...
        ######################################################################### 100.0%
        Computing checksum with shasum -a 256
        Checksums matched!
        Now using node v14.16.1 (npm v6.14.12)
        Creating default alias: default -> 14 (-> v14.16.1)

  </details>
  <br/><br/>

- Confirm node installation with `node --version` and seeing `v14.16.1` or similar
- Confirm NVM is set to 14 for default by running the following commands:

```bash
nvm list #will show all versions
nvm use 14 #to use 14
nvm alias default 14.16.x #to set it to the default
```

### 2.Clone and fork the repo

1. Sign up for a free [Github account](https://github.com/)
2. Fork this respository

- Make sure you are logged into Github
- click the Fork in the upper right of the Github.

3. Clone your fork of the repository to your machine. Must have [Git installed](https://git-scm.com/downloads)

```bash
git clone URL_OF_YOUR_FORK
```

4. **Navigate to the directory of where you cloned your repo**

`cd YOUR_FORK_DIR/automation-best-practices/testing-for-charity`

### 3.Install the app

```bash
cd testing-for-charity/my-react-app
npm install && npm start
```

<br/>
<details>
  <summary>
    <strong>Click here</strong> to see an example output.
  </summary>

  <code>

    Compiled successfully!

    You can now view my-react-app in the browser.

      Local:            http://localhost:3000
      On Your Network:  http://172.20.10.2:3000

    Note that the development build is not optimized.
    To create a production build, use npm run build.

  </code>
</details>

<br/><br/>

**Don't worry about fixing any warnings that may appear during `npm install`**

Once the app is running, kill the server by executing `Ctrl + C` in command line. We don't need the app running right now.

### 4.Have an IDE installed that can handle NodeJS/JS (We will use [VSCode](https://code.visualstudio.com/Download))

#### ✅👏Congratulations, your environment is ready!

### 5.Sign up for a free [Sauce account](https://saucelabs.com/sign-up)

Get your [Screener account](https://saucelabs.com/demo-request-vt)

### 6.Set Your Sauce Labs Credentials

- [MacOS/Linux](https://docs.saucelabs.com/basics/environment-variables/#setting-up-environment-variables-on-macos-and-linux-systems)
- [Windows](https://docs.saucelabs.com/basics/environment-variables/#setting-up-environment-variables-on-windows-systems)
