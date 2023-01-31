<h1> Nitflex ? </h1>

<h4> Nitflex is a Netflix clone UI with many features excluding streaming of course. Building by myself from scratch using the various documentations as help. </h4>

<h3>Stack and tools</h3>
<ul>
  <li>ReactJs</li>
  <li>Scss with a 7-1 pattern (almost)</li>
  <li>tmDB Api for the programs data</li>
</uL>
<h4>Deployment</h4>
<p><em>The project has been deployed on Netlify, you can view the demo at : <a href="https://sparkling-youtiao-7bb6c8.netlify.app">Nitflex V1</a></em></p>

<h2>How it works ?</h2>
<p>Thanks to Javascript's asynchronous and also React hooks like useEffect, the application makes specific API requests to give a conditional display when it "mounts". These different requests are made according to the components or the page to display. For example, if you are on the movies page, API requests will relate to movie data. </p>

<h5>Specific cases</h5>
<ul>
  <li>Home</li>
  <li>Favorites</li>
</ul>
<h3>About Components</h3>
<table>
    <thead>
        <tr>
            <th colspan="2">Components</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Nav</td>
            <td>Contain links to other pages, searchbar to fetch programs by name. This component is also responsive.</td>
        </tr>
         <tr>
            <td>Header</td>
            <td>This component fetch and render a random banner from a list of trendings movies/TvShows</td>
        </tr>
         <tr>
            <td>Row</td>
            <td>Each row map a list of particular category of fetched programs</td>
        </tr>
         <tr>
            <td>QuickView</td>
            <td>Pop up component on click to view more information about a specific program with the capability to add this one to favorites</td>
        </tr>
         <tr>
            <td>SearchResult</td>
            <td>Custom component to fetch and render custom query from the searchbar</td>
        </tr>
         <tr>
            <td>Footer</td>
            <td>Static render displaying in the whole application</td>
        </tr>
    </tbody>
</table>

<h3>About Pages</h3>

<table>
    <thead>
        <tr>
            <th colspan="2">Pages</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Home</td>
            <td>This is the main page that renders a banner, as well as programs related to movies and series in rows</td>
        </tr>
         <tr>
            <td>Movies</td>
            <td>Similar to the homepage but with queries only related to movies</td>
        </tr>
         <tr>
            <td>TvShows</td>
            <td>Similar to the homepage but with queries only related to Tv Shows</td>
        </tr>
         <tr>
            <td>Favorites</td>
            <td>This page get favorites programs ID from localstorage and make a specific request to get each programs details from the API. Each favorites program can be deleted from favorites in this page.</td>
        </tr>
    </tbody>
</table>

<h3>Customization</h3>
<ul>
  <li>✅ Filtering data on fetch to remove programs without backdrop_path(image), in order to prevent 404 error and bad UX </li>
  <li>✅ Create customs css rules(breakpoints) in the base SCSS files for variables(colors, background ...) and responsive </li>
  <li>✅ Creation of a custom logo resembling the official logo, with a responsive variant </li>
</ul>

<h3>Known issues</h3>
<ul>
  <li>❌ In rare cases, the banner does not display, you have to refresh the page. </li>
  <li>❌ For unknown reasons, potentially related to the database, a 404 error may appear for requests related to images, without disturbing the rendering </li>
  <li>❌ The search bar is very short in the responsive mode of the Nav </li>
</ul>

<h3>List of possible improvements</h3>
<ul>
  <li>⚙️ Add a lazy loader to limit unnecessary queries. </li>
  <li>⚙️ Modify components to make them more reusable (example: for the row). </li>
  <li>⚙️ Use clearer naming for component endings with .jsx </li>
  <li>⚙️ Create a specific folder for every constants.</li>
  <li>⚙️ Create more dynamic rendering, some hard coded data could be mapped.</li>
</ul>
<h3>Specificity of folder structures</h3>

<table>
    <tbody>
        <tr>
            <td>/src/config</td>
            <td>Contain every requests excepted specific request for details mades with an id.</td>
        </tr>
         <tr>
            <td>/src/styles</td>
            <td>Contains all styling logic in scss, compiled to css in an index</td>
        </tr>
         <tr>
            <td>/src/assets</td>
            <td>Contains the minimum in assets, so everything that does not come from the API</td>
        </tr>
    </tbody>
</table>

