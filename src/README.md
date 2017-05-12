I recommend that you goto root directory.  Do the following:

rm -rf node_modules

npm install --save react@16.0.0-alpha.6 // Or whatever version you need as indicated in package.json

npm install --save react-native@0.43.4    // notice two --- before save  Or 0.44.0 if you need it.

npm install

Check that you see this in packages

  "react": "^16.0.0-alpha.6",
   "react-native": "^0.43.4",

AND after doing above you also see these packages installed as node modules after doing:

npm list -g --depth=0



You should see react 16.0.0-alpha.6

and react-native@0.43.4

// I am guessing you do not really have the right packages installed. That happened to me as well.

You can also check what's really installed on your machine with npm list -g --depth=0

What happens in npm does not install the right packages sometimes. So you have to tell it the exact ones. 



The other thing you can do is remove the ^  for react and react-native inside package.json

 "react": "16.0.0-alpha.6",
   "react-native": "0.43.4"

then just 

npm install

This will force the right versions.  If you have NOT done anything with ActivityIndicator then it MUST be that you do NOT have the right packages installed. npm just looks where it can sometimes going to net to find packages and with the ^ in front to the package version it has too much flexibility and can pick what it wants.