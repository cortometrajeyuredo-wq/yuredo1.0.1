const fs = require('fs');
const path = require('path');

const projectRoot = "c:\\Users\\User\\Documents\\GitHub\\yuredo1.0.1";
const publicDir = path.join(projectRoot, "public");
const srcDir = path.join(projectRoot, "src");
const indexHtml = path.join(projectRoot, "index.html");

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

function getSourceContent(dir) {
  let content = "";
  function readDir(d) {
    if (!fs.existsSync(d)) return;
    const files = fs.readdirSync(d);
    for (const file of files) {
      const filePath = path.join(d, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        readDir(filePath);
      } else {
        if (filePath.match(/\.(ts|tsx|js|jsx|css|html|json)$/)) {
          content += fs.readFileSync(filePath, "utf-8") + "\n";
        }
      }
    }
  }
  readDir(dir);
  if (fs.existsSync(indexHtml)) {
    content += fs.readFileSync(indexHtml, "utf-8") + "\n";
  }
  return content;
}

function main() {
  const publicFiles = getAllFiles(publicDir);
  const srcContent = getSourceContent(srcDir);
  const unusedFiles = [];

  for (const file of publicFiles) {
    const filename = path.basename(file);
    const relativePath = file.replace(publicDir, "").replace(/\\/g, "/"); // e.g. /static/img/...
    
    // Check if either the precise relative path is mentioned, or at least the filename is mentioned
    // Filename search might bring false positives (identifying a used file as unused is bad, so false positives are OK in keeping safe, but here false positive means the file IS used, so it's excluded from unused list). We want to be sure it's NOT used.
    
    // Check if filename exists anywhere in the source code
    // Escape for regex if needed, but simple includes is faster and safer
    if (!srcContent.includes(filename)) {
      unusedFiles.push(relativePath);
    } else {
        // Filename is found. Let's do a stricter check if we want, but if filename is unique, it's fine.
        // E.g. Diainas4.svg. If it's in srcContent, it's used.
    }
  }

  console.log(JSON.stringify(unusedFiles, null, 2));
}

main();
