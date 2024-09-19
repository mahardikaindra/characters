# Project Documentation

## Overview
This project is built using the Clean Architecture approach and consumes data from the [Rick and Morty API](https://rickandmortyapi.com/).

## Clean Architecture
Clean Architecture is a software design philosophy that separates the elements of a design into ring levels. This project follows the principles of Clean Architecture to ensure maintainability, scalability, and testability.

### Layers
1. **Presentation Layer**: Handles the UI/UX of the application.
2. **Domain Layer**: Contains the business logic and domain entities.
3. **Data Layer**: Manages data sources and repositories.

## API Integration
The project integrates with the Rick and Morty API to fetch data about characters, episodes, and locations from the show.

### Endpoints
- **Characters**: `/character`
- **Episodes**: `/episode`
- **Locations**: `/location`

## Getting Started
To get started with this project, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone git@github.com:mahardikaindra/characters.git
    ```

2. **Install dependencies**:
    ```sh
    cd characters
    npm install
    ```

3. **Run the application**:
    ```sh
    npm start
    ```

## Contributing
Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) for more information.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

## CodePush Doc:
 - https://github.com/microsoft/react-native-code-push/blob/master/docs/setup-android.md
 - https://github.com/microsoft/react-native-code-push/blob/master/docs/setup-ios.md

## Step CodePush
1. install appcenter cli
2. login appcenter account
3. Copy Access code from browser
4. Deployment : appcenter codepush release-react -a developer.earetech-gmail.com/AppNative -d Development
5. Change folder dotgit to .git for showing metadata
