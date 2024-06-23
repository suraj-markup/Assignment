# Setup the Application to local Machine

1. Clone the repositry to the local machine by git clone https://github.com/suraj-markup/Assignment.git
2. Open the folder in VS Code
3. run npm install in your terminal
4. Now run npm run dev
5. For running the unit tests in terminal run npm test

# Optional :-

1. If you are facing any problem with running the app. there might be issues with dependencies:
    - try running npm install axios-mock-adapter --save-dev
    - try running npm install --save-dev redux-mock-store
    - try running npm install --save-dev redux-mock-store redux-thunk axios-mock-adapter
    - try running npm install --save-dev @babel/core @babel/preset-env babel-jest

2. Configure the required file like:-
    ## babel.config.cjs
        - Make file named "babel.config.cjs"
    
    ## jest.config.cjs
        - Make file named "jest.config.cjs"


