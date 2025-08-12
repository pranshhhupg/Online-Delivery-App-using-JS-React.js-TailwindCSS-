# SwiggyClone Basic Plan

-Header
    -Logo
    -Nav Bar
    -profile
    -Cart

-Body
    -Search Bar
    -Restaurant Body
        -Restaurant Cards
            -Reviews
            -Cusines
            -Name
            -Delivery Time
    
-Footer
    -Copyright
    -Policies
    -Addresses
    -Social Media links
    -Contact

    

# Default import/export:
export default Component;
import Component from "path";

# Named Import/Export:
export const CDN_URL="  ";
import {CDN_URL} from "path";

# State Variable(superpowerful variable)
"Whenever a state variable in react updates,react ReRenders the component...."
which does not happens/possible with normal JS variables

that means state Variables are Reactive and normal JS variables arenot.....

It keeps your data layer in sync with UI Layer

# Redux ToolKit
import @reduxjs/toolkit and react-redux
Build our Redux store
Connect our App with store
Make slices
Displatch(action)-to update value
Selector-to retrieve value

# Types of Testing (For Developers)
(i) Unit Testing
(ii) Integration Testing 
these two are major testing
(iii) End to end Testing or e2e Testing 

# Setting Up Testing in our App
(i) Install React Testing Library Dependency
(ii) Install Jest Dependency
(iii) Install the Babel Dependencies
(iv) Configure our Babel
(v) We need to configure our parcel with babel such that it disables its default transpilation
(vi) execute/ initialise the jest Dependency - npx init --jest
(vii) install jsdom library from RTL/setup/jest28
(viii) install @babel/preset-react - to make JSX work in test cases
(ix) Include @babel/preset-react in my babel config
(x) Install @testing-library/jest-dom to install toBe functions