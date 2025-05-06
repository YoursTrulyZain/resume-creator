# Resume Creator

A modern, React-based resume builder application that helps users create professional resumes with ease. This application provides a user-friendly interface for inputting personal information, education history, work experience, and skills, which are then formatted into a clean resume layout that can be downloaded as a PDF.

## Features

- **User-Friendly Form Interface**: Simple and intuitive forms for entering resume data
- **Live Preview**: Toggle between edit mode and preview mode to see your resume take shape
- **Customizable Sections**:
  - General Information (name, email, phone number)
  - Education History (multiple entries supported)
  - Work Experience (multiple entries supported)
  - Skills (add as many as needed)
- **PDF Export**: Download your completed resume as a professionally formatted PDF file
- **Responsive Design**: Works well on various screen sizes

## How It Works

1. Fill out the forms with your personal information, education history, work experience, and skills
2. Click the "Submit" button to preview your formatted resume
3. Review your resume in the preview mode
4. If needed, click "Edit" to make changes
5. When satisfied, click "Download PDF" to save your resume as a PDF file

## Technologies Used

- React.js with TypeScript
- Vite for fast development and building
- HTML2Canvas for capturing the resume content
- jsPDF for generating PDF files
- CSS for styling the resume template

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or pnpm package manager

### Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   pnpm install
   ```

### Running the Application

Start the development server:

```
npm run dev
```

or

```
pnpm dev
```

Then open your browser and navigate to the URL displayed in your terminal (typically http://localhost:5173/).

### Building for Production

```
npm run build
```

or

```
pnpm build
```

## Future Enhancements

- Additional resume templates
- Save/load functionality for resume data
- More customization options for styling
- Additional sections (projects, certifications, etc.)

## License

This project is open source and available under the MIT License.
