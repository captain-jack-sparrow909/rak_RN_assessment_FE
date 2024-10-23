
# RAKBANK Account Registration - React Native App

🚀 **RAKBANK Account Registration** is a React Native and Expo app that allows users to register and submit account details. The app is designed for mobile platforms, featuring a clean and responsive UI. It's integrated with the Spring Boot backend API you need to start that server too on your local.

## ✨ Features
- User registration form with full name, email, and password fields
- Validation for form fields
- Confirmation screen upon successful form submission which sends a request to the backend( the other part of this assessment)
- Reusable components for input fields and buttons

## 🏗️ Project Structure
The project uses a file-based routing structure with the following folders:
- `app/`: Contains screens and layout files
    - `index.tsx/`: Main registration page which uses other re-usable components etc.
    - `submission-success.tsx`: final screen that's shown when a successful API request is sent and a new user is created
- `components/`: Reusable components (e.g., buttons, input fields)
- `constants/`: Constant values used across the app
- `utils/`: Utility functions

## 🚀 Getting Started

### Prerequisites
- Node.js
- Expo CLI (`npm install -g expo-cli`)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/captain-jack-sparrow909/rak_RN_assessment_FE.git
    ```
2. Navigate to the project directory:
    ```bash
    cd rak_RN_assessment_FE
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

### Running the App
To start the app:
```bash
npx expo start
```

### Start backend server
clone this repo and start the server locally then when you click on the signup button the request will succeed and it won't throw you error
```bash
git clone https://github.com/captain-jack-sparrow909/rak_RN_assessment_backend
```
This command will launch Expo DevTools in your browser, and you can run the app on a simulator or a physical device.

## 🛠️ Components
- **Reusable Button**: Customizable button used for "Sign Up" and "Sign Up with Google".
- **Reusable Input Field**: Configurable input field component for form fields.

## 📁 Folder Structure
- `app/`: Core screens and navigation files
- `components/`: Shared components for consistent styling
- `assets/`: Images and static assets
- `constants/`: Configuration values

## 📜 License
This project is open-source and available under the MIT License.

## 📧 Contact
For any questions or suggestions, feel free to reach out.

---
