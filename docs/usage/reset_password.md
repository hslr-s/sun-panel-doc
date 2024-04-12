# Reset Password

If you have forgotten the administrator password, you can reset the password for the **first administrator** using the following command:

1. If you are using Docker (skip this step if you are not using Docker):
    ```sh
    docker exec -it sun-panel bash
    ```

2. Execute the following command:
    ```sh
    ./sun-panel -password-reset
    ```

    ::: info Output:
    ```text
    The password has been successfully reset. Here is the account information
    Username  admin@sun.cc
    Password  12345678
    ```
    :::