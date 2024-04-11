# Reset Password

If you have forgotten the administrator password, you can reset the password for the **first administrator** using the following command:

1. If you are using Docker (skip this step if you are not using Docker):
    ```sh
    docker exec -it sun-panel bash
    ```

2. Execute the following command:
    ```sh
    ./sun-panel -pwdReset
    ```
    
    ::: details Click here to view versions `v1.4.0-beta24-02-20` and earlier
    ```sh
    ./sun-panel -password-reset
    ```
    :::

    Output:

    ```text
    The password has been successfully reset. Here is the account information
    Username  admin@sun.cc
    Password  12345678
    ```