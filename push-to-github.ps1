# PowerShell script to push code to GitHub
# Run this script after installing Git

Write-Host "=== GitHub Push Script ===" -ForegroundColor Cyan
Write-Host ""

# Check if git is available
try {
    $gitVersion = git --version
    Write-Host "Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Git is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Or use GitHub Desktop: https://desktop.github.com/" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "Initializing git repository..." -ForegroundColor Yellow
git init

Write-Host "Adding remote repository..." -ForegroundColor Yellow
git remote add origin https://github.com/prajaktapatil-arrk/Cursor_Project.git

Write-Host "Adding all files..." -ForegroundColor Yellow
git add .

Write-Host "Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit: Portfolio website for Chocklingem Codes"

Write-Host "Setting main branch..." -ForegroundColor Yellow
git branch -M main

Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "You may be prompted for your GitHub credentials." -ForegroundColor Cyan
git push -u origin main

Write-Host ""
Write-Host "=== Done! ===" -ForegroundColor Green
Write-Host "Your code has been pushed to: https://github.com/prajaktapatil-arrk/Cursor_Project" -ForegroundColor Green

