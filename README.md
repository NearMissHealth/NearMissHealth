# NearMiss Health Client

This is the front-end for the client portal such that they can submit user stories and view those, anonymously, that were posted by others.

## API
**POST**

- `/api/post_request`
	- Post anything, as long as it's JSON and it will get placed into the DB.

**GET**

- `/api/all_data`
	- Hit this endpoint and get back everything that's in the DB. This is currently being used in the Feed section.