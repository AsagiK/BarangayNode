<!DOCTYPE html>
<html lang="en">


<head> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Barangay Officials Registration Form</title>

    <!-- Bootstrap -->
    <link href="assets/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="assets/vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="assets/vendors/nprogress/nprogress.css" rel="stylesheet">
    <!-- iCheck -->
    <link href="assets/vendors/iCheck/skins/flat/green.css" rel="stylesheet">
    <!-- bootstrap-wysiwyg -->
    <link href="assets/vendors/google-code-prettify/bin/prettify.min.css" rel="stylesheet">
    <!-- Select2 -->
    <link href="assets/vendors/select2/dist/css/select2.min.css" rel="stylesheet">
    <!-- Switchery -->
    <link href="assets/vendors/switchery/dist/switchery.min.css" rel="stylesheet">
    <!-- starrr -->
    <link href="assets/vendors/starrr/dist/starrr.css" rel="stylesheet">
    <!-- bootstrap-daterangepicker -->
    <link href="assets/vendors/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="assets/build/css/custom.min.css" rel="stylesheet"> 

    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script> 
</head>

<body>
    <!-- F I R E B A S E   C O N N E C T I O N -->  
    <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-firestore.js"></script> 

    <div class="container body">
        <div class="main_container" style="background-color: #D8345F;">

            <!-- page content -->
            <div class="right_col" role="main" style="background-color: #202040">
                <div class="">
                    <div class="page-title">
                        <div class="title_left">

                            <h3 style="color: #FFBD69;">Barangay Officials Registration Form</h3>

                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel" style="background-color: #543846; border-color: #543846;  border-radius: 8px;">
                            <div class="x_content">
                                <br />
                                <form id="barangay-registration-form" data-parsley-validate class="form-horizontal form-label-left" name="registerform" >
 
                                    <div class="form-group">
                                        <label style="color: #dddddd;" class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">First Name <span class="required">*</span>
                                        </label>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <!--First name Input field-->
                                            <input type="text" id="first-name" name="firstname" required="required" class="form-control col-md-7 col-xs-12" placeholder="First name" name=>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label style="color: #dddddd;" class="control-label col-md-3 col-sm-3 col-xs-12" for="last-name">Last Name <span class="required">*</span>
                                        </label>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <!--Last name input field-->
                                            <input type="text" id="last-name" name="lastname" required="required" class="form-control col-md-7 col-xs-12" placeholder="Last Name">
                                        </div>
                                    </div>


                                    <!--options list of position-->
                                    <div class="form-group">
                                        <label style="color: #dddddd;" class="control-label col-md-3 col-sm-3 col-xs-12">Select Position of Applicant</label>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <select class="form-control" name="role" id="roles">
                                                <option value="-1">Pick Position</option>

                                                <option value="0"> Punong Barangay</option>
                                                <option value="0"> Sanguniang Barangay</option>
                                                <option value="0"> SK Chairman</option>
                                                <option value="0"> Barangay Captain</option>
                                                <option value="0"> Barangay Secretary</option>


                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label style="color: #dddddd;" class="control-label col-md-3 col-sm-3 col-xs-12" for="last-name">Contact Number <span class="required">*</span>
                                        </label>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <!--Last name input field-->
                                            <input type="number" id="contact" name="contact" required="required" class="form-control col-md-7 col-xs-12" placeholder="Cellphone or Contact Number" maxlength="11">
                                        </div>
                                        <input type="hidden" name="count" value="">
                                    </div>
                                    <div class="form-group">
                                        <label style="color: #dddddd;" for="email" class="control-label col-md-3 col-sm-3 col-xs-12">Email Addess</label>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <!--Email Input field-->
                                            <input id="email" class="form-control col-md-7 col-xs-12" type="email" name="email" placeholder="example@example.com">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label style="color: #dddddd;" class="control-label col-md-3 col-sm-3 col-xs-12" for="last-name">Password <span class="required">*</span>
                                        </label>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <!--Password input field-->
                                            <input type="text" id="password" name="password" class="form-control col-md-7 col-xs-12" placeholder="Enter your password">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                                            <a href="/ViewUsers" class="btn btn-dark" type="button">Cancel</a>
                                            <button id="SubmitButtonReg"  type="submit" class="btn btn-primary" >Submit</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    </div>
</body>


    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="/__/firebase/7.14.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
    https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.14.2/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>

<!-- jQuery -->
<script src="assets/vendors/jquery/dist/jquery.min.js"></script>
<!-- Bootstrap -->
<script src="assets/vendors/bootstrap/dist/js/bootstrap.min.js"></script>
<!-- FastClick -->
<script src="assets/vendors/fastclick/lib/fastclick.js"></script>
<!-- NProgress -->
<script src="assets/vendors/nprogress/nprogress.js"></script>
<!-- bootstrap-progressbar -->
<script src="assets/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>
<!-- iCheck -->
<script src="assets/vendors/iCheck/icheck.min.js"></script>
<!-- bootstrap-daterangepicker -->
<script src="assets/vendors/moment/min/moment.min.js"></script>
<script src="assets/vendors/bootstrap-daterangepicker/daterangepicker.js"></script>
<!-- bootstrap-wysiwyg -->
<script src="assets/vendors/bootstrap-wysiwyg/js/bootstrap-wysiwyg.min.js"></script>
<script src="assets/vendors/jquery.hotkeys/jquery.hotkeys.js"></script>
<script src="assets/vendors/google-code-prettify/src/prettify.js"></script>
<!-- jQuery Tags Input -->
<script src="assets/vendors/jquery.tagsinput/src/jquery.tagsinput.js"></script>
<!-- Switchery -->
<script src="assets/vendors/switchery/dist/switchery.min.js"></script>
<!-- Select2 -->
<script src="assets/vendors/select2/dist/js/select2.full.min.js"></script>
<!-- Parsley -->
<script src="assets/vendors/parsleyjs/dist/parsley.min.js"></script>
<!-- Autosize -->
<script src="assets/vendors/autosize/dist/autosize.min.js"></script>
<!-- jQuery autocomplete -->
<script src="assets/vendors/devbridge-autocomplete/dist/jquery.autocomplete.min.js"></script>
<!-- starrr -->
<script src="assets/vendors/starrr/dist/starrr.js"></script>
<!-- Custom Theme Scripts -->
<script src="assets/build/js/custom.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

<script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-analytics.js"></script>

<script src="RegistrationBarangay.js"></script> 

</html>