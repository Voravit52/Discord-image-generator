const { spawn } = require('child_process');
const { execSync } = require('child_process');

// ฟังก์ชันตรวจสอบและติดตั้ง Python
function checkAndInstallPython() {
    try {
        execSync('python --version');
        console.log('Python is already installed.');
    } catch (error) {
        console.log('Python is not installed. Installing now...');
        // คำสั่งติดตั้ง Python อาจแตกต่างกันไปตามระบบปฏิบัติการ
        // ตัวอย่างสำหรับ Ubuntu/Debian:
        execSync('sudo apt-get install python3');
    }
}

// เรียกใช้ฟังก์ชันตรวจสอบและติดตั้ง
checkAndInstallPython();

// เรียกใช้ไฟล์ Python
const python = spawn('python', ['main.py']);

python.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

python.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

python.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
