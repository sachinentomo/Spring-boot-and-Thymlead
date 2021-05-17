
		$(document).ready(function(){
		showDate(); 
    	setInterval(showDate,1000);
    	var delete_parent;
    	var dataTable = $('#example').dataTable({
    		"pagingType": "full_numbers",
        	"columnDefs": [
        	{ "searchable": false, "targets": [0,1] }
           	]});
         $("#searchbox").keyup(function() {
             dataTable.fnFilter(this.value);
         });  
		function showDate(){
        	var time=new Date();
        	var date=time.getDate();
        	var month=time.getMonth()+1;
        	var year=time.getFullYear();
        	var hour=time.getHours();
        	var minutes=time.getMinutes();
        	var second=time.getSeconds();
        	var am_pm='am';
        	if(hour>12){
                hour-=12;
            	am_pm='pm';
        	}
        	else{
            	am_pm='am';
        	}
	        //var hour=hour<10?"0"+hour:hour;
	        minutes=minutes<10?"0"+minutes:minutes  ;
	        second=second<10?"0"+second:second  ;
	        let output=date+"/"+month+"/"+year+"    "+hour+":"+minutes+":"+second+" "+am_pm;
	        document.getElementById("date_time").innerHTML=output;
	    }  
			//Add Popup
			$('.add-employee').click(function(){
				$('#save').val('Add');
				$('#save').removeAttr('disabled');
				$('#save').show();
				$('#div1').show();
	        	$('#div2').show();
	        	$('#div3').show();
	        	$('#div4').show();
	        	$('#div5').show();
	         	$('#modal-title').text('Add New Employee');
	        	$('#update-action').val('ADD'); 
	        	$('#validationSummary').hide();
	        	$('#employee-name').focus();
	        	$('#employee-id').val('');
	        	$('#employee-code').val('');
	        	$('#employee-name').val('');
	        	$('#employee-email').val('');
	        	$('#employee-password').val('');
	        	$('#employee-department').val('');
	        	$('#employee-project').val('');
				$('#employee-modal').modal('show');	
			});
			
			function employeeOperation(){
				//View Popup
				$('.view-employee').click(function(){
					//var emp_id=$(this).parent().data('emp_id');
		         	//var emp_code=$(this).parent().data('emp_code');
		         	var emp_name = $(this).parent().data('emp_name');
		         	var emp_email = $(this).parent().data('emp_email');
		         	var emp_pass = $(this).parent().data('emp_pass');
		         	var emp_dept = $(this).parent().data('emp_dept');
		         	var emp_prj = $(this).parent().data('emp_prj');
		         	var emp_join = $(this).parent().data('emp_join');
		         	$('#div1').show();
		        	$('#div2').show();
		        	$('#div3').show();
		        	$('#div4').show();
		        	$('#div5').show();
					$('#save').hide();
					$('#save').removeAttr('disabled');
		         	$('#modal-title').text('Employee Details');
		        	$('#update-action').hide(); 
		        	$('#validationSummary').hide();
		        	$('#employee-name').focus();
		        	$('#employee-name').val(emp_name);
		        	$('#employee-email').val(emp_email);
		        	$('#employee-password').val(emp_pass);
		        	$('#employee-department').val(emp_dept);
		        	$('#employee-project').val(emp_prj);
					$('#employee-modal').modal('show');	
				});
				
				//Edit Popup
				$('.edit-employee').click(function(){
					var emp_id = $(this).parent().data('emp_id');
		         	var emp_code = $(this).parent().data('emp_code');
		         	var emp_name = $(this).parent().data('emp_name');
		         	var emp_email = $(this).parent().data('emp_email');
		         	var emp_pass = $(this).parent().data('emp_pass');
		         	var emp_dept = $(this).parent().data('emp_dept');
		         	var emp_prj = $(this).parent().data('emp_prj');
		         	var emp_join = $(this).parent().data('emp_join');
		         	$('#div1').show();
		        	$('#div2').show();
		        	$('#div3').show();
		        	$('#div4').show();
		        	$('#div5').show();
					$('#save').show();
					$('#save').val('Save Changes');
					$('#save').removeAttr('disabled');
		         	$('#modal-title').text('Edit Employee Details');
		         	$('#update-action').val('UPDATE');
		        	$('#validationSummary').hide();
		        	$('#employee-name').focus();
		        	$('#employee-id').val(emp_id);
		        	$('#employee-code').val(emp_code);
		        	$('#employee-name').val(emp_name);
		        	$('#employee-email').val(emp_email);
		        	$('#employee-password').val(emp_pass);
		        	$('#employee-department').val(emp_dept);
		        	$('#employee-project').val(emp_prj);
		        	$('#employee-join').val(emp_join);
					$('#employee-modal').modal('show');	
				});
				
				$('.delete-employee').click(function(){
					var emp_id = $(this).parent().data('emp_id');
					var delete_parent = $(this).parent().parent();
		         	$('#div1').hide();
		        	$('#div2').hide();
		        	$('#div3').hide();
		        	$('#div4').hide();
		        	$('#div5').hide();
					$('#save').val('Delete');
					$('#save').removeAttr('disabled');
		         	$('#save').show();
		         	$('#modal-title').text('Delete Employee');
		         	$("#confirm-msg").html("<b>Are Sure you want to Delele?</b>");
			   	    $("#confirm-msg").show();
			   	    $('#validationSummary').hide();
		         	$('#employee-id').val(emp_id);
		         	$('#update-action').val('DELETE');
					$('#employee-modal').modal('show');	
				});
			}
			
			employeeOperation();
			
			$('#save').click(function(){
				var emp_id = $('#employee-id').val();
			 	var emp_code = $('#employee-code').val();
				var emp_name = $('#employee-name').val();
	        	var emp_email = $('#employee-email').val();
	        	var emp_pass = $('#employee-password').val();
	        	var emp_dept = $('#employee-department').val();
	        	var emp_prj = $('#employee-project').val();
	        	var emp_join = $('#employee-join').val();
	        	var action = $('#update-action').val();
	        	if(emp_id=='' && emp_code=='' && action=='ADD')
	        	{
	        		$("#validationSummary").attr("class","alert alert-warning");
		   	        $("#validationSummary").html("<b>Please wait...</b>");
		   	        $("#validationSummary").show();
		   	       	var data1 = $('#employee-form').serialize();
		   	        $.ajax({
		 	         	type: "post",
		 	        	url: "/ems/addemployee",
		 	        	dataType: "json",
		 	        	data : JSON.stringify(data1),
		 	        	success: function(data){
		 	        		var result = '<tr>';
		 	        		result+= '<td>'+ data.emp_id +'</td>';
		 	        		result+= '<td>'+ data.emp_name + '</td>';
		 	        		result+= '<td data-emp_id="'+ data.emp_id +'"';
		 	        		result+= ' data-emp_code="'+ data.emp_code  +'"';
		 	        		result+= ' data-emp_name="'+ data.emp_name  +'"';
		 	        		result+= ' data-emp_email="'+ data.emp_email  +'"';
		 	        		result+= ' data-emp_pass="'+ data.emp_pass  +'"';
		 	        		result+= ' data-emp_dept="'+ data.emp_dept  +'"';
		 	        		result+= ' data-emp_prj="'+ data.emp_prj  +'"';
		 	        		result+= ' data-emp_join="'+ data.emp_join  +'"';
		 	        		result+= '><button role="button" class="btn btn-link view-employee" data-modal="employee-modal">';
					        result+= '<i class="fas fa-eye text-dark"></i>';
					        result+= '</button>';
					        result+= '<button role="button" class="btn btn-link edit-employee">';
					        result+= '<i class="fas fa-pencil-alt text-warning"></i>';
					        result+= '</button>';
				        	result+= '<button role="button" class="btn btn-link delete-employee">';
					        result+= '<i class="fas fa-trash text-danger"></i>';
					        result+= '</button>';
		 	        		result+= '</td>';	
		 	        		result+= '</tr>';
		 	        		$('#example').append(result);
		 	        		employeeOperation();
		 	        		$("#validationSummary").attr("class","alert alert-success");
		 	        		$("#validationSummary").html("<b>Added Successfully</b>");
		 	        		$("#validationSummary").show();
		 	        		$('#save').attr("disabled", "disabled");
		 	        	},
		 	        	error: function(err){
		 	        		$("#validationSummary").attr("class","alert alert-success");
		 	        		$("#validationSummary").html("<b>Someting went wrong! Please try again</b>");
		 	        		$("#validationSummary").show();
		 	        		$('#save').attr("disabled", "disabled");	
		 	        	}
		 	        });
	        	}
	        	else if(emp_id!='' && emp_code!='' && action=='UPDATE' ){
	        		$("#validationSummary").attr("class","alert alert-warning");
		   	        $("#validationSummary").html("<b>Please wait...</b>");
		   	        $("#validationSummary").show();
		   	       var data1 = $('#employee-form').serialize();
		   	        $.ajax({
		 	         	type: "post",
		 	        	url: "/ems/editemployee",
		 	        	dataType: "json",
		 	        	data : JSON.stringify(data1),
		 	        	success: function(data){
		 	        		$("#validationSummary").attr("class","alert alert-success");
		 	        		$("#validationSummary").html("<b>Edited Successfully</b>");
		 	        		$("#validationSummary").show();
		 	        		$('#save').attr("disabled", "disabled");
		 	        	},
		 	        	error: function(err){
		 	        		$("#validationSummary").attr("class","alert alert-success");
		 	        		$("#validationSummary").html("<b>Something went Wrong! please try again later</b>");
		 	        		$("#validationSummary").show();	
		 	        		$('#save').attr("disabled", "disabled");
		 	        	
		 	        	}
		 	 
			 			});
	        
	        	}
	        	else if(emp_id!='' && action=='DELETE'){
	        		$("#validationSummary").attr("class","alert alert-warning");
		   	         	$("#validationSummary").html("<img src='../img/6.gif' alt='loading'/> <b>Please wait...</b>");
		   	         	$("#validationSummary").show();
		   	         $.ajax({
		 	         	type: "post",
		 	        	url: "/ems/deleteemployee",
		 	        	data: {emp_id:emp_id},
		 	        	success: function(data){
		 	        		$("#confirm-msg").hide();
		 	        		$("#validationSummary").attr("class","alert alert-success");
		   	         		$("#validationSummary").html("<b>Deleted Successfully</b>");
		   	         		$("#validationSummary").show();
		   	         		$('#save').attr("disabled", "enabled");
		   	         		$('table tbody tr td[data-emp_id="'+emp_id+'"]').parents('tr').remove();
		   	         		console.log(data);
		   	         		
		 	        	}
			 			});
	        	}
			});
			
	});
			

