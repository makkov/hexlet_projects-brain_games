install:
	npm install

publish:
	npm publish

lint:
	npm run eslint /src

start-even:
	npm run babel-node -- src/bin/brain-even.js

start-calc:
	npm run babel-node -- src/bin/brain-calc.js

start-gcd:
	npm run babel-node -- src/bin/brain-gcd.js

start-balance:
	npm run babel-node -- src/bin/brain-balance.js

start-prime:
	npm run babel-node -- src/bin/brain-prime.js

start-progression:
	npm run babel-node -- src/bin/brain-progression.js
