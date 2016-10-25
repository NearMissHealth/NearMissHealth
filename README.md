# NearMiss Health Client

This is the front-end for the client portal such that they can submit user stories and view those, anonymously, that were posted by others.

## API
**POST**

- `/api/post_request`
	- You can POST anything, but the server is expecting something in this format so that it can be put into the DB.
		```json
		{
            hospital: "some hospital",
            type: "in-patient",
            content: "A user story will go here.",
            permission: "false or true"
    	}
		```

**GET**

- `/api/all_data`
	- Hit this endpoint and get back everything that's in the DB. This is currently being used in the Feed section.