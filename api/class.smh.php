<?php

  class SmartAPI {

    public function getShows() {
      $curl = curl_init();

      curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.smartsheet.com/2.0/sheets/sheet#",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
          "authorization: Bearer 27oolsepjtucoul2ovisucy407",
          "cache-control: no-cache",
          "exclude: nonexistentCells",
          "postman-token: 5fc937f9-20ba-dfad-7be3-d2f06533b840"
        ),
      ));

      $response = curl_exec($curl);
      $err = curl_error($curl);
      curl_close($curl);

      if ($err) 
      {
        echo "cURL Error #:" . $err;
      } 
      else 
      {
        echo $response;
      }
    }

    public function getVegasDancers()
    {
      $curl = curl_init();

      curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.smartsheet.com/2.0/sheets/sheet#",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
          "authorization: Bearer 27oolsepjtucoul2ovisucy407",
          "cache-control: no-cache",
          "exclude: nonexistentCells",
          "postman-token: 5fc937f9-20ba-dfad-7be3-d2f06533b840"
        ),
      ));
      $response = curl_exec($curl);
      $err = curl_error($curl);
      curl_close($curl);

      if ($err) 
      {
        echo "cURL Error #:" . $err;
      } 
      else 
      {
        echo $response;
      }
    }

    public function getVegasSingers()
    {
      $curl = curl_init();

      curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.smartsheet.com/2.0/sheets/sheet#",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
          "authorization: Bearer 27oolsepjtucoul2ovisucy407",
          "cache-control: no-cache",
          "exclude: nonexistentCells",
          "postman-token: 5fc937f9-20ba-dfad-7be3-d2f06533b840"
        ),
      ));
      $response = curl_exec($curl);
      $err = curl_error($curl);
      curl_close($curl);

      if ($err) 
      {
        echo "cURL Error #:" . $err;
      } 
      else 
      {
        echo $response;
      }
    }
  }


