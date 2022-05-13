# OpsWrangler - Hello World
This product doesn't do much on it's own. It only exists to be something for a **shared GitHub Actions** and **shared IaC module** approach to build infra.

### 🤔Why?

- By segregating the Actions and Modules into their own repos, we can ensure Actions' and Modules':
  - Reusability
  - Security
  - Standards

### 🗒️How?

- The product team copies an example IaC 'wrapper' file that describes their infra. At the moment we use Serverless Framework which exposes a single `serverless.yml` for this purpose.

- The product team copies an GitHub Actions 'client' that calls a shared GitHub Actions

The pipeline looks like this:

```mermaid
graph LR
    Push_To_Named_Branch_and_folder -->
    GitHub_Action_Serverless_Deploy -->
    Import_Centralized_Action -->
    Pass_Repo_Secrets -->
    Clone_Centralized_IaC_Repo -->
    Set_ENV_for_Serverless -->
    Run_Serverless_Deploy
    Centralized_Actions_Repo --> Import_Centralized_Action
    Centralized_IaC_Repo --> Clone_Centralized_IaC_Repo
```
