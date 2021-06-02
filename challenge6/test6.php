<!doctype html>
<html>
<head>
</head>
<body>
  <div>
    <?php
      echo "test";
      $host = 'localhost';
      $username = 'root';
      $password = 'root';
      // connect to mysql
      $link = mysqli_connect($host, $username, $password); // gagal: $link = null/false
      if (!$link) { // ! = null/false;
          die('Could not connect: ');
      }
      echo 'Connected successfully';
      
      // query
      $result = mysqli_query("SELECT * FROM id WHERE id");
      if (!$result) {
          die('Invalid query: ');
      }
      
      mysqli_close($link);

      $a = 1;
      $b = "test\na";
      $c = 2;
      $d = [1,2,3,4];
      for ($i = 0; $i < count($d); $i++) {
        echo $d[$i].'<br>';
      }
    ?>
    <div id="products"></div>
    <script>
      var a = 1;
      let b = "test";
      const c = 2;
      var d = [1,2,3,4];
      var e = {
        "name": "test"
      }
      for (var i = 0; i < d.length; d++) {
        a = a + b; // a += b;
        document.innerHTML = document.innerHTML + d[i] + "<br>";
      }
      var f = e.name; // isi: "test"
    </script>
  </div>
</body>
</html>
