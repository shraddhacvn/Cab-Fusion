```markdown
# Cab Fusion

**Cab Fusion** is a cab booking platform developed using HTML, CSS, JavaScript for the frontend, and PHP with MySQL for the backend. This platform aims to provide users with a seamless and efficient cab booking experience.

## Features

- **User Registration and Login**: Users can register and log in to their accounts.
- **Cab Booking**: Users can book cabs for their desired destinations.
- **Real-time Updates**: Users receive real-time updates on their booking status.
- **Admin Panel**: Admins can manage users, bookings, and view statistics.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: PHP
- **Database**: MySQL

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/shraddhacvn/cab-fusion.git
    ```
2. Navigate to the project directory:
    ```bash
    cd cab-fusion
    ```
3. Set up the database:
    - Create a MySQL database named `cab_fusion`.
    - Import the provided SQL file to set up the database schema and initial data:
        ```bash
        mysql -u your_username -p cab_fusion < database/cab_fusion.sql
        ```
4. Configure the database connection:
    - Open `config.php` file located in the project root directory.
    - Update the database credentials:
        ```php
        define('DB_SERVER', 'localhost');
        define('DB_USERNAME', 'your_username');
        define('DB_PASSWORD', 'your_password');
        define('DB_NAME', 'cab_fusion');
        ```
5. Start the local development server:
    ```bash
    php -S localhost:8000
    ```
6. Open your web browser and navigate to:
    ```
    http://localhost:8000
    ```

## Usage

- **User Registration**: Navigate to the registration page and create a new account.
- **Login**: Log in with your credentials to access the booking features.
- **Book a Cab**: Enter your pickup and drop-off locations, select the cab type, and book your ride.
- **Admin Panel**: Admins can log in to the admin panel to manage users and bookings.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

## Contact

For any questions or suggestions, feel free to contact me at shrchavan11@gmail.com.

---

Thank you for using **Cab Fusion**!
```
