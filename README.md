# `@rpg-engine/shared`

# How to update our shared packages?

# Important

- You can push this project directly to master. Just make sure you're in sync with master before starting to work (git pull origin master)

# Pre-requisites:

- You must have the .npmrc file set on the root of this project. If you don't, [please check our notion documentation](https://www.notion.so/projectstockalert/Configuration-files-a1725ae8e64a497fb617d92a17ab29fd#7fe40aa161404c06b145c1b60c849495)

# Step-by-step:

1. Implement your desired changes. Remember to export any types in index.ts

2. `yarn publish`

3. Update back-end and front-end packages

References: https://cameronnokes.com/blog/the-30-second-guide-to-publishing-a-typescript-package-to-npm/

# Notes

- First time publishing will require you to explicitly set it to public:

```
yarn publish --access public
```
