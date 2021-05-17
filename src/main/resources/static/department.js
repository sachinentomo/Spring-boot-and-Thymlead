$(document).ready(function(){
	$('.add-department').click(function(){
		$('#save').val('Add');
		$('#save').removeAttr('disabled');
		$('#save').show();
		$('#div1').show();
	   	$('#div2').show();
	    $('#div3').show();
     	$('#modal-title').text('Add New Department');
    	$('#update-action').val('ADD'); 
    	$('#validationSummary').hide();
    	$('#department-name').focus();
    	$('#department-id').val('');
    	$('#department-code').val('');
    	$('#department-name').val('');
    	$('#department-description').val('');
    	$('#department-location').val('');	
		$('#department-modal').modal('show');	
	});
		    
	function departmentOperation(){
		//View Popup
		$('.view-department').click(function(){
			//var dept_id=$(this).parent().data('dept_id');
	     	//var dept_code=$(this).parent().data('dept_code');
	     	var dept_name = $(this).parent().data('dept_name');
	     	var dept_desc = $(this).parent().data('dept_desc');
	     	var dept_loc = $(this).parent().data('dept_loc');
			$('#save').hide();
			$('#div1').show();
	   		$('#div2').show();
	    	$('#div3').show();
	     	$('#modal-title').text('Department Details');
	    	$('#update-action').hide(); 
	    	$('#validationSummary').hide();
	    	$('#department-name').focus();
	    	$('#department-name').val(dept_name);
	    	$('#department-description').val(dept_desc);
	    	$('#department-location').val(dept_loc);	
			$('#department-modal').modal('show');	
		});
		
		//Edit Popup
		$('.edit-department').click(function(){
			var dept_id=$(this).parent().data('dept_id');
	     	var dept_code=$(this).parent().data('dept_code');
	     	var dept_name = $(this).parent().data('dept_name');
	     	var dept_desc = $(this).parent().data('dept_desc');
	     	var dept_loc = $(this).parent().data('dept_loc');
			$('#save').show();
			$('#save').val('Save Changes');
			$('#save').removeAttr('disabled');
			$('#div1').show();
	   		$('#div2').show();
	    	$('#div3').show();
	     	$('#modal-title').text('Edit Employee Details');
	     	$('#update-action').val('UPDATE');
	    	$('#validationSummary').hide();
	    	$('#employee-name').focus();
	    	$('#department-id').val(dept_id);
	    	$('#department-code').val(dept_code);
	    	$('#department-name').val(dept_name);
	    	$('#department-description').val(dept_desc);
	    	$('#department-location').val(dept_loc);	
			$('#department-modal').modal('show');	
		});
		
		$('.delete-department').click(function(){
			var dept_id = $(this).parent().data('dept_id');
	     	$('#div1').hide();
	    	$('#div2').hide();
	    	$('#div3').hide();
			$('#save').val('Delete');
			$('#save').removeAttr('disabled');
	     	$('#save').show();
	     	$('#modal-title').text('Delete Department');
	     	$("#confirm-msg").html("<b>Are Sure you want to Delele?</b>");
			$("#confirm-msg").show();
			$('#validationSummary').hide();
	     	$('#department-id').val(dept_id);
	     	$('#update-action').val('DELETE');
			$('#department-modal').modal('show');	
		});
	}
	departmentOperation();
	$('#save').click(function(){
		var data1 = $('#department-form').serialize();
		$.ajax({
	         	type: "post",
	        	url: "/createDepartment",
	        	dataType: "json",
	        	data : data1,
	        	success: function(result){
	        		console.log(result);
	        		alert(result);
	        	}
	});
	});
		    
	/*$('#save').click(function(){
		var dept_id = $('#department-id').val();
		var dept_code = $('#department-code').val();
		var dept_name = $('#department-name').val();
		var dept_desc = $('#department-description').val();
		var dept_loc = $('#department-location').val();
		var action = $('#update-action').val();
		if(dept_id=='' && dept_code=='' && action=='ADD')
		{
			$("#validationSummary").attr("class","alert alert-warning");
	        $("#validationSummary").html("<b>Please wait...</b>");
	        $("#validationSummary").show();
	       	var data1 = $('#department-form').serialize();
	        $.ajax({
	         	type: "post",
	        	url: "/ems/adddepartment",
	        	dataType: "json",
	        	data : JSON.stringify(data1),
	        	success: function(data){
	        		var result = '<tr>';
	        		result+= '<td>'+ data.dept_id +'</td>';
	        		result+= '<td>'+ data.dept_name + '</td>';
	        		result+= '<td data-dept_id="'+ data.dept_id +'"';
	        		result+= ' data-dept_code="'+ data.dept_code  +'"';
	        		result+= ' data-dept_name="'+ data.dept_name  +'"';
	        		result+= ' data-dept_desc="'+ data.dept_desc  +'"';
	        		result+= ' data-dept_loc="'+ data.dept_loc  +'"';
	        		
	        		result+= '><button role="button" class="btn btn-link view-department" data-modal="department-modal">';
			        result+= '<i class="fas fa-eye text-dark"></i>';
			        result+= '</button>';
			        result+= '<button role="button" class="btn btn-link edit-department">';
			        result+= '<i class="fas fa-pencil-alt text-warning"></i>';
			        result+= '</button>';
		        	result+= '<button role="button" class="btn btn-link delete-department">';
			        result+= '<i class="fas fa-trash text-danger"></i>';
			        result+= '</button>';
	        		result+= '</td>';	
	        		result+= '</tr>';
	        		$('#example').append(result);
	        		departmentOperation();
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
		else if(dept_id!='' && dept_code!='' && action=='UPDATE' ){
			$("#validationSummary").attr("class","alert alert-warning");
	        $("#validationSummary").html("<b>Please wait...</b>");
	        $("#validationSummary").show();
	       var data1 = $('#department-form').serialize();
	        $.ajax({
	         	type: "post",
	        	url: "/ems/editdepartment",
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
		else if(dept_id!='' && action=='DELETE'){
			$("#validationSummary").attr("class","alert alert-warning");
	         	$("#validationSummary").html("<b>Please wait...</b>");
	         	$("#validationSummary").show();
	         $.ajax({
	         	type: "post",
	        	url: "/ems/deletedepartment",
	        	data: {dept_id:dept_id},
	        	success: function(data){
	        		$("#confirm-msg").hide();
	        		$("#validationSummary").attr("class","alert alert-success");
	         		$("#validationSummary").html("<b>Deleted Successfully</b>");
	         		$("#validationSummary").show();
	         		$('#save').attr("disabled", "enabled");
	         		$('table tbody tr td[data-dept_id="'+dept_id+'"]').parents('tr').remove();
	         		console.log(data);
	         		
	        	}
	 			});
		}
	});*/
	});