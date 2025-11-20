#Pretier
pnpm install --save-dev --save-exact prettier prettier-plugin-astro

## create an .prettierrc.json in the root of your project

    {
      "plugins": ["prettier-plugin-astro"],
      "overrides": [{
        "files": "*.astro",
        "options": {
            "parser": "astro"
        }
       }
      ]
    }

#Pretier
pnpm install prettier-plugin-tailwindcss

## create an .prettierrc.json in the root of your project

    {
      "plugins": [
        "prettier-plugin-astro",
        "prettier-plugin-tailwindcss",

      ],
      "overrides": [{
        "files": "*.astro",
        "options": {
            "parser": "astro"
        }
       }
      ]
    }

### Run this command

npx prettier. --write
