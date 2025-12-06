![DO Communication](https://media.licdn.com/dms/image/v2/D4D3DAQHlz6K79nWKBQ/image-scale_191_1128/image-scale_191_1128/0/1694093038308/digital_obsession_communication_pvt_ltd_cover?e=2147483647&v=beta&t=PXNqu0JsUvsezV1QQHojg1O0bOfpYEax0Xdan7BtMwU)

# DOcNavTenure

**⚠️ Please do not fork this repository**

This repository is for internal use only and should not be forked or distributed.

## Development Notes

**IMPORTANT for GitHub Copilot and Automated Updates:**

Whenever making changes to the project in the `Repository` folder, **always ensure the root HTML file and assets are updated** by following these steps:

1. Make your changes in the `Repository/src` folder
2. Build the project: `cd Repository && npm run build`
3. Sync the build to root: `cp -r dist/* ../`

This ensures that the deployed version (root folder) stays in sync with the development version (Repository folder).

### Daily Entry Update Process

When adding or updating daily entries, the user will provide input in the following format:

```
"dec 7 FICSI e-Learning drafts 1.1 and 2.1 submitted"
```

**The system should automatically:**

1. **Parse the input** to extract:
   - Date: "dec 7" → Convert to `2025-12-07` format (YYYY-MM-DD)
   - Project name: "FICSI e-Learning" → Match to existing project in `projects` array
   - Activity description: "drafts 1.1 and 2.1 submitted"

2. **Update Table and Calendar Views:**
   - Add/update the entry in `initialLogs` object in `Repository/src/data.js`
   - Use the format: `"2025-12-07": "FICSI e-Learning drafts 1.1 and 2.1 submitted"`
   - The entry will automatically appear in both `DailyLogTable.jsx` (table view) and `CalendarView.jsx` (calendar view)

3. **Update Project Overview:**
   - Locate the matching project in the `projects` array in `Repository/src/data.js`
   - Generate an AI-powered 1-line summary of all activities for that project
   - Update the `notes` field with this smart summary
   - The summary should be concise and capture the current state/progress of the project

**Example Update:**

Input: `"dec 7 FICSI e-Learning drafts 1.1 and 2.1 submitted"`

Changes to `Repository/src/data.js`:
```javascript
export const initialLogs = {
    // ... existing entries ...
    "2025-12-07": "FICSI e-Learning drafts 1.1 and 2.1 submitted"
};

export const projects = [
    {
        id: 1,
        name: "FICSI e-Learning",
        status: "Ongoing",
        notes: "Submitted 4 drafts total (2 initial, 2 revised versions 1.1 and 2.1 after client feedback)" // AI-generated summary
    }
    // ... other projects ...
];
```

### Data Structure Reference

**File Location:** `Repository/src/data.js`

- `initialLogs` (Object): Maps dates (YYYY-MM-DD format) to activity descriptions
  - Keys: Date strings in "YYYY-MM-DD" format
  - Values: Activity description strings

- `projects` (Array): Contains project information
  - Each project has: `id`, `name`, `status`, `notes`, `logoUrl`
  - The `notes` field should contain a concise, AI-generated summary of all project activities

**Component Responsibilities:**
- `DailyLogTable.jsx`: Displays logs in weekly table format
- `CalendarView.jsx`: Displays logs in monthly/weekly/daily calendar format  
- `ProjectsTable.jsx`: Displays project overview with status and notes

### Important Notes for Copilot

- Always maintain the date format consistency: `YYYY-MM-DD` for keys in `initialLogs`
- Project names must match exactly between daily logs and the projects array
- When generating project summaries, review all related entries in `initialLogs` to create an accurate 1-line overview
- After updating `data.js`, always rebuild and sync to root as per the steps above
