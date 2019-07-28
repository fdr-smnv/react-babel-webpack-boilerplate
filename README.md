This is easy to setup React-Babel-Webpack boilerplate. Use it to quickly bootstrap new React projects without wasting time on repetitive code.

## Webpack configuration:

* ( .js, .jsx ) —  [ babel-loader, @babel/preset-react ]
* ( .css ) — [ style-loader, css-loader ]
* ( .png, .svg, .jpg, .gif ) — [ file-loader ]


## How to use:

First, clone the repo.

```bash
$ git clone https://github.com/ruanyf/react-babel-webpack-boilerplate.git <appDirName>
$ cd <appDirName>
```

Second, delete this repo's `.git` history directory.

```bash
$ rm -rf .git
```

Third, install all the dependencies.

```bash
$ npm i
```

Ta-daa 🎉 all installation is complete, you can now launch the app.

```bash
$ npm start
```

Open your browser at http://localhost:8080 and you'll see "Hello, React!" title in monospace font with React logo under.

Lastly, You can update your `package.json` and modify fields like `name`, `version`, `description`, `author` etc. according to your app.
