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

  - **Update App.tsx and index.css**

    - App.tsx

      ```js
      import "./App.css";

      function App(): JSX.Element {
        return (
          <>
            <h1>Hola</h1>
          </>
        );
      }

      export default App;
      ```

    - index.css

      ```js
        :root {
          font-family: Arial, Helvetica, sans-serif;
          line-height: 1.5;
          font-weight: 400;

          color-scheme: light dark;
          color: rgba(255, 255, 255, 0.87);
          background-color: #242424;
        }

        body {
          padding: 0;
          margin: 0;
        }

        label {
          display: block;
        }

        .form {
          width: 400px;
          margin: 0 auto;
        }

        input[type='text'],
        [type='password'] {
          display: block;
          padding: 10px;
          box-sizing: border-box;
          width: 100%;
          margin: 5px 0 10px 0;
        }

        input[type='button'],
        button {
          background-color: rgb(39, 131, 212);
          padding: 10px;
          border: 0;
          min-width: 100px;
          border-radius: 5px;
          color: white;
        }

        nav {
          background-color: #eee;
        }

        nav ul {
          margin: 0;
        }

        nav ul li {
          display: inline-block;
          padding: 10px;
        }

        a {
          color: rgb(97, 28, 161);
          text-decoration: none;
        }

        .dashboard {
          width: 500px;
          margin: auto;
        }

        .errorMessage {
          background-color: #f2dede;
          color: #a94442;
          padding: 10px;
        }
      ```

  - **Add Routes to main.tsx**
    (5.14 - 9.0)

    ```js
      import { createBrowserRouter, RouterProvider } from 'react-router-dom';

      const router = createBrowserRouter([
        {
          path: "/",
          element: <App/>,
        }
      ]);

      ReactDOM.createRoot(document.getElementById('root')   !).render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>,
      )
    ```

  - **Create a new folder src/routes**

    - Create new file Dashboard.tsx

      ```js
      export default function Dashboard() {
        return <h1>Dashboard</h1>;
      }
      ```

    - Create new file Login.tsx

      ```js
      export default function Login() {
        return <h1>Login</h1>;
      }
      ```

    - Create new file Signup.tsx

      ```js
      export default function Signup() {
        return <h1>Signup</h1>;
      }
      ```

    - **Protected routes: Create new file ProtectedRoute.tsx**
      (9.0 - 13.20)

      ```js
      /* Su única función será validar si el usaurio está autentificado, si no lo   está te     redirigirá */

      import { useState } from "react";
      import { Outlet, Navigate } from "react-router-dom";

      export default function ProtectedRoute() {
        const [isAuth, setIsAuth] = useState(false);

        return isAuth ? <Outlet /> : <Navigate to="/" />;
      }
      ```

  - **Add this new routes to the last routes that we created in main.tsx**

    ```js
      import React from 'react'
      import ReactDOM from 'react-dom/client'

      import './index.css'
      import { createBrowserRouter, RouterProvider } from 'react-router-dom'

      // routes
      import Login from './routes/Login.tsx'
      import Dashboard from './routes/Dashboard.tsx'
      import Signup from './routes/Signup.tsx'
      import ProtectedRoute from './routes/ProtectedRoute.tsx'

      const router = createBrowserRouter([
        {
          path: '/',
          element: <Login />,
        },
        {
          path: '/signup',
          element: <Signup />,
        },
        // Add a protected route
        {
          path: '/',
          element: <ProtectedRoute />,
          children: [
            {
              path: '/dashboard',
              element: <Dashboard />,
            },
          ],
        },
      ])

      ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>,
      )
    ```

  - **Add a Global State (A Context) for AuthProvider**
    (13.26 - 18.38)

    - **Create an AuthProvider and a Context.**

      - **Create a new file in this route src/auth/AuthContext.tsx**

        ```js
        import { createContext } from "react";

        export const AuthContext = createContext({
          isAuthenticated: false,
        });
        ```

      - **Create a new file in this route src/auth/AuthContextProvider.tsx**

        ```js
        import { useState } from "react";
        import { AuthContext } from "./AuthContext";

        interface AuthProviderProps {
          children: React.ReactNode;
        }

        export function AuthProvider({ children }: AuthProviderProps) {
          const [isAuthenticated] = useState(false);

          return (
            <AuthContext.Provider value={{ isAuthenticated }}>
              {children}
            </AuthContext.Provider>
          );
        }
        ```

      - **Create a Hook that allow us access to our AuthProvider functions in this route src/auth/AuthContextHook.ts**

        ```js
        import { useContext } from "react";
        import { AuthContext } from "./AuthContext";

        /* Hook que nos permite acceder a las funciones de    nuestro useContext.*/
        export const useAuth = () => useContext(AuthContext);
        ```

    - **Enable AuthProvider to main.tsx**

      ```js
        ....
        import { AuthProvider } from './auth/AuthProvider.tsx'
        ....
        ReactDOM.createRoot(document.getElementById ('root') !).render(
          <React.StrictMode>
            <AuthProvider>
              <RouterProvider router={router} />
            </AuthProvider>
          </React.StrictMode>,
        )
      ```

    - **Use AuthContext into ProtectedRoute.tsx. We are going to use our Hook useAuth to have access to our AuthProbider's functions.**

      ```js
      /* Su única función será validar si el usaurio  está autentificado, si no lo está te   redirigirá */
      // import { useState } from "react"
      import { Outlet, Navigate } from "react-router-dom";
      import { useAuth } from "../auth/AuthProvider";
      export default function ProtectedRoute() {
        // const [isAuth, setIsAuth] = useState(false)
        const auth = useAuth();
        //return isAuth ? <Outlet /> : <Navigate to="/" / >
        return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
      }
      ```
