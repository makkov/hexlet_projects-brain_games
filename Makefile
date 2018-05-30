install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	npm publish

lint:
	npm run eslint /src

start-be:
	npm run babel-node -- src/bin/brain-even.js

start-berf:
	npm run babel-node -- src/bin/brain-even.js

start-bc:
	npm run babel-node -- src/bin/brain-calc.js
