# SportSee

## Librairie Charts: Utilisation de Recharts

- Main page is PorfilePage.jsx where the menu and sidebar are declared. 
- The main container (dashboard) is declared in a Dashboard.jsx component.
- Dashboad.jsx component is calling various components (charts, cards, greeting message).
- Charts components are stored into components > charts


## Using Mock data to fetch the data

- Endpoint payload is copied in a mock file (transformed into a json structure)
- Then I used a function to format the data properly to make sure it provides the right data to the chart
- All the function to get the mock data (input) and format it (output) is made in a service script in function that will be called in the Dashboard component
- I manually assign the ID in Dashboard so that dashboard can use the functions defined in the service script before calling the chart components (with the proper data)

## Using API endpoint to fetch the data
- By using API endpoint, I don't need to keep the mock data anymore
- To get the user ID, I'm using the useParams() function to get the userID from the URL
- This userID is then passed into the service script that will be calling the endpoint (input) using fetch() and return the data formated (using the same format script used before)