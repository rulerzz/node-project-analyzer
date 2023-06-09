<!--
repo name: node-project-analyzer
description: A to reverse engineer an express app and make a D2 diagram for the application's architecture
github name: rulerzz
link: https://github.com/rulerzz/node-project-analyzer
logo path: antlr4/images/antlr-logo.png
screenshot: antlr4/images/ss.png
twitter: mayankkapdi
email: may.ghz.conan@gmail.com
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
    <h3 align="center">NODE-PROJECT-ANALYZER</h3>
    <h4 align="center">Based on Antlr4 and Esbuild</h4>
    <p align="center">
        README
        <br />
    </p>

</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project
A low level tool to reverse engineer an express app and make a D2 diagram for the application's architecture

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [antlr4](https://www.antlr.org/)
- [esbuild](https://esbuild.github.io/)

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

1. Have node.js installed, i am using 19.3.0
2. Install dependencies using `npm install`
3. Have java installed for using antlr4 parser generator
4. Install nodemon globally inorder to run application continuously `npm i -g nodemon`

### Instructions for Antlr4 tools

1. Before using antlr4 tool make sure the jar is placed in your classpath
   you can do to that by pressing WIN + R and typing sysdm.cpl, then selecting Advanced (tab) > Environment variables > System Variables
   CLASSPATH -> `.;C:\Program Files\Java\libs\antlr-4.9.3-complete.jar;%CLASSPATH%`
2. If you do not want to do that you can just run run_before.bat file and that will set up classpath for you temporarily in your terminal

### Run Antlr4

To run antlr you need to be in antlr4 directory follow below commands

1. cd antlr4
2. antlr

### Run Application

Use `nodemon start` to start the application

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Your Name - [@mayankkapdi](https://twitter.com/mayankkapdi) - may.ghz.conan@gmail.com

Project Link: [LINK](LINK)
