# Payroll CSV Upload App

## Overview

The **Payroll CSV Upload App** is a React-based web application that allows users to upload a CSV file containing payroll data. The app processes and displays employee salary details while calculating the total net salary.

## Features

- Upload and parse CSV files containing payroll data
- Display employee details in a structured table
- Calculate and display the total net salary

## Technologies Used

- React (TypeScript)
- PapaParse (for CSV parsing)
- CSS (for styling)

## Installation

To set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Pavan-Sai-A/payroll-mvp.git
   ```
2. Navigate to the project directory:
   ```bash
   cd payroll-csv-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm dev
   ```

## Usage

1. Open the app in your browser.
2. Click the file input field to upload a CSV file.
3. The application will parse the data and display it in a table.
4. View individual employee details and the total net salary.
5. Click "Proceed to Disbursal" to continue payroll processing.

## CSV File Format

Ensure your CSV file follows this structure:

```
Employee ID,Name,Net Salary,LOP Days,PF,ESI,TDS

```
