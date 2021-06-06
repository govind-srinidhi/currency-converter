# currency-converter
The currency converter application allows users to seamelessly calculate the money from one currency to another. It internally uses the apis exposed by https://ratesapi.io/ to fetch the necessary information.

The application accepts following information from the user:
- Source currency
- Target currencies: List of target currencies for which we're interested in knowing the currency calculation
- Date: The date on which we want to know the conversion value of target currencies. It's set to current date by default
- Source amount: How much of the source amount to be converted to target currencies

The application accepts the following information and provides source to target currency conversion for each of the chosen target currency on the selected date.

# Solution Architecture

The application is built using VueJS and Vuetify. Routing across the pages are managed using Vue-router (router and middleware) and state management is handled through Vuex (store pattern).

The project structure would look somewhat like this:

- Assets: This folder contains images used in the application. However as the project grows, it could continue more documents/audio/video or any static asset needed for app.
- Components: Commonly used components, that can be shared by multiple screens/views are placed in components. Data to the components are passed as props and data from the components are emitted as events.
- Constants: Constants and labels (static message text used in the application) are added here. Please note - Labels has been currently added as constants. But it should be used as locales and need to provide language specific text.
- Layouts: Every application will mostly have a reusable template, that can be used across the pages. 2 layouts has been created and they are picked up at route time.
- Middleware: Before routing to a particular page, any code to be executed can be configured here.
- Plugins: Plugins needed for application (router, store, vuetify, constants) are setup here and linked from main.js
- Store: State management is handled through the stores. Whenever data is to be passed across the pages or some information has to be shared across routes, then stores could be used. And the response from APIs are maintained in stores to avoid repeated API calls
- Views: The pages rendered in application are kept under this folder.
- Tests: Unit tests for the components, views and layouts are added here.

## Libraries

- Vue: Currency converter is the best example for using VueJS. It is a single page application and the frame-work suits the bill even when application grows.
- Vuetify: Vue UI library used to render material components.
- Vuex: State management in the application is handled through Vuex.
- Vue-Router: Routing the application across pages and ensuring certain section of code to be executed before routing is handled through router.
- Jest and vue-test-utils: Unit tests for the application is written using vue-test-utils and Jest.
- Pug: Simplifies coding the html pages. Need not have to close the tags, as it can be managed by indentation. This makes the code look neat and easier to read the code.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
