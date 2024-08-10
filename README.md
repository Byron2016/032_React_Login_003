<div>
	<div>
		<img src=https://raw.githubusercontent.com/Byron2016/00_forImages/main/images/Logo_01_00.png align=left alt=MyLogo width=200>
	</div>
	&nbsp;
	<div>
		<h1>032_React_Login_003</h1>
	</div>
</div>

&nbsp;

# Table of contents

---

- [Table of contents](#table-of-contents)
- [Project Description](#project-description)
- [Technologies used](#technologies-used)
- [References](#references)
- [Steps](#steps)

[⏪(Back to top)](#table-of-contents)

# Project Description

**032_React_Login_003** is a practice to build a **Login and register appliction with Mongo DB** React, HTLM, CSS, Nodejs following Youtube Vida MRR - Programacion web's tutorial [CURSO DE LOGIN y REGISTRO COMPLETO CON REACT](https://www.youtube.com/watch?v=q4ywr3eZmk0) and the other help that you can find into **Reference** section.

[⏪(Back to top)](#table-of-contents)
&nbsp;

# Technologies used

---

- [x] ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- [x] ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- [x] ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- [x] ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- [x] ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
- [x] ![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- [ ] ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

[⏪(Back to top)](#table-of-contents)

# References

- Vida MRR - Programacion web tutorial and Github repositories

  - [CURSO DE LOGIN y REGISTRO COMPLETO CON REACT](https://www.youtube.com/watch?v=q4ywr3eZmk0)
  - [ Github: marcosrivasr / auth-react-node](https://github.com/marcosrivasr/auth-react-node)

- Shields.io

  - [Shields.io](https://shields.io/)

  - [Github Ileriayo markdown-badges](https://github.com/Ileriayo/markdown-badges)

  - [Github Ileriayo markdown-badges WebSite](https://ileriayo.github.io/markdown-badges/)

[⏪(Back to top)](#table-of-contents)

# Steps

- **Front End**

  - **Install and Setup Vite React**

    ```bash
      pnpm create vite
    ```

    - Name: auth-front
    - Project: React
    - TypeScript Option: TypeScript + SWC
    - Finish configuration

      - cd auth-front
      - pnpm install
      - pnpm run dev

    - **Add Routes Management**
      ```bash
        pnpm add react-router-dom
      ```
    - **Add and configure prettier**

      ```bash
        pnpm add -D -E prettier

        node --eval "fs.writeFileSync('.prettierrc','{}\n')"

          {
            "semi": false,
            "singleQuote": true
          }

        node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"

          # Ignore artifacts:
          build
          coverage

          dist
          pnpm-lock.yaml
          package.json
          .prettierrc

        pnpm add -D -E eslint-config-prettier

      ```

    - **Add and configure lint-staged and husky**

      ```bash
          pnpm add -D -E lint-staged husky

      ```

      - **lint-staged**

        - Add to "package.json"

        ```bash
          ,
          "lint-staged": {
            "src/**/*.{ts,tsx,js, jsx}": [
              "prettier --write  --ignore-unknown",
              "eslint --cache --fix"
            ]
          }
        ```

        - Add ".eslintcache" to ".gitignore"

        - Add to "package.json"

          ```bash
            "scripts": {
              ....
              "lint_stage": "lint-staged --debug",
              ....
            }
          ```

      - **husky**

        - ".git" is in a parent directory

          .ADMIN
          ├── .git/
          ├── folder_1/ [ No package.json ]
          └── auth-front/ [ Contains Package.json with .husky]

          - Add to "package.json"

          ```bash
            "scripts": {
              ....
              "prepare": "cd .. && husky auth-front/.husky"
              ....
            }
          ```

          - Run "pnpm run prepare" to generate the .husky directory and its contents. then you will see directory .husky inside the auth-front

          ```bash
            pnpm run prepare
          ```

          - then all you have to do , create new file inside ".husky/pre-commit"

          ```bash
            cd auth-front
            pnpm run lint_stage
          ```
