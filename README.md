Here's a refined version of your instructions, incorporating the changes you mentioned:

---

# `@startup-engine/shared`

## How to Update Our Shared Packages

### Important

- **Direct Push to Master**: You can push changes directly to the master branch. Just make sure you're in sync with master before starting to work:
  ```bash
  git pull origin master
  ```

### Pre-requisites

- Ensure that the `.npmrc` file is present at the root of the project. If you don’t have it, [refer to our Notion documentation](https://www.notion.so/projectstockalert/Configuration-files-a1725ae8e64a497fb617d92a17ab29fd#7fe40aa161404c06b145c1b60c849495).
- **Organization Setup**: Before publishing for the first time, you must create an organization on NPM if it hasn't been done already. This allows you to use scoped packages (e.g., `@startup-engine/shared`).

### Step-by-Step: Setting up a New Shared Library

1. **Create NPM Organization (First-Time Only)**:

   - Go to [npmjs.com](https://www.npmjs.com/) and create an organization (if not already created).
   - Update the `name` field in your `package.json` to follow the scoped convention:
     ```json
     {
       "name": "@startup-engine/shared",
       "version": "1.0.0",
       "main": "index.js"
     }
     ```

2. **Configure Yarn**:
   - Run `yarn configure` to pull the necessary `.npmrc` token for authentication. This ensures that you have the correct permissions to publish the package.

### Step-by-Step: Updating an Existing Shared Library

1. **Implement Changes**:

   - Make your changes to the shared library. Ensure that any new types, functions, or constants are properly exported in `index.ts`.

2. **Publish the Package**:

   - After making the changes, publish the updated package:
     ```bash
     yarn publish
     ```
   - For the first-time publish, explicitly set the package to public:
     ```bash
     yarn publish --access public
     ```

3. **Update Back-end and Front-end Packages**:
   - After publishing, update any dependent projects (e.g., back-end and front-end) to use the latest version of the shared package.

### References

- For more information, you can check this guide: [The 30-Second Guide to Publishing a TypeScript Package to npm](https://cameronnokes.com/blog/the-30-second-guide-to-publishing-a-typescript-package-to-npm/)

### Notes

- First-time publishing will require you to explicitly set the package to public:
  ```bash
  yarn publish --access public
  ```
