const fs = require('fs');
const path = require('path');

const transcriptPath = 'C:/Users/santo/.gemini/antigravity/brain/9eabb9d1-e466-4275-aac2-3a10116294b0/.system_generated/logs/transcript_full.jsonl';

const filesToRestore = [
    'UniversityProfilePage.tsx',
    'FeaturedProgram.tsx',
    'OverviewSection.tsx',
    'EligibilitySection.tsx',
    'CareerSupport.tsx',
    'SectionNav.tsx',
    'AccreditationsSection.tsx',
    'StudentStories.tsx',
    'FeesSection.tsx',
    'UniversityHero.tsx',
    'HighlightsGrid.tsx',
    'LearningExperience.tsx',
    '_university-profile.scss'
];

let allText = '';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');
for (const line of lines) {
    if (!line.trim()) continue;
    try {
        const obj = JSON.parse(line);
        if (obj.content) allText += obj.content + '\n';
        // Add tool calls and responses too, because system injected messages might be there
    } catch(e) {}
}

for (const filename of filesToRestore) {
    // Regex looking for the markdown file path and codeblock
    // It might be escaped like \\n in JSON, but JSON.parse unescapes it.
    const escapedFilename = filename.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp('### .*?`[^`]*?' + escapedFilename + '`\\s*```(?:tsx|scss|css)\\n([\\s\\S]*?)\\n```', 'i');
    
    const match = allText.match(regex);
    if (match) {
        const code = match[1];
        let filePath = filename === '_university-profile.scss' 
            ? path.join('src', 'online-learning', 'styles', filename)
            : path.join('src', 'online-learning', 'components', 'university-profile', filename);
        
        fs.writeFileSync(filePath, code, 'utf8');
        console.log('Restored ' + filename);
    } else {
        console.log('Could not find original content for ' + filename);
    }
}
