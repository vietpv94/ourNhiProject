Folder Structure Conventions
============================

> Folder structure options and naming conventions for software projects

### A typical top-level directory layout

        src
        ├── assets 
        | ├── fonts
        | ├── images
        ├── components                # Dumb components. Ex: Button, Text, Flex, Grid,... etc
        ├── constants
        | ├── actions                 # Redux actions
        ├── hooks                     # Custom hooks
        ├── redux
        | ├── actions
        | ├── reducers
        | ├── sagas
        ├── services                  # Handle data fetching
        ├── utils
        ├── pages                     # Container components. Ex: Page Layout...
