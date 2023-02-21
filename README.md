This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Installation

1. Install [NVM](https://github.com/nvm-sh/nvm).  This helps us to maintain the node dev environment.
2. Install dependencies

```bash
nvm use && yarn start
# or
nvm use && npm i
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```


## Testing

```bash
nvm use && npm test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Making Editorial Changes

The preferred flow for editors to make basic textual changes are via a Github account with editorial permissions and tested via an automatic deploy via Vercel. A detailed version of this guide also exists as a <TODO: pdf/gify> in the /docs folder. <TODO: add pictures>

### Setup
Github account + Permissions:
1. Go to the [Github Homepage](https://github.com/) and click on the `sign up` button in the top right.
2. Follow the provided prompts to create your account as a `Individual` (not Organization). Note that no priced features are required for editing, a free account should be sufficient.
3. Notify the owner (<TODO: add Sarah's github acc here>) and wait for the Github email prompt to confirm access as a `Collaborator`.

### Making edits
The rough flow for making edits is - (1) navigate to the desired text `*.json` file on Github, (2) edit via the provided controls, (3) commit to the `editorial` branch, (4) test, then (5) pull-request to production.

1. Locate the desired text file.
    1. Always start in the [`editorial` branch](https://github.com/wliu080/japan-prayer-guide/tree/editorial) of the project. This is a version that automatically mirrors the production (`main`) branch. You can verify this by checking the url for `...japan-prayer-guide/<action/type>/editorial/...`. If you find yourself in a different branch. 
    2. Locate the file you need to change, either via Github search, or by navigation <TODO: confirm one option with Sarah and just stick with that>
        1. Github has a search function but the results will direct you to the `main` branch, so you will need to remember to toggle back to the editorial branch once you have found the desired file.
        2. Simply put in the search text in the top left search bar and choose the `in this repository` option when searching.
        3. Toggle back to the editorial branch via the button next to the breadcumbs.
        4. For navigation, simply navigate to the `/public/locales` folder. It will have folders for each supported language `en`, `ja` etc.
        5. Whichever language you choose, the files inside will all have the same structure - there will be files for each section `downloads.json`, `about.json`, as well as files for each individual topic page, select the relevant file you desire.
2. With the file selected, make your desired edits by clicking the pencil icon ('Edit this file`) located next to the 'Raw | Blame' buttons.
    1. The format of all the text .json files are collections of key-value pairs, with the whole file enclosed with brackets '{', '}'
    2. Each pair is in the format of `"key": "website text"` with a comma to separate pairs (do not add a comma to the end of the last item!)
    3. The `key` value is what the code uses and is replaced with the `website text` when rendered, make your desired changes in the `website text` part of the file.
3. When you are happy with your change, scroll to the bottom of the page to see a `Commit Changes` form. You will have the option to provide additional information to be associated with your change, as well as a option to either commit the change to the `editorial` branch, or `create a new branch` for your changes. Please commit it to the `editorial` branch (default option). Note that if a different branch is listed here, you are on the wrong branch! Make a copy of your changes (on notepad or wherever) and toggle your branch back to `editorial`.
4. Once your change has been successfully committed, a deployment will be made automatically. Depending on how busy, it may take around a minute or so. You should receive a notification in the `eng` slack channel on completion.
    1. View your changes on the [`editorial` test page](https://japan-prayer-guide-git-editorial-wliu080.vercel.app/).
5. When you are happy for your changes to go to production, you can make a *pull-request from the editorial branch to main*
    1. From the github project page, click on the `pull requests` tab in the tab bar (where 'code', 'issues', etc sit)
    2. You will see a list of open pull-requests, and a green button to create a `New pull request`. Click it.
    3. There should now be a grey bar showing the `base` and `compare` branches. Ensure that `base` is set to `main` and `compare` is `editorial`.
    4. You should now see a summary of your changes below, the files changed and a preview of the changes themselves. Click on the `Create pull request button` to confirm and continue.

### Giving other accounts permission
1. As the codebase owner, navigate to the [project access settings page](https://github.com/wliu080/japan-prayer-guide/settings/access). You may be prompted to re-input your account password to proceed.
2. Click on the green `Add people` button, and in the provided pop-up form, input the desired account's github email (or search by their github username)
3. The desired account owner will receive an email from Github that needs to be confirmed in order to have access.
4. <TODO: restrict to a specific branch?>

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
