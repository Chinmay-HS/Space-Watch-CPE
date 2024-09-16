# Space Watch: Your Real Time Space Information Hub
## Diploma final year project by: Chinmay Sawant, Jash Damania, Aaditya Padghan, Vishal Chauhan

## *About* 

Space Watch is a comprehensive platform designed to bring together a wealth of space-related data and information. By integrating APIs from NASA and other sources, we offer users real-time insights into the International Space Station, celestial objects, Earth observations, Mars exploration, and asteroids.

Our platform also includes educational tools like Celestial Choreography, a simplified astrodynamics tool, and the Gravity Assist Calculator, which provides an easy-to-understand explanation of this complex maneuver.

**Note:** While Space Watch is a valuable resource, it's important to acknowledge that this was our first React project and there were areas where we could have improved. One such issue was the use of different Node.js versions for the client and backend. The client was initially developed using Node.js version 16, while the backend required version 20 or higher. This incompatibility limited the platform's flexibility and deployment options. However, these lessons have helped us grow and refine our development practices for future projects.

## *Flow:*
In this section, we will provide a concise overview of the core functions of our spaceexploration platform. We will begin by outlining the key features, including the Astronomy Picture of the Day, International Space Station tracking, Mars Rover photo exploration, Earth's natural event tracking, and the Gravity Assist Calculator. Following this introduction, we will delve into detailed diagrams and explanations of each function, offering a comprehensive understanding of our platform's capabilities.

The 'Router' component is the main entry point of the application. It imports the necessary React and React Router DOM modules, as well as the various components used throughout the application. The 'Router' component initializes the 'BrowserRouter' component, which provides the routing functionality for the application. Inside the 'BrowserRouter', the 'Routes' component is rendered, which defines thedifferent routes and their corresponding components.

![SS1](https://github.com/Chinmay-HS/Space-Watch-CPE/blob/47d92cdf392385895ca22ea37fdc1b5382a26b3b/SS2.jpg)

The routes include:
⁃ Home: Renders the 'Home' component with the 'scrollRef" prop.
⁃ Apod: Renders the 'Apod' component.
⁃ EonetMain: Renders the 'MainPage ' component.
⁃ WildFirePage: Renders the 'WildFirePage ' component.
⁃ IcePage: Renders the 'IcePage' component.
⁃ VolcanoesPage: Renders the 'VolcanoesPage ' component.
⁃ ISSMap: Renders the ISSMap' component.
⁃ SatelliteTracker: Renders the 'SatelliteTracker' component.
⁃ GravityAssist: Renders the 'GravityAssist' component.

The Routes component also checks the 'loggedin' status from the 'AuthContext'. If the user is not logged in (loggedin === false*), the Register' and 'Login' routes are rendered.
If the user is logged in (*loggedin === true"), the 'Profile' route is rendered.
⁃ The 'NavbarJD' component is rendered outside the 'Routes' component, as it should
be visible on all pages. It receives the 'scrollRef' prop from the 'Router' component.
⁃ The 'Home' component is also rendered outside the 'Routes' component, as it should
be visible on the home page. It receives the "scrollRef" prop from the 'Router' component.
⁃ The remaining components ('Apod', 'Profile, 'EonetMain', 'WildFirePage',
'IcePage', 'VolcanoesPage', 'ISSMap', 'SatelliteTracker', 'GravityAssist', 'Register', and
'Login') are rendered within their respective routes.

This flow diagram shows the routing logic, the conditional rendering based on the user's login status, and the rendering of the various pages and features.

---

## All-the-files-needed-for-future-reference:
1. Figma File - https://www.figma.com/design/JrkYlYywjs03GyDS2LuqAL/Space-Watch-UI%2FUX?node-id=0-1&t=lC8Itkbpa9hYWojH-1 (Local file is saved in the Assets Folder of the latest commit.)
2. NASA Open APIs - https://api.nasa.gov/

## Goals-of-this-project:
Short-term Goals:
1. Develop MVP (Minimum Viable Product): Build a basic version of the SpaceWatch application with essential features such as displaying Astronomy Picture of the Day (APOD), real-time satellite tracking, and basic educational resources.
2. User Testing and Feedback: Conduct user testing sessions to gather feedback on the initial prototype. Use this feedback to identify areas for improvement and iterate on the design and functionality of the application.
3. Bug Fixing and Optimization: Address any bugs or performance issues identified during testing. Optimize the application for better performance, responsiveness, and user experience.

Medium-term Goals:
1. Expand Feature Set: Enhance the SpaceWatch application by adding additional modules and features, such as access to more advanced data visualization tools and simulation.
2. Partnerships and Collaborations: Explore partnerships with educational institutions, media organizations, and space agencies to promote the SpaceWatch platform and expand its reach. Collaborate with experts in the field to curate educational content and
provide valuable insights into space exploration.

Long-term Goals:
1. Scalability and Reliability: Ensure the SpaceWatch platform can handle increasing user traffic and data volume as it grows in popularity. Implement scalable infrastructure and robust monitoring systems to maintain reliability and performance.
2. Global Outreach: Expand the SpaceWatch platform to reach a global audience of space enthusiasts, educators, researchers, and policymakers. Translate content into multiple languages and customize features to suit different cultural preferences and educational requirements.
3. Continuous Improvement: Foster a culture of continuous improvement by regularly soliciting user feedback, monitoring platform metrics, and implementing iterative enhancements. Stay updated on advancements in space science and technology to
incorporate cutting-edge features and data sources into the SpaceWatch platform.

## Screenshots
Figma Wireframing 
![SS2](https://github.com/Chinmay-HS/Space-Watch-CPE/blob/47d92cdf392385895ca22ea37fdc1b5382a26b3b/SS1.png)


