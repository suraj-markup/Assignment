# Setup and Installation of Project to Local Machine
**You can find the project here :** https://assignment-plum-two.vercel.app/

**Prerequisites**

-   **Git:** Ensure you have Git installed on your system. You can download it from [https://git-scm.com/downloads](https://git-scm.com/downloads).
-   **Node.js and npm:** Download and install Node.js from [https://nodejs.org/en/about/previous-releases](https://nodejs.org/en/about/previous-releases) (includes npm).

**Installation**

1.  **Clone the Repository:** Open your terminal or command prompt and navigate to your desired project directory. Then, clone the repository using the following command:
    

    
    ```
    git clone https://github.com/suraj-markup/Assignment.git
    ```
 
    
2.  **Install Dependencies:** Navigate to the project directory using `cd Assignment`:
    
 
    
    ```
    cd Assignment
    ```

    
    Install the required dependencies using npm:
    
 
    
    ```
    npm install
    ```
    
 
    
3.  **Development Server:** Start the development server to run the application locally:
    
    
    ```
    npm run dev
    ```
    
    
    This will typically start the server on `http://localhost:3000` (or a similar address). You can access the application in your web browser.
    
4.  **Unit Tests (Optional):** Run the unit tests to ensure code quality:
    
    
    
    ```
    npm test
    ```
    
    

**Troubleshooting**

1.  **Dependency Issues:** If you encounter errors related to missing dependencies, try the following commands individually or in combination:
    
    -   Install `axios-mock-adapter` for mocking API responses:
        
       
        
        ```
        npm install axios-mock-adapter --save-dev 
        ```
        
    
        
    -   Install `redux-mock-store` and `redux-thunk` for testing Redux applications (if applicable):
        
        
        
        ```
        npm install --save-dev redux-mock-store redux-thunk 
        ```
        
  
        
    -   Install a complete set of dependencies for testing and development:
        
        
        
        ```
        npm install --save-dev @babel/core @babel/preset-env babel-jest axios-mock-adapter redux-mock-store redux-thunk
        ```
     
        
2.  **Configuration Files:**
    
    -   **babel.config.cjs:** If necessary, create a file named `babel.config.cjs` at the root of your project and add the following content:
        
     
        ```
        module.exports = {
          presets: [
            [ '@babel/preset-env', { targets: { node: 'current' }, }, ],
          ],
        };
        ```
        
       
        
    -   **jest.config.cjs:** Similarly, create a `jest.config.cjs` file at the root of your project and add:
        
    
        
        ```
        module.exports = {
          testEnvironment: 'node',
          transform: { '^.+\\.jsx?$': 'babel-jest' },
          moduleFileExtensions: ['js', 'jsx'],
        };
        ```
      
        
        These files configure Babel and Jest for your project's specific requirements.