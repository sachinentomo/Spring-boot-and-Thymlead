package com.ems.controller;

import com.ems.entities.Department;
import com.ems.exception.RecordNotFoundException;
import com.ems.repository.DepartmentRepository;
import com.ems.service.DepartmentService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;



@Controller
@RequestMapping("/")
public class HomeController {
	@Autowired
	DepartmentService departmentService;
	
	@RequestMapping("/department")
    public String welcome(Model model) {
		List<Department> list = departmentService.getAllDepartments();
		model.addAttribute("departmentList", list);
		 return "department";
    }
	
	@RequestMapping(path = "/createDepartment", method = RequestMethod.POST, headers = "content-type=application/x-www-form-urlencoded")
	public @ResponseBody String createOrUpdateEmployee(Department department) 
	{
		Department dept1 = departmentService.createOrUpdateEmployee(department);
		ObjectMapper objectMapper = new ObjectMapper();
        try {
			String json = objectMapper.writeValueAsString(dept1);
			return json;
        } 
        catch (JsonProcessingException e) {
        	e.printStackTrace();
        }
		return null;
	}
	  
	 
}
