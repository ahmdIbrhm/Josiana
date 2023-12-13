### Authentication Endpoints:

#### **Login Endpoint**

* **URL**: /auth/login

* **Method**: POST

* **Consumes**: application/json

* **Description**: Authenticates a user based on the provided credentials (email and password). If successful, it returns a JWT token along with user information.


#### **Signup Endpoint**

* **URL**: /auth/signup

* **Method**: POST

* **Consumes**: application/json

* **Description**: Registers a new user with the provided information.

***

### Construction Endpoints:

#### **Create Construction Endpoint**

  - **URL:** /constructions

  - **Method:** POST

  - **Consumes:** application/json

  - **Description:** Creates a new construction project. Requires the ID of the NGO applying for the project.

#### **Accept/Decline Construction Endpoint**

  - **URL:** /constructions/{constructionId}/decision

  - **Method:** PUT

  - **Path Variable:** constructionId - ID of the construction project

  - **Request Parameter:** accepted - Boolean indicating whether the construction is accepted or declined.

  - **Description:** Accepts or declines a construction project based on the provided decision.


#### **Get Constructions by NGO Endpoint**

  - **URL:** /constructions/ngo/{ngoId}

  - **Method:** GET

  - **Path Variable:** ngoId - ID of the NGO

  - **Produces:** application/json

  - **Description:** Retrieves a list of constructions associated with a specific NGO.

#### **Edit Construction Endpoint**

  - **URL:** /constructions/{constructionId}

  - **Method:** PUT

  - **Path Variable:** constructionId - ID of the construction project

  - **Consumes:** application/json

  - **Description:** Edits the details of a construction project.

#### **Get Constructions with NGOs Endpoint**

  - **URL:** /constructions

  - **Method:** GET

  - **Produces:** application/json

  - **Description:** Retrieves a list of constructions with associated NGOs.

  - **Response (JSON Array of GetConstructionsWithNgos):**

#### **Get Construction by ID Endpoint**

  - **URL:** /constructions/{constructionId}

  - **Method:** GET

  - **Path Variable:** constructionId - ID of the construction project

  - **Produces:** application/json

  - **Description:** Retrieves details of a specific construction project by its ID.

***

### Project endpoints:

#### **Get All Free Projects Endpoint**

- **URL**: /projects

- **Method**: GET

- **Produces**: application/json

- **Description**: Retrieves a list of all available projects.

####  **Create Project Endpoint**

- **URL**: /projects

- **Method**: POST

- **Consumes**: application/json

- **Description**: Creates a new project based on the provided ID.
