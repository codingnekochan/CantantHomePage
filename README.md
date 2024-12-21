# Cantant Mobile App Homepage

## Introduction

The Cantant Mobile App is a React Native project developed as a technical assessment. This project implements the homepage of the app, including basic navigation, data display, and mock API integration. The ios version of the app was used for this project.

## Features

- **Homepage UI**: Implements the homepage design as specified.
- **Navigation**: Basic tab and drawer navigation using Expo Router.
- **Modal**: Implements a modal feature for 'New Transaction' Button. Also implements display and hiding of balance as shown in the original app.
- **Data Display**: Fetches and displays mock data using a Postman.

## Technologies Used

- **React Native**: Framework for building the app.
- **Expo**: Toolchain for development and testing.
- **Expo Router**: For navigation.
- **NativeWind**: For styling using utility classes.
- **Axios**: For API requests.
- **React Query**: For handling data fetching and caching.
- **PostMan**: To generate mock API endpoints.

## Installation and Setup

### Prerequisites

Ensure you have the following installed on your system:

- Node.js
- npm or yarn
- Expo CLI
- Android/iOS Emulator or a physical device

### Steps

1. Clone the repository:
   ```bash
   git clone git@github.com:codingnekochan/CantantHomePage.git
   cd CantantHomePage
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npx expo start -c
   ```
4. Scan the QR code in your terminal with the Expo Go app or open the project in an emulator.

### Alternative Method: Using Expo Go Without Cloning

1. Download and Open the Expo Go app on your mobile device.
2. Enter the following Expo project link:

   ````
   https://expo.dev/preview/update?message=app%20build&updateRuntimeVersion=1.0.0&createdAt=2024-12-21T10%3A57%3A37.752Z&slug=exp&projectId=032e1189-13b3-41a5-9074-acd2edd862f2&group=6a4f7154-3e48-47c6-a183-b001511d278c   ```

   ````

3. The app will load directly from the Expo servers.

## Usage

### Running the App

1. Open the app on your device or emulator.
2. The homepage will display a list of items fetched from the mock API as well as the UI desgin of the app.
3. Navigate through the app using the provided UI elements.

## Testing

- Ensure the app loads successfully on your device or emulator.
- Verify that the homepage layout matches the design specification.
- Check that mock API data is displayed correctly.
- Test tab navigation between screens.
- Test drawer navigation between screens.
- Test showing and hiding sum balance on home screen
- Test opening and closing of modal by clicking 'New Transaction' Button
