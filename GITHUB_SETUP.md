# GitHub Setup Instructions

## Option 1: Using GitHub Desktop (Easiest Method) ⭐ Recommended

1. **Download GitHub Desktop**: https://desktop.github.com/
2. **Install and Sign In** with your GitHub account
3. **Add Local Repository**:
   - Click "File" → "Add Local Repository"
   - Click "Choose..." and navigate to: `C:\Users\PrajaktaPatil\OneDrive - Arrk Group\Desktop\cursor`
   - Click "Add repository"
4. **Publish to GitHub**:
   - Click "Publish repository" button
   - Repository name: `Cursor_Project`
   - Make sure "Keep this code private" is unchecked (if you want it public)
   - Click "Publish repository"

## Option 2: Using Git Command Line

### Step 1: Install Git
Download and install Git from: https://git-scm.com/download/win
- During installation, make sure to select "Add Git to PATH"

### Step 2: Open PowerShell or Command Prompt
Navigate to your project folder:
```powershell
cd "C:\Users\PrajaktaPatil\OneDrive - Arrk Group\Desktop\cursor"
```

### Step 3: Configure Git (first time only)
```bash
git config --global user.name "Prajakta Patil"
git config --global user.email "your.email@example.com"
```

### Step 4: Initialize and Push
Run the provided PowerShell script:
```powershell
.\push-to-github.ps1
```

Or run these commands manually:
```bash
git init
git remote add origin https://github.com/prajaktapatil-arrk/Cursor_Project.git
git add .
git commit -m "Initial commit: Portfolio website for Chocklingem Codes"
git branch -M main
git push -u origin main
```

**Note**: You'll be prompted for your GitHub username and password (or personal access token).

## Option 3: Using GitHub Web Interface

1. Go to: https://github.com/prajaktapatil-arrk/Cursor_Project
2. Click "uploading an existing file"
3. Drag and drop all your files (index.html, style.css, script.js, README.md)
4. Add commit message: "Initial commit: Portfolio website"
5. Click "Commit changes"

## Files to Upload

Make sure these files are included:
- ✅ index.html
- ✅ style.css
- ✅ script.js
- ✅ README.md
- ✅ GITHUB_SETUP.md (optional)

