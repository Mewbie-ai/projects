<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- Bootstrap CSS -->
    <link href="../bootstrap.min.css" rel="stylesheet" />
    <!-- My CSS -->
    <link rel="stylesheet" href="style.css" />
    <title></title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <!-- Navbar -->
    <header>
      <nav class="navbar">
        <div class="container nav d-fixed-top bg-primary">
          <div class="nav-logo">@</div>
          <div class="float-right">
            <a href="" class="btn">BUY</a>
          </div>
        </div>
      </nav>
    </header>
    <main class="container">
      <div class="grid">
        <?php 
            // connect
            $link = mysql_connect("localhost", "root", "", "demo ")
            if (!$link) {
              die('couldn\'t connect: ' . mysql_error() );
            }
            echo 'Welcome'

            // query
            $result = mysql_query("SELECT * FROM id")
            if (!$result) {
              die('Error: ' . mysql_error());
            }

            mysql_close($link);
          ?>
      </div>
    </main>
    <footer class="footer"></footer>
  </body>
</html>
