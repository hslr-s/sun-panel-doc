# 重置密码

如果你忘记了管理员密码，你除了修改数据库，还可以使用命令重置**第一个管理员的密码**

1. 如果您使用的是docker（未使用可以跳过）
    ```sh
    docker exec -it sun-panel bash
    ```
    
2. 执行示例
    ```sh
    ./sun-panel -password-reset
    ```

    ::: info 输出结果
    ```text
    The password has been successfully reset. Here is the account information
    Username  admin@sun.cc
    Password  12345678
    ```
    :::

   


