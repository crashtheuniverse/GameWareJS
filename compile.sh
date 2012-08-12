java -jar compiler/compiler.jar --js entry/GWEntry.js --js *.js --js_output_file lib/gameware.js

cp lib/gameware.js ../ZeldaSkyrim/public/scripts/lib/gameware.js
cp lib/gameware.js ../crashtheuniverse/public/scripts/lib/gameware.js