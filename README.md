![DO Communication](https://media.licdn.com/dms/image/v2/D4D3DAQHlz6K79nWKBQ/image-scale_191_1128/image-scale_191_1128/0/1694093038308/digital_obsession_communication_pvt_ltd_cover?e=2147483647&v=beta&t=PXNqu0JsUvsezV1QQHojg1O0bOfpYEax0Xdan7BtMwU)

# DOcNavTenure

**⚠️ Please do not fork this repository**

This repository is for internal use only and should not be forked or distributed.

## Development Notes

**IMPORTANT for GitHub Copilot and Automated Updates:**

Whenever making changes to the project in the `Repository` folder, **always ensure the root HTML file and assets are updated** by following these steps:

1. Make your changes in the `Repository/src` folder
2. Build the project: `cd Repository && npm run build`
3. Sync the build to root: `cp -r dist/* ../`

This ensures that the deployed version (root folder) stays in sync with the development version (Repository folder).
