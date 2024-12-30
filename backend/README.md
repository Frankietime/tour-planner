# Band Member Management API

This project is a .NET Core backend application designed to manage band members. It provides a RESTful API for performing CRUD operations on band member data.

## Project Structure

- **Controllers**
  - `BandMembersController.cs`: Handles HTTP requests related to band members.
  
- **Models**
  - `BandMember.cs`: Defines the data structure for a band member, including properties such as Id, Name, Role, and Contact.
  
- **Services**
  - `BandMemberService.cs`: Contains business logic for managing band members, including methods for retrieving, adding, updating, and removing members.
  
- **Program.cs**: The entry point of the application, responsible for configuring and running the web host.
  
- **Startup.cs**: Configures services and the application's request pipeline.
  
- **appsettings.json**: Contains configuration settings for the application, such as connection strings and application settings.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Restore Dependencies**
   ```bash
   dotnet restore
   ```

3. **Run the Application**
   ```bash
   dotnet run
   ```

4. **Access the API**
   The API will be available at `http://localhost:5000` by default.

## Usage Guidelines

- **GET /api/bandmembers**: Retrieve all band members.
- **GET /api/bandmembers/{id}**: Retrieve a specific band member by ID.
- **POST /api/bandmembers**: Create a new band member.
- **PUT /api/bandmembers/{id}**: Update an existing band member.
- **DELETE /api/bandmembers/{id}**: Delete a band member.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.