import readline from 'node:readline/promises'
import { mkdir, readdir } from 'node:fs/promises'
import fs from 'fs'
import path from 'path'
import { spawn, exec } from 'child_process'

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let projectPath
let dirMap
let dirFiles
let packageJson

reader.on("close", function () {
    console.log(`Looking for directory ${projectPath}`)
    if (!checkAccessPath()) {
        console.log("Exiting....")
        process.exit(0)
    } else {
        readProjectDirectory()
    }
})

// C:\Users\admin\Documents\Coding\Workplace\pascal\pascal-server
const getProjectPath = async () => {
    projectPath = await reader.question('Please provide absolute path to the project folder of the application you want analyzed...\n');
    reader.close()
}

const checkAccessPath = () => {
    try {
        if (fs.existsSync(projectPath)) {
            console.log("Directory path exists.")
            return true
        } else {
            console.log("Directory path does not exist.")
            return false
        }
    } catch (e) {
        console.log("An error occurred.")
    }
}

const readProjectDirectory = async () => {
    console.log(`Reading from directory ${projectPath}`)
    fs.readdir(projectPath, {
        encoding: 'utf-8',
        withFileTypes: false,
        recursive: true
    }, (err, files) => {
        if (err) {
            console.log("Error at readProjectDirectory with exception ", exception)
        } else {
            console.log(".")
            files.forEach(file => console.log(`|---${file}`))
            dirFiles = files
            checkIfValidNodeProject()
        }
    });
}

const checkIfValidNodeProject = () => {
    try {
        fs.readFile(path.join(projectPath, 'package.json'), 'utf8', (err, data) => {
            if (err) throw err;
            packageJson = JSON.parse(data)
            console.log(data)
            generateBuildFromSource()
        });
    } catch (exception) {
        console.log("Error at checkIfValidNodeProject with exception", exception)
    }
}

const generateBuildFromSource = () => {
    try {
        const ls = spawn(`node_modules\\@esbuild\\win32-x64\\esbuild`, [path.join(projectPath, packageJson.main), "--bundle", "--platform=node", "--target=node19.3.0"]);

        ls.stdout.on('data', (data) => {
            console.log(`Recieving stdout`);
            console.log(`Writing to local directory`);
            writeDataToLocalBuildDir(data)
        });

        ls.stderr.on('data', (data) => {
            console.error(`Recieving stderr: ${data}`);
        });

        ls.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
    } catch (exception) {
        console.log(`Error at generateBuildFromSource with exception `, exception)
    }
}

const writeDataToLocalBuildDir = (data) => {
    try {
        var projectFolder = './generated';
        if (!fs.existsSync(projectFolder)) {
            fs.mkdirSync(projectFolder);
            console.log(`created projectFolder`);
        }

        fs.writeFile("./generated/build.js", data, (err) => {
            if (err) throw err;
            console.log('The esbuild has been generated in generated directory!');
        });

    } catch (exception) {
        console.log(`Error at writeDataToLocalBuildDir with exception `, exception)
    }
}

const spawnDependencyInstaller = () => {
    try {
        exec(`cd ${path.join(projectPath)} & npm i`, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`Childprocess spawned Changing directory to ${path.join(projectPath)}`)
            console.log(`Spawning npm i process`)
            console.log(`Completed installing dependencies`)
        })
    }
    catch (exception) {
        console.log(`Error at spawnDependencyInstaller with exception `, exception)
    }
}

const spawnChildNode = () => {
    try {
        const ls = spawn(`node`, [path.join(projectPath, packageJson.main)]);

        ls.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        ls.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        ls.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
    }
    catch (exception) {
        console.log(`Error at spawnChildNode with exception `, exception)
    }
}

getProjectPath()